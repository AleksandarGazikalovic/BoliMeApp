import React from "react";
import painService from "../../services/painService";
import {
  IonButton,
  IonButtons,
  IonChip,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonLoading,
} from "@ionic/react";
import PropTypes from "prop-types";
import { createOutline, trashOutline } from "ionicons/icons";
import { resolvePainArea, resolvePainType } from "../../utils/painUtils";
import "./PainList.css";
import { useAuth } from "../../context/AuthContext";

const PainList = ({ pains, loadPains }) => {
  const { getToken } = useAuth();

  const handleEditClick = (pain) => {
    console.log("Edit pain", pain);
  };

  const handleDeleteClick = (painId) => {
    painService.deletePain(painId, getToken()).then(() => {
      loadPains();
    });
  };

  if (!pains) {
    return <IonLoading isOpen={true} />;
  }

  const resolveChip = (value) => {
    if (value > 8) {
      return <IonChip color="danger">{"Jacina bola " + value}</IonChip>;
    }
    if (value > 5) {
      return <IonChip color="warning">{"Jacina bola " + value}</IonChip>;
    }
    return <IonChip color="dark">{"Jacina bola " + value}</IonChip>;
  };

  return (
    <IonList inset={true}>
      {pains?.map((pain) => (
        <IonItem key={pain.painId}>
          <IonLabel>
            <h2>{resolvePainArea(pain.painArea)}</h2>
            <p>{resolvePainType(pain.selectedOptionPain)}</p>
          </IonLabel>
          {resolveChip(pain.valuePain)}
          <IonButtons slot="end">
            <IonButton
              fill="clear"
              className="round-button"
              onClick={() => handleEditClick(pain)}
            >
              <IonIcon icon={createOutline} />
            </IonButton>
            <IonButton
              fill="clear"
              className="round-button"
              onClick={() => handleDeleteClick(pain.painId)}
            >
              <IonIcon icon={trashOutline} />
            </IonButton>
          </IonButtons>
        </IonItem>
      ))}
      {pains.length === 0 && (
        <div className="ion-text-center ion-padding">
          <h2>Nemate zabeleženih bolova</h2>
        </div>
      )}
    </IonList>
  );
};

PainList.propTypes = {
  pains: PropTypes.array,
  loadPains: PropTypes.func,
};

export default PainList;

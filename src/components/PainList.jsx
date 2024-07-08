import React from "react";
import painService from "../services/painService";
import {
  IonChip,
  IonFab,
  IonFabButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonLoading,
} from "@ionic/react";
import PropTypes from "prop-types";
import { add, createOutline, trashOutline } from "ionicons/icons";
import { resolvePainArea, resolvePainType } from "../utils/painUtils";
import { useHistory } from "react-router";

const PainList = ({ pains, loadPains }) => {
  const history = useHistory();
  const handleEditClick = (pain) => {
    console.log("Edit pain", pain);
  };

  const handleDeleteClick = (painId) => {
    painService.deletePain(painId).then(() => {
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
    <>
      <IonList inset={true}>
        {pains?.map((pain) => (
          <IonItem key={pain.painId}>
            <IonLabel>
              <h2>{resolvePainArea(pain.painArea)}</h2>
              <p>{resolvePainType(pain.selectedOptionPain)}</p>
            </IonLabel>
            {resolveChip(pain.valuePain)}
            <IonIcon
              icon={createOutline}
              slot="end"
              onClick={handleEditClick}
            ></IonIcon>
            <IonIcon
              icon={trashOutline}
              slot="end"
              onClick={handleDeleteClick}
            />
          </IonItem>
        ))}
      </IonList>
      <IonFab slot="fixed" vertical="bottom" horizontal="end">
        <IonFabButton>
          <IonIcon icon={add} onClick={() => history.push("/pain/")}></IonIcon>
        </IonFabButton>
      </IonFab>
    </>
  );
};

PainList.propTypes = {
  pains: PropTypes.array,
  loadPains: PropTypes.func,
};

export default PainList;

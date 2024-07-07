import React, { useEffect, useState } from "react";
import painService from "../services/painService";
import {
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonRippleEffect,
} from "@ionic/react";
import PropTypes from "prop-types";
import { createOutline, trashOutline } from "ionicons/icons";

const PainList = ({ profileId }) => {
  const [pains, setPains] = useState([]);

  useEffect(() => {
    loadPains();
  }, [profileId]);

  const loadPains = () => {
    painService.getPainsByProfileId(profileId).then((data) => {
      setPains(data);
    });
  };

  const handleEditClick = (pain) => {
    console.log("Edit pain", pain);
  };

  const handleDeleteClick = (painId) => {
    painService.deletePain(painId).then(() => {
      loadPains();
    });
  };

  return (
    <IonList inset={true}>
      {pains?.map((pain) => (
        <IonItem key={pain.painId}>
          <IonLabel>
            <h2>{pain.painArea}</h2>
            <p>{pain.valuePain + " jačina bola"}</p>
          </IonLabel>
          <IonIcon icon={createOutline} slot="end" onClick={handleEditClick}>
            <IonRippleEffect></IonRippleEffect>
          </IonIcon>
          <IonIcon icon={trashOutline} slot="end" onClick={handleDeleteClick} />
        </IonItem>
      ))}
    </IonList>
  );
};

PainList.propTypes = {
  profileId: PropTypes.string.isRequired,
};

export default PainList;

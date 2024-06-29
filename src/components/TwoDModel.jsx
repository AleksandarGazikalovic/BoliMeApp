import { syncOutline } from "ionicons/icons";
import { IonButton, IonIcon } from "@ionic/react";
import { useState } from "react";

const TwoDModel = ({}) => {
  const handleRotation = () => {};
  return (
    <div className="ion-text-center ion-padding">
      <h1>Selektujte mesto koje vas boli</h1>

      <IonIcon icon={syncOutline} onClick={handleRotation} size="large" />
    </div>
  );
};

export default TwoDModel;

import React, { useState } from "react";
import { syncOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import "./TwoDModel.css"; // Make sure to import your CSS file

const TwoDModel = () => {
  const [rotation, setRotation] = useState(0);
  const [isPrimary, setIsPrimary] = useState(false);

  const handleRotation = () => {
    if (isPrimary) return;
    setRotation((prevRotation) => prevRotation + 180);
    setIsPrimary(true);
    setTimeout(() => {
      setIsPrimary(false);
    }, 500); // Duration of the color change
  };

  return (
    <div className="ion-text-center ion-padding">
      <h1>Izaberite mesto koje vas boli</h1>
      <IonIcon
        icon={syncOutline}
        onClick={handleRotation}
        size="large"
        className={`spin ${isPrimary ? "primary-color" : ""}`}
        style={{ transform: `rotate(${rotation}deg)` }}
      />
    </div>
  );
};

export default TwoDModel;

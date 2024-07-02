import React, {useState} from "react";
import { IonTitle, IonIcon} from "@ionic/react";
import Body from "./Body";
import { syncOutline } from "ionicons/icons";





const ViewBody = () => {
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
    <div>
        <div className="ion-text-center ">
        <h1>Mesta koja su vas bolela</h1>

        </div>
      <div className="ion-padding-top ion-text-center">
        <Body />
        <br />
        <IonIcon
        icon={syncOutline}
        onClick={handleRotation}
        size="large"
        className={`spin ${isPrimary ? "primary-color" : ""}`}
        style={{ transform: `rotate(${rotation}deg)` }}
      />
      </div>
    </div>
  );
};

export default ViewBody;

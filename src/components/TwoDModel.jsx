import React, { useState } from "react";
import { syncOutline } from "ionicons/icons";
import { IonButton, IonIcon } from "@ionic/react";
import "./TwoDModel.css"; // Make sure to import your CSS file
import Body from "./Body";
import PropTypes from "prop-types";

const TwoDModel = ({
  highlightedPart,
  setHighlightedPart,
  setActiveSegment,
}) => {
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
      <Body
        highlightedPart={highlightedPart}
        setHighlightedPart={setHighlightedPart}
      />
      <br />
      <IonIcon
        icon={syncOutline}
        onClick={handleRotation}
        size="large"
        className={`spin ${isPrimary ? "primary-color" : ""}`}
        style={{ transform: `rotate(${rotation}deg)` }}
      />
      <br />
      <br />
      {highlightedPart && (
        <IonButton onClick={() => setActiveSegment("info")}>Dalje</IonButton>
      )}
    </div>
  );
};

TwoDModel.propTypes = {
  highlightedPart: PropTypes.string,
  setHighlightedPart: PropTypes.func,
  setActiveSegment: PropTypes.func,
};

export default TwoDModel;

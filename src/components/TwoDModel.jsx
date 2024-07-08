import React, { useState } from "react";
import { syncOutline } from "ionicons/icons";
import { IonButton, IonIcon } from "@ionic/react";
import "./TwoDModel.css"; // Make sure to import your CSS file
import Body from "./Body";
import PropTypes from "prop-types";
import { resolvePainArea } from "../utils/painUtils";

const TwoDModel = ({ formik, setActiveSegment }) => {
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
        highlightedPart={formik.values.painArea}
        setHighlightedPart={formik.setFieldValue}
      />
      <h2>{resolvePainArea(formik.values.painArea)}</h2>
      <IonIcon
        icon={syncOutline}
        onClick={handleRotation}
        size="large"
        className={`spin ${isPrimary ? "primary-color" : ""}`}
        style={{ transform: `rotate(${rotation}deg)` }}
      />
      <br />
      <br />
      {formik.values.painArea && (
        <IonButton onClick={() => setActiveSegment("info")}>Dalje</IonButton>
      )}
    </div>
  );
};

TwoDModel.propTypes = {
  formik: PropTypes.object,
  setActiveSegment: PropTypes.func,
};

export default TwoDModel;

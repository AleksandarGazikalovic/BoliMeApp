import React, { useState } from "react";
import PropTypes from "prop-types";
import { IonContent, IonPopover } from "@ionic/react";
import {
  countPainOccurences,
  getPathD,
  getPaths,
  resolvePainArea,
} from "../../utils/painUtils";

const BodyMap = ({ pains }) => {
  const [popoverState, setPopoverState] = useState({
    showPopover: false,
    event: null,
  });
  const painOccurencesCount = countPainOccurences(pains);

  const resolveColor = (id) => {
    const painOccurences = painOccurencesCount?.find(
      (painOccurence) => painOccurence.painArea === id
    );
    if (painOccurences?.count > 10) {
      return {
        fill: `rgba(255, 0, 0, 1)`,
      };
    }
    if (painOccurences?.count > 5) {
      return {
        fill: `rgb(255, 132, 0)`,
      };
    }
    if (painOccurences?.count > 0) {
      return {
        fill: `rgb(255, 255, 0)`,
      };
    }
  };

  const showPainDetails = (id) => {
    const painOccurences = painOccurencesCount?.find(
      (painOccurence) => painOccurence.painArea === id
    );
    return (
      <>
        <h2>{resolvePainArea(id)}</h2>
        <p>{painOccurences?.count || 0} zabeleženih bolova</p>
      </>
    );
  };

  const handlePopover = (event) => {
    setPopoverState({ showPopover: true, event: event });
  };

  return (
    <div className="ion-text-center ion-padding">
      <h1>Mapa bola</h1>
      <br />
      <svg
        width="148"
        height="400"
        viewBox="0 0 148 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ cursor: "pointer" }}
      >
        {getPaths.map((id) => (
          <path
            key={id}
            id={id}
            d={getPathD(id)}
            fill="#EBB49B"
            style={resolveColor(id)}
            onClick={handlePopover}
          />
        ))}
      </svg>
      <IonPopover
        isOpen={popoverState.showPopover}
        event={popoverState.event}
        onDidDismiss={() =>
          setPopoverState({ showPopover: false, event: null })
        }
      >
        <IonContent class="ion-padding">
          {showPainDetails(popoverState?.event?.target?.id)}
        </IonContent>
      </IonPopover>
    </div>
  );
};

BodyMap.propTypes = {
  pains: PropTypes.array,
};

export default BodyMap;

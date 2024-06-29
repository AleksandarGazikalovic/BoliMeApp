import React, { useState } from "react";
import { IonLabel, IonRange, IonSelect, IonSelectOption } from "@ionic/react";

const PainInfo = () => {
  const [selectedValue, setSelectedValue] = useState(5); // Initial value

  return (
    <div className="ion-padding">
      <IonLabel position="stacked">Označite jačinu bola:</IonLabel>
      <IonRange
        min={1}
        max={10}
        step={1}
        value={selectedValue}
        ticks={true}
        snaps={true}
        onIonChange={(e) => setSelectedValue(e.detail.value)}
        aria-label="Range with pin"
        className="ion-padding-top"
        pin={true}
        pinFormatter={(value) => `${value}`}
      />
      <IonSelect label="Tip bola" placeholder="Tip bola">
        <IonSelectOption value="ostar">Oštar bol</IonSelectOption>
        <IonSelectOption value="tup">Tup bol</IonSelectOption>
        <IonSelectOption value="pulsirajući">Pulsirajući bol</IonSelectOption>
        <IonSelectOption value="ukočenost">Ukočenost</IonSelectOption>
        <IonSelectOption value="neuropatski">Neuropatski bol</IonSelectOption>
      </IonSelect>
    </div>
  );
};

export default PainInfo;

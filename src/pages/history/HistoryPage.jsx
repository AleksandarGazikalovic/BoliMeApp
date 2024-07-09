import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonLabel,
  IonLoading,
  IonNav,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { BodyMap, PainList } from "../../modules";
import { usePains } from "../../context/PainContext";

const HistoryPage = () => {
  const [activeSegment, setActiveSegment] = useState("list");
  const { pains, loadPains, isLoading } = usePains();

  const renderPainForm = () => {
    if (activeSegment === "list") {
      return <PainList pains={pains} loadPains={loadPains} />;
    } else if (activeSegment === "map") {
      return <BodyMap pains={pains} />;
    }
  };

  if (isLoading) {
    return <IonLoading isOpen={isLoading} spinner={"circles"} />;
  }

  return (
    <IonNav
      root={() => (
        <IonPage id="main-content">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Istorija bolova</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonSegment
              value={activeSegment}
              onIonChange={(e) => setActiveSegment(e.detail.value)}
            >
              <IonSegmentButton value="list">
                <IonLabel>Istorija</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="map">
                <IonLabel>Mapa bola</IonLabel>
              </IonSegmentButton>
            </IonSegment>
            {renderPainForm()}
          </IonContent>
        </IonPage>
      )}
    />
  );
};

export default HistoryPage;

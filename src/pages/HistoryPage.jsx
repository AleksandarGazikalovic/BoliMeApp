import React, { useState } from "react";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Menu, PainList } from "../components";
import { useProfile } from "../context/ProfileContext";

const HistoryPage = () => {
  const [activeSegment, setActiveSegment] = useState("view");
  const { profile } = useProfile();

  const renderPainForm = () => {
    if (activeSegment === "view") {
      return <PainList profileId={profile.profileId} />;
    } else if (activeSegment === "edit") {
      return <></>;
    }
  };

  return (
    <>
      <Menu />
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Istorija bolova</IonTitle>
            <IonButtons slot="end">
              <IonMenuButton />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonSegment
            value={activeSegment}
            onIonChange={(e) => setActiveSegment(e.detail.value)}
          >
            <IonSegmentButton value="place">
              <IonLabel>Istorija</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="info">
              <IonLabel>Mapa bola</IonLabel>
            </IonSegmentButton>
          </IonSegment>
          {renderPainForm()}
        </IonContent>
      </IonPage>
    </>
  );
};

export default HistoryPage;

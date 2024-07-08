import React, { useEffect, useState } from "react";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonLabel,
  IonLoading,
  IonMenuButton,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { BodyMap, Menu, PainList } from "../components";
import { useProfile } from "../context/ProfileContext";
import painService from "../services/painService";

const HistoryPage = () => {
  const [activeSegment, setActiveSegment] = useState("list");
  const { profile } = useProfile();
  const [pains, setPains] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    loadPains();
  }, [profile.profileId]);

  const loadPains = () => {
    painService.getPainsByProfileId(profile.profileId).then((data) => {
      setPains(data);
      setIsLoading(false);
    });
  };

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
    </>
  );
};

export default HistoryPage;

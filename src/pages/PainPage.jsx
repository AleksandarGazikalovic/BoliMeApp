import {
  IonButtons,
  IonContent,
  IonHeader,
  IonLabel,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Menu from "../components/Menu";
import { TwoDModel, PainInfo } from "../components/";
import { useState } from "react";

const PainPage = () => {
  const [activeSegment, setActiveSegment] = useState("place");

  const renderPainForm = () => {
    if (activeSegment === "place") {
      return <TwoDModel />;
    } else if (activeSegment === "info") {
      return <PainInfo />;
    }
    // Add more conditions for other segments as needed
  };

  return (
    <>
      <Menu />
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Dodaj novi bol</IonTitle>
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
              <IonLabel>Mesto bola</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="info">
              <IonLabel>Način bola</IonLabel>
            </IonSegmentButton>
          </IonSegment>
          {renderPainForm()}
        </IonContent>
      </IonPage>
    </>
  );
};

export default PainPage;

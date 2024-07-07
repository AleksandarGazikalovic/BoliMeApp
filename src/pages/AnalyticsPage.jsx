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
import Menu from "../components/Menu";
import PainHistory from "../components/PainHistory";
import ViewBody from "../components/ViewBody";
import { useState } from "react";


const AnalyticsPage = () => {
  const [activeSegment, setActiveSegment] = useState("body");

  const renderPainForm = () => {
    if (activeSegment === "body") {
      return <ViewBody  />;
    } else if (activeSegment === "history") {
      return <PainHistory  />;
    }
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
            <IonSegmentButton value="body">
              <IonLabel>Mapa bola</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="history">
              <IonLabel>Istorija bola</IonLabel>
            </IonSegmentButton>
          </IonSegment>
          <div className="ion-padding">{renderPainForm()}</div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default AnalyticsPage;

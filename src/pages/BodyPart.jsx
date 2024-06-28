import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ThreeDViewer from "../components/ThreeDViewer";

const BodyPart = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>3D Body Map</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ThreeDViewer />
      </IonContent>
    </IonPage>
  );
};

export default BodyPart;

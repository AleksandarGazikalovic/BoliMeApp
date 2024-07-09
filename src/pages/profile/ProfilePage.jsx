import "./ProfilePage.css";
import {
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import { EditProfile, ViewProfile } from "../../modules";
import { useProfile } from "../../context/ProfileContext";

const ProfilePage = () => {
  const [activeSegment, setActiveSegment] = useState("view");
  const { profile } = useProfile();

  const renderPainForm = () => {
    if (activeSegment === "view") {
      return <ViewProfile profile={profile} />;
    } else if (activeSegment === "edit") {
      return <EditProfile profile={profile} />;
    }
  };

  return (
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSegment
          value={activeSegment}
          onIonChange={(e) => setActiveSegment(e.detail.value)}
        >
          <IonSegmentButton value="view">
            <IonLabel>Vidi profil</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="edit">
            <IonLabel>Izmeni profil</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        <div className="ion-padding" style={{ height: "90%" }}>
          {renderPainForm()}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ProfilePage;

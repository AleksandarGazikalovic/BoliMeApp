import "./ProfilePage.css";
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
import Menu from "../../components/Menu";
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
    <>
      <Menu />
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Profil</IonTitle>
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
            <IonSegmentButton value="view">
              <IonLabel>Vidi profil</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="edit">
              <IonLabel>Izmeni profil</IonLabel>
            </IonSegmentButton>
          </IonSegment>
          <div className="ion-padding">{renderPainForm()}</div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default ProfilePage;

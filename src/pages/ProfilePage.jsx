import "./ProfilePage.css"
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
import React, { useState } from "react";
import {EditProfile, ViewProfile} from "../components/";



const ProfilePage = () => {

  const [activeSegment, setActiveSegment] = useState("view");

  const renderPainForm = () => {
    if(activeSegment === "view"){
      return <ViewProfile/>;

    } else if(activeSegment === "edit"){
      return <EditProfile/>;
    }
  }

  return(

        <div>
          <Menu/>
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
            <IonSegmentButton value="view">
              <IonLabel>Vidi profil</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="edit">
              <IonLabel>Izmeni profil</IonLabel>
            </IonSegmentButton>
          </IonSegment>
          {renderPainForm()}
        </IonContent>
      </IonPage>


        </div>


  ) 

};

export default ProfilePage;

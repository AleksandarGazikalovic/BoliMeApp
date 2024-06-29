import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonPage,
  IonButton,
  IonToolbar,
  IonHeader,
  IonTitle,
  IonIcon,

} from "@ionic/react";
import logo from "../assets/logo.png";
import "./LandingPage.css";
import { addOutline } from "ionicons/icons";
import { auth } from "../components/FirebaseConfig";


const LandingPage = () => {
  const [userId, setUserId] = useState(null);

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          setUserId(user.uid); // Set userId state when user is authenticated
        } else {
          setUserId(null); // Handle state when user is not authenticated
        }
      });
      return () => unsubscribe();
    }, []);

    console.log("Current userId:", userId)
 


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="ion-toolbar">
            <div className="header">
            
          <div className="logo-side">
            <img src={logo} alt="Logo" className="logo" />
            <h1 className="logo-h1">Boli me</h1>
          </div>
       
            <div className="button-side">
            <IonButton
              size="medium"
              fill="solid"
              color="primary"
            >
              Izmeni profile
            </IonButton>
          </div>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen color="light">
        <IonTitle className="ion-padding ion-text-center ioTitle" color={"primary"} >Koga boli?</IonTitle>
        <br/>
        <br/>
        <div className="avatar-conatiner">
            <div className="add-profile">
            <IonButton size="large" routerLink="/create-profile" >
                <IonIcon slot="icon-only" md={addOutline}></IonIcon>
            </IonButton>
            <h3 className="dodaj-h3">Dodaj novi profil</h3>
            </div>
            
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LandingPage;

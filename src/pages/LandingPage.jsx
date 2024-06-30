import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonPage,
  IonToolbar,
  IonHeader,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonAvatar,
  IonRippleEffect,
  IonRouterLink,
  IonButtons,
  IonMenuButton,
  IonImg,
} from "@ionic/react";
import logo from "../assets/logo.png";
import "./LandingPage.css";
import { auth } from "../components/FirebaseConfig";
import { profileService } from "./../services";
import { Menu } from "../components";
import { DefaultAvatar } from "../components/";
import { useHistory } from "react-router";

const LandingPage = () => {
  const [profiles, setProfiles] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        profileService.getProfilesByUserId(user.uid).then((data) => {
          setProfiles(data);
        });
      } else {
        setProfiles(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleProfileSelect = (profileId) => {
    console.log(`Selected profile ID: ${profileId}`);
    history.push(`/pain`);
    // Add logic to handle profile selection, e.g., navigating to a different page or setting a state
  };

  const renderAvatar = (avatar, name) => {
    return avatar ? (
      <IonAvatar
        className="profile-avatar ion-activatable"
        style={{ cursor: "pointer" }}
      >
        <IonImg src={avatar} alt={name} />
        <IonRippleEffect></IonRippleEffect>
      </IonAvatar>
    ) : (
      <DefaultAvatar name={name} text={name} />
    );
  };

  return (
    <>
      <Menu />
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Boli me</IonTitle>
            <IonButtons slot="end">
              <IonMenuButton />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen color="light">
          <IonTitle
            className="ion-padding ion-text-center ioTitle"
            color={"primary"}
          >
            Koga boli?
          </IonTitle>
          <br />
          <br />
          <IonGrid>
            <IonRow>
              {profiles?.map((profile) => (
                <IonCol key={profile.id} size="6" sizeMd="3">
                  <div
                    className="profile-card"
                    onClick={() => handleProfileSelect(profile.id)}
                  >
                    {renderAvatar(profile.avatar, profile.name)}
                  </div>
                </IonCol>
              ))}
              <IonCol size="6" sizeMd="3" routerLink="create-profile">
                <div className="profile-card">
                  <IonRouterLink routerLink="/create-profile">
                    <DefaultAvatar name="+" text="Dodaj profil" />
                  </IonRouterLink>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  );
};

export default LandingPage;

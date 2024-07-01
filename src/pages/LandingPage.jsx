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
  IonLoading,
} from "@ionic/react";
import "./LandingPage.css";
import { auth } from "../components/FirebaseConfig";
import { profileService } from "./../services";
import { Menu } from "../components";
import { DefaultAvatar } from "../components/";
import { useHistory } from "react-router";
import { useProfile } from "../context/ProfileContext";

const LandingPage = () => {
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const { setProfile } = useProfile();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        profileService
          .getProfilesByUserId(user.uid)
          .then((data) => {
            setProfiles(data);
            setIsLoading(false); // Move this inside the then block
          })
          .catch((error) => {
            setIsLoading(false); // Handle error state
          });
      } else {
        setProfiles([]);
        setIsLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleProfileSelect = (profile) => {
    console.log(`Selected profile ID: ${profile.profileId}`);
    setProfile(profile);
    history.push(`/pain`);
    // Add logic to handle profile selection, e.g., navigating to a different page or setting a state
  };

  const renderAvatar = (avatar, firstname) => {
    return avatar ? (
      <IonAvatar
        className="profile-avatar ion-activatable"
        style={{ cursor: "pointer" }}
      >
        <IonImg src={avatar} alt={firstname} />
        <IonRippleEffect></IonRippleEffect>
      </IonAvatar>
    ) : (
      <DefaultAvatar name={firstname} text={firstname} />
    );
  };

  if (isLoading) {
    return <IonLoading isOpen={isLoading} spinner={"circles"} />;
  }

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
                <IonCol key={profile.profileId} size="6" sizeMd="3">
                  <div
                    className="profile-card"
                    onClick={() => handleProfileSelect(profile)}
                  >
                    {renderAvatar(profile.avatar, profile.firstname)}
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

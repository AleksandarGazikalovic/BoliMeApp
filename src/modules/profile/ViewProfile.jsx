import React from "react";
import { IonInput, IonItem, IonAvatar, IonButton } from "@ionic/react";
import "./ViewProfile.css";
import PropTypes from "prop-types";
import { useAuth } from "../../context/AuthContext";

const ViewProfile = ({ profile }) => {
  const { logOut } = useAuth();
  const getDefaultAvatar = () => {
    return profile.firstname.charAt(0).toUpperCase();
  };

  const handleLogout = () => {
    logOut();
  };

  return (
    <>
      <div className="view-profile ion-text-end">
        <IonAvatar className="profile-avatar">
          <span>{getDefaultAvatar()}</span>
        </IonAvatar>
        <IonItem className="ion-text-end">
          <IonInput
            label="Ime: "
            value={profile.firstname}
            readonly={true}
          ></IonInput>
        </IonItem>
        <IonItem className="ion-text-end">
          <IonInput
            label="Prezime: "
            value={profile.lastname}
            readonly={true}
          ></IonInput>
        </IonItem>
        <IonItem className="ion-text-end">
          <IonInput
            label="Broj godina: "
            value={profile.age}
            readonly={true}
          ></IonInput>
        </IonItem>
        <IonItem className="ion-text-end">
          <IonInput
            label="Datum rodjenja: "
            value={profile.dateOfBirth}
            readonly={true}
          ></IonInput>
        </IonItem>
        <IonItem className="ion-text-end">
          <IonInput
            label="Pol: "
            value={profile.sex == "male" ? "muško" : "žensko"}
            readonly={true}
          ></IonInput>
        </IonItem>
        <IonItem className="ion-text-end">
          <IonInput
            label="Dete: "
            value={profile.child ? "Da" : "Ne"}
            readonly={true}
          ></IonInput>
        </IonItem>
        <br />
        <br />
        <IonButton
          color={"danger"}
          style={{ width: "50%", display: "block", margin: "0 auto" }}
          onClick={handleLogout}
          routerLink="/login"
        >
          Odjavite se
        </IonButton>
      </div>
    </>
  );
};

ViewProfile.propTypes = {
  profile: PropTypes.object,
};

export default ViewProfile;

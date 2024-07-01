import React from "react";
import { IonInput, IonItem, IonAvatar } from "@ionic/react";
import "./ViewProfile.css";

const ViewProfile = () => {
  const profile = {
    name: "Marko",
    surname: "Marković",
    age: "23",
    birthdate: "01/01/2001",
    gender: "Muško",
    isChild: false,
  };

  const getDefaultAvatar = () => {
    return profile.name.charAt(0).toUpperCase();
  };

  return (
    <div className="view-profile ion-text-end ion-padding">
      <IonAvatar className="profile-avatar">
        <span>{getDefaultAvatar()}</span>
      </IonAvatar>
      <IonItem className = "ion-text-end">
        <IonInput label="Ime: " value={profile.name} readonly={true}></IonInput>
      </IonItem>
      <IonItem className = "ion-text-end">
        <IonInput
          label="Prezime: "
          value={profile.surname}
          readonly={true}
        ></IonInput>
      </IonItem>
      <IonItem className = "ion-text-end">
        <IonInput
          label="Broj godina: "
          value={profile.age}
          readonly={true}
        ></IonInput>
      </IonItem>
      <IonItem className = "ion-text-end">
        <IonInput
          label="Datum rodjenja: "
          value={profile.birthdate}
          readonly={true}
        ></IonInput>
      </IonItem>
      <IonItem className = "ion-text-end">
        <IonInput
          label="Pol: "
          value={profile.gender}
          readonly={true}
        ></IonInput>
      </IonItem>
      <IonItem className = "ion-text-end">
        <IonInput
          label="Dete: "
          value={profile.isChild ? "Da" : "Ne"}
          readonly={true}
        ></IonInput>
      </IonItem>
    </div>
  );
};

export default ViewProfile;

import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonPage,
  IonButton,
  IonTitle,
  IonIcon,
  IonInput,
  IonRadio,
  IonRadioGroup,
} from "@ionic/react";
import "./CreateProfile.css";
import { personAddOutline } from "ionicons/icons";
import { auth } from "../components/FirebaseConfig";
import { profileService } from "../services";

const CreateProfile = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    surname: "",
    age: "",
    dateOfBirth: "",
    sex: "",
  });
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });
    return () => unsubscribe();
  }, []);

  console.log(profileData);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add a new document with a generated id to "profiles" collection
      const docRefId = profileService.createProfile(userId, profileData);
      console.log("Document written with ID: ", docRefId);

      // Optionally: Navigate user to another page after profile creation
      // history.push("/profile-list");

      // Clear form fields after submission
      setProfileData({
        name: "",
        surname: "",
        age: "",
        dateOfBirth: "",
        sex: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding" color="light">
        <IonTitle
          className="ion-text-center ion-text-lg reg-title"
          color={"primary"}
        >
          Kreiranje profila
        </IonTitle>

        <form onSubmit={handleSubmit} className="ion-padding">
          <IonInput
            className="ion-margin-bottom"
            label="Ime"
            type="text"
            placeholder="Marko"
            labelPlacement="floating"
            fill="outline"
            value={profileData.name}
            onIonChange={(e) =>
              setProfileData({ ...profileData, name: e.detail.value })
            }
          ></IonInput>
          <IonInput
            className="ion-margin-bottom"
            label="Prezime"
            type="text"
            placeholder="Marković"
            labelPlacement="floating"
            fill="outline"
            value={profileData.surname}
            onIonChange={(e) =>
              setProfileData({ ...profileData, surname: e.detail.value })
            }
          ></IonInput>

          <IonInput
            className="ion-margin-bottom"
            label="Broj godina"
            type="number"
            placeholder="23"
            labelPlacement="floating"
            fill="outline"
            value={profileData.age}
            onIonInput={(e) =>
              setProfileData({ ...profileData, age: e.detail.value })
            }
          ></IonInput>

          <IonInput
            className="ion-margin-bottom"
            label="Datum rodjenja"
            type="date"
            placeholder="dd/mm/yyyy"
            labelPlacement="floating"
            fill="outline"
            value={profileData.dateOfBirth}
            onIonChange={(e) =>
              setProfileData({
                ...profileData,
                dateOfBirth: e.detail.value,
              })
            }
          ></IonInput>

          <div>
            <h4>Pol</h4>
            <IonRadioGroup
              value={profileData.sex}
              onIonChange={(e) =>
                setProfileData({ ...profileData, sex: e.detail.value })
              }
            >
              <IonRadio value="male" labelPlacement="end" name="sex">
                Muski
              </IonRadio>
              <br />
              <IonRadio value="female" labelPlacement="end" name="sex">
                Zenski
              </IonRadio>
              <br />
            </IonRadioGroup>
          </div>
          <br />
          <IonButton
            type="submit"
            expand="block"
            className="ion-margin-top ion-justify-center ion-padding"
          >
            Napravi korisnika
            <IonIcon icon={personAddOutline} slot="end" />
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default CreateProfile;

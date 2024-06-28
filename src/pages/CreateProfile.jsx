import React, { useState } from "react";
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
import { firestore, auth } from "../components/FirebaseConfig";
import { collection, setDoc } from "firebase/firestore"; 

const CreateProfile = () => {
  const [ime, setIme] = useState("");
  const [prezime, setPrezime] = useState("");
  const [godine, setGodine] = useState("");
  const [datumRodjenja, setDatumRodjenja] = useState("");
  const [pol, setPol] = useState(""); // This could be "M" or "Z", based on selection

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure userId is available (you should have userId set in state, retrieved from Firebase Auth)
    const userId = auth.currentUser.uid;
    console.log(userId);

    // Prepare profile data to be saved in Firestore
    const profileData = {
      ime,
      prezime,
      godine,
      datumRodjenja,
      pol,
      userId,
    };

    try {
      // Add a new document with a generated id to "profiles" collection
      const docRef = await addDoc(collection(), {
        profileData
      });
      console.log("Document written with ID: ", docRef.id);
      
      // Optionally: Navigate user to another page after profile creation
      // history.push("/profile-list");
      
      // Clear form fields after submission
      setIme("");
      setPrezime("");
      setGodine("");
      setDatumRodjenja("");
      setPol("");
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
            value={ime}
            onIonChange={(e) => setIme(e.detail.value)}
          ></IonInput>
          <IonInput
            className="ion-margin-bottom"
            label="Prezime"
            type="text"
            placeholder="Marković"
            labelPlacement="floating"
            fill="outline"
            value={prezime}
            onIonChange={(e) => setPrezime(e.detail.value)}
          ></IonInput>

          <IonInput
            className="ion-margin-bottom"
            label="Broj godina"
            type="number"
            placeholder="23"
            labelPlacement="floating"
            fill="outline"
            value={godine}
            onIonChange={(e) => setGodine(e.detail.value)}
          ></IonInput>

          <IonInput
            className="ion-margin-bottom"
            label="Datum rodjenja"
            type="date"
            placeholder="dd/mm/yyyy"
            labelPlacement="floating"
            fill="outline"
            value={datumRodjenja}
            onIonChange={(e) => setDatumRodjenja(e.detail.value)}
          ></IonInput>

          <div>
            <h4>Pol</h4>
            <IonRadioGroup value="pol">
      <IonRadio value="musko" labelPlacement="end">Muski</IonRadio>
      <br />
      <IonRadio value="zensko" labelPlacement="end">Zenski</IonRadio>
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

import {
  IonContent,
  IonPage,
  IonTitle,
  IonButton,
  IonIcon,
  IonInput,
  IonInputPasswordToggle,
} from "@ionic/react";
import { personCircleOutline } from "ionicons/icons"; // Import the specific icon
import "./Registracija.css";
import { register } from "../components/FirebaseConfig";
import React, { useState } from "react";
import { useHistory } from "react-router";



const Registracija = () => {
  const [ime,setIme] = useState("");
  const [prezime, setPrezime]  = useState("");
  const [datumRodjenja, setDatumRodjenja] = useState("");
  const [email, setEmail] = useState("");
  const [lozinka, setLozinka] = useState("");
  const [potvrdiLozinku, setPotvrdiLozinku] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (lozinka !== potvrdiLozinku) {
      alert("Lozinke se ne poklapaju!");
      return;
    }

    const history = useHistory();

    try {
      await register(email, lozinka);
      alert("Uspešno ste se registrovali!");
      history.push("/landing-page");
    } catch (error) {
      alert(`Došlo je do greške: ${error.message}`);
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding " color="light">
        <IonTitle className="ion-text-center ion-text-lg reg-title">
          Registracija
        </IonTitle>
        <br />

        <form onSubmit={handleRegister} className="ion-ion-justify-content-center">
          <IonInput
            className="form-ele  ion-margin-bottom"
            label="Ime"
            type="text"
            placeholder="Marko"
            labelPlacement="floating"
            fill="outline"
            value={ime}
            onIonChange={(e) => setIme(e.detail.value)}
          ></IonInput>
          <IonInput
            className="form-ele  ion-margin-bottom"
            label="Prezime"
            type="text"
            placeholder="Marković"
            labelPlacement="floating"
            fill="outline"
            value={prezime}
            onIonChange={(e) => setPrezime(e.detail.value)}
          ></IonInput>
          <IonInput
            className="form-ele  ion-margin-bottom"
            label="Datum rođenja"
            type="date"
            placeholder="dd/mm/gggg"
            labelPlacement="floating"
            fill="outline"
            value={datumRodjenja}
            onIonChange={(e) => setDatumRodjenja(e.detail.value)}
          ></IonInput>
          <IonInput
            className="form-ele  ion-margin-bottom"
            label="Email"
            type="email"
            placeholder="email@gmail.com"
            labelPlacement="floating"
            fill="outline"
            value={email}
            onIonChange={(e) => setEmail(e.detail.value)}
          ></IonInput>
          <IonInput
            className="form-ele  ion-margin-bottom"
            label="Lozinka"
            type="password"
            placeholder="Lozinka"
            labelPlacement="floating"
            fill="outline"
            value={lozinka}
            onIonChange={(e) => setLozinka(e.detail.value)}
          >
            <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
          </IonInput>
          <IonInput
            className="form-ele  ion-margin-bottom"
            label="Potvrdi lozinku"
            type="password"
            placeholder="Lozinke moraju da se poklapaju"
            labelPlacement="floating"
            fill="outline"
            value={potvrdiLozinku}
            onIonChange={(e) => setPotvrdiLozinku(e.detail.value)}
          ></IonInput>
          <IonButton
            type="submit"
            expand="block"
            className="ion-margin-top ion-justify-center ion-padding"
          >
            Registruj me
            <IonIcon icon={personCircleOutline} slot="end"></IonIcon>
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Registracija;

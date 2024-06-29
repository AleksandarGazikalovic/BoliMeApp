import {
  IonContent,
  IonPage,
  IonTitle,
  IonButton,
  IonIcon,
  IonInput,
  IonInputPasswordToggle,
} from "@ionic/react";
import { personCircleOutline } from "ionicons/icons";
import "./Registration.css";
import { register } from "../components/FirebaseConfig";
import React, { useState } from "react";
import { useHistory } from "react-router";

const RegistrationPage = () => {
  const [ime, setIme] = useState("");
  const [prezime, setPrezime] = useState("");
  const [datumRodjenja, setDatumRodjenja] = useState("");
  const [email, setEmail] = useState("");
  const [lozinka, setLozinka] = useState("");
  const [potvrdiLozinku, setPotvrdiLozinku] = useState("");

  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(`Lozinka: ${lozinka}, Potvrdi Lozinku: ${potvrdiLozinku}`);
    if (lozinka !== potvrdiLozinku) {
      alert("Lozinke se ne poklapaju!");
      return;
    }

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
      <IonContent fullscreen className="ion-padding" color="light">
        <IonTitle className="ion-text-center ion-text-lg reg-title">
          Registracija
        </IonTitle>
        <br />

        <form onSubmit={handleRegister} className="ion-justify-content-center">
          <IonInput
            className="form-ele ion-margin-bottom"
            label="Ime"
            type="text"
            placeholder="Marko"
            labelPlacement="floating"
            fill="outline"
            value={ime}
            onIonChange={(e) => setIme(e.detail.value)}
          />
          <IonInput
            className="form-ele ion-margin-bottom"
            label="Prezime"
            type="text"
            placeholder="Marković"
            labelPlacement="floating"
            fill="outline"
            value={prezime}
            onIonChange={(e) => setPrezime(e.detail.value)}
          />
          <IonInput
            className="form-ele ion-margin-bottom"
            label="Datum rođenja"
            type="date"
            labelPlacement="floating"
            fill="outline"
            value={datumRodjenja}
            onIonChange={(e) => setDatumRodjenja(e.detail.value)}
          />
          <IonInput
            className="form-ele ion-margin-bottom"
            label="Email"
            type="email"
            placeholder="email@gmail.com"
            labelPlacement="floating"
            fill="outline"
            value={email}
            onIonChange={(e) => setEmail(e.detail.value)}
          />
          <IonInput
            className="form-ele ion-margin-bottom"
            label="Lozinka"
            type="password"
            placeholder="Lozinka"
            labelPlacement="floating"
            fill="outline"
            value={lozinka}
            onIonChange={(e) => setLozinka(e.detail.value)}
          >
            <IonInputPasswordToggle slot="end" />
          </IonInput>
          <IonInput
            className="form-ele ion-margin-bottom"
            label="Potvrdi lozinku"
            type="password"
            placeholder="Lozinke moraju da se poklapaju"
            labelPlacement="floating"
            fill="outline"
            value={potvrdiLozinku}
            onIonChange={(e) => setPotvrdiLozinku(e.detail.value)}
          >
            <IonInputPasswordToggle slot="end" />
          </IonInput>
          <IonButton
            type="submit"
            expand="block"
            className="ion-margin-top ion-padding"
          >
            Registruj me
            <IonIcon icon={personCircleOutline} slot="end" />
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default RegistrationPage;

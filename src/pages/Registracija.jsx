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

const Registracija = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding " color="light">
        <IonTitle className="ion-text-center ion-text-lg reg-title">
          Registracija
        </IonTitle>
        <br />

        <form action="" className="ion-ion-justify-content-center">
          <IonInput
            className="form-ele  ion-margin-bottom"
            label="Ime"
            type="text"
            placeholder="Marko"
            labelPlacement="floating"
            fill="outline"
          ></IonInput>
          <IonInput
            className="form-ele  ion-margin-bottom"
            label="Prezime"
            type="text"
            placeholder="Marković"
            labelPlacement="floating"
            fill="outline"
          ></IonInput>
          <IonInput
            className="form-ele  ion-margin-bottom"
            label="Datum rođenja"
            type="date"
            placeholder="dd/mm/gggg"
            labelPlacement="floating"
            fill="outline"
          ></IonInput>
          <IonInput
            className="form-ele  ion-margin-bottom"
            label="Email"
            type="email"
            placeholder="email@gmail.com"
            labelPlacement="floating"
            fill="outline"
          ></IonInput>
          <IonInput
            className="form-ele  ion-margin-bottom"
            label="Lozinka"
            type="password"
            placeholder="Lozinka"
            labelPlacement="floating"
            fill="outline"
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

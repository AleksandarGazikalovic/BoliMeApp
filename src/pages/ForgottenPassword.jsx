import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonTitle,
  IonButton,
  IonInput,
  IonToast,
} from "@ionic/react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../components/FirebaseConfig";
import "./ForgottenPassword.css";
import { useHistory } from "react-router";

const ForgottenPassword = () => {
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const history = useHistory();


  const handlePasswordReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setToastMessage("Email za resetovanje sifre je poslat!");
      setShowToast(true);
      history.push("/login")
    } catch (error) {
      setToastMessage(error.message);
      setShowToast(true);
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding" color="light">
        <IonTitle className="ion-text-center" color="primary">
          Resetetuj sifru
        </IonTitle>
        <div className="ion-padding">
          <IonInput
            id="input"
            label="Email"
            labelPlacement="floating"
            className="ion-margin"
            fill="outline"
            placeholder="email@gmail.com"
            value={email}
            onIonChange={(e) => setEmail(e.detail.value)}
          />
        </div>
        <div className="button-container">
          <IonButton size="small" onClick={handlePasswordReset}>
            Resetuj lozinku
          </IonButton>
        </div>
        <IonToast
          isOpen={showToast}
          message={toastMessage}
          duration={3000}
          onDidDismiss={() => setShowToast(false)}
        />
      </IonContent>
    </IonPage>
  );
};

export default ForgottenPassword;

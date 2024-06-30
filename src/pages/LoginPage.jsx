import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCardHeader,
  IonCardSubtitle,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonIcon,
  IonInput,
  IonCheckbox,
  IonInputPasswordToggle,
  IonRouterLink,
} from "@ionic/react";
import { logInOutline, personCircleOutline } from "ionicons/icons"; // Import the specific icon
import "./Login.css";
import logo from "../assets/logo.png";
import { auth, firebase, login } from "../components/FirebaseConfig"; // Assuming firebaseConfig is the file where Firebase is configured

const Login = () => {
  const [showCard, setShowCard] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [buttonAnimation, setButtonAnimation] = useState(true); // State to manage button animation

  const toggleCard = () => {
    setShowCard(!showCard);
    setButtonAnimation(false); // Disable button animation when showing card
  };

  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      alert("Uspešno ste se prijavili!");
      history.push("/landing-page");
    } catch (error) {
      alert(`Došlo je do greške: ${error.message}`);
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding" color="primary">
        <IonHeader collapse="condense">
          <IonToolbar color="primary">
            <IonTitle size="large">Boli me</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="ion-text-center ion-margin-top">
          <img src={logo} alt="Boli me" className="logo" />
          <h1 className="title-of-image">Boli me</h1>
        </div>
        <div className="ion-text-center">
          <p className="button-description">
            <strong>Klikni dugme</strong> da pristupiš nalogu
          </p>
          <div className="arrow">
            <IonButton
              size="medium"
              fill="solid"
              color="light"
              id="open-modal"
              onClick={toggleCard}
              className={showCard ? "hidden" : "visible"} // Toggle visibility class
            >
              Klikni me
            </IonButton>
          </div>
        </div>

        <IonCard className={showCard ? "card visible" : "card"}>
          <IonCardHeader>
            <IonCardTitle className="ion-text-center card-title">
              Forma za prijavu
            </IonCardTitle>
            <IonCardSubtitle className="ion-text-center ion-padding">
              Pristupi svom nalogu
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <form
              className="ion-justify-content-center ion-margin"
              onSubmit={handleLogin}
            >
              <IonInput
                className="form-ele"
                label="Email"
                type="email"
                placeholder="email@gmail.com"
                labelPlacement="floating"
                fill="outline"
                value={email}
                onIonChange={(e) => setEmail(e.detail.value)}
              ></IonInput>
              <br />
              <IonInput
                className="form-ele"
                label="password"
                type="password"
                placeholder="password"
                labelPlacement="floating"
                fill="outline"
                value={password}
                onIonChange={(e) => setPassword(e.detail.value)}
              >
                <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
              </IonInput>
              <br />
              <IonCheckbox labelPlacement="end">Zapamti me</IonCheckbox>
              <IonRouterLink
                type="button"
                routerLink="/forgotten-password"
                fill="clear"
                size="small"
                className="ion-float-end"
              >
                Zaboravljena lozinka
              </IonRouterLink>
              <IonButton
                type="submit"
                expand="block"
                className="ion-margin-top"
              >
                Prijavi me
                <IonIcon icon={logInOutline} slot="end"></IonIcon>
              </IonButton>
              <br />
              <p className="ion-text-center ion-margin">
                Nemaš nalog?
                <IonRouterLink
                  routerLink="/registration"
                  className="ion-margin-top"
                  style={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Registruj se!
                </IonRouterLink>
              </p>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;

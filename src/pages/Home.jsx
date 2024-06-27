import React, { useState } from "react";
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
  IonInputPasswordToggle


} from "@ionic/react";
import {logInOutline, personCircleOutline } from 'ionicons/icons'; // Import the specific icon
import "./Home.css";
import logo from "../assets/logo.png";

const Home = () => {
  const [showCard, setShowCard] = useState(false);

  const [buttonAnimation, setButtonAnimation] = useState(true); // State to manage button animation

  const toggleCard = () => {
    setShowCard(!showCard);
    setButtonAnimation(false); // Disable button animation when showing card
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
            <IonCardTitle className="ion-text-center card-title" >Login form</IonCardTitle>
            <IonCardSubtitle className="ion-text-center ion-padding">Pristupi svom nalogu</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
           <form className="ion-justify-content-center ion-margin">
            <IonInput class="form-ele" label="Email" type="email" placeholder="email@gmail.com" labelPlacement="floating" fill="outline" ></IonInput>
            <br/>
            <IonInput class="form-ele" label="Lozinka" type="password" placeholder="lozinka" labelPlacement="floating" fill="outline" >
            <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
            </IonInput>
            <br/>
            <IonCheckbox labelPlacement="end">Zapamti me</IonCheckbox>
            <IonButton type="button"  routerLink="/zaboravljena-sifra" fill="clear" size="small"  className="ion-float-end">Zaboravljena šifra
            </IonButton>
            <IonButton type="submit" expand="block" className="ion-margin-top">Prijavi me
              <IonIcon icon={logInOutline} slot="end"></IonIcon>
            </IonButton>
        
            <br/>
            <p className="ion-text-center ">Nemaš nalog? Registruj se!</p>
            <IonButton type="button" expand="block" routerLink="/registracija" className="ion-margin-top">Registracija
              <IonIcon icon={personCircleOutline} slot="end"></IonIcon>
            </IonButton>
           </form>
            
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;

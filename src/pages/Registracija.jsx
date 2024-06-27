import {
  IonContent,
  IonPage,
  IonTitle,
  IonButton,
  IonIcon,
  IonInput, 
  IonInputPasswordToggle


} from "@ionic/react";
import { personCircleOutline } from 'ionicons/icons'; // Import the specific icon
import "./Registracija.css";

const Registracija = () => {
  

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding " color="light" >
      <IonTitle class="ion-text-center ion-text-lg reg-title" >Registracija</IonTitle>
      <br/>
        
        <div className="flex flex-col justify-center">
        <form action="" className=" ion-align-items-center">
        <IonInput class="form-ele  ion-margin" label="Ime" type="text" placeholder="Marko" labelPlacement="floating" fill="outline"></IonInput>
        <IonInput class="form-ele  ion-margin" label="Prezime" type="text" placeholder="Marković" labelPlacement="floating" fill="outline"></IonInput>
        <IonInput class="form-ele  ion-margin" label="Datum rođenja" type="date" placeholder="dd/mm/gggg" labelPlacement="floating" fill="outline"></IonInput>
        <IonInput class="form-ele  ion-margin" label="Email" type="email" placeholder="email@gmail.com" labelPlacement="floating" fill="outline"></IonInput>
        <IonInput class="form-ele  ion-margin" label="Lozinka" type="password" placeholder="Lozinka" labelPlacement="floating" fill="outline" >
            <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
            </IonInput>
            <IonInput class="form-ele  ion-margin" label="Potvrdi lozinku" type="password" placeholder="Lozinke moraju da se poklapaju" labelPlacement="floating" fill="outline" >
            
            </IonInput>
            <IonButton type="submit" expand="block" className="ion-margin ion-justify-center ion-padding">Registruj me
              <IonIcon icon={personCircleOutline} slot="end"></IonIcon>
            </IonButton>
      </form>
        </div>
 
      </IonContent>
    </IonPage>
  );
};

export default Registracija;
import React from "react";

import { IonInput, IonRadioGroup, IonRadio, IonButton, IonIcon} from "@ionic/react";
import { createOutline } from "ionicons/icons";

const EditProfile = () => {
  return (
    <div>
      <form  className="ion-padding">
          <IonInput
            className="ion-margin-bottom"
            label="Ime"
            type="text"
            placeholder="Marko"
            labelPlacement="floating"
            fill="outline"
            
          ></IonInput>
          <IonInput
            className="ion-margin-bottom"
            label="Prezime"
            type="text"
            placeholder="Marković"
            labelPlacement="floating"
            fill="outline"
           
          ></IonInput>

          <IonInput
            className="ion-margin-bottom"
            label="Broj godina"
            type="number"
            placeholder="23"
            labelPlacement="floating"
            fill="outline"
           
          ></IonInput>

          <IonInput
            className="ion-margin-bottom"
            label="Datum rodjenja"
            type="date"
            placeholder="dd/mm/yyyy"
            labelPlacement="floating"
            fill="outline"
            
          ></IonInput>

          <div>
            <h4>Pol</h4>
            <IonRadioGroup
              
            >
              <IonRadio value="male" labelPlacement="end" name="sex">
                Muško
              </IonRadio>
              <br />
              <IonRadio value="female" labelPlacement="end" name="sex">
                Žensko
              </IonRadio>
              <br />
            </IonRadioGroup>
          </div>
          <div>
            <h4>Da li je profil za dete</h4>
            <IonRadioGroup
             
            >
              <IonRadio value="yes" labelPlacement="end" name="child">
                Da
              </IonRadio>
              <br />

              <IonRadio value="no" labelPlacement="end" name="child">
                Ne
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
            Izmeni profil
            <IonIcon icon={createOutline} slot="end" />
          </IonButton>
        </form>
    </div>
  );
};

export default EditProfile;

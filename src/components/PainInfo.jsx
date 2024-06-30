import React, { useState } from "react";
import {
  IonLabel,
  IonRange,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonButton,
  IonPage,
  IonContent,
  IonRadioGroup,
  IonRadio,
  IonNote,
  IonIcon,
  IonTextarea,
} from "@ionic/react";
import "./PainInfo.css";
import { happyOutline, sadOutline } from "ionicons/icons";

const PainInfo = () => {
  const [valuePain, setValuePain] = useState(5); // Initial value
  const [qualityOfLife, setQualityOfLife] = useState(5);

  //Ovo je za tip bola da se prikaze deskripcija
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelection = (event) => {
    const selectedValue = event.detail.value;
    setSelectedOption(selectedValue);
  };

  const descriptions = {
    ostar:
      "Oštar bol - Ovo je obično oblik akutne boli, jer je često povezan sa naglim povredama ili neposrednim oštećenjem tkiva.",
    tup: "Tup bol - Može biti i akutan i hroničan, u zavisnosti od uzroka. Na primer, tup bol koji se javlja nakon povrede je obično akutan, dok je tup bol koji je prisutan zbog hroničnih stanja kao što su artritis ili fibromijalgija hroničan.",
    pulsirajuci:
      "Pulsirajući bol - Ovaj tip boli može biti prisutan u oba stanja, ali je karakterističan za određene tipove akutnih bolova kao što su migrene ili akutna upalna stanja.",
    ukocenost:
      "Ukočenost - Ukočenost se često može pojaviti i u akutnim i u hroničnim stanjima. Na primer, nakon povrede može doći do akutne ukočenosti, dok je ukočenost koja se javlja kod hroničnih stanja poput artritisa često trajnija i može biti delom hronične boli.",
    neuropatski:
      "Neuropatska bol - Ova vrsta boli obično se smatra delom hronične boli, jer je često povezana sa oštećenjem nervnog sistema koje može biti trajno ili dugotrajno.",
  };

  //Ovo je za opciju kada selektujes da za koriscenje leka
  const [medicineOption, setMedicineOption] = useState("ne"); // Default to "ne"

  const handleRadioChange = (event) => {
    setMedicineOption(event.detail.value);
  };

  return (
    <div className="ion-padding">
      <IonLabel position="stacked">
        Označite jačinu bola (skala od 1 do 10) :
      </IonLabel>
      <IonRange
        min={1}
        max={10}
        step={1}
        value={valuePain}
        ticks={true}
        snaps={true}
        onIonChange={(e) => setValuePain(e.detail.value)}
        aria-label="Range with pin"
        className="ion-padding-top"
        pin={true}
        pinFormatter={(value) => `${value}`}
      >
        <IonIcon slot="start" icon={happyOutline}></IonIcon>
        <IonIcon slot="end" icon={sadOutline}></IonIcon>
      </IonRange>
      <br />
      <IonLabel position="stacked">Označite tip bola :</IonLabel>
      <br />
      <IonSelect
        label="Tip bola"
        placeholder="Tip bola"
        onIonChange={handleSelection}
      >
        <IonSelectOption value="ostar">
          Oštar bol <span className="ion-padding-right">&#x2139;</span>
        </IonSelectOption>
        <IonSelectOption value="tup">
          Tup bol <span className="ion-padding-right">&#x2139;</span>
        </IonSelectOption>
        <IonSelectOption value="pulsirajuci">
          Pulsirajući bol <span className="ion-padding-right">&#x2139;</span>
        </IonSelectOption>
        <IonSelectOption value="ukocenost">
          Ukočenost <span>&#x2139;</span>
        </IonSelectOption>
        <IonSelectOption value="neuropatski">
          Neuropatski bol <span className="ion-padding-right">&#x2139;</span>
        </IonSelectOption>
      </IonSelect>
      {selectedOption && <IonNote>{descriptions[selectedOption]}</IonNote>}
      <br />
      <br />
      <IonLabel position="stacked">Označite datum početka :</IonLabel>
      <br />
      <br />
      <IonInput
        label="Datum početka bola"
        type="date"
        labelPlacement="floating"
        fill="outline"
      />
      <br />
      <IonLabel position="stacked">Označite trajanje bola :</IonLabel>
      <div className="container-duration-of-pain ">
        <IonInput
          label="Trajanje bola"
          type="number"
          labelPlacement="floating"
          className="number-of-time"
          fill="outline"
        />
        <div className="ion-justify-content-end ">
          <IonSelect placeholder="Vremenska jedinica">
            <IonSelectOption value="sati">Sati </IonSelectOption>
            <IonSelectOption value="dani">Dana</IonSelectOption>
            <IonSelectOption value="meseci">Meseca</IonSelectOption>
            <IonSelectOption value="godine">Godina</IonSelectOption>
          </IonSelect>
        </div>
      </div>

      <br />

      <IonLabel position="stacked">
        Uticaj na kvalitet života (skala od 1 do 10) :
      </IonLabel>
      <IonRange
        min={1}
        max={10}
        step={1}
        value={qualityOfLife}
        ticks={true}
        snaps={true}
        onIonChange={(e) => setQualityOfLife(e.detail.value)}
        aria-label="Range with pin"
        className="ion-padding-top"
        pin={true}
        pinFormatter={(value) => `${value}`}
      >
        <IonIcon slot="start" icon={happyOutline}></IonIcon>
        <IonIcon slot="end" icon={sadOutline}></IonIcon>
      </IonRange>
      <br />

      <IonLabel position="stacked">Označite uzrok bola :</IonLabel>
      <br />
      <div className="container-duration-of-pain ">
        <IonInput
          label="Uzrok bola"
          type="text"
          labelPlacement="floating"
          className="number-of-time"
          placeholder="Pao/la sam"
          fill="outline"
        />
        <div className="ion-justify-content-end ">
          <IonSelect placeholder="Uzrok">
            <IonSelectOption value="pokret">Pokret</IonSelectOption>
            <IonSelectOption value="povreda">Povreda</IonSelectOption>
            <IonSelectOption value="hronicni-bol">Hronični bol</IonSelectOption>
            <IonSelectOption value="drugo">Nešto drugo</IonSelectOption>
          </IonSelect>
        </div>
      </div>

      <br />
      <IonLabel className="ion-margin-top">Da li koristiš neki lek:</IonLabel>
      <br />
      <div className="ion-margin-top">
        <IonRadioGroup value={medicineOption} onIonChange={handleRadioChange}>
          <IonRadio value="da" labelPlacement="end">
            Da
          </IonRadio>
          <br />
          <IonRadio value="ne" labelPlacement="end">
            Ne
          </IonRadio>
          <br />
        </IonRadioGroup>

        {medicineOption === "da" && (
          <div className="ion-margin-top ">
            <IonInput
              label="Ime leka"
              type="text"
              labelPlacement="floating"
              fill="outline"
            ></IonInput>
            <div className="container-duration-of-pain">
              <IonInput
                label="Doza leka"
                type="number"
                labelPlacement="floating"
                className="number-of-time"
                fill="outline"
              />
              <div className="ion-justify-content-end">
                <IonSelect placeholder="Doza">
                  <IonSelectOption value="sat">Na sat </IonSelectOption>
                  <IonSelectOption value="dnevno">Dnevno</IonSelectOption>
                  <IonSelectOption value="nedeljno">Nedeljno</IonSelectOption>
                  <IonSelectOption value="miligram">Miligrama</IonSelectOption>
                  <IonSelectOption value="kap">Kapi</IonSelectOption>
                </IonSelect>
              </div>
            </div>
          </div>
        )}
      </div>
      <br />
      <IonTextarea
        label="Komentar"
        labelPlacement="floating"
        placeholder="Vaš komentar"
        fill="outline"
        maxlength={300}
        autoGrow={true}
      ></IonTextarea>

      <div className="button-container">
        <IonButton>Dodaj bol</IonButton>
      </div>
    </div>
  );
};

export default PainInfo;

import React from "react";
import {
  IonLabel,
  IonRange,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonButton,
  IonRadioGroup,
  IonRadio,
  IonNote,
  IonIcon,
  IonTextarea,
  IonText,
  IonModal,
} from "@ionic/react";
import "./PainInfo.css";
import { happyOutline, sadOutline, closeOutline } from "ionicons/icons";
import PropTypes from "prop-types";
import { descriptions } from "../../utils/painUtils";

const PainInfo = ({
  formik,
  modal,
  handleAddDosage,
  handleRemoveDosage,
  handleOpenModal,
  setActiveSegment,
}) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="ion-padding">
        <IonLabel position="stacked">
          Označite jačinu bola (skala od 1 do 10) :
        </IonLabel>
        <IonRange
          min={1}
          max={10}
          step={1}
          value={formik.values.valuePain}
          ticks={true}
          snaps={true}
          onIonChange={(e) => formik.setFieldValue("valuePain", e.detail.value)}
          aria-label="Range with pin"
          className="ion-padding-top"
          pin={true}
          pinFormatter={(value) => `${value}`}
        >
          <IonIcon slot="start" icon={happyOutline}></IonIcon>
          <IonIcon slot="end" icon={sadOutline}></IonIcon>
        </IonRange>
        {formik.touched.valuePain && formik.errors.valuePain ? (
          <IonText color="danger">{formik.errors.valuePain}</IonText>
        ) : null}
        <IonSelect
          label="Oznacite tip bola:"
          placeholder="Tip bola"
          value={formik.values.selectedOptionPain}
          onIonChange={(e) =>
            formik.setFieldValue("selectedOptionPain", e.detail.value)
          }
        >
          <IonSelectOption value="ostar">Oštar bol </IonSelectOption>
          <IonSelectOption value="tup">Tup bol </IonSelectOption>
          <IonSelectOption value="pulsirajuci">Pulsirajući bol</IonSelectOption>
          <IonSelectOption value="ukocenost">Ukočenost </IonSelectOption>
          <IonSelectOption value="neuropatski">Neuropatski bol</IonSelectOption>
          <IonSelectOption value="drugi-tip">Drugo</IonSelectOption>
        </IonSelect>
        {formik.values.selectedOptionPain && (
          <IonNote>{descriptions[formik.values.selectedOptionPain]}</IonNote>
        )}
        {formik.touched.selectedOptionPain &&
        formik.errors.selectedOptionPain ? (
          <IonText color="danger">{formik.errors.selectedOptionPain}</IonText>
        ) : null}
        <br />
        <br />
        {formik.values.selectedOptionPain === "drugi-tip" && (
          <IonInput
            label="Tip bola"
            type="text"
            labelPlacement="floating"
            fill="outline"
            placeholder="Opišite tip bola"
            value={formik.values.otherPainType}
            onIonChange={(e) =>
              formik.setFieldValue("otherPainType", e.detail.value)
            }
          />
        )}
        <IonLabel position="stacked">Označite datum početka :</IonLabel>
        <br />
        <br />
        <IonInput
          label="Datum početka bola"
          type="date"
          labelPlacement="floating"
          fill="outline"
          value={formik.values.startDate}
          onIonChange={(e) => formik.setFieldValue("startDate", e.detail.value)}
        />
        {formik.touched.startDate && formik.errors.startDate ? (
          <IonText color="danger">{formik.errors.startDate}</IonText>
        ) : null}
        <br />
        <br />
        <IonLabel position="stacked">Označite trajanje bola :</IonLabel>
        <div className="container-duration-of-pain">
          <IonInput
            label="Trajanje bola"
            type="number"
            labelPlacement="floating"
            className="number-of-time"
            fill="outline"
            value={formik.values.duration}
            onIonChange={(e) =>
              formik.setFieldValue("duration", e.detail.value)
            }
          />
          <IonSelect
            placeholder="Vremenska jedinica"
            value={formik.values.durationUnit}
            onIonChange={(e) =>
              formik.setFieldValue("durationUnit", e.detail.value)
            }
          >
            <IonSelectOption value="sati">Sati</IonSelectOption>
            <IonSelectOption value="dani">Dana</IonSelectOption>
            <IonSelectOption value="meseci">Meseca</IonSelectOption>
            <IonSelectOption value="godine">Godina</IonSelectOption>
          </IonSelect>
        </div>
        {(formik.touched.duration && formik.errors.duration) ||
        formik.errors.durationUnit ? (
          <IonText color="danger">{formik.errors.duration}</IonText>
        ) : null}
        <br />
        <br />
        <IonLabel position="stacked">
          Uticaj na kvalitet života (skala od 1 do 10) :
        </IonLabel>
        <IonRange
          min={1}
          max={10}
          step={1}
          value={formik.values.qualityOfLife}
          ticks={true}
          snaps={true}
          onIonChange={(e) =>
            formik.setFieldValue("qualityOfLife", e.detail.value)
          }
          aria-label="Range with pin"
          className="ion-padding-top"
          pin={true}
          pinFormatter={(value) => `${value}`}
        >
          <IonIcon slot="start" icon={happyOutline}></IonIcon>
          <IonIcon slot="end" icon={sadOutline}></IonIcon>
        </IonRange>
        {formik.touched.qualityOfLife && formik.errors.qualityOfLife ? (
          <IonText color="danger">{formik.errors.qualityOfLife}</IonText>
        ) : null}
        <br />
        <IonSelect
          label="Označite uzrok bola: "
          placeholder="Uzrok bola"
          value={formik.values.selectedOptionCause}
          onIonChange={(e) =>
            formik.setFieldValue("selectedOptionCause", e.detail.value)
          }
        >
          <IonSelectOption value="pokret">Pokret</IonSelectOption>
          <IonSelectOption value="povreda">Povreda</IonSelectOption>
          <IonSelectOption value="hronicni-bol">Stres</IonSelectOption>
          <IonSelectOption value="drugi-uzrok">Drugo</IonSelectOption>
        </IonSelect>
        {formik.errors.selectedOptionCause ? (
          <IonText color="danger">{formik.errors.selectedOptionCause}</IonText>
        ) : null}
        <br />
        {formik.values.selectedOptionCause === "drugi-uzrok" && (
          <IonInput
            label="Uzrok bola"
            type="text"
            labelPlacement="floating"
            fill="outline"
            placeholder="Opišite uzrok bola"
            value={formik.values.otherCause}
            onIonChange={(e) =>
              formik.setFieldValue("otherCause", e.detail.value)
            }
          />
        )}
        {formik.touched.otherCause && formik.errors.otherCause ? (
          <IonText color="danger">{formik.errors.otherCause}</IonText>
        ) : null}
        <br />
        <IonLabel className="ion-margin-top">Da li koristiš neki lek:</IonLabel>
        <br />
        <br />
        <IonRadioGroup
          value={formik.values.medicineOption}
          onIonChange={(e) =>
            formik.setFieldValue("medicineOption", e.detail.value)
          }
        >
          <IonRadio value="da" labelPlacement="end">
            Da
          </IonRadio>
          <br />
          <IonRadio value="ne" labelPlacement="end">
            Ne
          </IonRadio>
        </IonRadioGroup>
        <br />
        {formik.touched.medicineOption && formik.errors.medicineOption ? (
          <IonText color="danger">{formik.errors.medicineOption}</IonText>
        ) : null}
        <br />
        {formik.values.medicineOption === "da" && (
          <div className="ion-margin-top">
            <IonInput
              label="Ime leka"
              type="text"
              labelPlacement="floating"
              fill="outline"
              value={formik.values.medicineName}
              onIonChange={(e) =>
                formik.setFieldValue("medicineName", e.detail.value)
              }
            />
            {formik.touched.medicineName && formik.errors.medicineName ? (
              <IonText color="danger">{formik.errors.medicineName}</IonText>
            ) : null}
            <br />

            {formik.values.dosages.map((dosage, index) => (
              <>
                <div key={dosage.id} className="dosage-input">
                  <div className="container-duration-of-pain">
                    <IonInput
                      label="Doza leka"
                      type="number"
                      labelPlacement="floating"
                      className="number-of-time"
                      name="dose"
                      value={dosage.dose}
                      onIonChange={(e) =>
                        formik.setFieldValue(
                          `dosages.${index}.dose`,
                          e.detail.value
                        )
                      }
                      fill="outline"
                    />
                    <IonSelect
                      placeholder="Doza"
                      name="unit"
                      value={dosage.unit}
                      onIonChange={(e) =>
                        formik.setFieldValue(
                          `dosages.${index}.unit`,
                          e.detail.value
                        )
                      }
                    >
                      <IonSelectOption value="sat">Na sat</IonSelectOption>
                      <IonSelectOption value="dnevno">Dnevno</IonSelectOption>
                      <IonSelectOption value="nedeljno">
                        Nedeljno
                      </IonSelectOption>
                      <IonSelectOption value="miligram">
                        Miligrama
                      </IonSelectOption>
                      <IonSelectOption value="kap">Kapi</IonSelectOption>
                    </IonSelect>
                    <IonButton
                      fill="clear"
                      onClick={() => handleRemoveDosage(index)}
                    >
                      <IonIcon icon={closeOutline} />
                    </IonButton>
                  </div>
                </div>
                <React.Fragment key={index}>
                  {formik.touched.dosages?.[index]?.dose &&
                  formik.errors.dosages?.[index]?.dose ? (
                    <IonText color="danger">
                      {formik.errors.dosages[index].dose}
                    </IonText>
                  ) : null}
                </React.Fragment>
              </>
            ))}
            <div className="button-container">
              <IonButton onClick={handleAddDosage}>Dodaj Dozu</IonButton>
            </div>
          </div>
        )}

        <br />
        <IonTextarea
          label="Komentar"
          labelPlacement="floating"
          placeholder="Vaš komentar"
          fill="outline"
          maxlength={300}
          autoGrow={true}
          value={formik.values.comment}
          onIonChange={(e) => formik.setFieldValue("comment", e.detail.value)}
        ></IonTextarea>
        {formik.touched.comment && formik.errors.comment ? (
          <IonText color="danger">{formik.errors.comment}</IonText>
        ) : null}
        <br />
        <div className="button-container">
          <IonButton type="submit" onClick={handleOpenModal}>
            Dodaj bol
          </IonButton>
        </div>
        {formik.errors.painArea ? (
          <IonModal ref={modal} initialBreakpoint={1} breakpoints={[0, 1]}>
            <div className="block">
              {formik.errors.painArea}
              <IonButton onClick={() => setActiveSegment("place")}>
                Odabir mesta bola
              </IonButton>
            </div>
          </IonModal>
        ) : null}
      </div>
    </form>
  );
};

PainInfo.propTypes = {
  formik: PropTypes.object,
  modal: PropTypes.object,
  handleAddDosage: PropTypes.func,
  handleRemoveDosage: PropTypes.func,
  handleOpenModal: PropTypes.func,
  setActiveSegment: PropTypes.func,
};

export default PainInfo;

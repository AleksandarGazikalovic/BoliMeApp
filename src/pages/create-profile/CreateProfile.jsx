import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonButton,
  IonTitle,
  IonIcon,
  IonInput,
  IonRadio,
  IonRadioGroup,
  IonLabel,
  IonText,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonToast,
  IonBackButton,
} from "@ionic/react";
import "./CreateProfile.css";
import { personAddOutline } from "ionicons/icons";
import { profileService } from "../../services";
import { Field, Form, Formik } from "formik";
import { ProfileSchema } from "../../validation/newProfileValidation";
import { useProfile } from "../../context/ProfileContext";
import { useHistory } from "react-router";
import { useAuth } from "../../context/AuthContext";

const CreateProfile = () => {
  const { setProfile } = useProfile();
  const [showToast, setShowToast] = useState(false);
  const { getUserId, getToken } = useAuth();

  const history = useHistory();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const docRefId = await profileService.createProfile(
        getUserId(),
        values,
        getToken()
      );
      setShowToast(true);
      setProfile(
        Object.assign({}, values, {
          userId: getUserId(),
          profileId: docRefId,
        })
      );
      history.push("/tabs");

      resetForm();
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/landing-page" />
          </IonButtons>
          <IonTitle
            className="ion-text-center ion-text-lg reg-title"
            color={"primary"}
          >
            Kreiranje profila
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding" color="light">
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            age: "",
            dateOfBirth: "",
            sex: "",
            child: null,
          }}
          validationSchema={ProfileSchema}
          onSubmit={handleSubmit}
        >
          {({
            isSubmitting,
            handleChange,
            handleBlur,
            values,
            errors,
            touched,
          }) => (
            <Form className="ion-padding">
              <Field
                as={IonInput}
                className={` ${
                  touched.firstname && errors.firstname ? "input-error" : ""
                }`}
                name="firstname"
                type="text"
                fill="outline"
                label="Ime"
                labelPlacement="floating"
                placeholder="Marko"
                value={values.firstname}
                onIonChange={handleChange}
                onIonBlur={handleBlur}
              />
              {errors.firstname && touched.firstname ? (
                <>
                  <IonText color="danger">{errors.firstname}</IonText>
                  <br />
                </>
              ) : null}
              <br />

              <Field
                as={IonInput}
                className={` ${
                  touched.lastname && errors.lastname ? "input-error" : ""
                }`}
                name="lastname"
                type="text"
                fill="outline"
                label="Prezime"
                labelPlacement="floating"
                placeholder="Marković"
                value={values.lastname}
                onIonChange={handleChange}
                onIonBlur={handleBlur}
              />
              {errors.lastname && touched.lastname ? (
                <>
                  <IonText color="danger">{errors.lastname}</IonText>
                  <br />
                </>
              ) : null}
              <br />

              <Field
                as={IonInput}
                className={` ${touched.age && errors.age ? "input-error" : ""}`}
                name="age"
                type="number"
                fill="outline"
                label="Godine"
                labelPlacement="floating"
                placeholder="23"
                value={values.age}
                onIonChange={handleChange}
                onIonBlur={handleBlur}
              />
              {errors.age && touched.age ? (
                <>
                  <IonText color="danger">{errors.age}</IonText>
                  <br />
                </>
              ) : null}
              <br />
              <Field
                as={IonInput}
                className={`${
                  touched.dateOfBirth && errors.dateOfBirth ? "input-error" : ""
                }`}
                name="dateOfBirth"
                type="date"
                fill="outline"
                label="Datum rodjenja"
                labelPlacement="floating"
                value={values.dateOfBirth}
                onIonChange={handleChange}
                onIonBlur={handleBlur}
              />
              {errors.dateOfBirth && touched.dateOfBirth ? (
                <>
                  <IonText color="danger">{errors.dateOfBirth}</IonText>
                  <br />
                </>
              ) : null}
              <br />

              <IonLabel>Pol</IonLabel>
              <br />
              <br />
              <IonRadioGroup
                value={values.sex}
                onIonChange={(e) => handleChange(e)}
                onIonBlur={handleBlur}
                name="sex"
              >
                <IonRadio value="male" labelPlacement="end" name="sex">
                  Muško
                </IonRadio>
                <br />
                <br />
                <IonRadio value="female" labelPlacement="end" name="sex">
                  Žensko
                </IonRadio>
              </IonRadioGroup>
              <br />
              {errors.sex && touched.sex ? (
                <>
                  <IonText color="danger">{errors.sex}</IonText>
                  <br />
                </>
              ) : null}
              <br />

              <IonLabel>Da li je profil za dete</IonLabel>
              <IonRadioGroup
                value={values.child}
                onIonChange={(e) => handleChange(e)}
                onIonBlur={handleBlur}
                name="child"
              >
                <br />
                <br />
                <IonRadio value={true} labelPlacement="end" name="child">
                  Da
                </IonRadio>
                <br />
                <br />
                <IonRadio value={false} labelPlacement="end" name="child">
                  Ne
                </IonRadio>
                <br />
              </IonRadioGroup>
              {errors.child && touched.child ? (
                <>
                  <IonText color="danger">{errors.child}</IonText>
                  <br />
                </>
              ) : null}
              <IonButton
                type="submit"
                expand="block"
                className="ion-margin-top ion-justify-center ion-padding"
                disabled={isSubmitting}
              >
                Napravi korisnika
                <IonIcon icon={personAddOutline} slot="end" />
              </IonButton>
            </Form>
          )}
        </Formik>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Uspešno ste napravili profil!"
          duration={5000}
          color={"success"}
          position="top"
        />
      </IonContent>
    </IonPage>
  );
};

export default CreateProfile;

import React from "react";

import {
  IonInput,
  IonRadioGroup,
  IonRadio,
  IonButton,
  IonIcon,
  IonText,
  IonLabel,
} from "@ionic/react";
import { createOutline } from "ionicons/icons";
import PropTypes from "prop-types";
import { Field, Form, Formik } from "formik";
import { profileService } from "../../services";
import { useProfile } from "../../context/ProfileContext";
import { ProfileSchema } from "../../validation/newProfileValidation";
import { useAuth } from "../../context/AuthContext";

const EditProfile = ({ profile }) => {
  const { setProfile } = useProfile();
  const { getToken } = useAuth();

  const handleSubmit = async (values, { setSubmitting, setValues }) => {
    try {
      await profileService.updateProfile(
        profile.profileId,
        {
          ...values,
          userId: profile.userId,
        },
        getToken()
      );

      const updatedProfile = {
        ...values,
        userId: profile.userId,
        profileId: profile.profileId,
      };
      setProfile(updatedProfile);
      setValues(updatedProfile);
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Formik
      initialValues={{
        firstname: profile.firstname,
        lastname: profile.lastname,
        age: profile.age,
        dateOfBirth: profile.dateOfBirth,
        sex: profile.sex,
        child: profile.child,
      }}
      onSubmit={handleSubmit}
      validationSchema={ProfileSchema}
    >
      {({
        values,
        handleChange,
        handleBlur,
        touched,
        errors,
        isSubmitting,
        dirty,
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
            disabled={isSubmitting || !dirty}
          >
            Izmeni profil
            <IonIcon icon={createOutline} slot="end" />
          </IonButton>
        </Form>
      )}
    </Formik>
  );
};

EditProfile.propTypes = {
  profile: PropTypes.object,
};

export default EditProfile;

import {
  IonContent,
  IonPage,
  IonTitle,
  IonButton,
  IonIcon,
  IonInput,
  IonInputPasswordToggle,
  IonText,
} from "@ionic/react";
import { personCircleOutline } from "ionicons/icons";
import "./Registration.css";
import { register } from "../components/FirebaseConfig";
import React from "react";
import { useHistory } from "react-router";
import { Field, Form, Formik } from "formik";
import { profileService } from "../services";
import { RegistrationSchema } from "../validation/newUserValidation";
import { ProfileSchema } from "../validation/newProfileValidation";

const RegistrationPage = () => {
  const history = useHistory();

  const handleRegister = async (values, { setSubmitting }) => {
    try {
      const user = await register(values.email, values.password);
      const profile = await profileService.createProfile(user.uid, {
        firstname: values.firstname,
        lastname: values.lastname,
        dateOfBirth: values.dateOfBirth,
      });
      history.push("/profile-list");
      console.log("User created with ID: ", user.uid);
    } catch (error) {
      console.error("Error creating user: ", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding" color="light">
        <IonTitle className="ion-text-center ion-text-lg reg-title">
          Registracija
        </IonTitle>
        <br />

        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            dateOfBirth: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={handleRegister}
          validationSchema={ProfileSchema.concat(RegistrationSchema)}
        >
          {({ handleChange, handleBlur, values, errors, touched }) => (
            <Form className="ion-justify-content-center">
              <Field
                as={IonInput}
                className={`${
                  touched.firstname && errors.firstname ? "input-error" : ""
                }`}
                label="Ime"
                type="text"
                placeholder="Marko"
                labelPlacement="floating"
                fill="outline"
                name="firstname"
                value={values.firstname}
                onIonChange={handleChange}
                onIonBlur={handleBlur}
              />
              {errors.firstname && touched.firstname ? (
                <IonText color="danger">{errors.firstname}</IonText>
              ) : null}
              <br />
              <br />
              <Field
                as={IonInput}
                label="Prezime"
                className={` ${
                  touched.lastname && errors.lastname ? "input-error" : ""
                }`}
                type="text"
                placeholder="Marković"
                labelPlacement="floating"
                fill="outline"
                name="lastname"
                value={values.lastname}
                onIonChange={handleChange}
                onIonBlur={handleBlur}
              />
              {errors.lastname && touched.lastname ? (
                <IonText color="danger">{errors.lastname}</IonText>
              ) : null}
              <br />
              <br />
              <Field
                as={IonInput}
                className={` ${
                  touched.dateOfBirth && errors.dateOfBirth ? "input-error" : ""
                }`}
                label="Datum rođenja"
                type="date"
                labelPlacement="floating"
                fill="outline"
                name="dateOfBirth"
                value={values.dateOfBirth}
                onIonChange={handleChange}
                onIonBlur={handleBlur}
              />
              {errors.dateOfBirth && touched.dateOfBirth ? (
                <IonText color="danger">{errors.dateOfBirth}</IonText>
              ) : null}
              <br />
              <br />
              <Field
                as={IonInput}
                className={` ${
                  touched.email && errors.email ? "input-error" : ""
                }`}
                label="Email"
                type="email"
                placeholder="email@gmail.com"
                labelPlacement="floating"
                fill="outline"
                name="email"
                value={values.email}
                onIonChange={handleChange}
                onIonBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <IonText color="danger">{errors.email}</IonText>
              ) : null}
              <br />
              <br />
              <Field
                as={IonInput}
                className={` ${
                  touched.password && errors.password ? "input-error" : ""
                }`}
                label="Lozinka"
                type="password"
                placeholder="Lozinka"
                labelPlacement="floating"
                fill="outline"
                name="password"
                value={values.password}
                onIonChange={handleChange}
                onIonBlur={handleBlur}
              >
                <IonInputPasswordToggle slot="end" />
              </Field>
              {errors.password && touched.password ? (
                <IonText color="danger">{errors.password}</IonText>
              ) : null}
              <br />
              <br />
              <Field
                as={IonInput}
                className={` ${
                  touched.confirmPassword && errors.confirmPassword
                    ? "input-error"
                    : ""
                }`}
                label="Potvrdi lozinku"
                type="password"
                placeholder="Lozinke moraju da se poklapaju"
                labelPlacement="floating"
                fill="outline"
                name="confirmPassword"
                value={values.confirmPassword}
                onIonChange={handleChange}
                onIonBlur={handleBlur}
              >
                <IonInputPasswordToggle slot="end" />
              </Field>
              {errors.confirmPassword && touched.confirmPassword ? (
                <IonText color="danger">{errors.confirmPassword}</IonText>
              ) : null}
              <br />
              <br />
              <IonButton
                type="submit"
                expand="block"
                className="ion-margin-top ion-padding"
              >
                Registruj me
                <IonIcon icon={personCircleOutline} slot="end" />
              </IonButton>
            </Form>
          )}
        </Formik>
      </IonContent>
    </IonPage>
  );
};

export default RegistrationPage;

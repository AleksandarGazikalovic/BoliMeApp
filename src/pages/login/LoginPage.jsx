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
  IonText,
  IonToast,
} from "@ionic/react";
import { logInOutline } from "ionicons/icons"; // Import the specific icon
import "./Login.css";
import logo from "../../assets/logo.png";
import { Field, Form, Formik } from "formik";
import { LoginSchema } from "../../validation/loginValidation";
import { useAuth } from "../../context/AuthContext";
import { resolveLoginErrors } from "../../utils/authUtils";

const Login = () => {
  const [showCard, setShowCard] = useState(false);
  const [error, setError] = useState(null);
  const [, setButtonAnimation] = useState(true); // State to manage button animation
  const [showToast, setShowToast] = useState(false);
  const { logIn } = useAuth();

  const toggleCard = () => {
    setShowCard(!showCard);
    setButtonAnimation(false); // Disable button animation when showing card
  };

  const history = useHistory();

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      await logIn({ email: values.email, password: values.password });
      setShowToast(true);
      history.push("/landing-page");
    } catch (error) {
      setError(resolveLoginErrors(error));
    } finally {
      setSubmitting(false);
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
            <Formik
              initialValues={{ email: "", password: "" }}
              className="ion-justify-content-center ion-margin"
              onSubmit={handleLogin}
              validationSchema={LoginSchema}
            >
              {({ handleChange, handleBlur, values, errors, touched }) => (
                <Form>
                  <Field
                    as={IonInput}
                    className={`${
                      touched.email && errors.email ? "input-error" : ""
                    }`}
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="email@gmail.com"
                    labelPlacement="floating"
                    fill="outline"
                    value={values.email}
                    onIonChange={handleChange}
                    onIonBlur={handleBlur}
                  ></Field>
                  {errors.email && touched.email ? (
                    <>
                      <IonText color="danger">{errors.email}</IonText>
                      <br />
                    </>
                  ) : null}
                  <br />
                  <Field
                    as={IonInput}
                    className={`${
                      touched.password && errors.password ? "input-error" : ""
                    }`}
                    label="password"
                    type="password"
                    name="password"
                    placeholder="password"
                    labelPlacement="floating"
                    fill="outline"
                    value={values.password}
                    onIonChange={handleChange}
                    onIonBlur={handleBlur}
                  >
                    <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
                  </Field>
                  {errors.password && touched.password ? (
                    <>
                      <IonText color="danger">{errors.password}</IonText>
                      <br />
                    </>
                  ) : null}
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
                  <br />
                  {error && (
                    <div className="ion-text-center">
                      <IonText color="danger">{error}</IonText>
                    </div>
                  )}
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
                    Nemaš nalog?{" "}
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
                </Form>
              )}
            </Formik>
          </IonCardContent>
        </IonCard>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Uspešno ste se prijavili!"
          duration={5000}
          color={"success"}
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;

import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import {
  LoginPage,
  RegistrationPage,
  CreateProfile,
  ForgottenPassword,
  LandingPage,
} from "./pages";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";
import ProtectedRoute from "./components/ProtectedRoute";
import Tabs from "./components/Tabs";

setupIonicReact();

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Redirect exact path="/" to="/login" />
        <Route path="/registration" exact>
          <RegistrationPage />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/forgotten-password" exact>
          <ForgottenPassword />
        </Route>
        <ProtectedRoute path="/landing-page" exact>
          <LandingPage />
        </ProtectedRoute>
        <ProtectedRoute path="/create-profile" exact>
          <CreateProfile />
        </ProtectedRoute>
        <ProtectedRoute path="/tabs">
          <Tabs />
        </ProtectedRoute>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

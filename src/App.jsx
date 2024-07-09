import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonAvatar,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import {
  AnalyticsPage,
  ProfilePage,
  PainPage,
  LoginPage,
  RegistrationPage,
  HistoryPage,
  CreateProfile,
  ForgottenPassword,
  LandingPage,
} from "./pages";

import { analyticsOutline, bookOutline, medkitOutline } from "ionicons/icons";
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

setupIonicReact();

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Redirect exact path="/" to="/login" />
        <Route path="/registration" component={RegistrationPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/forgotten-password" component={ForgottenPassword} />
        <ProtectedRoute path="/landing-page" component={LandingPage} />
        <ProtectedRoute path="/create-profile" component={CreateProfile} />

        <IonTabs>
          <IonRouterOutlet>
            <ProtectedRoute path="/history" component={HistoryPage} />
            <ProtectedRoute path="/pain" component={PainPage} />
            <ProtectedRoute path="/analytics" component={AnalyticsPage} />
            <ProtectedRoute path="/profile" component={ProfilePage} />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="history" href="/history">
              <IonIcon icon={bookOutline} />
              <IonLabel>Istorija</IonLabel>
            </IonTabButton>
            <IonTabButton tab="pain" href="/pain">
              <IonIcon icon={medkitOutline} />
              <IonLabel>Dodaj bol</IonLabel>
            </IonTabButton>
            <IonTabButton tab="analytics" href="/analytics">
              <IonIcon icon={analyticsOutline} />
              <IonLabel>Analitika</IonLabel>
            </IonTabButton>
            <IonTabButton tab="profile" href="/profile">
              <IonAvatar style={{ width: "30px", height: "30px" }}>
                <img src="https://ionicframework.com/docs/img/demos/avatar.svg" />
              </IonAvatar>
              <IonLabel>Profil</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

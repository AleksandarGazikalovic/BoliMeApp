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
} from "./pages";

import { analyticsOutline, medkitOutline } from "ionicons/icons";
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
import LandingPage from "./pages/LandingPage";
import CreateProfile from "./pages/CreateProfile";
import ForgottenPassword from "./pages/ForgottenPassword";

setupIonicReact();

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Redirect exact path="/" to="/login" />
        <Route
          path="/registration"
          render={() => <RegistrationPage />}
          exact={true}
        />
        <Route path="/login" render={() => <LoginPage />} exact={true} />
        <Route
          path="/forgotten-password"
          render={() => <ForgottenPassword />}
          exact={true}
        />
        <Route
          path="/landing-page"
          render={() => <LandingPage />}
          exact={true}
        />
        <Route
          path="/create-profile"
          render={() => <CreateProfile />}
          exact={true}
        />
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/pain" render={() => <PainPage />} exact={true} />
            <Route
              path="/analytics"
              render={() => <AnalyticsPage />}
              exact={true}
            />
            <Route
              path="/profile"
              render={() => <ProfilePage />}
              exact={true}
            />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
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

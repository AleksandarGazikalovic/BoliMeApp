import {
  IonAvatar,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { analyticsOutline, bookOutline, medkitOutline } from "ionicons/icons";
import React from "react";
import { AnalyticsPage, HistoryPage, PainPage, ProfilePage } from "../pages";
import ProtectedRoute from "./ProtectedRoute";
import { Redirect, Route } from "react-router";

const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/tabs" to="/tabs/history" />
        <Route path="/tabs/history" exact>
          <HistoryPage />
        </Route>
        <Route exact path="/tabs/pain">
          <PainPage />
        </Route>
        <Route path="/tabs/analytics" exact>
          <AnalyticsPage />
        </Route>
        <Route path="/tabs/profile" exact>
          <ProfilePage />
        </Route>
        <Route exact path="/tabs">
          <Redirect to="/tabs/history" />
        </Route>
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="history" href="/tabs/history">
          <IonIcon icon={bookOutline} />
          <IonLabel>Istorija</IonLabel>
        </IonTabButton>
        <IonTabButton tab="pain" href="/tabs/pain">
          <IonIcon icon={medkitOutline} />
          <IonLabel>Dodaj bol</IonLabel>
        </IonTabButton>
        <IonTabButton tab="analytics" href="/tabs/analytics">
          <IonIcon icon={analyticsOutline} />
          <IonLabel>Analitika</IonLabel>
        </IonTabButton>
        <IonTabButton tab="profile" href="/tabs/profile">
          <IonAvatar style={{ width: "30px", height: "30px" }}>
            <img src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>
          <IonLabel>Profil</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;

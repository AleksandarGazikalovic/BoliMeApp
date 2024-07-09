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
import { Redirect } from "react-router";

const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/tabs" to="/tabs/history" />
        <ProtectedRoute path="/tabs/history" exact>
          <HistoryPage />
        </ProtectedRoute>
        <ProtectedRoute exact path="/tabs/pain">
          <PainPage />
        </ProtectedRoute>
        <ProtectedRoute path="/tabs/analytics" exact>
          <AnalyticsPage />
        </ProtectedRoute>
        <ProtectedRoute path="/tabs/profile" exact>
          <ProfilePage />
        </ProtectedRoute>
        <ProtectedRoute exact path="/tabs">
          <Redirect to="/tabs/history" />
        </ProtectedRoute>
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

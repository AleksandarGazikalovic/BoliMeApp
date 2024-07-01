import { IonAvatar, IonRippleEffect } from "@ionic/react";
import React from "react";
import PropTypes from "prop-types";
import "./DefaultAvatar.css";

const DefaultAvatar = ({ name, text }) => {
  const getDefaultAvatar = () => {
    return name?.charAt(0).toUpperCase();
  };

  const avatarLetter = getDefaultAvatar();

  return (
    <>
      <IonAvatar className="avatar ion-activatable">
        <span className="avatar-letter">{avatarLetter}</span>
        <IonRippleEffect></IonRippleEffect>
      </IonAvatar>
      <p className="avatar-text">{text}</p>
    </>
  );
};

DefaultAvatar.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default DefaultAvatar;

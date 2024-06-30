import { IonAvatar, IonRippleEffect } from "@ionic/react";
import React from "react";
import PropTypes from "prop-types";
import "./DefaultAvatar.css";

const DefaultAvatar = ({ name, text }) => {
  console.log(name, text);
  const getDefaultAvatar = () => {
    return name?.charAt(0).toUpperCase();
  };
  return (
    <>
      <IonAvatar className="avatar ion-activatable">
        <span>{getDefaultAvatar()}</span>
        <IonRippleEffect></IonRippleEffect>
      </IonAvatar>
      <p>{text}</p>
    </>
  );
};

DefaultAvatar.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
};

export default DefaultAvatar;

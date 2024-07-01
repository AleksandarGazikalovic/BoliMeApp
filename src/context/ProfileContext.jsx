import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  return useContext(ProfileContext);
};

ProfileProvider.propTypes = {
  children: PropTypes.node,
};

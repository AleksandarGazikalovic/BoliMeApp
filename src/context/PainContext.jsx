// PainContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import painService from "../services/painService";
import { useProfile } from "./ProfileContext";
import PropTypes from "prop-types";
import { useAuth } from "./AuthContext";

const PainContext = createContext();

export const PainProvider = ({ children }) => {
  const { profile } = useProfile();
  const [pains, setPains] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { getToken } = useAuth();

  const loadPains = () => {
    try {
      if (profile?.profileId) {
        setIsLoading(true);
        painService
          .getPainsByProfileId(profile.profileId, getToken())
          .then((data) => {
            setPains(data);
            setIsLoading(false);
          });
      }
    } catch (error) {
      console.error("Error loading pains: ", error);
    }
  };

  useEffect(() => {
    loadPains();
  }, [profile]);

  return (
    <PainContext.Provider value={{ pains, loadPains, isLoading }}>
      {children}
    </PainContext.Provider>
  );
};

PainProvider.propTypes = {
  children: PropTypes.node,
};

export const usePains = () => {
  return useContext(PainContext);
};

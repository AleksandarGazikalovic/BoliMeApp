// PainContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import painService from "../services/painService";
import { useProfile } from "./ProfileContext";
import PropTypes from "prop-types";

const PainContext = createContext();

export const PainProvider = ({ children }) => {
  const { profile } = useProfile();
  const [pains, setPains] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadPains = () => {
    if (profile?.profileId) {
      setIsLoading(true);
      painService.getPainsByProfileId(profile.profileId).then((data) => {
        setPains(data);
        setIsLoading(false);
      });
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

import React, { createContext, useContext, useState, useCallback } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { firebaseConfig } from "../components/FirebaseConfig";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const isUserAuthenticated = user ? !!user.token : false;

  const logIn = useCallback(async (userData) => {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`,
      {
        email: userData.email,
        password: userData.password,
        returnSecureToken: true,
      }
    );

    const expirationTime = new Date(
      new Date().getTime() + +response.data.expiresIn * 1000
    );
    const loggedInUser = {
      id: response.data.localId,
      email: response.data.email,
      token: response.data.idToken,
      expirationTime,
    };
    setUser(loggedInUser);
  }, []);

  const register = useCallback(async (userData) => {
    await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseConfig.apiKey}`,
      {
        email: userData.email,
        password: userData.password,
        returnSecureToken: true,
      }
    );
  }, []);

  const logOut = useCallback(() => {
    setUser(null);
  }, []);

  const getToken = () => user?.token;

  const getUserId = () => user?.id;

  return (
    <AuthContext.Provider
      value={{
        isUserAuthenticated,
        logIn,
        register,
        logOut,
        getToken,
        getUserId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export const useAuth = () => useContext(AuthContext);

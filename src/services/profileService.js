import axios from "axios"; // Make sure to install axios: npm install axios
import { firebaseConfig } from "../components/FirebaseConfig";

const profileService = {
  createProfile: async (userId, profileData, token) => {
    try {
      const response = await axios.post(
        `${firebaseConfig.databaseURL}/profiles.json?auth=${token}`,
        {
          userId,
          ...profileData,
        }
      );
      return response.data.name; // Assuming Firebase RTDB returns `name` as the unique ID
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  },

  getProfileById: async (profileId, token) => {
    try {
      const response = await axios.get(
        `${firebaseConfig.databaseURL}/profiles/${profileId}.json?auth=${token}`
      );
      return response.data;
    } catch (error) {
      console.error("Error getting document: ", error);
    }
  },

  updateProfile: async (profileId, profileData, token) => {
    try {
      await axios.put(
        `${firebaseConfig.databaseURL}/profiles/${profileId}.json?auth=${token}`,
        profileData
      );
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  },

  deleteProfile: async (profileId, token) => {
    try {
      await axios.delete(
        `${firebaseConfig.databaseURL}/profiles/${profileId}.json?auth=${token}`
      );
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  },

  getProfilesByUserId: async (userId, token) => {
    try {
      const response = await axios.get(
        `${firebaseConfig.databaseURL}/profiles.json?auth=${token}&orderBy="userId"&equalTo="${userId}"`
      );
      const profiles = [];
      for (let key in response.data) {
        profiles.push({ profileId: key, ...response.data[key] });
      }
      return profiles;
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  },
};

export default profileService;

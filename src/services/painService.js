import axios from "axios";
import { firebaseConfig } from "../components/FirebaseConfig";

const painService = {
  createPain: async (profileId, painData, token) => {
    try {
      const response = await axios.post(
        `${firebaseConfig.databaseURL}/pains.json?auth=${token}`,
        {
          profileId,
          ...painData,
        }
      );
      return response.data.name;
    } catch (error) {
      console.error("Error adding pain: ", error);
    }
  },

  getPainById: async (painId, token) => {
    try {
      const response = await axios.get(
        `${firebaseConfig.databaseURL}/pains/${painId}.json?auth=${token}`
      );
      return response.data;
    } catch (error) {
      console.error("Error getting pain: ", error);
    }
  },

  updatePain: async (painId, painData, token) => {
    try {
      await axios.put(
        `${firebaseConfig.databaseURL}/pains/${painId}.json?auth=${token}`,
        painData
      );
    } catch (error) {
      console.error("Error updating pain: ", error);
    }
  },

  deletePain: async (painId, token) => {
    try {
      await axios.delete(
        `${firebaseConfig.databaseURL}/pains/${painId}.json?auth=${token}`
      );
    } catch (error) {
      console.error("Error deleting pain: ", error);
    }
  },

  getPainsByProfileId: async (profileId, token) => {
    const response = await axios.get(
      `${firebaseConfig.databaseURL}/pains.json?auth=${token}&orderBy="profileId"&equalTo="${profileId}"`
    );
    const pains = [];
    for (let key in response.data) {
      pains.push({ painId: key, ...response.data[key] });
    }
    return pains;
  },
};

export default painService;

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { firestore } from "../components/FirebaseConfig";

const painService = {
  createPain: async (profileId, painData) => {
    try {
      console.log("painData", painData);
      const docRef = await addDoc(collection(firestore, "pain"), {
        profileId,
        ...painData,
      });
      return docRef.id;
    } catch (error) {
      console.error("Error adding pain: ", error);
    }
  },
  getPainById: async (painId) => {
    try {
      const docRef = await getDoc(doc(firestore, "pain", painId));
      if (docRef.exists()) {
        return docRef.data();
      } else {
        console.error("No such pain!");
      }
    } catch (error) {
      console.error("Error getting pain: ", error);
    }
  },
  updatePain: async (painId, painData) => {
    try {
      await setDoc(doc(firestore, "pain", painId), painData);
    } catch (error) {
      console.error("Error updating pain: ", error);
    }
  },
  deletePain: async (painId) => {
    try {
      await deleteDoc(doc(firestore, "pain", painId));
    } catch (error) {
      console.error("Error deleting pain: ", error);
    }
  },

  getPainsByProfileId: async (profileId) => {
    try {
      const querySnapshot = await getDocs(
        query(
          collection(firestore, "pain"),
          where("profileId", "==", profileId)
        )
      );
      const pains = [];
      querySnapshot.forEach((doc) => {
        pains.push({ profileId: doc.id, ...doc.data() });
      });
      return pains;
    } catch (error) {
      console.error("Error getting pains: ", error);
    }
  },
};

export default painService;

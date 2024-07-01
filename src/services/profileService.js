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

const profileService = {
  createProfile: async (userId, profileData) => {
    try {
      const docRef = await addDoc(collection(firestore, "profiles"), {
        userId,
        ...profileData,
      });
      return docRef.id;
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  },
  getProfileById: async (profileId) => {
    try {
      const docRef = await getDoc(doc(firestore, "profiles", profileId));
      if (docRef.exists()) {
        return docRef.data();
      } else {
        console.error("No such document!");
      }
    } catch (error) {
      console.error("Error getting document: ", error);
    }
  },
  updateProfile: async (profileId, profileData) => {
    try {
      await setDoc(doc(firestore, "profiles", profileId), profileData);
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  },
  deleteProfile: async (profileId) => {
    try {
      await deleteDoc(doc(firestore, "profiles", profileId));
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  },
  
  getProfilesByUserId: async (userId) => {
    try {
      const querySnapshot = await getDocs(
        query(collection(firestore, "profiles"), where("userId", "==", userId))
      );
      const profiles = [];
      querySnapshot.forEach((doc) => {
        profiles.push(doc.data());
      });
      return profiles;
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  },


  

};



  

export default profileService;

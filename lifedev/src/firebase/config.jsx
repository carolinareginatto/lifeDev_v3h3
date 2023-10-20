
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANv5GfIbvxiRChiRIEUjVAbAJGRLh5ERI",
  authDomain: "lifedevreginatto.firebaseapp.com",
  projectId: "lifedevreginatto",
  storageBucket: "lifedevreginatto.appspot.com",
  messagingSenderId: "634043716240",
  appId: "1:634043716240:web:c17e5b9b245b333e68fe15",
  measurementId: "G-345ZJZ86E4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnbS_fbpvpYmJcajXkKqFCFTm7HLPlS98",
  authDomain: "greninja-filedump.firebaseapp.com",
  projectId: "greninja-filedump",
  storageBucket: "greninja-filedump.appspot.com",
  messagingSenderId: "638145294017",
  appId: "1:638145294017:web:9af9f3b3702f71a8aeee40",
  measurementId: "G-JM1DFLR076",
};

// Initialize Firebase

  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);


export default storage;

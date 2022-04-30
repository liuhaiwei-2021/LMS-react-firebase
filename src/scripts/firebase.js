// NPM package
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// Properties
const firebaseConfig = {
	apiKey: "AIzaSyAgJodKvgoWI7oOZ8rJplCfQ-K0J4cwt40",
	authDomain: "lms-react-firebase.firebaseapp.com",
	projectId: "lms-react-firebase",
	storageBucket: "lms-react-firebase.appspot.com",
	messagingSenderId: "293324833429",
	appId: "1:293324833429:web:1b42e387183f2329ba119c",
};

const app = initializeApp(firebaseConfig);
export const fireStore = getFirestore(app);
export const cloudStorage = getStorage(app);
export const authentification = getAuth(app);

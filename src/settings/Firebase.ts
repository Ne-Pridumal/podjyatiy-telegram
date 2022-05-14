import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: "AIzaSyC3jNMBrMpHNVrpjRP6kL7ZMtbo2pCITCE",
	authDomain: "podjiyatiy-telegram.firebaseapp.com",
	projectId: "podjiyatiy-telegram",
	storageBucket: "podjiyatiy-telegram.appspot.com",
	messagingSenderId: "23727672595",
	appId: "1:23727672595:web:fec35a739cadf6d60a9ee6",
	measurementId: "G-HPT1CHJVGZ"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
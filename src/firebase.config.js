import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBsMSdePxjuE66ou0oK7AROI4lTH4WKAC4",
    authDomain: "stuffed-56204.firebaseapp.com",
    databaseURL: "https://stuffed-56204-default-rtdb.firebaseio.com",
    projectId: "stuffed-56204",
    storageBucket: "stuffed-56204.appspot.com",
    messagingSenderId: "792843474148",
    appId: "1:792843474148:web:bd1ea97ab5fd18561a08f1",
    measurementId: "G-B4FYTG1T8F"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };

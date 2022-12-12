import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFhPTczYXuJZuc01WfOjxH_4jh5Q29iK0",
    authDomain: "proyect-react-ecom-92f63.firebaseapp.com",
    projectId: "proyect-react-ecom-92f63",
    storageBucket: "proyect-react-ecom-92f63.appspot.com",
    messagingSenderId: "876280492233",
    appId: "1:876280492233:web:a592fcfd8340354c289d18"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default db;
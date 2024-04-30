import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCWeDXSR3BnY_ahVxNIsTHD9SQEkafoTbM",
    authDomain: "heychamp-7c19f.firebaseapp.com",
    projectId: "heychamp-7c19f",
    storageBucket: "heychamp-7c19f.appspot.com",
    messagingSenderId: "975745030970",
    appId: "1:975745030970:web:bee8a66075750926838e03"
  };

  const app = initializeApp(firebaseConfig);
  console.log(app)

  const auth = getAuth(app);
  const db = getFirestore(app)

  console.log(db)

  export{auth,db};
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBdRHoV27dYq5k3_BTmB2IGTZ382Q0Q1pw",
  authDomain: "netflix-clone-4dd78.firebaseapp.com",
  projectId: "netflix-clone-4dd78",
  storageBucket: "netflix-clone-4dd78.appspot.com",
  messagingSenderId: "352207763302",
  appId: "1:352207763302:web:51e574ff0fae8c1095faa7"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export{ auth };
export default db;
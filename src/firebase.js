import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDgaf_5FXs-zhPM2i-3Wsmcap1zD2HD1cY",
    authDomain: "react-redux-blog-app-cd88b.firebaseapp.com",
    projectId: "react-redux-blog-app-cd88b",
    storageBucket: "react-redux-blog-app-cd88b.appspot.com",
    messagingSenderId: "177719413289",
    appId: "1:177719413289:web:4cd854ebaa48b679de2a38"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };
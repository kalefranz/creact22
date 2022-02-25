import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyAjuy2bufE8MubxsVo8NWnM5zGKOWRBQYI',
  authDomain: 'creact22-db.firebaseapp.com',
  projectId: 'creact22-db',
  storageBucket: 'creact22-db.appspot.com',
  messagingSenderId: '76711726232',
  appId: '1:76711726232:web:48023516b9ce3c5f9bd4ed',
  measurementId: 'G-4HKMC0LRFK',
};

const app = firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

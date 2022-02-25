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


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (snapShot.exists) return userRef;

  const { displayName, email } = userAuth;
  const createdAt = new Date();

  try {
    await userRef.set({
      displayName,
      email,
      createdAt,
      ...additionalData,
    });
  } catch (error) {
    console.error('error when user created', error.message);
  }

  return userRef;
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyAJI1L5xmVwy6fZeysU7NARdDK95y2G7jA',
  authDomain: 'crown-store-4b823.firebaseapp.com',
  projectId: 'crown-store-4b823',
  storageBucket: 'crown-store-4b823.appspot.com',
  messagingSenderId: '430922448667',
  appId: '1:430922448667:web:a42931a2a7fc8846f41dbe',
  measurementId: 'G-5CNEBK0HFT',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
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
      console.log(error);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

import { initializeApp } from "firebase/app";

import {
  signOut,
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  writeBatch,
  collection,
  query,
  getDocs,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv03FFWAhgvXMvvd2iI5raJUeisxkVvgE",
  authDomain: "crwn-clothes-project-5f538.firebaseapp.com",
  projectId: "crwn-clothes-project-5f538",
  storageBucket: "crwn-clothes-project-5f538.appspot.com",
  messagingSenderId: "108534356250",
  appId: "1:108534356250:web:2a516f754d0bc93bb434a3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize authentication
const auth = getAuth(app);

//google provider
const googleProvider = new GoogleAuthProvider();

//create firestore connection
const db = getFirestore(app);

/**
 * Creates user from object, Object has to have displayName, email and uid
 * @param {Object} user - has to have displayName, email and uid - all String values
 */
const createUser = async (user) => {
  const { email, displayName, uid } = user;
  const userRef = await doc(db, "users", uid);
  const userData = await getDoc(userRef);
  if (!userData.exists()) {
    await setDoc(userRef, {
      displayName,
      email,
      uid,
    });
  }
};

// creating user

export { createUser, createUserWithEmailAndPassword };

export const createUserWithEmailAndPasswordBinded =
  createUserWithEmailAndPassword.bind(null, auth);

// signing in

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithEmailAndPasswordBinded = signInWithEmailAndPassword.bind(
  null,
  auth
);

export const singUserOut = () => {
  signOut(auth);
};

export const onAuthUserStateChanged = (callback, error) =>
  onAuthStateChanged(auth, callback, error);


export const addDocumentOrder = async (objectsToAdd, user) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, "orders");

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, user.uid);
    batch.set(docRef, object);
  });

  await batch.commit();
};

export const addOrder = (order, user) => {
  return addDocumentOrder(order, user);
};

export const getCollections = async () => {
  const collectionRef = collection(db, "collections");
  const q = query(collectionRef); //this will add all

  const querySnapshoot = await getDocs(q);
  const collections = querySnapshoot.docs.reduce((acc, el) => {    
     acc[el.id.toLowerCase()] = el.data().items;
     return acc;
  },{})
  return collections;
}
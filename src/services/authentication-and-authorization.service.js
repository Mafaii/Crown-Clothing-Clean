import {
  createUser,
  signInWithGooglePopup,
  signInWithEmailAndPasswordBinded,
  createUserWithEmailAndPasswordBinded,
  getCollections,
} from "../utils/firebase/firebase.utils";



const authenticateAndCreateOrSigninUserGoogle = async () => {
  const results = await signInWithGooglePopup();
  await createUser(results.user);
  return results;
};

const authenticateAndCreateUserEmail = async (email, password, displayName) => {
  const user = await createUserWithEmailAndPasswordBinded(email, password);
  user.user.displayName = displayName;
  await createUser(user.user);
  return user;
};

const signInUserWithEmailAndPassword = async (email, password) => {
  return signInWithEmailAndPasswordBinded(email, password);
};

const getProducts = () => {
  return getCollections();
}
export {
  authenticateAndCreateUserEmail,
  getProducts,
  signInUserWithEmailAndPassword,
  authenticateAndCreateOrSigninUserGoogle,
};

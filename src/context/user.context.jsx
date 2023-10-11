import { createContext, useEffect, useState } from "react";
import { onAuthUserStateChanged } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };


  useEffect( ()=> {
     onAuthUserStateChanged( (user)=> {   
      setCurrentUser(user);      
    }, (er)=> {
      console.log(er);
    })
  },[]) //so it will run only once


  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

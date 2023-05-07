import React, { useState } from "react";
import { ChildComponent } from "../Interfaces/Interfaces";

const authContext = React.createContext({
  isAuth: false,
  setIsAuth: (_: boolean) => {},
});

export const AuthContextProvider = (props: ChildComponent) => {
  const [isAuth, setIsAuth] = useState(false);
  const changeAuth = (authStatus: boolean) => {
    setIsAuth(authStatus);
  };

  return (
    <authContext.Provider
      value={{
        isAuth: isAuth,
        setIsAuth: changeAuth,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default authContext;



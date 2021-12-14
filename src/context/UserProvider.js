import React from "react";
import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
  const st = {
    msg: "sdcsdc",
  };
  return (
    <UserContext.Provider value={st}>
      <>{children}</>
    </UserContext.Provider>
  );
};

export default UserProvider;

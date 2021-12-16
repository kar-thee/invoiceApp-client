import React from "react";

import stateContext from "./stateContext";
import dispatchContext from "./dispatchContext";

import useStore from "../hooks/useStore";

const UserProvider = ({ children }) => {
  const [state, dispatch] = useStore();

  return (
    <dispatchContext.Provider value={dispatch}>
      <stateContext.Provider value={state}>
        <>{children}</>
      </stateContext.Provider>
    </dispatchContext.Provider>
  );
};

export default UserProvider;

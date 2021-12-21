import { useReducer, useEffect } from "react";

import ReducerFunction from "./ReducerFunction";
import initialValues from "./InitialValues";

const useStore = () => {
  const [state, dispatch] = useReducer(ReducerFunction, initialValues, () => {
    //intialising states if present in localstorage
    const userToken = JSON.parse(localStorage.getItem("TOKEN"));
    const userRole = JSON.parse(localStorage.getItem("ROLE"));
    const idVerified = JSON.parse(localStorage.getItem("IDVERIFIED"));

    return userToken && userRole
      ? {
          ...initialValues,
          token: userToken || null,
          role: userRole || null,
          idVerified: idVerified || null,
        }
      : initialValues;
  });

  useEffect(() => {
    localStorage.setItem("TOKEN", JSON.stringify(state.token));
    localStorage.setItem("ROLE", JSON.stringify(state.role));
    localStorage.setItem("IDVERIFIED", JSON.stringify(state.idVerified));
  }, [state.token, state.role, state.idVerified]);

  return [state, dispatch];
};
export default useStore;

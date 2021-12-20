import { ADMIN } from "../helpers/UserRoles";

const ReducerFunction = (state, actionObj) => {
  switch (actionObj.type) {
    case "signup":
      return {
        ...state,
        token: actionObj.payload.token,
        // userObj: actionObj.payload.userObj,
        role: actionObj.payload.role || ADMIN,
      };

    case "signin":
      return {
        ...state,
        token: actionObj.payload.token,
        userObj: actionObj.payload.userObj,
        role: actionObj.payload.role || ADMIN,
        idVerified: actionObj.payload.idVerified,
      };
    case "accountVerification":
      return {
        ...state,
        idVerified: true,
      };

    case "signout":
      return {
        ...state,
        token: null,
        userObj: null,
        role: null,
      };

    case "sidebarToggle":
      return {
        ...state,
        sidebar: !state.sidebar,
      };

    case "loadingStart":
      return { ...state, loading: true };

    case "loadingStop":
      return { ...state, loading: false };

    case "success":
      return { ...state, loading: false, success: true };

    case "error":
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};

export default ReducerFunction;

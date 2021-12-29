import useStatesFunc from "./useStatesFunc";
import { roleArray } from "../helpers/UserRoles";

const useUserFunc = () => {
  const [{ token, role }] = useStatesFunc();

  const checkAuth = () => {
    return token && role ? true : false;
  };

  const getRole = () => {
    const rolesArray = roleArray();
    if (role) {
      return role ? rolesArray.find((rolesItem) => rolesItem === role) : "";
    } else {
      return null;
    }
  };

  const checkUserAccess = (validUserArray) => {
    if (role) {
      const isPresent = validUserArray.find(
        (eachRoleItem) => eachRoleItem === role
      );
      return isPresent ? true : false;
    } else {
      return false;
    }
  };

  return [checkAuth, getRole, checkUserAccess];
};

export default useUserFunc;

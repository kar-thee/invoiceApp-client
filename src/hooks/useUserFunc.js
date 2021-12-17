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

  return [checkAuth, getRole];
};

export default useUserFunc;

import useUserFunc from "../hooks/useUserFunc";

const Protected = ({ children, redirect }) => {
  const [checkAuth] = useUserFunc();

  return checkAuth() ? children : redirect;
};

export default Protected;

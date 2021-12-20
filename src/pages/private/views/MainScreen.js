import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import useUserFunc from "../../../hooks/useUserFunc";
import useDispatchFunc from "../../../hooks/useDispatchFunc";

import { ADMIN, MANAGER, EMPLOYEE, CUSTOMER } from "../../../helpers/UserRoles";

import AdminScreen from "../components/Admin/AdminScreen";
import ManagerScreen from "../components/Manager/ManagerScreen";
import EmployeeScreen from "../components/Employee/EmployeeScreen";
import CustomerScreen from "../components/Customer/CustomerScreen";

const MainScreen = () => {
  const navigate = useNavigate();
  const [dispatch] = useDispatchFunc();
  const [, getRole] = useUserFunc();

  const role = getRole();

  if (!role) {
    dispatch({ type: "signout" });
    navigate("/user/signin");
    toast.error("Role is not Recognised, signIn again");
  }

  return (
    <>
      {role === ADMIN && <AdminScreen />}
      {role === MANAGER && <ManagerScreen />}
      {role === EMPLOYEE && <EmployeeScreen />}
      {role === CUSTOMER && <CustomerScreen />}
    </>
  );
};

export default MainScreen;

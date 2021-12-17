import React from "react";
import { useNavigate } from "react-router-dom";
import useUserFunc from "../../../hooks/useUserFunc";

import useDispatchFunc from "../../../hooks/useDispatchFunc";
import { toast } from "react-toastify";

import { ADMIN, MANAGER, EMPLOYEE, CUSTOMER } from "../../../helpers/UserRoles";
import AdminBoard from "./AdminBoard";
import ManagerBoard from "./ManagerBoard";
import EmployeeBoard from "./EmployeeBoard";
import CustomerBoard from "./CustomerBoard";

const Dashboard = () => {
  const [, getRole] = useUserFunc();
  const role = getRole();
  const [dispatch] = useDispatchFunc();
  const navigate = useNavigate();

  if (!role) {
    dispatch({ type: "signout" });
    navigate("/user/signin");
    toast.error("Role is not Recognised, signIn again");
  }

  return (
    <div>
      <div>Dashboard</div>
      {role === ADMIN && <AdminBoard role={role} />}
      {role === MANAGER && <ManagerBoard role={role} />}
      {role === EMPLOYEE && <EmployeeBoard role={role} />}
      {role === CUSTOMER && <CustomerBoard role={role} />}
    </div>
  );
};

export default Dashboard;

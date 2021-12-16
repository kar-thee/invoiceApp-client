import React from "react";
import { useNavigate } from "react-router-dom";
import useUserFunc from "../../../hooks/useUserFunc";

import useDispatchFunc from "../../../hooks/useDispatchFunc";
import { toast } from "react-toastify";

import { ADMIN, MANAGER, USER, EMPLOYEE } from "../../../helpers/UserRoles";

const Dashboard = () => {
  const [, getRole] = useUserFunc();
  const role = getRole()[0];
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
      {role === ADMIN && <>Welcome {ADMIN}</>}
      {role === MANAGER && <>Welcome {MANAGER}</>}
      {role === EMPLOYEE && <>Welcome {EMPLOYEE}</>}
      {role === USER && <>Welcome {USER}</>}
    </div>
  );
};

export default Dashboard;

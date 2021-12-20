import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useUserFunc from "../../../hooks/useUserFunc";

import useDispatchFunc from "../../../hooks/useDispatchFunc";
import { toast } from "react-toastify";

import { ADMIN, MANAGER, EMPLOYEE, CUSTOMER } from "../../../helpers/UserRoles";

import AdminSidebar from "../components/Admin/AdminSidebar";
import ManagerSidebar from "../components/Manager/ManagerSidebar";
import EmployeeSidebar from "../components/Employee/EmployeeSidebar";
import CustomerSidebar from "../components/Customer/CustomerSidebar";

const Dashboard = () => {
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
      <div className="container-fluid">
        <div className="row">
          {/* this is sidebar */}
          {role === ADMIN && <AdminSidebar />}
          {role === MANAGER && <ManagerSidebar />}
          {role === EMPLOYEE && <EmployeeSidebar />}
          {role === CUSTOMER && <CustomerSidebar />}

          {/* this is mainscreen */}
          <div
            className="col container-fluid border shadow"
            style={{ height: "100vh" }}
          >
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

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
import useStatesFunc from "../../../hooks/useStatesFunc";

const Dashboard = () => {
  const navigate = useNavigate();
  const [dispatch] = useDispatchFunc();
  const [, getRole] = useUserFunc();
  const [{ idVerified }] = useStatesFunc();
  const role = getRole();

  if (!role) {
    dispatch({ type: "signout" });
    navigate("/user/signin");
    toast.error("Role is not Recognised, signIn again");
  }

  if (!idVerified) {
    return (
      <>
        <div className="container h-100 w-100 p-5 d-flex justify-content-center m-5">
          <div className="row bg-warning p-5">
            <h1 className="col text-danger p-5">
              Please verify Your account , link sent in Your mail
            </h1>
          </div>
        </div>
      </>
    );
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
            style={{ minHeight: "100vh" }}
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

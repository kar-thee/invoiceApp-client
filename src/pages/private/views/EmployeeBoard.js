import React from "react";

import EmployeeScreen from "../components/Employee/EmployeeScreen";
import EmployeeSidebar from "../components/Employee/EmployeeSidebar";

const EmployeeBoard = ({ role }) => {
  return (
    <div>
      <h1>Welcome {role}</h1>
    </div>
  );
};

export default EmployeeBoard;

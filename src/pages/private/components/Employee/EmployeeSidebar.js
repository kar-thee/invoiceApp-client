import React from "react";

import SidebarTemplate from "../SidebarTemplate";
import EmployeeNavElements from "./EmployeeNavElements";

const EmployeeSidebar = () => {
  return (
    <>
      <SidebarTemplate navArray={EmployeeNavElements} />
    </>
  );
};

export default EmployeeSidebar;

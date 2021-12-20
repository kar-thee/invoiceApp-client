import React from "react";

import SidebarTemplate from "../SidebarTemplate";
import ManagerNavElements from "./ManagerNavElements";

const ManagerSidebar = () => {
  return (
    <>
      <SidebarTemplate navArray={ManagerNavElements} />
    </>
  );
};

export default ManagerSidebar;

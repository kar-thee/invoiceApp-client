import React from "react";

import SidebarTemplate from "../SidebarTemplate";
import AdminNavArray from "./AdminNavElements";

const AdminSidebar = () => {
  return (
    <>
      <SidebarTemplate navArray={AdminNavArray} />
    </>
  );
};

export default AdminSidebar;

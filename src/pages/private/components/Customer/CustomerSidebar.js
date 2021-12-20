import React from "react";

import SidebarTemplate from "../SidebarTemplate";
import CustomerNavArray from "./CustomerNavElements";

const CustomerSidebar = () => {
  return (
    <>
      <SidebarTemplate navArray={CustomerNavArray} />
    </>
  );
};

export default CustomerSidebar;

import React from "react";

import CustomerScreen from "../components/Customer/CustomerScreen";
import CustomerSidebar from "../components/Customer/CustomerSidebar";

const CustomerBoard = ({ role }) => {
  return (
    <div>
      <h1>Welcome {role}</h1>
    </div>
  );
};

export default CustomerBoard;

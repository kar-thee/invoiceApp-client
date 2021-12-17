import React from "react";

import ManagerScreen from "../components/Manager/ManagerScreen";
import ManagerSidebar from "../components/Manager/ManagerSidebar";

const ManagerBoard = ({ role }) => {
  return (
    <div>
      <h1>Welcome {role}</h1>
    </div>
  );
};

export default ManagerBoard;

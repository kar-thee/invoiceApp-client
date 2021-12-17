import React from "react";

import AdminScreen from "../components/Admin/AdminScreen";
import AdminSidebar from "../components/Admin/AdminSidebar";

const AdminBoard = ({ role }) => {
  return (
    <>
      <h1>Welcome {role}</h1>
      <div className="">
        <div className="row">
          <div
            className="col-4 col-md-2 bg-warning"
            style={{ height: "400px" }}
          >
            {/* this is sidebar */}
            <div className="bg-warning"></div>
          </div>
          <div className="col-8 col-md-10 bg-dark" style={{ height: "400px" }}>
            {/* this is mainscreen */}
            <div className="bg-dark"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminBoard;

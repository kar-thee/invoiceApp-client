import React from "react";

import useStatesFunc from "../../../hooks/useStatesFunc";

import AdminScreen from "../components/Admin/AdminScreen";
import AdminSidebar from "../components/Admin/AdminSidebar";

const AdminBoard = ({ role }) => {
  const [{ sidebar }] = useStatesFunc();
  return (
    <>
      <h1>Welcome {role}</h1>
      <div className="container-fluid">
        <div className="row">
          {/* this is sidebar */}
          <div
            className={sidebar ? "col-3 col-md-2 bg-warning" : "d-none"}
            style={{ height: "400px" }}
          >
            <div className="bg-warning"></div>
          </div>

          {/* this is mainscreen */}
          <div
            className="col  container-fluid bg-dark"
            style={{ height: "400px" }}
          >
            <div className=" bg-dark">
              <div className="">
                <div className="card">Hello</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminBoard;

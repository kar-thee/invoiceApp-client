import React from "react";
import { Link } from "react-router-dom";

const AccountActivationComponent = ({ isSuccess }) => {
  return (
    <div>
      <div className="p-1 m-2 p-lg-3 col-sm-8 col-md-9 col-lg-6 mx-sm-auto">
        <div className="text-center lead text-primary display-6">
          Account Activation {isSuccess ? " Completed" : "Rejected"}
        </div>
        <div className="p-3 mb-3 my-5 d-flex justify-content-end">
          <Link
            className="btn btn-outline-secondary rounded col-12 p-3"
            to="/user/signin"
          >
            SignIn to continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountActivationComponent;

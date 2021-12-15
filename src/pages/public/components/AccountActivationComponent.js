import React from "react";

const AccountActivationComponent = ({ isSuccess }) => {
  return (
    <div>
      <div className="p-1 m-2 p-lg-3 col-sm-8 col-md-9 col-lg-6 mx-sm-auto">
        <div className="text-center lead text-primary display-6">
          Account Activation {isSuccess ? " Completed" : "Rejected"}
        </div>
      </div>
    </div>
  );
};

export default AccountActivationComponent;

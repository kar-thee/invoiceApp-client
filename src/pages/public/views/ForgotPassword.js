import React from "react";
import * as yup from "yup";

import ForgotPwdComponent from "../components/ForgotPwdComponent";

const ForgotPassword = () => {
  const initialValues = {
    email: "",
  };

  const yupValidation = yup.object().shape({
    email: yup.string().email().required("Necessary"),
  });

  const submitForm = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="signup-background">
        <div className="container-sm row mx-auto">
          <div className="my-5 d-flex flex-column justify-content-center shadow">
            <div className="display-2 text-center p-3 text-danger">
              Forgot Password?
            </div>
            <div className="display-6 text-center p-3 text-success">
              Don't worry , we got you covered
            </div>
            <ForgotPwdComponent
              initialValues={initialValues}
              yupValidation={yupValidation}
              submitForm={submitForm}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;

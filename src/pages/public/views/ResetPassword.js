import React from "react";
import * as yup from "yup";

import ResetPwdComponent from "../components/ResetPwdComponent";

const ResetPassword = () => {
  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const yupValidation = yup.object().shape({
    password: yup
      .string()
      .required("Necessary")
      .min(8, "atleast 8 letters")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      ),
    confirmPassword: yup
      .string()
      .required("Necessary")
      .min(8, "do you think this is it?")
      .oneOf([yup.ref("password")], "Passwords are not same"),
  });

  const submitForm = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="signup-background">
        <div className="container-sm row mx-auto">
          <div className="my-5 d-flex flex-column justify-content-center shadow">
            <div className="display-2 text-center p-3">SignIn</div>
            <ResetPwdComponent
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

export default ResetPassword;

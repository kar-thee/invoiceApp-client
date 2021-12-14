import React from "react";
import * as yup from "yup";

import SignupComponent from "../components/SignupComponent";

const Signup = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const yupValidation = yup.object().shape({
    name: yup.string().required("Necessary").min("3", "atleast 3 letters"),
    email: yup.string().email().required("Necessary"),
    password: yup
      .string()
      .required("Necessary")
      .min(8, "atleast 8 letters")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      ),
  });

  const submitForm = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="signup-background">
        <div className="container-sm row mx-auto">
          <div className="my-5 d-flex flex-column justify-content-center shadow">
            <div className="display-2 text-center p-3">SignUp</div>
            <SignupComponent
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

export default Signup;

import React from "react";
import * as yup from "yup";
import { toast } from "react-toastify";

import SigninComponent from "../components/SigninComponent";
import SigninFunction from "../../../apis/public/auth/SigninFunction";

const Signin = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const yupValidation = yup.object().shape({
    email: yup.string().email().required("Necessary"),
    password: yup
      .string()
      .required("Necessary")
      .min(8, "atleast 8 letters")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "include number,special character and capital character"
      ),
  });

  const submitForm = async (values) => {
    console.log(values);
    const body = {
      email: values.email,
      password: values.password,
    };
    const { data } = await SigninFunction(body);

    if (data.type === "success") {
      toast.success(data.msg);
    } else {
      toast.error(data.msg);
    }
  };

  return (
    <>
      <div>
        <div className="container-sm row mx-auto">
          <div className="my-5 d-flex flex-column justify-content-center shadow signup-background">
            <div className="display-2 text-center p-3">SignIn</div>
            <SigninComponent
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

export default Signin;

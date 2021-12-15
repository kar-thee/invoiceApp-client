import React from "react";
import * as yup from "yup";

import SignupComponent from "../components/SignupComponent";
import SignupFunction from "../../../apis/public/auth/SignupFunction";

import { toast } from "react-toastify";

const Signup = () => {
  const initialFormValues = {
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
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "include number,special character and capital character"
      ),
  });

  const submitFormFunc = async (values) => {
    console.log(values);
    const body = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    const { data } = await SignupFunction(body);

    if (data.type === "success") {
      toast.success("Registered successfully");
    } else {
      toast.error(data.msg);
    }
  };

  return (
    <>
      <div>
        <div className="container-sm row mx-auto">
          <div className="my-5 d-flex flex-column justify-content-center shadow signup-background">
            <div className="display-2 text-center p-3">SignUp</div>
            <SignupComponent
              initialFormValues={initialFormValues}
              yupValidation={yupValidation}
              submitFormFunc={submitFormFunc}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

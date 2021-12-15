import React from "react";
import * as yup from "yup";
import { toast } from "react-toastify";

import ForgotPwdComponent from "../components/ForgotPwdComponent";
import ForgotPwdFunction from "../../../apis/public/auth/ForgotPwdFunction";

const ForgotPassword = () => {
  const initialValues = {
    email: "",
  };

  const yupValidation = yup.object().shape({
    email: yup.string().email().required("Necessary"),
  });

  const submitForm = async (values) => {
    console.log(values);
    const body = {
      emailId: values.email,
    };
    const { data } = await ForgotPwdFunction(body);

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

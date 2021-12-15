import React from "react";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import ResetPwdComponent from "../components/ResetPwdComponent";
import ResetPwdFunction from "../../../apis/public/auth/ResetPwdFunction.js";

const ResetPassword = () => {
  const { resetString } = useParams();

  const resetParamsFunc = () => {
    const dataArray = resetString.split("ihaveAmnesia");
    const resetCode = dataArray[0];
    const authToken = dataArray[1];
    return { resetCode, authToken };
  };

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
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "include number,special character and capital character"
      ),
    confirmPassword: yup
      .string()
      .required("Necessary")
      .min(8, "do you think this is it?")
      .oneOf([yup.ref("password")], "Passwords are not same"),
  });

  const submitForm = async (values) => {
    const { resetCode, authToken } = resetParamsFunc();
    const body = {
      newPassword: values.confirmPassword,
      resetCode,
    };
    const { data } = await ResetPwdFunction(body, authToken);

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
            <div className="display-2 text-center p-3 text-danger mb-2">
              Reset Password
            </div>
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

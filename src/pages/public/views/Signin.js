import React from "react";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import SigninComponent from "../components/SigninComponent";
import SigninFunction from "../../../apis/public/auth/SigninFunction";
import Loader from "../../../helpers/Loader";

import useStatesFunc from "../../../hooks/useStatesFunc";
import useDispatchFunc from "../../../hooks/useDispatchFunc";

const Signin = () => {
  const [{ loading }] = useStatesFunc();
  const [dispatch] = useDispatchFunc();

  const navigate = useNavigate();

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
    dispatch({ type: "loadingStart" });
    const body = {
      email: values.email,
      password: values.password,
    };
    const { data } = await SigninFunction(body);
    dispatch({ type: "loadingStop" });
    if (data.type === "success") {
      toast.success(data.msg);
      //save it to localStorage
      dispatch({
        type: "signin",
        payload: {
          token: data.token,
          role: data.role,
          idVerified: data.isVerified,
        },
      });
      navigate("/app/dashboard");
    } else {
      toast.error(data.msg);
    }
  };

  if (loading) {
    return <Loader />;
  }

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

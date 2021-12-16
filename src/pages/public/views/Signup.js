import React from "react";
import * as yup from "yup";

import SignupComponent from "../components/SignupComponent";
import SignupFunction from "../../../apis/public/auth/SignupFunction";
import Loader from "../../../helpers/Loader";

import useDispatchFunc from "../../../hooks/useDispatchFunc";
import useStatesFunc from "../../../hooks/useStatesFunc";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [dispatch] = useDispatchFunc();
  const [{ loading }] = useStatesFunc();

  const navigate = useNavigate();

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
    dispatch({ type: "loadingStart" });
    const body = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    const { data } = await SignupFunction(body);

    dispatch({ type: "loadingStop" });

    if (data.type === "success") {
      dispatch({
        type: "signup",
        payload: { token: data.token, role: data.role },
      });
      toast.success("Registered successfully");
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

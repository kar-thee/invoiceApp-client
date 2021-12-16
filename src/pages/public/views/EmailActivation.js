import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { toast } from "react-toastify";
import Loader from "../../../helpers/Loader";

import EmailActivationFunction from "../../../apis/public/auth/EmailActivationFunction";
import AccountActivationComponent from "../components/AccountActivationComponent";

import useStatesFunc from "../../../hooks/useStatesFunc";
import useDispatchFunc from "../../../hooks/useDispatchFunc";

const EmailActivation = () => {
  const [{ loading }] = useStatesFunc();
  const [dispatch] = useDispatchFunc();

  const { activationId } = useParams();
  const [isSuccess, setIsSuccess] = useState(null);

  useEffect(() => {
    const activate = async () => {
      dispatch({ type: "loadingStart" });
      const { data } = await EmailActivationFunction({ activationId });
      if (data.type === "success") {
        toast.success(data.msg);
        setIsSuccess(true);
        dispatch({ type: "signout" });
      } else {
        toast.warning(data.msg);
        setIsSuccess(false);
      }
      dispatch({ type: "loadingStop" });
    };
    activate();
  }, [activationId, dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div>
        <div className="container-sm row mx-auto my-5">
          <div className="my-5 d-flex flex-column justify-content-center shadow signup-background">
            <div className="p-2 m-2">
              <AccountActivationComponent isSuccess={isSuccess} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailActivation;

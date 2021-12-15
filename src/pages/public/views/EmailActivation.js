import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { toast } from "react-toastify";

import EmailActivationFunction from "../../../apis/public/auth/EmailActivationFunction";
import AccountActivationComponent from "../components/AccountActivationComponent";

const EmailActivation = () => {
  const { activationId } = useParams();
  const [isSuccess, setIsSuccess] = useState(null);

  useEffect(() => {
    const activate = async () => {
      const { data } = await EmailActivationFunction({ activationId });

      if (data.type === "success") {
        toast.success(data.msg);
        setIsSuccess(true);
      } else {
        toast.warning(data.msg);
        setIsSuccess(false);
      }
    };
    activate();
  }, [activationId]);

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

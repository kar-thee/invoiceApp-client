import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import useDispatchFunc from "../../../../hooks/useDispatchFunc";
import useStatesFunc from "../../../../hooks/useStatesFunc";
import useUserFunc from "../../../../hooks/useUserFunc";

import DeleteUserApi from "../../../../apis/private/User/DeleteUserApi";

import Loader from "../../../../helpers/Loader";

import NothingToShow from "../../Others/NothingToShow";
import { ADMIN } from "../../../../helpers/UserRoles";

const DeleteUser = () => {
  const [{ loading, token }] = useStatesFunc();
  const [dispatch] = useDispatchFunc();
  const { email } = useParams();
  const navigate = useNavigate();
  const [, , checkUserAccess] = useUserFunc();

  useEffect(() => {
    (async () => {
      dispatch({ type: "loadingStart" });
      const { data } = await DeleteUserApi(email, token);
      dispatch({ type: "loadingStop" });
      if (data.type === "success") {
        toast.success(data.msg);
      } else {
        toast.error(data.msg);
        navigate(-1);
      }
    })();
  }, [dispatch, email, navigate, token]);

  if (!checkUserAccess([ADMIN])) {
    toast.warning("You cant access this");
    return (
      <>
        <NothingToShow />
      </>
    );
  }

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <div>
      <button
        className="btn btn-info ms-auto"
        onClick={() => {
          navigate(-2);
        }}
      >
        Click to navigate
      </button>
      <div className="p-5 my-3 card bg-success d-flex justify-content-center">
        <h1 className="display-1 p-5">Successfully User Deleted...</h1>
      </div>
    </div>
  );
};

export default DeleteUser;

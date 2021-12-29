import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import useDispatchFunc from "../../../../hooks/useDispatchFunc";
import useStatesFunc from "../../../../hooks/useStatesFunc";

import DeleteProductApi from "../../../../apis/private/Product/DeleteProductApi";

import Loader from "../../../../helpers/Loader";

import { ADMIN } from "../../../../helpers/UserRoles";
import useUserFunc from "../../../../hooks/useUserFunc";
import NothingToShow from "../../Others/NothingToShow";

const DeleteProduct = () => {
  const [{ loading, token }] = useStatesFunc();
  const [dispatch] = useDispatchFunc();
  const { id } = useParams();
  const navigate = useNavigate();
  const [, , checkUserAccess] = useUserFunc();

  useEffect(() => {
    (async () => {
      dispatch({ type: "loadingStart" });
      const { data } = await DeleteProductApi(id, token);
      dispatch({ type: "loadingStop" });
      if (data.type === "success") {
        toast.success(data.msg);
      } else {
        toast.error(data.msg);
        navigate(-1);
      }
    })();
  }, [dispatch, id, navigate, token]);

  if (!checkUserAccess([ADMIN])) {
    toast.warning("You cant access");
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
        <h1 className="display-1 p-5">Successfully Product Deleted...</h1>
      </div>
    </div>
  );
};

export default DeleteProduct;

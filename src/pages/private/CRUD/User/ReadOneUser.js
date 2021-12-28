import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import Loader from "../../../../helpers/Loader";

import useDispatchFunc from "../../../../hooks/useDispatchFunc";
import useStatesFunc from "../../../../hooks/useStatesFunc";

import GetOneUserApi from "../../../../apis/private/User/GetOneUserApi";

const ReadOneUser = () => {
  const [state, setState] = useState();
  const [{ token, loading }] = useStatesFunc();
  const [dispatch] = useDispatchFunc();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      dispatch({ type: "loadingStart" });
      const { data } = await GetOneUserApi(id, token);
      dispatch({ type: "loadingStop" });
      if (data.type === "success") {
        toast.success(data.msg);
        setState(data.userFound);
      } else {
        toast.error(data.msg);
      }
    })();
  }, [dispatch, id, token]);

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  if (!state) {
    return (
      <>
        <div className="p-5 my-3 card bg-success d-flex justify-content-center">
          <h1 className="display-1 p-5">Nothing to Show You...</h1>
        </div>
      </>
    );
  }

  return (
    <div className="col my-3 p-2">
      <div className="p-md-5 card shadow py-2 my-2">
        <div>
          <table className="table signup-background fw-bold">
            <thead>
              <tr>
                <th>Name </th>
                <td>:</td>
                <td>{state && state.name}</td>
              </tr>
              <tr>
                <th>Email </th>
                <td>:</td>
                <td className="text-break">{state && state.email}</td>
              </tr>
              <tr>
                <th>Role </th>
                <td>:</td>
                <td>{state && state.role}</td>
              </tr>
              <tr>
                <th>Id Verified </th>
                <td>:</td>
                <td>{state && state.isVerified ? "true" : "false"}</td>
              </tr>
            </thead>
          </table>
        </div>
        <div>
          <div className="d-flex flex-column flex-md-row ms-auto justify-content-evenly align-content-center row p-md-5 py-2">
            <div className="col-6">
              <button
                className="btn btn-warning w-100 my-2"
                onClick={() => navigate(`/app/user/update/${id}`)}
              >
                Update
              </button>
            </div>
            <div className="col-6">
              <button
                className="btn btn-danger w-100 my-2"
                onClick={() => navigate(`/app/user/delete/${state.email}`)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadOneUser;

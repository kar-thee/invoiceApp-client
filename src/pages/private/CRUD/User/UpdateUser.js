import React, { useState, useEffect } from "react";

import useDispatchFunc from "../../../../hooks/useDispatchFunc";
import useStatesFunc from "../../../../hooks/useStatesFunc";

import GetOneUserApi from "../../../../apis/private/User/GetOneUserApi";
import UpdateUserApi from "../../../../apis/private/User/UpdateUserApi";

import MiniSpinner from "../../../../helpers/MiniSpinner";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../../../helpers/Loader";

// id as params
//data =  { email, name, userType }

const UpdateUser = () => {
  // const initialValue = {
  //   name: data.name,
  //   email: data.email,
  //   password: data.password,
  //   userType: data.userType,
  // };

  const [state, setState] = useState(undefined);
  const [{ loading, token }] = useStatesFunc();
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

  const SubmitForm = async (ev) => {
    ev.preventDefault();
    dispatch({ type: "loadingStart" });
    const { name, email, password, role } = state;

    console.log(state, " state");
    const body = { name, email, password, userType: role };
    const authorizationToken = token ? token : "";
    const response = await UpdateUserApi(id, body, authorizationToken);

    dispatch({ type: "loadingStop" });

    if (response.data.type === "success") {
      toast.success(response.data.msg);
      navigate(-1);
    } else {
      toast.error(response.data.msg);
    }
  };

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  if (!state || state.length < -1 || state === "") {
    return (
      <>
        <div className="p-5 my-3 card bg-success d-flex justify-content-center">
          <h1 className="display-1 p-5">Nothing to Show You...</h1>
        </div>
      </>
    );
  }

  return (
    <>
      {state && (
        <div className="container my-5 shadow p-3 signup-background">
          <form className="p-md-3 ">
            <div className="mb-3">
              <label className="form-label" htmlFor="userName">
                Name
              </label>
              <input
                type="text"
                id="userName"
                placeholder="User Name"
                className="form-control"
                required={true}
                value={state.name}
                onChange={(e) =>
                  setState((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="userEmail">
                Email
              </label>
              <input
                type="email"
                id="userEmail"
                placeholder="User Email"
                className="form-control"
                required={true}
                value={state.email}
                onChange={(e) =>
                  setState((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>
            <div className="mb-5">
              <label className="form-label" htmlFor="userType">
                UserType
              </label>
              <select
                className="form-select"
                id="userType"
                required={true}
                value={state.role}
                onChange={(e) =>
                  setState((prev) => ({ ...prev, role: e.target.value }))
                }
              >
                <option value="customer">Customer</option>
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
                <option value="employee">Employee</option>
              </select>
            </div>
            <div className="mb-3 col">
              {loading && (
                <>
                  <MiniSpinner />
                </>
              )}

              <button
                className="btn btn-outline-primary w-100"
                type="button"
                onClick={(ev) => SubmitForm(ev)}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default UpdateUser;

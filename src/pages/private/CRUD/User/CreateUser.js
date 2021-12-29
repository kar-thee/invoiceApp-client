import React, { useState } from "react";
import { toast } from "react-toastify";

import useDispatchFunc from "../../../../hooks/useDispatchFunc";
import useStatesFunc from "../../../../hooks/useStatesFunc";

import CreateUserApi from "../../../../apis/private/User/CreateUserApi";
import MiniSpinner from "../../../../helpers/MiniSpinner";

import { ADMIN, MANAGER } from "../../../../helpers/UserRoles";
import useUserFunc from "../../../../hooks/useUserFunc";
import NothingToShow from "../../Others/NothingToShow";

// data = { name, email, password, userType }
const CreateUser = () => {
  const [, , checkUserAccess] = useUserFunc();
  const initialValue = { name: "", email: "", password: "", userType: "" };

  const [state, setState] = useState(initialValue);
  const [{ loading, token }] = useStatesFunc();
  const [dispatch] = useDispatchFunc();
  // const navigate = useNavigate();

  if (!checkUserAccess([ADMIN, MANAGER])) {
    toast.warning("You cant access");
    return (
      <>
        <NothingToShow />
      </>
    );
  }

  const SubmitForm = async (ev) => {
    ev.preventDefault();
    dispatch({ type: "loadingStart" });
    const { name, email, password, userType } = state;
    if (!name || !email || !password || !userType) {
      console.log("error");
      toast.warning("All field values required");
      return;
    }
    console.log(state, " state");
    const body = { name, email, password, userType };
    const authorizationToken = token ? token : "";
    const response = await CreateUserApi(body, authorizationToken);

    dispatch({ type: "loadingStop" });

    if (response.data.type === "success") {
      toast.success("Registered successfully");
      setState(initialValue);
    } else {
      toast.error(response.data.msg);
    }
  };

  return (
    <>
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
          <div className="mb-3">
            <label className="form-label" htmlFor="userPassword">
              Password
            </label>
            <input
              type="password"
              id="userPassword"
              placeholder="User Password"
              className="form-control"
              required={true}
              value={state.password}
              onChange={(e) =>
                setState((prev) => ({ ...prev, password: e.target.value }))
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
              value={state.userType}
              onChange={(e) =>
                setState((prev) => ({ ...prev, userType: e.target.value }))
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateUser;
// need to code ui for create,update,get(mostly table or list) for all ,
// try to include btn for view(if needed)then btns for delete,update

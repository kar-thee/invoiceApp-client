import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import GetAllUserApi from "../../../../apis/private/User/GetAllUsersApi";
import useStatesFunc from "../../../../hooks/useStatesFunc";

import Loader from "../../../../helpers/Loader";
import useDispatchFunc from "../../../../hooks/useDispatchFunc";
import { useNavigate } from "react-router-dom";

import { ADMIN, MANAGER, EMPLOYEE } from "../../../../helpers/UserRoles";

import NothingToShow from "../../Others/NothingToShow";
import useUserFunc from "../../../../hooks/useUserFunc";

const ReadUser = () => {
  const [data, setData] = useState(null);
  const [{ token, loading }] = useStatesFunc();
  const [dispatch] = useDispatchFunc();
  const navigate = useNavigate();
  const [, , checkUserAccess] = useUserFunc();

  useEffect(() => {
    (async () => {
      dispatch({ type: "loadingStart" });
      const response = await GetAllUserApi(token);
      dispatch({ type: "loadingStop" });
      if (response.data.type === "success") {
        toast.success(response.data.msg);
        setData(response.data.userArray);
      } else {
        toast.error(response.data.msg);
      }
    })();
  }, [dispatch, token]);

  if (!checkUserAccess([ADMIN, MANAGER, EMPLOYEE])) {
    toast.warning("You cant access");
    return (
      <>
        <NothingToShow />
      </>
    );
  }

  if (loading) {
    return <Loader />;
  }
  if (!data && !loading) {
    return (
      <>
        <div className="p-5 card bg-warning">
          <h1 className="p-5 text-center text-danger">No Data Available</h1>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="row  p-md-5   my-3 text-dark fw-bold ">
        <div className="col signup-background shadow">
          <table className="table  table-hover table-responsive ">
            <thead>
              <tr>
                <th className="d-none d-md-table-cell">S.no</th>
                <th>Name</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {data.map((userItem, index) => (
                <tr
                  key={userItem._id}
                  onClick={() => navigate(`/app/user/readOne/${userItem._id}`)}
                  className="mouseCursorChanger"
                >
                  <td className="d-none d-md-table-cell">{index + 1}</td>
                  <td>{userItem.name}</td>
                  <td
                    className={`${
                      userItem.role === "customer" && "text-success"
                    } 
                        ${userItem.role === "admin" && "text-danger"}
                        ${userItem.role === "employee" && "text-warning"}
                        ${userItem.role === "manager" && "text-primary"}`}
                  >
                    {userItem.role}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ReadUser;

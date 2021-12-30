import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import GetOneProductApi from "../../../../apis/private/Product/GetOneProductApi";
import Loader from "../../../../helpers/Loader";
import useDispatchFunc from "../../../../hooks/useDispatchFunc";
import useStatesFunc from "../../../../hooks/useStatesFunc";

import { ADMIN, MANAGER, EMPLOYEE } from "../../../../helpers/UserRoles";
import useUserFunc from "../../../../hooks/useUserFunc";
import NothingToShow from "../../Others/NothingToShow";

const ReadProducts = () => {
  const [state, setState] = useState();
  const [{ loading, token }] = useStatesFunc();
  const navigate = useNavigate();
  const { id } = useParams();
  const [dispatch] = useDispatchFunc();
  const [, , checkUserAccess] = useUserFunc();

  useEffect(() => {
    (async () => {
      dispatch({ type: "loadingStart" });
      const { data } = await GetOneProductApi(id, token);
      if (data.type === "success") {
        toast.success(data.msg);
        setState(data.productFound);
        dispatch({ type: "loadingStop" });
      } else {
        toast.error(data.msg);
        navigate(-1);
      }
    })();
  }, [dispatch, id, navigate, token]);

  if (!checkUserAccess([ADMIN, MANAGER, EMPLOYEE])) {
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

  if (!state || state.length < 1 || state === "") {
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
      <div className="shadow signup-background p-md-2 my-3 container">
        <div className="p-2 my-5">
          {state && (
            <table className="table fw-bold">
              <thead>
                <tr className="text-break">
                  <th>Product Name </th>
                  <td className="d-none d-md-table-cell">:</td>
                  <td>{state.productName}</td>
                </tr>
                <tr className="text-break">
                  <th>Product Price </th>
                  <td className="d-none d-md-table-cell">:</td>
                  <td>₹{state.price}</td>
                </tr>
                <tr className="text-break">
                  <th>stock Quantity</th>
                  <td className="d-none d-md-table-cell">:</td>
                  <td>{state.stockQuantity}</td>
                </tr>
                <tr className="text-break">
                  <th>Product tax Rate</th>
                  <td className="d-none d-md-table-cell">:</td>
                  <td>{state.tax}%</td>
                </tr>
                <tr className="text-break">
                  <th>Tax Amount for 1 Product</th>
                  <td className="d-none d-md-table-cell">:</td>
                  <td>₹{state.price * (state.tax / 100)}</td>
                </tr>
                <tr className="text-break">
                  <th>Total Amount for 1 Product with Tax</th>
                  <td className="d-none d-md-table-cell">:</td>
                  <td>₹{state.price + state.price * (state.tax / 100)}</td>
                </tr>
              </thead>
            </table>
          )}
        </div>

        <div>
          <div className="d-flex flex-column flex-md-row ms-auto justify-content-evenly align-content-center row p-md-5 py-2">
            <div className="col-6">
              <button
                className="btn btn-warning w-100 my-2"
                onClick={() => navigate(`/app/product/update/${id}`)}
              >
                Update
              </button>
            </div>
            <div className="col-6">
              <button
                className="btn btn-danger w-100 my-2"
                onClick={() => navigate(`/app/product/delete/${id}`)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadProducts;

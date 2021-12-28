import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import useDispatchFunc from "../../../../hooks/useDispatchFunc";
import useStatesFunc from "../../../../hooks/useStatesFunc";

import Loader from "../../../../helpers/Loader";

import UpdateProductApi from "../../../../apis/private/Product/UpdateProductApi";
import GetOneProductApi from "../../../../apis/private/Product/GetOneProductApi";

// data = { productName, stockQuantity, price, tax }
const UpdateProduct = () => {
  const initialValues = {
    productName: "",
    stockQuantity: "",
    price: "",
    tax: "",
  };
  const [state, setState] = useState(initialValues);
  const [{ token, loading }] = useStatesFunc();
  const [dispatch] = useDispatchFunc();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch({ type: "loadingStart" });
    (async () => {
      const response = await GetOneProductApi(id, token);
      if (response.data.type === "success") {
        setState(response.data.productFound);
      } else {
        toast.error(response.data);
      }
    })();
    dispatch({ type: "loadingStop" });
  }, [dispatch, id, token]);

  const SubmitForm = async (ev) => {
    dispatch({ type: "loadingStart" });
    ev.preventDefault();
    const { productName, stockQuantity, price, tax } = state;
    console.log(state);
    const body = { productName, stockQuantity, price, tax };
    const { data } = await UpdateProductApi(id, body, token);
    dispatch({ type: "loadingStop" });
    if (data.type === "success") {
      toast.success(data.msg);
      setState(initialValues);
      setTimeout(navigate("/app/product/readAll"), 80000);
    } else {
      toast.error(data.msg);
    }
  };

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  return (
    <>
      <div className="container p-5 my-5 signup-background shadow">
        <form className="p-md-3">
          <div className="mb-3">
            <label className="form-label" htmlFor="productName">
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              placeholder="Name of Your Product"
              className="form-control"
              required={true}
              value={state.productName}
              onChange={(e) =>
                setState((prev) => ({ ...prev, productName: e.target.value }))
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="qty">
              Stock Quantity
            </label>
            <input
              type="number"
              id="qty"
              placeholder="Quantity to add inStock"
              className="form-control"
              required={true}
              value={state.stockQuantity}
              onChange={(e) =>
                setState((prev) => ({ ...prev, stockQuantity: e.target.value }))
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="price">
              Price
            </label>
            <input
              type="number"
              id="price"
              placeholder="Price of 1 product without tax"
              className="form-control"
              required={true}
              value={state.price}
              onChange={(e) =>
                setState((prev) => ({ ...prev, price: e.target.value }))
              }
            />
          </div>
          <div className="mb-5">
            <div className="d-flex justify-content-between">
              <label className="form-label" htmlFor="tax">
                Tax
              </label>
              {state && state.tax}
            </div>
            <input
              type="range"
              min="0"
              max="26"
              id="tax"
              placeholder="tax"
              className="form-range"
              required={true}
              value={state.tax}
              onChange={(e) =>
                setState((prev) => ({ ...prev, tax: e.target.value }))
              }
            />
          </div>
          <div className="col mb-3">
            <button
              className="w-100 btn btn-outline-primary"
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

export default UpdateProduct;

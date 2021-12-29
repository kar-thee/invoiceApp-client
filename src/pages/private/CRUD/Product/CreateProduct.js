import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import useDispatchFunc from "../../../../hooks/useDispatchFunc";
import useStatesFunc from "../../../../hooks/useStatesFunc";

import Loader from "../../../../helpers/Loader";
import CreateProductApi from "../../../../apis/private/Product/CreateProductApi";

import { ADMIN, MANAGER } from "../../../../helpers/UserRoles";
import useUserFunc from "../../../../hooks/useUserFunc";
import NothingToShow from "../../Others/NothingToShow";

// data = { productName, stockQuantity, price, tax }
const CreateProduct = () => {
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
  const [, , checkUserAccess] = useUserFunc();

  if (!checkUserAccess([ADMIN, MANAGER])) {
    toast.warning("You cant access");
    return (
      <>
        <NothingToShow />
      </>
    );
  }

  const SubmitForm = async (ev) => {
    dispatch({ type: "loadingStart" });
    ev.preventDefault();
    const { productName, stockQuantity, price, tax } = state;
    if (!productName || !stockQuantity || !price || !tax) {
      toast.error("No Empty Values allowed");
      return;
    }
    console.log(state);
    const body = { productName, stockQuantity, price, tax };
    const { data } = await CreateProductApi(body, token);
    dispatch({ type: "loadingStop" });
    if (data.type === "success") {
      toast.success(data.msg);
      setState(initialValues);
      setTimeout(navigate("/app/product/readAll"), 60000);
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

export default CreateProduct;

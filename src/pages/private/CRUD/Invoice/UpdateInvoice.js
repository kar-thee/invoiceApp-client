import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import GetOneInvoiceApi from "../../../../apis/private/Invoice/GetOneInvoiceApi";
import UpdateInvoiceApi from "../../../../apis/private/Invoice/UpdateInvoiceApi";

import Loader from "../../../../helpers/Loader";

import useDispatchFunc from "../../../../hooks/useDispatchFunc";
import useStatesFunc from "../../../../hooks/useStatesFunc";

const UpdateInvoice = () => {
  const [state, setState] = useState();
  const [dispatch] = useDispatchFunc();
  const [{ loading, token }] = useStatesFunc();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getinvoiceData = async () => {
      dispatch({ type: "loadingStart" });

      // this is for Details esssential for invoice
      const { data } = await GetOneInvoiceApi(id);
      dispatch({ type: "loadingStop" });
      if (data.type === "success") {
        toast.success(data.msg);
        setState(data.invoiceFound);
      } else {
        toast.warning(data.msg);
        navigate(-1);
      }
    };
    getinvoiceData();
  }, [dispatch, id, navigate]);

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  const submitForm = async (ev) => {
    ev.preventDefault();
    if (!state.qty || !state.dueDate) {
      toast.error("No empty values allowed");
      return;
    }
    const { productName, qty, price, tax, dueDate } = state;
    const body = {
      invoiceLogoImg: state.invoiceLogoImg || null,
      productName,
      qty,
      price,
      tax,
      dueDate,
    };
    const { data } = await UpdateInvoiceApi(id, body, token);

    if (data.type === "success") {
      toast.success(data.msg);
      navigate(-1);
    } else {
      toast.error(data.msg);
    }
  };

  return (
    <>
      {state && (
        <div className="container my-5 shadow p-3 signup-background">
          <form className="p-md-3 ">
            <div className="mb-5">
              <div className="d-flex justify-content-between">
                <label className="form-label" htmlFor="quantity">
                  Quantity
                </label>
                {state && state.qty}
              </div>
              <input
                type="range"
                min="1"
                max="100"
                id="quantity"
                placeholder="Product Quantity"
                className="form-range"
                required={true}
                value={state.qty}
                onChange={(e) => {
                  setState((prev) => ({ ...prev, qty: e.target.value }));
                }}
              />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="price">
                Product Name
              </label>
              <div className="text-secondary border fw-bold" id="price">
                {state.productName}
              </div>
            </div>

            <div className="mb-5">
              <label className="form-label" htmlFor="invoiceLogoImg">
                Invoice Logo Image URL (Not mandatory)
              </label>
              <input
                type="url"
                id="invoiceLogoImg"
                placeholder="Image Logo Url"
                className="form-control"
                value={state.invoiceLogoImg || ""}
                onChange={(e) =>
                  setState((prev) => ({
                    ...prev,
                    invoiceLogoImg: e.target.value,
                  }))
                }
              />
            </div>

            <div className="mb-5">
              <label className="form-label" htmlFor="dueDate">
                Invoice Due Date
              </label>
              <select
                id="dueDate"
                className="form-select"
                value={state && state.dueDate}
                required={true}
                onChange={(e) =>
                  setState((prev) => ({
                    ...prev,
                    dueDate: e.target.value,
                  }))
                }
              >
                <option>Select any 1 option</option>
                {[7, 15, 30, 60, 90].map((date) => (
                  <option key={date} value={date}>
                    {date} days
                  </option>
                ))}
              </select>
            </div>

            <div className="my-5  col">
              <button
                className="btn btn-outline-primary w-100"
                type="button"
                onClick={(ev) => submitForm(ev)}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default UpdateInvoice;

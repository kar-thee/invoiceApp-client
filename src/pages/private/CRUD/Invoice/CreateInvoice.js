import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import useStatesFunc from "../../../../hooks/useStatesFunc";
import useDispatchFunc from "../../../../hooks/useDispatchFunc";

import GetInvoiceEssentials from "../../../../apis/private/others/GetInvoiceEssentials";
import CreateInvoiceApi from "../../../../apis/private/Invoice/CreateInvoiceApi";

import MiniSpinner from "../../../../helpers/MiniSpinner";
import Loader from "../../../../helpers/Loader";

import NothingToShow from "../../Others/NothingToShow";
import { ADMIN, MANAGER, EMPLOYEE } from "../../../../helpers/UserRoles";
import useUserFunc from "../../../../hooks/useUserFunc";

//  intialValue = {
//   invoiceLogoImg,
//   sellerName,
//   customerName,
//   customerEmail,
//   productName,
//   qty,
//   price,
//   tax,
//   dueDate,
// }
const CreateInvoice = () => {
  const initialState = {
    invoiceLogoImg: "",
    sellerName: "",
    customerName: "",
    customerEmail: "",
    productName: "",
    qty: "",
    price: "",
    tax: "",
    dueDate: "",
  };
  const [invoiceEssentials, setInvoiceEssentials] = useState();
  const [stateValues, setStateValues] = useState(initialState);
  const [customer, setCustomer] = useState();
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState();

  const [{ token, loading }] = useStatesFunc();
  const [dispatch] = useDispatchFunc();
  const navigate = useNavigate();
  const [, , checkUserAccess] = useUserFunc();

  useEffect(() => {
    (async () => {
      dispatch({ type: "loadingStart" });
      const response = await GetInvoiceEssentials(token);
      dispatch({ type: "loadingStop" });
      if (response.data.type === "success") {
        toast.success(response.data.msg);
        setInvoiceEssentials(response.data.invoiceEssentialData);
      } else {
        toast.error(response.data.msg);
      }
    })();
  }, [dispatch, token]);

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  if (!checkUserAccess([ADMIN, MANAGER, EMPLOYEE])) {
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

    const { sellerName, customerName, productName, dueDate } = stateValues;
    const invoiceLogoImg = stateValues.invoiceLogoImg
      ? stateValues.invoiceLogoImg
      : null;
    const customerEmail = customer.email;
    const { price, tax } = product;
    const qty = quantity;
    if (
      !sellerName ||
      !customerName ||
      !customerEmail ||
      !productName ||
      !qty ||
      !price ||
      !tax ||
      !dueDate
    ) {
      toast.warning("No empty values allowed");
      return;
    }

    const body = {
      invoiceLogoImg,
      sellerName,
      customerName,
      customerEmail,
      productName,
      qty,
      price,
      tax,
      dueDate,
    };
    const { data } = await CreateInvoiceApi(body, token);
    dispatch({ type: "loadingStop" });

    if (data.type === "success") {
      toast.success(data.msg);
      navigate("/app/invoice/readAll");
    } else {
      toast.error(data.msg);
    }
  };

  const changeProductState = () => {
    //THIS SETS THE PRODUCT STATE
    let productResult = undefined;
    if (stateValues && stateValues.productName) {
      const { productsArray } = invoiceEssentials;
      productResult = productsArray.find(
        (productItem) => productItem.productName === stateValues.productName
      );
      setProduct(productResult);
    }
    return productResult;
  };

  const changeCustomerState = () => {
    // THIS SETS THE CUSTOMER STATE
    if (stateValues && stateValues.customerName) {
      const { customersArray } = invoiceEssentials;
      const customerResult = customersArray.find(
        (customerItem) => customerItem.name === stateValues.customerName
      );
      setCustomer(customerResult);
      return customerResult;
    }
  };

  return (
    <>
      <div className="container my-5 shadow p-3 signup-background">
        <form className="p-md-3 ">
          {/* invoiceLogo */}
          <div className="mb-3">
            <label className="form-label" htmlFor="invoiceLogoImg">
              Invoice Logo Image URL (Not mandatory)
            </label>
            <input
              type="url"
              id="invoiceLogoImg"
              placeholder="Image Logo Url"
              className="form-control"
              value={stateValues.invoiceLogoImg}
              onChange={(e) =>
                setStateValues((prev) => ({
                  ...prev,
                  invoiceLogoImg: e.target.value,
                }))
              }
            />
          </div>
          {/* sellerName */}
          <div className="mb-3">
            <label className="form-label" htmlFor="sellerName">
              Company Name (incl "pvt ltd." for authenticity)
            </label>
            <input
              type="text"
              id="sellerName"
              placeholder="Company Name"
              className="form-control"
              required={true}
              value={stateValues.sellerName}
              onChange={(e) =>
                setStateValues((prev) => ({
                  ...prev,
                  sellerName: e.target.value,
                }))
              }
            />
          </div>
          {/* customerName */}
          <div className="mb-3">
            <label className="form-label" htmlFor="customerName">
              Customer Name
            </label>
            <select
              id="customerName"
              className="form-select"
              required={true}
              value={stateValues.customerName}
              onChange={(e) => {
                setStateValues((prev) => ({
                  ...prev,
                  customerName: e.target.value,
                }));
                changeCustomerState();
              }}
            >
              <option value="">Select 1 customer</option>
              {invoiceEssentials &&
                invoiceEssentials.customersArray.map((customerItem) => (
                  <option key={customerItem._id} value={customerItem.name}>
                    {customerItem.name}
                  </option>
                ))}
            </select>
          </div>
          {/* customerEmail */}
          <div className="mb-3">
            <label className="form-label" htmlFor="customerEmail">
              Customer Email
            </label>
            <div className="text-secondary border fw-bold" id="customerEmail">
              {(customer && customer.email) ||
                (changeCustomerState() && changeCustomerState().email)}
            </div>
          </div>
          {/* productName */}
          <div className="mb-3">
            <label className="form-label" htmlFor="productName">
              Product Name
            </label>
            <select
              id="productName"
              className="form-select"
              required={true}
              value={stateValues.productName}
              onChange={(e) => {
                setStateValues((prev) => ({
                  ...prev,
                  productName: e.target.value,
                }));
                changeProductState();
              }}
            >
              <option value="">Select 1 Product</option>
              {invoiceEssentials &&
                invoiceEssentials.productsArray.map((productItem) => (
                  <option key={productItem._id} value={productItem.productName}>
                    {productItem.productName}
                  </option>
                ))}
            </select>
          </div>
          {/* productPrice */}
          <div className="mb-3">
            <label className="form-label" htmlFor="price">
              Product Price
            </label>
            <div className="text-secondary border fw-bold" id="price">
              {(product && product.price) ||
                (changeProductState() && changeProductState().price)}
            </div>
          </div>
          {/* productTax */}
          <div className="mb-3">
            <label className="form-label" htmlFor="tax">
              Product Tax
            </label>
            <div className="text-secondary border fw-bold" id="tax">
              {(product && product.tax) ||
                (changeProductState() && changeProductState().tax)}
            </div>
          </div>
          {/* productQty */}
          {product && (
            <div className="mb-3">
              <div className="d-flex justify-content-between">
                <label className="form-label" htmlFor="quantity">
                  Quantity
                </label>
                {quantity}
              </div>
              <input
                type="range"
                min="1"
                max={(product && product.stockQuantity) || 10}
                id="quantity"
                placeholder="Product Quantity"
                className="form-range"
                required={true}
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              />
            </div>
          )}
          {/* totalCost */}
          {quantity && (
            <div className="mb-3">
              <label className="form-label" htmlFor="total">
                Total Cost
              </label>
              <div className="text-secondary border fw-bold" id="total">
                ₹{" "}
                {product &&
                  (
                    product.price *
                    ((product.tax + 100) / 100) *
                    quantity
                  ).toFixed(2)}
              </div>
            </div>
          )}
          {/* due date */}
          <div className="mb-3">
            <label className="form-label" htmlFor="dueDate">
              Invoice Due Date
            </label>
            <select
              id="dueDate"
              className="form-select"
              value={stateValues.dueDate}
              required={true}
              onChange={(e) =>
                setStateValues((prev) => ({ ...prev, dueDate: e.target.value }))
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
          {/* here btns */}
          <div className="mt-5 mb-3 col">
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

export default CreateInvoice;

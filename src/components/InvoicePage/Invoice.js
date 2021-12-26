import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import InvoiceLogoHeader from "./InvoiceLogoHeader";
import InvoiceFromToInfo from "./InvoiceFromToInfo";
import InvoiceNoAndDate from "./InvoiceNoAndDate";
import InvoiceTable from "./InvoiceTable";
import InvoiceFinalAmt from "./InvoiceFinalAmt";
import InvoiceSignature from "./InvoiceSignature";
import InvoiceFooterNote from "./InvoiceFooterNote";

import useDispatchFunc from "../../hooks/useDispatchFunc";
import InvoiceFetchDataFunc from "../../apis/public/others/InvoiceFetchDataFunc";
import { toast } from "react-toastify";
import useStatesFunc from "../../hooks/useStatesFunc";
import Loader from "../../helpers/Loader";

const Invoice = () => {
  const [dispatch] = useDispatchFunc();
  const { id } = useParams();
  const [{ loading, invoiceData }] = useStatesFunc();

  useEffect(() => {
    const getinvoiceData = async () => {
      dispatch({ type: "loadingStart" });
      const { data } = await InvoiceFetchDataFunc(id);
      dispatch({
        type: "invoiceDataFetched",
        payload: { invoiceData: data.invoiceFound },
      });

      if (data.type === "success") {
        toast.success(data.msg);
        dispatch({ type: "signout" });
      } else {
        toast.warning(data.msg);
      }
      dispatch({ type: "loadingStop" });
    };
    getinvoiceData();

    //to toggle navbar..using invoiceViewState
    dispatch({ type: "invoiceView" });
    return () => {
      dispatch({ type: "invoiceView" });
    };
  }, [dispatch, id]);
  console.log(process.env.REACT_APP_INVOICEPDF, "REACT_APP_INVOICEPDF");
  const {
    invoiceLogoImg,
    sellerName,
    customerName,
    customerEmail,
    invoiceNo,
    invoiceDate,
    productName,
    qty,
    price,
    tax,
    taxCost,
    costAfterTax,
    totalTaxAmt,
    invoiceCreaterName,
    totalFinalAmt,
    invoiceCreaterRole,
    dueDate,
  } = invoiceData;

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  return (
    <>
      {console.log(invoiceData, "invoiceData")}
      <div className="bg-dark">
        <div>
          <div
            className="bg-white mx-auto"
            style={{ maxHeight: "297mm", maxWidth: "210mm" }}
          >
            {/* here comes everything */}
            <div className="container p-5 ">
              <div className="">
                <InvoiceLogoHeader invoiceLogoImg={invoiceLogoImg} />

                <InvoiceFromToInfo
                  sellerName={sellerName}
                  customerName={customerName}
                  customerEmail={customerEmail}
                />

                <InvoiceNoAndDate
                  invoiceNo={invoiceNo}
                  invoiceDate={invoiceDate}
                />

                <InvoiceTable
                  productName={productName}
                  qty={qty}
                  price={price}
                  tax={tax}
                  taxCost={taxCost}
                  costAfterTax={costAfterTax}
                  totalTaxAmt={totalTaxAmt}
                  totalFinalAmt={totalFinalAmt}
                />

                <InvoiceFinalAmt
                  invoiceCreaterName={invoiceCreaterName}
                  invoiceCreaterRole={invoiceCreaterRole}
                  totalFinalAmt={totalFinalAmt}
                />

                <InvoiceSignature sellerName={sellerName} />

                <InvoiceFooterNote dueDate={dueDate} />
              </div>
            </div>
          </div>
        </div>
        {/* here go back btn */}
        <div className="position-absolute top-0 end-0 d-print-none">
          <Link
            to="/app/dashboard"
            className="btn btn-outline-light text-danger"
          >
            Go to dashboard
          </Link>
        </div>
        {/* here print and savePdf btns */}
        <div className="position-absolute  bottom-50  d-flex flex-column ms-3 d-print-none">
          <button
            className="btn btn-info mb-5"
            onClick={() => {
              window.print();
            }}
          >
            Print
          </button>
          <a
            className="btn btn-danger"
            href={`https://karthee-invoice-app-server.herokuapp.com/api/public/invoice/pdf/${id}`}
            target="_blank"
            rel="noreferrer"
          >
            Save as PDF
          </a>
        </div>
      </div>
    </>
  );
};

export default Invoice;

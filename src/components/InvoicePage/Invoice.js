import React, { useEffect } from "react";
import useDispatchFunc from "../../hooks/useDispatchFunc";

import InvoiceLogoHeader from "./InvoiceLogoHeader";
import InvoiceFromToInfo from "./InvoiceFromToInfo";
import InvoiceNoAndDate from "./InvoiceNoAndDate";
import InvoiceTable from "./InvoiceTable";
import InvoiceFinalAmt from "./InvoiceFinalAmt";
import InvoiceSignature from "./InvoiceSignature";
import InvoiceFooterNote from "./InvoiceFooterNote";

const invoiceData = {
  invoiceLogoImg: null,
  sellerName: "kaeIMPEX pvt ltd.",
  customerName: "customer1",
  customerEmail: "customer1@gmail.com",
  invoiceNo: "kae-40362422479",
  invoiceDate: "24/12/2021",
  productName: "sony 4k Tv",
  qty: 2,
  price: 100000,
  tax: 18,
  taxCost: 18000,
  costAfterTax: 118000,
  totalTaxAmt: 36000,
  totalFinalAmt: 236000,
  invoiceCreaterName: "karthee",
  invoiceCreaterRole: "admin",
  invoiceCreaterEmail: "ourworldourpeople@gmail.com",
  dueDate: 7,
  _id: "61c5f1b6b82bab9af6bc02d5",
  __v: 0,
};

const Invoice = () => {
  const [dispatch] = useDispatchFunc();

  useEffect(() => {
    dispatch({ type: "invoiceView" });
    return () => {
      dispatch({ type: "invoiceView" });
    };
  }, [dispatch]);

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
    invoiceCreaterName,
    invoiceCreaterRole,
    dueDate,
  } = invoiceData;

  const taxCost = (price * (tax / 100)).toFixed(2);
  const costAfterTax = (price * (parseFloat(tax + 100) / 100)).toFixed(2);
  const totalTaxAmt = (taxCost * qty).toFixed(2);
  const totalFinalAmt = (costAfterTax * qty).toFixed(2);
  return (
    <>
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
        {/* here print and savePdf btns */}
        <div className="position-absolute left-0 bottom-50  d-flex flex-column ms-3 d-print-none">
          <button
            className="btn btn-outline-light mb-5"
            onClick={() => {
              window.print();
            }}
          >
            Print
          </button>
          <button
            className="btn btn-outline-light"
            onClick={() => {
              window.print();
            }}
          >
            Save as PDF
          </button>
        </div>
      </div>
    </>
  );
};

export default Invoice;

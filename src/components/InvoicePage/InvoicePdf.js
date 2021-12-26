import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import InvoiceLogoHeader from "./InvoiceLogoHeader";
import InvoiceFromToInfo from "./InvoiceFromToInfo";
import InvoiceNoAndDate from "./InvoiceNoAndDate";
import InvoiceTable from "./InvoiceTable";
import InvoiceFinalAmt from "./InvoiceFinalAmt";
import InvoiceSignature from "./InvoiceSignature";
import InvoiceFooterNote from "./InvoiceFooterNote";

import useDispatchFunc from "../../hooks/useDispatchFunc";
import InvoiceFetchDataFunc from "../../apis/public/others/InvoiceFetchDataFunc";
import useStatesFunc from "../../hooks/useStatesFunc";

const Invoice = () => {
  const [dispatch] = useDispatchFunc();
  const { id } = useParams();
  const [{ invoiceData }] = useStatesFunc();

  useEffect(() => {
    const getinvoiceData = async () => {
      const { data } = await InvoiceFetchDataFunc(id);
      dispatch({
        type: "invoiceDataFetched",
        payload: { invoiceData: data.invoiceFound },
      });
    };
    getinvoiceData();

    //to toggle navbar..using invoiceViewState
    dispatch({ type: "invoiceView" });
    return () => {
      dispatch({ type: "invoiceView" });
    };
  }, [dispatch, id]);

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

  return (
    <>
      <div>
        <div>
          <div>
            {/* here comes everything */}
            <div className="p-5">
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
      </div>
    </>
  );
};

export default Invoice;

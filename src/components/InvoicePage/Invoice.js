import React, { useEffect } from "react";
import useDispatchFunc from "../../hooks/useDispatchFunc";

import InvoiceLogoHeader from "./InvoiceLogoHeader";
import InvoiceFromToInfo from "./InvoiceFromToInfo";
import InvoiceNoAndDate from "./InvoiceNoAndDate";
import InvoiceTable from "./InvoiceTable";
import InvoiceFinalAmt from "./InvoiceFinalAmt";
import InvoiceSignature from "./InvoiceSignature";
import InvoiceFooterNote from "./InvoiceFooterNote";

const Invoice = () => {
  const [dispatch] = useDispatchFunc();

  useEffect(() => {
    dispatch({ type: "invoiceView" });
    return () => {
      dispatch({ type: "invoiceView" });
    };
  }, [dispatch]);

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
                <InvoiceLogoHeader />

                <InvoiceFromToInfo />

                <InvoiceNoAndDate />

                <InvoiceTable />

                <InvoiceFinalAmt />

                <InvoiceSignature />

                <InvoiceFooterNote />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;

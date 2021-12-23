import React from "react";

import invoiceLogo from "./invoiceLogo.png";

const InvoiceLogoHeader = () => {
  return (
    <>
      {/* here logo and header */}
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div style={{ height: "100px", width: "auto" }}>
          <img src={invoiceLogo} alt="LOGO" height="100%" width="100%" />
        </div>
        <div className="lead"> TAX INVOICE / BILL / TAB </div>
      </div>
    </>
  );
};

export default InvoiceLogoHeader;

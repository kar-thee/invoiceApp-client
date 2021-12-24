import React from "react";

import invoiceDefaultLogo from "./invoiceLogo.png";

const InvoiceLogoHeader = ({ invoiceLogoImg }) => {
  return (
    <>
      {/* here logo and header */}
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div className="invoiceLogoSize">
          <img
            src={invoiceLogoImg ? invoiceLogoImg : invoiceDefaultLogo}
            alt="LOGO"
            height="100%"
            width="100%"
          />
        </div>
        <div className="lead"> TAX INVOICE / BILL / TAB </div>
      </div>
    </>
  );
};

export default InvoiceLogoHeader;

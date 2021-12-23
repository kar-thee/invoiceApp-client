import React from "react";

const InvoiceNoAndDate = () => {
  return (
    <>
      {/* here invoice no and date */}
      <div className="d-flex justify-content-between mb-5">
        <div className="d-flex flex-column">
          <div className="fw-bold">Invoice No :</div>
          <div className="ms-1">2021-434</div>
        </div>
        <div className="d-flex flex-column">
          <div className="fw-bold">Invoice Date :</div>
          <div className="ms-1">{new Date().toLocaleDateString()}</div>
        </div>
      </div>
    </>
  );
};

export default InvoiceNoAndDate;

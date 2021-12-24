import React from "react";

const InvoiceFromToInfo = ({ sellerName, customerName, customerEmail }) => {
  return (
    <>
      {/* soldBy and ClientName */}
      <div className="d-flex justify-content-between mb-5">
        <div className="d-flex flex-column">
          <div className="fw-bold"> Sold By :</div>
          <div className="d-flex flex-column">
            <div>{sellerName}</div>
          </div>
        </div>
        <div className="d-flex flex-column align-items-end">
          <div className="fw-bold">Bill To :</div>
          <div className="">
            <div className="d-flex flex-column align-items-end">
              <div>{customerName}</div>
              <div>{customerEmail}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceFromToInfo;

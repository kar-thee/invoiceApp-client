import React from "react";

const InvoiceFromToInfo = () => {
  return (
    <>
      {/* soldBy and ClientName */}
      <div className="d-flex justify-content-between mb-5">
        <div className="d-flex flex-column">
          <div className="fw-bold"> Sold By :</div>
          <div className="d-flex flex-column">
            <div>Nic Importers Inc</div>
          </div>
        </div>
        <div className="d-flex flex-column align-items-end">
          <div className="fw-bold">Shipped To :</div>
          <div className="">
            <div className="d-flex flex-column align-items-end">
              <div>Customer1</div>
              <div>Customer1@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceFromToInfo;

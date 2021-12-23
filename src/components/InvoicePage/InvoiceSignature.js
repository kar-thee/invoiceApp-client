import React from "react";

const InvoiceSignature = () => {
  return (
    <>
      {/* here signature */}
      <div className="d-flex justify-content-end me-5 mb-5">
        <div className="d-flex flex-column">
          <div className=" p-2 mb-1 text-center lead mt-5">
            Nic Importers Inc
          </div>
          <div className="fw-bold  border-top">Authorized Signature</div>
        </div>
      </div>
    </>
  );
};

export default InvoiceSignature;

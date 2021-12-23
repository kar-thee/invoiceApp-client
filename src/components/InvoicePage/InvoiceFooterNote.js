import React from "react";

const InvoiceFooterNote = () => {
  return (
    <>
      {/* here note */}
      <div className=" position-absolute">
        <div className="text-muted fw-lighter fst-italic">
          Payment due in 90 days from invoice date
        </div>
      </div>
    </>
  );
};

export default InvoiceFooterNote;

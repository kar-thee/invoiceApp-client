import React from "react";

const InvoiceFooterNote = ({ dueDate }) => {
  return (
    <>
      {/* here note */}
      <div className=" position-absolute">
        <div className="text-muted fw-lighter fst-italic">
          Payment due in {dueDate} days from invoice date
        </div>
      </div>
    </>
  );
};

export default InvoiceFooterNote;

import React from "react";

const MiniSpinner = () => {
  return (
    <>
      <div className="col my-3  d-flex justify-content-end">
        <div
          className="spinner-border text-secondary ms-auto"
          role="status"
        ></div>
      </div>
    </>
  );
};

export default MiniSpinner;

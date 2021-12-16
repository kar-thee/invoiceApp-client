import React from "react";

const Loader = () => {
  return (
    <>
      <div className="container m-sm-5 p-sm-5 position-absolute ">
        <div
          className=" m-5 p-5 d-flex justify-content-center align-items-center text-primary opacity-50"
          style={{ height: "350px" }}
        >
          <div
            className="spinner-grow"
            role="status"
            style={{ height: "6rem", width: "6rem" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Loader;

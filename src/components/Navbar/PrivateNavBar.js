import React from "react";

import useDispatchFunc from "../../hooks/useDispatchFunc";

const PrivateNavBar = () => {
  const [dispatch] = useDispatchFunc();
  return (
    <>
      <div id="privateToggler" className="position-absolute">
        <button
          className="navbar-toggler d-block"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#publicNav"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div className="navbar-nav ">
        <button
          className="btn btn-outline-danger me-2 rounded-pill"
          type="button"
          onClick={() => dispatch({ type: "signout" })}
        >
          SignOut
        </button>
      </div>
    </>
  );
};

export default PrivateNavBar;

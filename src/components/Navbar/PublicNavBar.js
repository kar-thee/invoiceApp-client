import React from "react";

import { NavLink } from "react-router-dom";

const PublicNavBar = () => {
  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#publicNav"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="publicNav"
      >
        <div className="navbar-nav">
          <NavLink
            to="/user/signup"
            className={(nav) =>
              nav.isActive ? "active nav-link text-primary" : "nav-link"
            }
          >
            Signup
          </NavLink>
          <NavLink
            to="/user/signin"
            className={(nav) =>
              nav.isActive ? "active nav-link text-primary" : "nav-link"
            }
          >
            Signin
          </NavLink>
          <NavLink
            to="/user/forgotPassword"
            className={(nav) =>
              nav.isActive ? "active nav-link text-primary" : "nav-link"
            }
          >
            ForgotPassword
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default PublicNavBar;

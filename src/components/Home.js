import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import useUserFunc from "../hooks/useUserFunc";
const Home = () => {
  const [checkAuth] = useUserFunc();
  const navigate = useNavigate();

  useEffect(() => {
    if (checkAuth()) {
      navigate("/app");
    }
  }, [checkAuth, navigate]);

  return (
    <div>
      <div className="p-md-5 p-2 py-5 my-5 signup-background container shadow justify-content-center">
        <div className="p-md-5 p-3 ">
          <div className="text-md-end display-2">Welcome to InvoiceApp</div>
        </div>

        <div className="p-md-5 p-3 ">
          <div className="lead text-md-end display-6 fst-italic fs-1 text-muted">
            A Hassle-Free Invoice Generator...
          </div>
        </div>

        <div className="p-md-5 p-3  d-flex  justify-content-md-end">
          <Link to="/user/signup" className="btn btn-info">
            Click to Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

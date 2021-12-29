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
      <div className="p-md-5 p-2 my-5 signup-background container  justify-content-center">
        <div className="p-md-5 p-3">
          <div className="text-center display-2">Welcome to InvoiceApp</div>
        </div>
        <div className="p-5 d-flex justify-content-end">
          <Link to="/user/signup" className="btn btn-info">
            Click to Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

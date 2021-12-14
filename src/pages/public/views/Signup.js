import React from "react";

const Signup = () => {
  return (
    <div className="signup-background">
      <div className="">
        <div className="container-sm row mx-auto">
          <div className="my-5 d-flex flex-column justify-content-center shadow">
            <div className="display-2 text-center p-3">SignUp</div>
            <div className="p-1 p-lg-5 col-sm-8 col-md-9 col-lg-6 mx-sm-auto">
              <form className="">
                <div className="form-floating mb-3">
                  <input
                    className="form-control rounded-pill"
                    id="name"
                    placeholder="Your Name"
                  />
                  <label htmlFor="name"> Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    className="form-control rounded-pill"
                    id="email"
                    placeholder="Your Email Address"
                  />
                  <label htmlFor="email"> Email Address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    className="form-control rounded-pill"
                    id="password"
                    placeholder="Your Password"
                  />
                  <label htmlFor="password"> Password</label>
                </div>
                <div className="p-2 mb-3">
                  <button
                    className="btn btn-outline-secondary rounded col-12"
                    type="button"
                  >
                    Submit Form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

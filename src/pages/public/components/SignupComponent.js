import React from "react";
import { Formik } from "formik";

const SignupComponent = ({
  initialFormValues,
  yupValidation,
  submitFormFunc,
}) => {
  return (
    <>
      <div className="p-1 p-lg-5 col-sm-8 col-md-9 col-lg-6 mx-sm-auto">
        <Formik
          initialValues={initialFormValues}
          validationSchema={yupValidation}
          onSubmit={submitFormFunc}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  className="form-control rounded-pill"
                  id="name"
                  placeholder="Your Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                <label htmlFor="name"> Name</label>

                {formik.touched.name && formik.errors.name && (
                  <div className="form-text text-danger ms-4">
                    {formik.errors.name}
                  </div>
                )}
                {formik.touched.name && !formik.errors.name && (
                  <div className="form-text text-success ms-4">Looks Good</div>
                )}
              </div>

              <div className="form-floating mb-3">
                <input
                  className="form-control rounded-pill"
                  id="email"
                  placeholder="Your Email Address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                <label htmlFor="email"> Email Address</label>

                {formik.touched.email && formik.errors.email && (
                  <div className="form-text text-danger ms-4">
                    {formik.errors.email}
                  </div>
                )}
                {formik.touched.email && !formik.errors.email && (
                  <div className="form-text text-success ms-4">Looks Good</div>
                )}
              </div>

              <div className="form-floating mb-3">
                <input
                  className="form-control rounded-pill"
                  id="password"
                  placeholder="Your Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                <label htmlFor="password"> Password</label>

                {formik.touched.password && formik.errors.password && (
                  <div className="form-text text-danger ms-4">
                    {formik.errors.password}
                  </div>
                )}
                {formik.touched.password && !formik.errors.password && (
                  <div className="form-text text-success ms-4">Looks Good</div>
                )}
              </div>

              <div className="p-2 mb-3">
                <button
                  className="btn btn-outline-secondary rounded col-12"
                  type="submit"
                  disabled={!(formik.dirty && formik.isValid)}
                >
                  Submit Form
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default SignupComponent;

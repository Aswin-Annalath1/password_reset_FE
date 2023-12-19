// This is a functional component that renders a form for the "forgot password" functionality.

import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";

const ForgotPassword = () => {
// State to track whether the email has been sent
  const [isEmailSent, setIsEmailSent] = useState(false);
  const formik = useFormik({
    // Initial values for the form fields
    initialValues: {
      username: "",
    },
    // onSubmit function to handle form submission 
    onSubmit: async (values) => {
      try {
        // Make an HTTP POST request to the server to initiate the forgot password process
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/forgotPassword`, values, { withCredentials: true });
        // If the request is successful, set isEmailSent to true 
        if (response) {
          setIsEmailSent(true);
        }
      } catch (error) {
        console.log("Error: ", error);
        alert(error.response.data.message);
      }
    },
  });
  return (
    <div style={{ backgroundImage: 'url("https://source.unsplash.com/1600x900/?anime")', minHeight: "100vh" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
              <div className="card-header">
                <h3 className="text-center font-weight-light my-4">Forgot Password?</h3>
              </div>
              {!isEmailSent ? (
                <div className="card-body">
                  <p>
                    To reset your password, enter your email address below and submit. An
                    email will be sent to you with a link to reset your password.
                  </p>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="form-group mb-3">
                      <input
                        type="email"
                        required
                        placeholder="Email"
                        className="form-control"
                        name="username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div className="mt-4">
                      <div className="d-grid">
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="card-body">
                  Check your email and click the verification link inside to reset
                  your password.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default ForgotPassword;
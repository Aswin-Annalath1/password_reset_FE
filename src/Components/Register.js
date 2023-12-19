import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
    },
    onSubmit: async(values) => {
      try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/register`, values, { withCredentials: true });
        if (response) {
          alert(response.data.message);
          navigate("/");
        }
      } catch (error) {
        console.log("Error: ", error);
        alert(error.response.data.message);
        formik.resetForm();
      }
    },
  });
  return (
    <div style={{ backgroundImage: 'url("https://source.unsplash.com/1600x900/?anime")', minHeight: "100vh" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
              <div className="card-header">
                <h3 className="text-center font-weight-light my-4">Create your account</h3>
              </div>
              <div className="card-body">
                <form onSubmit={formik.handleSubmit}>
                  <div className="row">
                      <div className="col-lg-6">
                          <div className="form-group mb-3">
                              <input
                                  type="text"
                                  required
                                  placeholder="First name"
                                  className="form-control"
                                  name="firstName"
                                  value={formik.values.firstName}
                                  onChange={formik.handleChange}
                              />
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="form-group mb-3">
                              <input
                                  type="text"
                                  required
                                  placeholder="Last name"
                                  className="form-control"
                                  name="lastName"
                                  value={formik.values.lastName}
                                  onChange={formik.handleChange}
                              />
                          </div>
                      </div>
                  </div>
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
                  <div className="form-group mb-3">
                    <input
                      type="password"
                      required
                      placeholder="Password"
                      className="form-control"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="mt-4">
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary">Sign up</button>
                    </div>
                  </div>
                </form>
                <hr />
                <div className="text-center">
                  Have an account? <Link to="/">Log in now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
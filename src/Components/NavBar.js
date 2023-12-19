import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/signout`, { withCredentials: true });
      if (response) {
        navigate("/");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div className="container-fluid">
          <h4>Password Reset Flow</h4>
          <button type="button" className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default NavBar;
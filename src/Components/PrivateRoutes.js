//This component is useful for creating private routes that should only be accessible when the user is authenticated.
   //// If the authentication information is still being loaded, it shows a spinner, and if the user is not authenticated,
   //// it redirects to the home page. If the user is authenticated, it renders the nested routes.

import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import "./Spinner.css";

const PrivateRoutes = ({ children, ...rest }) => {
// Extract user and loading values from the AuthContext using useContext
  const { user, loading } = useContext(AuthContext);
 // If the authentication information is still loading, display a spinner
  if (loading) {
    return (
      <div className="d-flex justify-content-center spinner">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  // If the user is authenticated, render the nested routes using Outlet
  // Otherwise, redirect to the home page ("/") using Navigate
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
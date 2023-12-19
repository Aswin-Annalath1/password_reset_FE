//Importing

import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Register from "./Components/Register";
import ForgotPassword from "./Components/ForgotPassword";
import ResetPassword from "./Components/ResetPassword";
import useFindUser from "./Hooks/useFindUser";
import AuthContext from "./Context/AuthContext";
import PrivateRoutes from "./Components/PrivateRoutes";
import NavBar from "./Components/NavBar";

function App() {
  const [user, setUser, loading] = useFindUser();

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route element={<PrivateRoutes />}>
          <Route element={<NavBar />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;

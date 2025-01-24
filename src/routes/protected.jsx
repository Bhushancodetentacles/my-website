import React, { useEffect } from "react";
import { useLocation, Navigate, Outlet, Routes, Route } from "react-router-dom";


const LoginRedirect = () => {
  const location = useLocation();
  const storedToken = localStorage.getItem("access_token");
  const isAuthenticated = storedToken ? true : false;
  
  useEffect(() => {

  }, [location]);

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

// Protected Route Component
const ProtectedRoute = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          < ></>
        }
      >
      </Route>
    </Routes>
  );
};

export default ProtectedRoute;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/Home";

const Public = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
    </Routes>
  );
};

export default Public;

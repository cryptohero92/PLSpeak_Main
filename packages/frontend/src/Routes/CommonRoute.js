import React from "react";
import { useCookies } from "react-cookie";
import {  Navigate, useLocation } from "react-router-dom";
import { Suspense } from "react";

const CommonRoute = ({ children }) => {
  const [cookies, setCookie] = useCookies(['SID']);
  let location = useLocation();
  if (cookies.SID) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  
  return children;
};

export default CommonRoute;

import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";  // Only import useLocation
import AppRoutes from "./routes";
import Headermain from "../header";
import AnimatedCursor from "../hooks/AnimatedCursor";
import "./App.css";

function ScrollToTop({ children }) {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
}

export default function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={15}
        outerSize={15}
        color="0, 0, 255"
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={5}
      />
      <ScrollToTop>
        <Headermain />
        <AppRoutes />
      </ScrollToTop>
    </>
  );
}

import React from "react";
import App from "./App";
import Footer from "./components/Footer";
import Konva from "./components/Konva";

const AppWithFooter = () => {
  return (
    <div className="bg-[url('./components/assets/gradient-indigo.jpg')]">
      <App />
    </div>
  );
};

export default AppWithFooter;

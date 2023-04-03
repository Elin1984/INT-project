import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "./layout.style.css";
const layout = ({ children }) => {
  console.log(children);
  return (
    <>
      <Header />
      <main>{children}</main>

      <Footer />
    </>
  );
};

export default layout;

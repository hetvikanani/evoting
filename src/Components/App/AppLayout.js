import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function AppLayout({ children }) {
  return (
    <>
      <Header />
      <div className="mainPage">
        <div className="imagePage">
          <div className="originalImg"></div>
        </div>
        <div style={{ width: "50%", display: "flex" }}>
          <div className="box">{children}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

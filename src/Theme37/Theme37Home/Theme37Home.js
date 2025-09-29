import React from "react";
import Theme37Gallery from "./Theme37Gallery";
import Theme37Media from "./Theme37Media";
import Theme37Blog from "./Theme37Blog";
import Theme37Contact from "./Theme37Contact";
import Theme37NavBar from "../Theme37NavBar";
import Theme37Footer from "../Theme37Footer";

const Theme37Home = () => {
  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  };

  const mainStyle = {
    flex: 1,
    paddingTop: "4rem",
  };

  return (
    <div style={containerStyle}>
      <Theme37NavBar />
      <main style={mainStyle}>
        <Theme37Gallery />
        <Theme37Media />
        <Theme37Blog />
        <Theme37Contact />
      </main>
    </div>
  );
};

export default Theme37Home;

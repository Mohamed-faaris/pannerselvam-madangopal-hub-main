import React from "react";
import Theme37Banner from "./Theme37Banner";
import Theme37LeadershipImpact from "./Theme37LeadershipImpact";
import Theme37VisionStatement from "./Theme37VisionStatement";
import Theme37QuickAccess from "./Theme37QuickAccess";
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
        <Theme37Banner />
        <Theme37LeadershipImpact />
        <Theme37VisionStatement />
        <Theme37QuickAccess />
      </main>
    </div>
  );
};

export default Theme37Home;

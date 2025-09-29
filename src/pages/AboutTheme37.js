import React from "react";
import Theme37About from "@/Theme37/Theme37Home/Theme37About";
import Theme37NavBar from "@/Theme37/Theme37NavBar";
import Theme37Footer from "@/Theme37/Theme37Footer";

const AboutTheme37 = () => {
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
        <Theme37About />
      </main>
      <Theme37Footer />
    </div>
  );
};

export default AboutTheme37;

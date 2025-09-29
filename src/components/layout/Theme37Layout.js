import React from "react";
import Theme37NavBar from "../Theme37/Theme37NavBar";
import Theme37Footer from "../Theme37/Theme37Footer";

const Theme37Layout = ({ children }) => {
  const layoutStyles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    },
    main: {
      flex: 1,
      paddingTop: "4rem",
    },
  };

  return (
    <div style={layoutStyles.container}>
      <Theme37NavBar />
      <main style={layoutStyles.main}>{children}</main>
      <Theme37Footer />
    </div>
  );
};

export default Theme37Layout;

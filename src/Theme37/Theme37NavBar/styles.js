export const navBarStyles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    background: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(16px)",
    borderBottom: "1px solid hsl(214, 20%, 90%)",
    zIndex: 50,
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
  },

  flexContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "4rem",
  },

  logo: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "hsl(214, 84%, 15%)",
    textDecoration: "none",
  },

  desktopNav: {
    display: "none",
    alignItems: "center",
    gap: "2rem",
    "@media (min-width: 768px)": {
      display: "flex",
    },
  },

  navLink: {
    position: "relative",
    padding: "0.5rem 0.75rem",
    fontSize: "0.875rem",
    fontWeight: "500",
    color: "hsl(214, 24%, 12%)",
    textDecoration: "none",
    transition: "all 0.15s ease-out",
  },

  activeLink: {
    color: "hsl(38, 92%, 50%)",
  },

  activeIndicator: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "2px",
    background: "linear-gradient(135deg, hsl(38, 92%, 50%), hsl(38, 92%, 60%))",
    borderRadius: "9999px",
  },

  mobileButton: {
    display: "block",
    background: "none",
    border: "none",
    color: "hsl(214, 84%, 15%)",
    cursor: "pointer",
    "@media (min-width: 768px)": {
      display: "none",
    },
  },

  mobileNav: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    padding: "1rem 0",
    borderTop: "1px solid hsl(214, 20%, 90%)",
    "@media (min-width: 768px)": {
      display: "none",
    },
  },

  mobileLink: {
    padding: "0.75rem 0",
    fontSize: "1rem",
    fontWeight: "500",
    color: "hsl(214, 24%, 12%)",
    textDecoration: "none",
    transition: "all 0.15s ease-out",
  },

  activeMobileLink: {
    color: "hsl(38, 92%, 50%)",
  },
};

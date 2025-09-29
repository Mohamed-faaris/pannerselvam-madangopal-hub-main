export const navBarStyles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(16px)",
    borderBottom: "1px solid hsl(214, 20%, 90%)",
    zIndex: 50,
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
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
    fontSize: "1.125rem",
    fontWeight: "bold",
    color: "hsl(214, 84%, 15%)",
    textDecoration: "none",
    whiteSpace: "nowrap",
  },

  desktopNav: {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
  },

  navLink: {
    position: "relative",
    padding: "0.5rem 0.75rem",
    fontSize: "0.875rem",
    fontWeight: "500",
    color: "hsl(214, 24%, 12%)",
    textDecoration: "none",
    transition: "all 0.15s ease-out",
    borderRadius: "0.375rem",
  },

  navLinkHover: {
    backgroundColor: "hsl(214, 20%, 95%)",
  },

  activeLink: {
    color: "hsl(38, 92%, 50%)",
    fontWeight: "600",
  },

  activeIndicator: {
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "24px",
    height: "2px",
    background: "linear-gradient(135deg, hsl(38, 92%, 50%), hsl(38, 92%, 60%))",
    borderRadius: "9999px",
  },

  mobileButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "2.5rem",
    height: "2.5rem",
    background: "none",
    border: "1px solid hsl(214, 20%, 90%)",
    borderRadius: "0.375rem",
    color: "hsl(214, 84%, 15%)",
    cursor: "pointer",
    transition: "all 0.15s ease-out",
  },

  mobileButtonHover: {
    backgroundColor: "hsl(214, 20%, 95%)",
    borderColor: "hsl(38, 92%, 50%)",
  },

  mobileNav: {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
    padding: "1rem 0",
    borderTop: "1px solid hsl(214, 20%, 90%)",
    backgroundColor: "rgba(255, 255, 255, 0.98)",
    animation: "slideDown 0.2s ease-out",
  },

  mobileLink: {
    padding: "0.75rem 1rem",
    fontSize: "1rem",
    fontWeight: "500",
    color: "hsl(214, 24%, 12%)",
    textDecoration: "none",
    transition: "all 0.15s ease-out",
    borderRadius: "0.375rem",
    margin: "0 0.5rem",
  },

  mobileLinkHover: {
    backgroundColor: "hsl(214, 20%, 95%)",
  },

  activeMobileLink: {
    color: "hsl(38, 92%, 50%)",
    fontWeight: "600",
    backgroundColor: "hsl(38, 92%, 95%)",
  },
};

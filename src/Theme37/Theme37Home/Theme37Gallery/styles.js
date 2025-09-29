import heroBackground from "@/assets/hero-bg.jpg";

export const bannerStyles = {
  section: {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    backgroundImage: `linear-gradient(rgba(21, 45, 82, 0.8), rgba(21, 45, 82, 0.6)), url(${heroBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    position: "relative",
    zIndex: 10,
    width: "100%",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "3rem",
    alignItems: "center",
  },

  content: {
    color: "white",
  },

  title: {
    fontSize: "clamp(3rem, 6vw, 4rem)",
    fontWeight: "bold",
    lineHeight: "1.2",
    marginBottom: "1.5rem",
  },

  accent: {
    color: "hsl(38, 92%, 50%)",
  },

  subtitle: {
    fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
    opacity: 0.9,
    lineHeight: "1.6",
    marginBottom: "2rem",
  },

  buttons: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    paddingTop: "1rem",
    "@media (min-width: 640px)": {
      flexDirection: "row",
    },
  },

  buttonSecondary: {
    background: "hsl(214, 12%, 96%)",
    color: "hsl(214, 24%, 12%)",
    border: "none",
    padding: "0.75rem 2rem",
    borderRadius: "0.375rem",
    fontWeight: "500",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.15s ease-out",
    boxShadow: "0 8px 32px hsl(38, 92%, 50%, 0.25)",
  },

  buttonOutline: {
    border: "2px solid white",
    color: "white",
    background: "transparent",
    padding: "0.75rem 2rem",
    borderRadius: "0.375rem",
    fontWeight: "500",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.15s ease-out",
  },

  icon: {
    marginLeft: "0.5rem",
  },

  imageContainer: {
    display: "flex",
    justifyContent: "center",
  },

  imageWrapper: {
    position: "relative",
  },

  imageBlur: {
    position: "absolute",
    inset: "0",
    background: "linear-gradient(135deg, hsl(38, 92%, 50%), hsl(38, 92%, 60%))",
    borderRadius: "1rem",
    filter: "blur(2rem)",
    opacity: 0.3,
    transform: "scale(1.1)",
  },

  image: {
    position: "relative",
    borderRadius: "1rem",
    boxShadow: "0 20px 40px hsl(214, 84%, 15%, 0.15)",
    maxWidth: "28rem",
    width: "100%",
    height: "auto",
  },

  scrollIndicator: {
    position: "absolute",
    bottom: "2rem",
    left: "50%",
    transform: "translateX(-50%)",
    animation: "bounce 2s infinite",
  },

  scrollIndicatorInner: {
    width: "1.5rem",
    height: "2.5rem",
    border: "2px solid white",
    borderRadius: "9999px",
    display: "flex",
    justifyContent: "center",
  },

  scrollIndicatorDot: {
    width: "0.25rem",
    height: "0.75rem",
    backgroundColor: "white",
    borderRadius: "9999px",
    marginTop: "0.5rem",
  },
};

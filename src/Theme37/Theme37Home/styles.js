export const getHomeStyles = (isMobile) => ({
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },

  main: {
    flex: 1,
    paddingTop: "4rem",
  },

  heroSection: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, hsl(214, 84%, 15%) 0%, hsl(214, 45%, 25%) 100%)",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },

  heroContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    width: "100%",
  },

  heroGrid: {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
    gap: isMobile ? "2rem" : "4rem",
    alignItems: "center",
  },

  heroContent: {
    color: "white",
  },

  heroTitle: {
    fontSize: isMobile ? "2.5rem" : "3.5rem",
    fontWeight: "bold",
    lineHeight: "1.1",
    marginBottom: "1.5rem",
  },

  heroAccent: {
    color: "hsl(38, 92%, 50%)",
  },

  heroSubtitle: {
    fontSize: isMobile ? "1.125rem" : "1.25rem",
    lineHeight: "1.6",
    marginBottom: "2rem",
    opacity: "0.9",
  },

  heroButtons: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
    flexDirection: isMobile ? "column" : "row",
    alignItems: isMobile ? "center" : "flex-start",
  },

  buttonSecondary: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.75rem 1.5rem",
    background: "hsl(38, 92%, 50%)",
    color: "white",
    textDecoration: "none",
    borderRadius: "0.5rem",
    fontWeight: "500",
    transition: "all 0.15s ease-out",
  },

  buttonOutline: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.75rem 1.5rem",
    background: "transparent",
    color: "white",
    textDecoration: "none",
    border: "2px solid white",
    borderRadius: "0.5rem",
    fontWeight: "500",
    transition: "all 0.15s ease-out",
  },

  heroImageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  heroImageWrapper: {
    position: "relative",
    width: isMobile ? "250px" : "300px",
    height: isMobile ? "330px" : "400px",
    borderRadius: "1rem",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
  },

  heroImageBlur: {
    position: "absolute",
    top: "-10px",
    left: "-10px",
    right: "-10px",
    bottom: "-10px",
    background: "hsl(38, 92%, 50%, 0.2)",
    filter: "blur(20px)",
    zIndex: 1,
  },

  heroImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "relative",
    zIndex: 2,
  },

  scrollIndicator: {
    position: "absolute",
    bottom: "2rem",
    left: "50%",
    transform: "translateX(-50%)",
    width: "2px",
    height: "60px",
    background: "rgba(255, 255, 255, 0.3)",
    borderRadius: "1px",
  },

  scrollIndicatorInner: {
    width: "2px",
    height: "20px",
    background: "white",
    borderRadius: "1px",
  },

  highlightsSection: {
    padding: "5rem 0",
    background: "hsl(0, 0%, 100%)",
  },

  highlightsContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
  },

  highlightsHeader: {
    textAlign: "center",
    marginBottom: "4rem",
  },

  highlightsTitle: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "hsl(214, 84%, 15%)",
    marginBottom: "1rem",
  },

  highlightsSubtitle: {
    fontSize: "1.25rem",
    color: "hsl(214, 16%, 46%)",
  },

  highlightsGrid: {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(250px, 1fr))",
    gap: isMobile ? "1.5rem" : "2rem",
  },

  highlightCard: {
    background: "white",
    padding: "2rem",
    borderRadius: "1rem",
    border: "1px solid hsl(214, 20%, 90%)",
    boxShadow: "0 4px 20px hsl(214, 84%, 15%, 0.08)",
    textAlign: "center",
    transition: "transform 0.15s ease-out",
  },

  highlightIconWrapper: {
    width: "4rem",
    height: "4rem",
    background: "hsl(38, 92%, 50%, 0.1)",
    borderRadius: "0.75rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 1.5rem",
  },

  highlightIcon: {
    color: "hsl(38, 92%, 50%)",
  },

  highlightNumber: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "hsl(214, 84%, 15%)",
    marginBottom: "0.5rem",
  },

  highlightText: {
    fontSize: "1rem",
    color: "hsl(214, 16%, 46%)",
  },

  visionSection: {
    padding: "5rem 0",
    background: "hsl(214, 84%, 15%)",
    color: "white",
  },

  visionContainer: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "0 1rem",
    textAlign: "center",
  },

  visionIcon: {
    color: "hsl(38, 92%, 50%)",
    marginBottom: "2rem",
  },

  visionQuote: {
    fontSize: isMobile ? "1.5rem" : "1.75rem",
    fontStyle: "italic",
    lineHeight: "1.6",
    marginBottom: "2rem",
  },

  visionCite: {
    fontSize: "1.125rem",
    fontWeight: "500",
    opacity: "0.9",
  },

  quickAccessSection: {
    padding: "5rem 0",
    background: "hsl(0, 0%, 100%)",
  },

  quickAccessContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
  },

  quickAccessHeader: {
    textAlign: "center",
    marginBottom: "4rem",
  },

  quickAccessTitle: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "hsl(214, 84%, 15%)",
    marginBottom: "1rem",
  },

  quickAccessSubtitle: {
    fontSize: "1.25rem",
    color: "hsl(214, 16%, 46%)",
  },

  quickAccessGrid: {
    display: "grid",
    gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(auto-fit, minmax(200px, 1fr))",
    gap: isMobile ? "1rem" : "1.5rem",
  },

  quickAccessButton: {
    height: isMobile ? "5rem" : "6rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    border: "1px solid hsl(214, 20%, 90%)",
    borderRadius: "0.75rem",
    background: "white",
    color: "hsl(214, 84%, 15%)",
    textDecoration: "none",
    transition: "all 0.15s ease-out",
    padding: isMobile ? "0.75rem" : "1rem",
  },
});
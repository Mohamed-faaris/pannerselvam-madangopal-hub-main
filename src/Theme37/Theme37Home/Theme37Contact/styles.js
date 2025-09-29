export const quickAccessStyles = {
  section: {
    padding: "5rem 0",
    background: "hsl(0, 0%, 100%)",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
  },

  header: {
    textAlign: "center",
    marginBottom: "4rem",
  },

  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "hsl(214, 84%, 15%)",
    marginBottom: "1rem",
  },

  subtitle: {
    fontSize: "1.25rem",
    color: "hsl(214, 16%, 46%)",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1.5rem",
  },

  button: {
    height: "6rem",
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
    padding: "1rem",
  },

  buttonHover: {
    borderColor: "hsl(38, 92%, 50%)",
    boxShadow: "0 4px 20px hsl(214, 84%, 15%, 0.08)",
    transform: "translateY(-2px)",
  },
};

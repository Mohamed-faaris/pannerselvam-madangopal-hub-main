export const leadershipStyles = {
  section: {
    padding: "5rem 0",
    background: "linear-gradient(180deg, hsl(0, 0%, 100%), hsl(214, 12%, 98%))",
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
    maxWidth: "32rem",
    margin: "0 auto",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
  },

  card: {
    textAlign: "center",
    padding: "2rem",
    boxShadow: "0 4px 20px hsl(214, 84%, 15%, 0.08)",
    border: "1px solid hsl(214, 20%, 90%)",
    borderRadius: "0.75rem",
    background: "white",
    transition: "all 0.15s ease-out",
  },

  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
  },

  iconWrapper: {
    width: "4rem",
    height: "4rem",
    background: "linear-gradient(135deg, hsl(38, 92%, 50%), hsl(38, 92%, 60%))",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 1rem",
  },

  highlightIcon: {
    color: "hsl(214, 84%, 15%)",
  },

  number: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "hsl(214, 84%, 15%)",
    marginBottom: "0.5rem",
  },

  text: {
    color: "hsl(214, 16%, 46%)",
  },
};

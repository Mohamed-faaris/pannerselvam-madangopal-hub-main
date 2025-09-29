export const footerStyles = {
  footer: {
    background: "hsl(214, 84%, 15%)",
    color: "hsl(0, 0%, 98%)",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "3rem 1rem",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
  },

  section: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },

  title: {
    fontSize: "1.125rem",
    fontWeight: "600",
  },

  subtitle: {
    fontWeight: "600",
  },

  description: {
    fontSize: "0.875rem",
    opacity: 0.9,
    lineHeight: "1.5",
  },

  linksContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },

  link: {
    fontSize: "0.875rem",
    opacity: 0.9,
    textDecoration: "none",
    color: "inherit",
    transition: "opacity 0.15s ease-out",
  },

  socialContainer: {
    display: "flex",
    gap: "0.75rem",
  },

  socialButton: {
    padding: "0.5rem",
    color: "hsl(0, 0%, 98%)",
    backgroundColor: "transparent",
    border: "none",
    borderRadius: "0.375rem",
    cursor: "pointer",
    transition: "all 0.15s ease-out",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  newsletterText: {
    fontSize: "0.875rem",
    opacity: 0.9,
    lineHeight: "1.5",
  },

  newsletterForm: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },

  emailInput: {
    padding: "0.75rem",
    borderRadius: "0.375rem",
    border: "1px solid hsl(214, 20%, 90%)",
    fontSize: "0.875rem",
    outline: "none",
  },

  subscribeButton: {
    padding: "0.75rem 1.5rem",
    background: "hsl(38, 92%, 50%)",
    color: "hsl(214, 84%, 15%)",
    border: "none",
    borderRadius: "0.375rem",
    fontSize: "0.875rem",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.15s ease-out",
  },

  bottomSection: {
    borderTop: "1px solid hsl(214, 84%, 25%)",
    marginTop: "2rem",
    paddingTop: "2rem",
  },

  bottomContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "1rem",
  },

  copyright: {
    fontSize: "0.875rem",
    opacity: 0.8,
  },

  bottomLinks: {
    display: "flex",
    gap: "1.5rem",
  },

  bottomLink: {
    fontSize: "0.875rem",
    opacity: 0.8,
    textDecoration: "none",
    color: "inherit",
    transition: "opacity 0.15s ease-out",
  },
};

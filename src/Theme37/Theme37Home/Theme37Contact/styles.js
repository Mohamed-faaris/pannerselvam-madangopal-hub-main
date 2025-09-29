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

export const contactStyles = {
  section: {
    padding: "5rem 0",
    background: "hsl(0, 0%, 100%)",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
  },

  hero: {
    textAlign: "center",
    marginBottom: "4rem",
  },

  heroTitle: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "hsl(214, 84%, 15%)",
    marginBottom: "1rem",
  },

  heroSubtitle: {
    fontSize: "1.25rem",
    color: "hsl(214, 16%, 46%)",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: "1.6",
  },

  contactGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "4rem",
    marginBottom: "4rem",
  },

  formSection: {
    background: "white",
    padding: "2rem",
    borderRadius: "1rem",
    border: "1px solid hsl(214, 20%, 90%)",
    boxShadow: "0 4px 20px hsl(214, 84%, 15%, 0.08)",
  },

  formCard: {
    // Same as formSection
  },

  formHeader: {
    marginBottom: "2rem",
  },

  formTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "hsl(214, 84%, 15%)",
    marginBottom: "0.5rem",
  },

  formSubtitle: {
    fontSize: "1rem",
    color: "hsl(214, 16%, 46%)",
    lineHeight: "1.5",
  },

  form: {
    // No specific styles needed
  },

  formRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
    marginBottom: "1.5rem",
  },

  inputGroup: {
    marginBottom: "1.5rem",
  },

  label: {
    display: "block",
    fontSize: "0.875rem",
    fontWeight: "500",
    color: "hsl(214, 84%, 15%)",
    marginBottom: "0.5rem",
  },

  input: {
    width: "100%",
    padding: "0.75rem",
    border: "1px solid hsl(214, 20%, 90%)",
    borderRadius: "0.5rem",
    fontSize: "1rem",
    color: "hsl(214, 84%, 15%)",
    background: "white",
    transition: "border-color 0.15s ease-out",
  },

  textarea: {
    width: "100%",
    padding: "0.75rem",
    border: "1px solid hsl(214, 20%, 90%)",
    borderRadius: "0.5rem",
    fontSize: "1rem",
    color: "hsl(214, 84%, 15%)",
    background: "white",
    minHeight: "120px",
    resize: "vertical",
    transition: "border-color 0.15s ease-out",
  },

  select: {
    width: "100%",
    padding: "0.75rem",
    border: "1px solid hsl(214, 20%, 90%)",
    borderRadius: "0.5rem",
    fontSize: "1rem",
    color: "hsl(214, 84%, 15%)",
    background: "white",
    transition: "border-color 0.15s ease-out",
  },

  submitButton: {
    width: "100%",
    padding: "0.75rem 1.5rem",
    background: "hsl(38, 92%, 50%)",
    color: "white",
    border: "none",
    borderRadius: "0.5rem",
    fontSize: "1rem",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background-color 0.15s ease-out",
  },

  infoSection: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },

  infoCard: {
    background: "white",
    padding: "2rem",
    borderRadius: "1rem",
    border: "1px solid hsl(214, 20%, 90%)",
    boxShadow: "0 4px 20px hsl(214, 84%, 15%, 0.08)",
  },

  infoTitle: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "hsl(214, 84%, 15%)",
    marginBottom: "1rem",
  },

  infoList: {
    // No specific styles needed
  },

  infoItem: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "1rem",
  },

  iconWrapper: {
    width: "2.5rem",
    height: "2.5rem",
    background: "hsl(38, 92%, 50%, 0.1)",
    borderRadius: "0.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    color: "hsl(38, 92%, 50%)",
  },

  infoLabel: {
    fontSize: "0.875rem",
    fontWeight: "500",
    color: "hsl(214, 84%, 15%)",
    marginBottom: "0.25rem",
  },

  infoValue: {
    fontSize: "1rem",
    color: "hsl(214, 16%, 46%)",
  },

  speakingHeader: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    marginBottom: "1rem",
  },

  speakingIcon: {
    color: "hsl(38, 92%, 50%)",
  },

  speakingText: {
    fontSize: "1rem",
    color: "hsl(214, 16%, 46%)",
    marginBottom: "1rem",
    lineHeight: "1.6",
  },

  speakingList: {
    fontSize: "1rem",
    color: "hsl(214, 16%, 46%)",
    lineHeight: "1.8",
  },

  socialButtons: {
    display: "flex",
    gap: "1rem",
  },

  socialButton: {
    width: "3rem",
    height: "3rem",
    background: "hsl(38, 92%, 50%, 0.1)",
    border: "none",
    borderRadius: "0.5rem",
    color: "hsl(38, 92%, 50%)",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.15s ease-out",
  },

  responseCard: {
    background: "white",
    padding: "2rem",
    borderRadius: "1rem",
    border: "1px solid hsl(214, 20%, 90%)",
    boxShadow: "0 4px 20px hsl(214, 84%, 15%, 0.08)",
    textAlign: "center",
  },

  responseTitle: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "hsl(214, 84%, 15%)",
    marginBottom: "1rem",
  },

  responseText: {
    fontSize: "1rem",
    color: "hsl(214, 16%, 46%)",
    lineHeight: "1.6",
  },

  newsletterSection: {
    background: "hsl(214, 84%, 15%)",
    padding: "4rem 0",
    textAlign: "center",
  },

  newsletterContent: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "0 1rem",
  },

  newsletterTitle: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "white",
    marginBottom: "1rem",
  },

  newsletterSubtitle: {
    fontSize: "1.25rem",
    color: "hsl(214, 32%, 80%)",
    marginBottom: "2rem",
    lineHeight: "1.6",
  },

  newsletterForm: {
    display: "flex",
    gap: "1rem",
    maxWidth: "500px",
    margin: "0 auto",
  },

  newsletterInput: {
    flex: "1",
    padding: "0.75rem 1rem",
    border: "none",
    borderRadius: "0.5rem",
    fontSize: "1rem",
    color: "hsl(214, 84%, 15%)",
  },

  newsletterButton: {
    padding: "0.75rem 1.5rem",
    background: "hsl(38, 92%, 50%)",
    color: "white",
    border: "none",
    borderRadius: "0.5rem",
    fontSize: "1rem",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background-color 0.15s ease-out",
  },

  newsletterNote: {
    fontSize: "0.875rem",
    color: "hsl(214, 32%, 80%)",
    marginTop: "1rem",
  },

  // Responsive styles
  "@media (max-width: 768px)": {
    contactGrid: {
      gridTemplateColumns: "1fr",
      gap: "2rem",
    },

    heroTitle: {
      fontSize: "2rem",
    },

    heroSubtitle: {
      fontSize: "1.125rem",
    },

    formRow: {
      gridTemplateColumns: "1fr",
    },

    newsletterForm: {
      flexDirection: "column",
    },
  },
};

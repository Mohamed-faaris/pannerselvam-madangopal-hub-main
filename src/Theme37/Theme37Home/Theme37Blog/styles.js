export const blogStyles = {
  section: {
    padding: "5rem 0",
    backgroundColor: "#f8fafc",
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
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#1a365d",
    marginBottom: "1.5rem",
    lineHeight: "1.2",
  },

  heroSubtitle: {
    fontSize: "1.25rem",
    color: "#718096",
    maxWidth: "48rem",
    margin: "0 auto",
    lineHeight: "1.6",
  },

  featuredSection: {
    marginBottom: "4rem",
  },

  sectionTitle: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#1a365d",
    marginBottom: "1rem",
    textAlign: "center",
  },

  sectionSubtitle: {
    color: "#718096",
    textAlign: "center",
    marginBottom: "2rem",
  },

  featuredCard: {
    maxWidth: "5xl",
    margin: "0 auto",
    border: "1px solid #e2e8f0",
    borderRadius: "0.5rem",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    backgroundColor: "white",
  },

  featuredGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    "@media (min-width: 1024px)": {
      gridTemplateColumns: "1fr 1fr",
    },
  },

  featuredImageContainer: {
    position: "relative",
    height: "256px",
    "@media (min-width: 1024px)": {
      height: "auto",
    },
  },

  featuredImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  categoryBadge: {
    position: "absolute",
    top: "1rem",
    left: "1rem",
    backgroundColor: "#fbbf24",
    color: "#1a365d",
    padding: "0.25rem 0.75rem",
    borderRadius: "9999px",
    fontSize: "0.875rem",
    fontWeight: "500",
  },

  featuredContent: {
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "@media (min-width: 1024px)": {
      padding: "2rem",
    },
  },

  featuredTitle: {
    fontSize: "1.875rem",
    fontWeight: "bold",
    color: "#1a365d",
    marginBottom: "1rem",
    lineHeight: "1.3",
    "@media (min-width: 1024px)": {
      fontSize: "2rem",
    },
  },

  featuredExcerpt: {
    color: "#718096",
    marginBottom: "1.5rem",
    lineHeight: "1.6",
  },

  featuredMeta: {
    display: "flex",
    gap: "1rem",
    marginBottom: "1.5rem",
  },

  metaItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
    fontSize: "0.875rem",
    color: "#718096",
  },

  metaIcon: {
    color: "#718096",
  },

  readButton: {
    backgroundColor: "#1a365d",
    color: "white",
    border: "none",
    padding: "0.75rem 1.5rem",
    borderRadius: "0.375rem",
    fontWeight: "500",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    transition: "background-color 0.2s ease",
  },

  buttonIcon: {
    marginLeft: "0.5rem",
  },

  blogSection: {
    padding: "4rem 0",
    backgroundColor: "#f1f5f9",
    borderRadius: "0.5rem",
    marginBottom: "4rem",
  },

  blogHeader: {
    textAlign: "center",
    marginBottom: "2rem",
  },

  categoryFilter: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "0.5rem",
    marginBottom: "3rem",
  },

  categoryButton: {
    padding: "0.5rem 1rem",
    border: "1px solid #e2e8f0",
    borderRadius: "0.375rem",
    backgroundColor: "transparent",
    color: "#4a5568",
    cursor: "pointer",
    transition: "all 0.2s ease",
    fontWeight: "500",
  },

  categoryButtonActive: {
    backgroundColor: "#1a365d",
    color: "white",
    border: "none",
  },

  blogGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    marginBottom: "3rem",
  },

  blogCard: {
    border: "1px solid #e2e8f0",
    borderRadius: "0.5rem",
    overflow: "hidden",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    backgroundColor: "white",
  },

  blogCardHover: {
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    transform: "translateY(-2px)",
  },

  blogImageContainer: {
    position: "relative",
    overflow: "hidden",
    height: "192px",
  },

  blogImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },

  blogImageHover: {
    transform: "scale(1.05)",
  },

  blogCategoryBadge: {
    position: "absolute",
    top: "1rem",
    left: "1rem",
    backgroundColor: "rgba(255,255,255,0.9)",
    color: "#4a5568",
    padding: "0.25rem 0.75rem",
    borderRadius: "9999px",
    fontSize: "0.75rem",
    fontWeight: "500",
  },

  blogContent: {
    padding: "1.5rem",
  },

  blogTitle: {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#1a365d",
    marginBottom: "0.75rem",
    lineHeight: "1.3",
    transition: "color 0.2s ease",
  },

  blogTitleHover: {
    color: "#fbbf24",
  },

  blogExcerpt: {
    color: "#718096",
    fontSize: "0.875rem",
    marginBottom: "1rem",
    lineHeight: "1.5",
  },

  blogMeta: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "0.75rem",
    color: "#718096",
  },

  emptyState: {
    textAlign: "center",
    padding: "3rem",
  },

  emptyStateText: {
    color: "#718096",
    fontSize: "1.125rem",
  },

  loadMoreContainer: {
    textAlign: "center",
    marginTop: "2rem",
  },

  loadMoreButton: {
    border: "1px solid #e2e8f0",
    backgroundColor: "transparent",
    color: "#4a5568",
    padding: "0.75rem 2rem",
    borderRadius: "0.375rem",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },

  newsletterSection: {
    backgroundColor: "#1a365d",
    color: "white",
    padding: "5rem 0",
    borderRadius: "0.5rem",
  },

  newsletterContent: {
    maxWidth: "32rem",
    margin: "0 auto",
    textAlign: "center",
  },

  newsletterTitle: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },

  newsletterSubtitle: {
    fontSize: "1.125rem",
    opacity: "0.9",
    marginBottom: "2rem",
    lineHeight: "1.6",
  },

  newsletterForm: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    maxWidth: "28rem",
    margin: "0 auto",
    "@media (min-width: 640px)": {
      flexDirection: "row",
    },
  },

  emailInput: {
    flex: 1,
    padding: "0.75rem 1rem",
    borderRadius: "0.375rem",
    border: "none",
    fontSize: "1rem",
    color: "#1a365d",
    outline: "none",
  },

  subscribeButton: {
    backgroundColor: "#fbbf24",
    color: "#1a365d",
    border: "none",
    padding: "0.75rem 2rem",
    borderRadius: "0.375rem",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  },
};

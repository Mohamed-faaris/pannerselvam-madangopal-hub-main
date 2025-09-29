export const galleryStyles = {
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
    marginBottom: "3rem",
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

  filters: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1rem",
    marginBottom: "3rem",
  },

  filterButton: {
    padding: "0.5rem 1rem",
    border: "1px solid #e2e8f0",
    borderRadius: "0.375rem",
    backgroundColor: "transparent",
    color: "#4a5568",
    cursor: "pointer",
    transition: "all 0.2s ease",
    fontWeight: "500",
  },

  filterButtonActive: {
    backgroundColor: "#1a365d",
    color: "white",
    border: "none",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    marginBottom: "4rem",
  },

  card: {
    border: "1px solid #e2e8f0",
    borderRadius: "0.5rem",
    overflow: "hidden",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    backgroundColor: "white",
  },

  cardHover: {
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    transform: "translateY(-2px)",
  },

  cardImageContainer: {
    position: "relative",
    overflow: "hidden",
    height: "256px",
  },

  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },

  cardImageHover: {
    transform: "scale(1.05)",
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

  cardContent: {
    padding: "1.5rem",
  },

  cardTitle: {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#1a365d",
    marginBottom: "0.5rem",
    lineHeight: "1.3",
    transition: "color 0.2s ease",
  },

  cardTitleHover: {
    color: "#fbbf24",
  },

  cardDescription: {
    color: "#718096",
    fontSize: "0.875rem",
    lineHeight: "1.5",
  },

  emptyState: {
    textAlign: "center",
    padding: "3rem",
  },

  emptyStateText: {
    color: "#718096",
    fontSize: "1.125rem",
  },

  statsSection: {
    backgroundColor: "#1a365d",
    color: "white",
    padding: "5rem 0",
    borderRadius: "0.5rem",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "2rem",
    textAlign: "center",
  },

  statNumber: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#fbbf24",
    marginBottom: "0.5rem",
    lineHeight: "1.2",
  },

  statLabel: {
    fontSize: "0.875rem",
    opacity: "0.9",
    lineHeight: "1.4",
  },
};

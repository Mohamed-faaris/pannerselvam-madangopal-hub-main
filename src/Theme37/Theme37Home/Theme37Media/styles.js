export const mediaStyles = {
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

  sectionHeader: {
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

  playOverlay: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  },

  playButton: {
    width: "4rem",
    height: "4rem",
    backgroundColor: "#fbbf24",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  playIcon: {
    color: "#1a365d",
    marginLeft: "2px",
  },

  durationBadge: {
    position: "absolute",
    bottom: "1rem",
    right: "1rem",
    backgroundColor: "rgba(0,0,0,0.8)",
    color: "white",
    padding: "0.25rem 0.5rem",
    borderRadius: "0.25rem",
    fontSize: "0.875rem",
  },

  featuredContent: {
    padding: "2rem",
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

  featuredDescription: {
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

  watchButton: {
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
    marginRight: "0.5rem",
  },

  videoSection: {
    padding: "4rem 0",
    backgroundColor: "#f1f5f9",
    borderRadius: "0.5rem",
    marginBottom: "4rem",
  },

  videoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
  },

  videoCard: {
    border: "1px solid #e2e8f0",
    borderRadius: "0.5rem",
    overflow: "hidden",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    backgroundColor: "white",
  },

  videoCardHover: {
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    transform: "translateY(-2px)",
  },

  videoThumbnailContainer: {
    position: "relative",
    height: "192px",
  },

  videoThumbnail: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  videoPlayOverlay: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    transition: "opacity 0.2s ease",
  },

  videoPlayButton: {
    width: "3rem",
    height: "3rem",
    backgroundColor: "#fbbf24",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  videoPlayIcon: {
    color: "#1a365d",
    marginLeft: "2px",
  },

  videoDurationBadge: {
    position: "absolute",
    bottom: "0.5rem",
    right: "0.5rem",
    backgroundColor: "rgba(0,0,0,0.8)",
    color: "white",
    padding: "0.25rem 0.5rem",
    borderRadius: "0.25rem",
    fontSize: "0.75rem",
  },

  videoContent: {
    padding: "1.5rem",
  },

  videoTitle: {
    fontSize: "1.125rem",
    fontWeight: "600",
    color: "#1a365d",
    marginBottom: "0.75rem",
    lineHeight: "1.3",
  },

  videoMeta: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "0.75rem",
    color: "#718096",
  },

  pressSection: {
    marginBottom: "4rem",
  },

  pressGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gap: "2rem",
    maxWidth: "5xl",
    margin: "0 auto",
  },

  pressCard: {
    border: "1px solid #e2e8f0",
    borderRadius: "0.5rem",
    padding: "1.5rem",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    backgroundColor: "white",
    transition: "all 0.2s ease",
  },

  pressHeader: {
    marginBottom: "1rem",
  },

  pressMeta: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    marginBottom: "0.75rem",
  },

  pressIcon: {
    color: "#fbbf24",
  },

  publication: {
    fontSize: "0.875rem",
    color: "#718096",
  },

  articleType: {
    fontSize: "0.75rem",
    backgroundColor: "#e2e8f0",
    color: "#4a5568",
    padding: "0.25rem 0.5rem",
    borderRadius: "9999px",
  },

  pressTitle: {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#1a365d",
    marginBottom: "0.75rem",
    lineHeight: "1.3",
  },

  pressExcerpt: {
    color: "#718096",
    fontSize: "0.875rem",
    marginBottom: "1rem",
    lineHeight: "1.5",
  },

  pressFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  pressDate: {
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
    fontSize: "0.75rem",
    color: "#718096",
  },

  dateIcon: {
    color: "#718096",
  },

  readArticleButton: {
    border: "none",
    backgroundColor: "transparent",
    color: "#fbbf24",
    fontSize: "0.875rem",
    fontWeight: "500",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.25rem",
    transition: "color 0.2s ease",
  },

  externalIcon: {
    marginLeft: "0.25rem",
  },

  podcastSection: {
    padding: "4rem 0",
    backgroundColor: "#f1f5f9",
    borderRadius: "0.5rem",
    marginBottom: "4rem",
  },

  podcastGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
    maxWidth: "4xl",
    margin: "0 auto",
  },

  podcastCard: {
    border: "1px solid #e2e8f0",
    borderRadius: "0.5rem",
    padding: "1.5rem",
    textAlign: "center",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    backgroundColor: "white",
    transition: "all 0.2s ease",
  },

  podcastIcon: {
    width: "4rem",
    height: "4rem",
    backgroundColor: "#fbbf24",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 1rem",
  },

  micIcon: {
    color: "#1a365d",
  },

  podcastTitle: {
    fontSize: "1rem",
    fontWeight: "600",
    color: "#1a365d",
    marginBottom: "0.5rem",
  },

  podcastEpisode: {
    fontSize: "0.875rem",
    color: "#718096",
    marginBottom: "0.75rem",
  },

  podcastMeta: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "0.75rem",
    color: "#718096",
    marginBottom: "0.75rem",
  },

  podcastDate: {
    fontSize: "0.75rem",
    color: "#4a5568",
    fontWeight: "500",
  },

  contactSection: {
    backgroundColor: "#1a365d",
    color: "white",
    padding: "5rem 0",
    borderRadius: "0.5rem",
  },

  contactContent: {
    maxWidth: "32rem",
    margin: "0 auto",
    textAlign: "center",
  },

  contactTitle: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },

  contactSubtitle: {
    fontSize: "1.125rem",
    opacity: "0.9",
    marginBottom: "2rem",
    lineHeight: "1.6",
  },

  contactButton: {
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

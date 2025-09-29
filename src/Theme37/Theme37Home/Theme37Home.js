import React, { useState, useEffect } from "react";
import Theme37Gallery from "./Theme37Gallery";
import Theme37Media from "./Theme37Media";
import Theme37Blog from "./Theme37Blog";
import Theme37Contact from "./Theme37Contact";
import Theme37NavBar from "../Theme37NavBar";
import Theme37Footer from "../Theme37Footer";
import { ArrowRight, Award, Users, TrendingUp, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import portraitImage from "@/assets/pannerselvam-portrait.jpg";

const Theme37Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredQuickAccess, setHoveredQuickAccess] = useState(null);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  };

  const mainStyle = {
    flex: 1,
    paddingTop: "4rem",
  };

  const heroSectionStyle = {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, hsl(214, 84%, 15%) 0%, hsl(214, 45%, 25%) 100%)",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  };

  const heroContainerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    width: "100%",
  };

  const heroGridStyle = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
    gap: isMobile ? "2rem" : "4rem",
    alignItems: "center",
  };

  const heroContentStyle = {
    color: "white",
  };

  const heroTitleStyle = {
    fontSize: isMobile ? "2.5rem" : "3.5rem",
    fontWeight: "bold",
    lineHeight: "1.1",
    marginBottom: "1.5rem",
  };

  const heroAccentStyle = {
    color: "hsl(38, 92%, 50%)",
  };

  const heroSubtitleStyle = {
    fontSize: isMobile ? "1.125rem" : "1.25rem",
    lineHeight: "1.6",
    marginBottom: "2rem",
    opacity: "0.9",
  };

  const heroButtonsStyle = {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
    flexDirection: isMobile ? "column" : "row",
    alignItems: isMobile ? "center" : "flex-start",
  };

  const buttonSecondaryStyle = {
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
  };

  const buttonOutlineStyle = {
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
  };

  const heroImageContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const heroImageWrapperStyle = {
    position: "relative",
    width: isMobile ? "250px" : "300px",
    height: isMobile ? "330px" : "400px",
    borderRadius: "1rem",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
  };

  const heroImageBlurStyle = {
    position: "absolute",
    top: "-10px",
    left: "-10px",
    right: "-10px",
    bottom: "-10px",
    background: "hsl(38, 92%, 50%, 0.2)",
    filter: "blur(20px)",
    zIndex: 1,
  };

  const heroImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "relative",
    zIndex: 2,
  };

  const scrollIndicatorStyle = {
    position: "absolute",
    bottom: "2rem",
    left: "50%",
    transform: "translateX(-50%)",
    width: "2px",
    height: "60px",
    background: "rgba(255, 255, 255, 0.3)",
    borderRadius: "1px",
  };

  const scrollIndicatorInnerStyle = {
    width: "2px",
    height: "20px",
    background: "white",
    borderRadius: "1px",
  };

  const highlightsSectionStyle = {
    padding: "5rem 0",
    background: "hsl(0, 0%, 100%)",
  };

  const highlightsContainerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
  };

  const highlightsHeaderStyle = {
    textAlign: "center",
    marginBottom: "4rem",
  };

  const highlightsTitleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "hsl(214, 84%, 15%)",
    marginBottom: "1rem",
  };

  const highlightsSubtitleStyle = {
    fontSize: "1.25rem",
    color: "hsl(214, 16%, 46%)",
  };

  const highlightsGridStyle = {
    display: "grid",
    gridTemplateColumns: isMobile
      ? "1fr"
      : "repeat(auto-fit, minmax(250px, 1fr))",
    gap: isMobile ? "1.5rem" : "2rem",
  };

  const highlightCardStyle = {
    background: "white",
    padding: "2rem",
    borderRadius: "1rem",
    border: "1px solid hsl(214, 20%, 90%)",
    boxShadow: "0 4px 20px hsl(214, 84%, 15%, 0.08)",
    textAlign: "center",
    transition: "transform 0.15s ease-out",
  };

  const highlightIconWrapperStyle = {
    width: "4rem",
    height: "4rem",
    background: "hsl(38, 92%, 50%, 0.1)",
    borderRadius: "0.75rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 1.5rem",
  };

  const highlightIconStyle = {
    color: "hsl(38, 92%, 50%)",
  };

  const highlightNumberStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "hsl(214, 84%, 15%)",
    marginBottom: "0.5rem",
  };

  const highlightTextStyle = {
    fontSize: "1rem",
    color: "hsl(214, 16%, 46%)",
  };

  const visionSectionStyle = {
    padding: "5rem 0",
    background: "hsl(214, 84%, 15%)",
    color: "white",
  };

  const visionContainerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "0 1rem",
    textAlign: "center",
  };

  const visionIconStyle = {
    color: "hsl(38, 92%, 50%)",
    marginBottom: "2rem",
  };

  const visionQuoteStyle = {
    fontSize: isMobile ? "1.5rem" : "1.75rem",
    fontStyle: "italic",
    lineHeight: "1.6",
    marginBottom: "2rem",
  };

  const visionCiteStyle = {
    fontSize: "1.125rem",
    fontWeight: "500",
    opacity: "0.9",
  };

  const quickAccessSectionStyle = {
    padding: "5rem 0",
    background: "hsl(0, 0%, 100%)",
  };

  const quickAccessContainerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
  };

  const quickAccessHeaderStyle = {
    textAlign: "center",
    marginBottom: "4rem",
  };

  const quickAccessTitleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "hsl(214, 84%, 15%)",
    marginBottom: "1rem",
  };

  const quickAccessSubtitleStyle = {
    fontSize: "1.25rem",
    color: "hsl(214, 16%, 46%)",
  };

  const quickAccessGridStyle = {
    display: "grid",
    gridTemplateColumns: isMobile
      ? "repeat(2, 1fr)"
      : "repeat(auto-fit, minmax(200px, 1fr))",
    gap: isMobile ? "1rem" : "1.5rem",
  };

  const quickAccessButtonStyle = {
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
  };
  const responsiveStyles = {
    heroGrid: {
      "@media (max-width: 768px)": {
        gridTemplateColumns: "1fr",
        gap: "2rem",
        textAlign: "center",
      },
    },
    heroTitle: {
      "@media (max-width: 768px)": {
        fontSize: "2.5rem",
      },
    },
    heroSubtitle: {
      "@media (max-width: 768px)": {
        fontSize: "1.125rem",
      },
    },
    heroButtons: {
      "@media (max-width: 768px)": {
        flexDirection: "column",
        alignItems: "center",
      },
    },
    heroImageWrapper: {
      "@media (max-width: 768px)": {
        width: "250px",
        height: "330px",
      },
    },
    highlightsGrid: {
      "@media (max-width: 768px)": {
        gridTemplateColumns: "1fr",
        gap: "1.5rem",
      },
    },
    visionQuote: {
      "@media (max-width: 768px)": {
        fontSize: "1.5rem",
      },
    },
    quickAccessGrid: {
      "@media (max-width: 768px)": {
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1rem",
      },
    },
    quickAccessButton: {
      "@media (max-width: 768px)": {
        height: "5rem",
        padding: "0.75rem",
      },
    },
  };

  return (
    <div style={containerStyle}>
      <Theme37NavBar />
      <main style={mainStyle}>
        {/* Hero Section */}
        <section style={heroSectionStyle}>
          <div style={heroContainerStyle}>
            <div style={heroGridStyle}>
              <div style={heroContentStyle}>
                <h1 style={heroTitleStyle}>
                  Leading Innovation in the
                  <span style={heroAccentStyle}> Digital Age</span>
                </h1>
                <p style={heroSubtitleStyle}>
                  CEO of Meity | Technology Visionary | Driving Transformational
                  Change in India's Digital Ecosystem
                </p>
                <div style={heroButtonsStyle}>
                  <Link
                    to="/about"
                    style={{
                      ...buttonSecondaryStyle,
                      ...(hoveredButton === "learn-more"
                        ? {
                            background: "hsl(38, 92%, 60%)",
                            transform: "translateY(-2px)",
                            boxShadow: "0 4px 12px rgba(38, 92, 50, 0.3)",
                          }
                        : {}),
                    }}
                    onMouseEnter={() => setHoveredButton("learn-more")}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                    Learn More <ArrowRight size={18} />
                  </Link>
                  <Link
                    to="/contact"
                    style={{
                      ...buttonOutlineStyle,
                      ...(hoveredButton === "contact"
                        ? {
                            background: "rgba(255, 255, 255, 0.1)",
                            borderColor: "hsl(38, 92%, 50%)",
                            color: "hsl(38, 92%, 50%)",
                            transform: "translateY(-2px)",
                          }
                        : {}),
                    }}
                    onMouseEnter={() => setHoveredButton("contact")}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>

              <div style={heroImageContainerStyle}>
                <div style={heroImageWrapperStyle}>
                  <div style={heroImageBlurStyle}></div>
                  <img
                    src={portraitImage}
                    alt="Pannerselvam Madanagopal - CEO of Meity"
                    style={heroImageStyle}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div style={scrollIndicatorStyle}>
            <div
              style={{
                ...scrollIndicatorInnerStyle,
                animation: "scrollPulse 2s infinite",
              }}
            ></div>
          </div>
        </section>

        {/* Key Highlights */}
        <section style={highlightsSectionStyle}>
          <div style={highlightsContainerStyle}>
            <div style={highlightsHeaderStyle}>
              <h2 style={highlightsTitleStyle}>Leadership Impact</h2>
              <p style={highlightsSubtitleStyle}>
                Driving digital transformation and technological advancement
                across India
              </p>
            </div>

            <div style={highlightsGridStyle}>
              <div
                style={{
                  ...highlightCardStyle,
                  ...(hoveredCard === 0
                    ? {
                        transform: "translateY(-4px)",
                        boxShadow: "0 8px 30px hsl(214, 84%, 15%, 0.15)",
                      }
                    : {}),
                }}
                onMouseEnter={() => setHoveredCard(0)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div>
                  <div style={highlightIconWrapperStyle}>
                    <Award style={highlightIconStyle} size={32} />
                  </div>
                  <h3 style={highlightNumberStyle}>15+ Years</h3>
                  <p style={highlightTextStyle}>
                    Leading Technology Innovation
                  </p>
                </div>
              </div>

              <div
                style={{
                  ...highlightCardStyle,
                  ...(hoveredCard === 1
                    ? {
                        transform: "translateY(-4px)",
                        boxShadow: "0 8px 30px hsl(214, 84%, 15%, 0.15)",
                      }
                    : {}),
                }}
                onMouseEnter={() => setHoveredCard(1)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div>
                  <div style={highlightIconWrapperStyle}>
                    <Users style={highlightIconStyle} size={32} />
                  </div>
                  <h3 style={highlightNumberStyle}>10M+</h3>
                  <p style={highlightTextStyle}>
                    Lives Impacted Through Digital Initiatives
                  </p>
                </div>
              </div>

              <div
                style={{
                  ...highlightCardStyle,
                  ...(hoveredCard === 2
                    ? {
                        transform: "translateY(-4px)",
                        boxShadow: "0 8px 30px hsl(214, 84%, 15%, 0.15)",
                      }
                    : {}),
                }}
                onMouseEnter={() => setHoveredCard(2)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div>
                  <div style={highlightIconWrapperStyle}>
                    <TrendingUp style={highlightIconStyle} size={32} />
                  </div>
                  <h3 style={highlightNumberStyle}>50+</h3>
                  <p style={highlightTextStyle}>
                    Digital Transformation Projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Statement */}
        <section style={visionSectionStyle}>
          <div style={visionContainerStyle}>
            <Quote style={visionIconStyle} size={48} />
            <blockquote style={visionQuoteStyle}>
              "Technology is not just about innovation; it's about creating
              meaningful impact that transforms societies and empowers people to
              achieve their full potential."
            </blockquote>
            <cite style={visionCiteStyle}>— Pannerselvam Madanagopal</cite>
          </div>
        </section>

        {/* Quick Access */}
        <section style={quickAccessSectionStyle}>
          <div style={quickAccessContainerStyle}>
            <div style={quickAccessHeaderStyle}>
              <h2 style={quickAccessTitleStyle}>Explore More</h2>
              <p style={quickAccessSubtitleStyle}>
                Dive deeper into insights, achievements, and vision
              </p>
            </div>

            <div style={quickAccessGridStyle}>
              <Link
                to="/about"
                style={{
                  ...quickAccessButtonStyle,
                  ...(hoveredQuickAccess === "about"
                    ? {
                        borderColor: "hsl(38, 92%, 50%)",
                        boxShadow: "0 4px 20px hsl(214, 84%, 15%, 0.08)",
                        transform: "translateY(-2px)",
                      }
                    : {}),
                }}
                onMouseEnter={() => setHoveredQuickAccess("about")}
                onMouseLeave={() => setHoveredQuickAccess(null)}
              >
                <Users size={24} />
                <span>About Me</span>
              </Link>

              <Link
                to="/gallery"
                style={{
                  ...quickAccessButtonStyle,
                  ...(hoveredQuickAccess === "gallery"
                    ? {
                        borderColor: "hsl(38, 92%, 50%)",
                        boxShadow: "0 4px 20px hsl(214, 84%, 15%, 0.08)",
                        transform: "translateY(-2px)",
                      }
                    : {}),
                }}
                onMouseEnter={() => setHoveredQuickAccess("gallery")}
                onMouseLeave={() => setHoveredQuickAccess(null)}
              >
                <Award size={24} />
                <span>Gallery</span>
              </Link>

              <Link
                to="/blog"
                style={{
                  ...quickAccessButtonStyle,
                  ...(hoveredQuickAccess === "blog"
                    ? {
                        borderColor: "hsl(38, 92%, 50%)",
                        boxShadow: "0 4px 20px hsl(214, 84%, 15%, 0.08)",
                        transform: "translateY(-2px)",
                      }
                    : {}),
                }}
                onMouseEnter={() => setHoveredQuickAccess("blog")}
                onMouseLeave={() => setHoveredQuickAccess(null)}
              >
                <TrendingUp size={24} />
                <span>Insights</span>
              </Link>

              <Link
                to="/contact"
                style={{
                  ...quickAccessButtonStyle,
                  ...(hoveredQuickAccess === "contact"
                    ? {
                        borderColor: "hsl(38, 92%, 50%)",
                        boxShadow: "0 4px 20px hsl(214, 84%, 15%, 0.08)",
                        transform: "translateY(-2px)",
                      }
                    : {}),
                }}
                onMouseEnter={() => setHoveredQuickAccess("contact")}
                onMouseLeave={() => setHoveredQuickAccess(null)}
              >
                <ArrowRight size={24} />
                <span>Connect</span>
              </Link>
            </div>
          </div>
        </section>

        <Theme37Gallery />
        <Theme37Media />
        <Theme37Blog />
        <Theme37Contact />
      </main>
    </div>
  );
};

export default Theme37Home;

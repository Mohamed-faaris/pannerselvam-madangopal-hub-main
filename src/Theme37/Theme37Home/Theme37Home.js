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
import { getHomeStyles } from "./styles";

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

  const styles = getHomeStyles(isMobile);

  return (
    <div style={styles.container}>
      <Theme37NavBar />
      <main style={styles.main}>
        {/* Hero Section */}
        <section style={styles.heroSection}>
          <div style={styles.heroContainer}>
            <div style={styles.heroGrid}>
              <div style={styles.heroContent}>
                <h1 style={styles.heroTitle}>
                  Leading Innovation in the
                  <span style={styles.heroAccent}> Digital Age</span>
                </h1>
                <p style={styles.heroSubtitle}>
                  CEO of Meity | Technology Visionary | Driving Transformational
                  Change in India's Digital Ecosystem
                </p>
                <div style={styles.heroButtons}>
                  <Link
                    to="/about"
                    style={{
                      ...styles.buttonSecondary,
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
                      ...styles.buttonOutline,
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

              <div style={styles.heroImageContainer}>
                <div style={styles.heroImageWrapper}>
                  <div style={styles.heroImageBlur}></div>
                  <img
                    src={portraitImage}
                    alt="Pannerselvam Madanagopal - CEO of Meity"
                    style={styles.heroImage}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div style={styles.scrollIndicator}>
            <div
              style={{
                ...styles.scrollIndicatorInner,
                animation: "scrollPulse 2s infinite",
              }}
            ></div>
          </div>
        </section>

        {/* Key Highlights */}
        <section style={styles.highlightsSection}>
          <div style={styles.highlightsContainer}>
            <div style={styles.highlightsHeader}>
              <h2 style={styles.highlightsTitle}>Leadership Impact</h2>
              <p style={styles.highlightsSubtitle}>
                Driving digital transformation and technological advancement
                across India
              </p>
            </div>

            <div style={styles.highlightsGrid}>
              <div
                style={{
                  ...styles.highlightCard,
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
                  <div style={styles.highlightIconWrapper}>
                    <Award style={styles.highlightIcon} size={32} />
                  </div>
                  <h3 style={styles.highlightNumber}>15+ Years</h3>
                  <p style={styles.highlightText}>
                    Leading Technology Innovation
                  </p>
                </div>
              </div>

              <div
                style={{
                  ...styles.highlightCard,
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
                  <div style={styles.highlightIconWrapper}>
                    <Users style={styles.highlightIcon} size={32} />
                  </div>
                  <h3 style={styles.highlightNumber}>10M+</h3>
                  <p style={styles.highlightText}>
                    Lives Impacted Through Digital Initiatives
                  </p>
                </div>
              </div>

              <div
                style={{
                  ...styles.highlightCard,
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
                  <div style={styles.highlightIconWrapper}>
                    <TrendingUp style={styles.highlightIcon} size={32} />
                  </div>
                  <h3 style={styles.highlightNumber}>50+</h3>
                  <p style={styles.highlightText}>
                    Digital Transformation Projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Statement */}
        <section style={styles.visionSection}>
          <div style={styles.visionContainer}>
            <Quote style={styles.visionIcon} size={48} />
            <blockquote style={styles.visionQuote}>
              "Technology is not just about innovation; it's about creating
              meaningful impact that transforms societies and empowers people to
              achieve their full potential."
            </blockquote>
            <cite style={styles.visionCite}>— Pannerselvam Madanagopal</cite>
          </div>
        </section>

        {/* Quick Access */}
        <section style={styles.quickAccessSection}>
          <div style={styles.quickAccessContainer}>
            <div style={styles.quickAccessHeader}>
              <h2 style={styles.quickAccessTitle}>Explore More</h2>
              <p style={styles.quickAccessSubtitle}>
                Dive deeper into insights, achievements, and vision
              </p>
            </div>

            <div style={styles.quickAccessGrid}>
              <Link
                to="/about"
                style={{
                  ...styles.quickAccessButton,
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
                  ...styles.quickAccessButton,
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
                  ...styles.quickAccessButton,
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
                  ...styles.quickAccessButton,
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

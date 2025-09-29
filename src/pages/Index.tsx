import Layout from "@/components/layout/Layout";
import { ArrowRight, Award, Users, TrendingUp, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import portraitImage from "@/assets/pannerselvam-portrait.jpg";
import "./Index.css";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section hero-bg">
        <div className="hero-container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-title">
                Leading Innovation in the
                <span className="hero-accent"> Digital Age</span>
              </h1>
              <p className="hero-subtitle">
                CEO of Meity | Technology Visionary | Driving Transformational
                Change in India's Digital Ecosystem
              </p>
              <div className="hero-buttons">
                <Link to="/about" className="button-secondary">
                  Learn More <ArrowRight className="ml-2" size={18} />
                </Link>
                <Link to="/contact" className="button-outline">
                  Get In Touch
                </Link>
              </div>
            </div>

            <div className="hero-image-container">
              <div className="hero-image-wrapper">
                <div className="hero-image-blur"></div>
                <img
                  src={portraitImage}
                  alt="Pannerselvam Madanagopal - CEO of Meity"
                  className="hero-image"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-indicator-inner">
            <div className="scroll-indicator-dot"></div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="highlights-section">
        <div className="highlights-container">
          <div className="highlights-header">
            <h2 className="highlights-title">Leadership Impact</h2>
            <p className="highlights-subtitle">
              Driving digital transformation and technological advancement
              across India
            </p>
          </div>

          <div className="highlights-grid">
            <div className="highlight-card">
              <div>
                <div className="highlight-icon-wrapper">
                  <Award className="highlight-icon" size={32} />
                </div>
                <h3 className="highlight-number">15+ Years</h3>
                <p className="highlight-text">Leading Technology Innovation</p>
              </div>
            </div>

            <div className="highlight-card">
              <div>
                <div className="highlight-icon-wrapper">
                  <Users className="highlight-icon" size={32} />
                </div>
                <h3 className="highlight-number">10M+</h3>
                <p className="highlight-text">
                  Lives Impacted Through Digital Initiatives
                </p>
              </div>
            </div>

            <div className="highlight-card">
              <div>
                <div className="highlight-icon-wrapper">
                  <TrendingUp className="highlight-icon" size={32} />
                </div>
                <h3 className="highlight-number">50+</h3>
                <p className="highlight-text">
                  Digital Transformation Projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="vision-section">
        <div className="vision-container">
          <Quote className="vision-icon" size={48} />
          <blockquote className="vision-quote">
            "Technology is not just about innovation; it's about creating
            meaningful impact that transforms societies and empowers people to
            achieve their full potential."
          </blockquote>
          <cite className="vision-cite">— Pannerselvam Madanagopal</cite>
        </div>
      </section>

      {/* Quick Access */}
      <section className="quick-access-section">
        <div className="quick-access-container">
          <div className="quick-access-header">
            <h2 className="quick-access-title">Explore More</h2>
            <p className="quick-access-subtitle">
              Dive deeper into insights, achievements, and vision
            </p>
          </div>

          <div className="quick-access-grid">
            <Link to="/about" className="quick-access-button">
              <Users size={24} />
              <span>About Me</span>
            </Link>

            <Link to="/gallery" className="quick-access-button">
              <Award size={24} />
              <span>Gallery</span>
            </Link>

            <Link to="/blog" className="quick-access-button">
              <TrendingUp size={24} />
              <span>Insights</span>
            </Link>

            <Link to="/contact" className="quick-access-button">
              <ArrowRight size={24} />
              <span>Connect</span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

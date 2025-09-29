import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import portraitImage from '@/assets/pannerselvam-portrait.jpg';
import { bannerStyles } from './styles';

const Theme37Banner = () => {
  return (
    <section style={bannerStyles.section}>
      <div style={bannerStyles.container}>
        <div style={bannerStyles.grid}>
          <div style={bannerStyles.content}>
            <h1 style={bannerStyles.title}>
              Leading Innovation in the
              <span style={bannerStyles.accent}> Digital Age</span>
            </h1>
            <p style={bannerStyles.subtitle}>
              CEO of Meity | Technology Visionary | Driving Transformational
              Change in India's Digital Ecosystem
            </p>
            <div style={bannerStyles.buttons}>
              <Link to="/about" style={bannerStyles.buttonSecondary}>
                Learn More <ArrowRight style={bannerStyles.icon} size={18} />
              </Link>
              <Link to="/contact" style={bannerStyles.buttonOutline}>
                Get In Touch
              </Link>
            </div>
          </div>

          <div style={bannerStyles.imageContainer}>
            <div style={bannerStyles.imageWrapper}>
              <div style={bannerStyles.imageBlur}></div>
              <img
                src={portraitImage}
                alt="Pannerselvam Madanagopal - CEO of Meity"
                style={bannerStyles.image}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={bannerStyles.scrollIndicator}>
        <div style={bannerStyles.scrollIndicatorInner}>
          <div style={bannerStyles.scrollIndicatorDot}></div>
        </div>
      </div>
    </section>
  );
};

export default Theme37Banner;
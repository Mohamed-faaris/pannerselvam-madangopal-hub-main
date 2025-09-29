import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Youtube, Mail } from 'lucide-react';
import { footerStyles } from './styles';

const Theme37Footer = () => {
  const socialLinks = [
    { icon: <Linkedin size={18} />, href: "#" },
    { icon: <Twitter size={18} />, href: "#" },
    { icon: <Youtube size={18} />, href: "#" },
    { icon: <Mail size={18} />, href: "mailto:contact@example.com" }
  ];

  const quickLinks = [
    { to: "/about", label: "About" },
    { to: "/blog", label: "Blog & Insights" },
    { to: "/media", label: "Media & Press" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.container}>
        <div style={footerStyles.grid}>
          {/* About Section */}
          <div style={footerStyles.section}>
            <h3 style={footerStyles.title}>Pannerselvam Madanagopal</h3>
            <p style={footerStyles.description}>
              CEO of Meity, Technology Leader, and Visionary Entrepreneur driving innovation 
              in the digital age.
            </p>
          </div>

          {/* Quick Links */}
          <div style={footerStyles.section}>
            <h4 style={footerStyles.subtitle}>Quick Links</h4>
            <div style={footerStyles.linksContainer}>
              {quickLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.to} 
                  style={footerStyles.link}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = '0.9';
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div style={footerStyles.section}>
            <h4 style={footerStyles.subtitle}>Connect</h4>
            <div style={footerStyles.socialContainer}>
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  style={footerStyles.socialButton}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'hsl(214, 84%, 25%)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div style={footerStyles.section}>
            <h4 style={footerStyles.subtitle}>Stay Updated</h4>
            <p style={footerStyles.newsletterText}>
              Subscribe to receive insights and updates on technology leadership.
            </p>
            <div style={footerStyles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Enter your email"
                style={footerStyles.emailInput}
              />
              <button style={footerStyles.subscribeButton}>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={footerStyles.bottomSection}>
          <div style={footerStyles.bottomContent}>
            <p style={footerStyles.copyright}>
              © 2024 Pannerselvam Madanagopal. All rights reserved.
            </p>
            <div style={footerStyles.bottomLinks}>
              <Link to="/privacy" style={footerStyles.bottomLink}>Privacy Policy</Link>
              <Link to="/terms" style={footerStyles.bottomLink}>Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Theme37Footer;
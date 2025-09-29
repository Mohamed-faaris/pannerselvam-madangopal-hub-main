import React from "react";
import { Link } from "react-router-dom";
import { Users, Award, TrendingUp, ArrowRight } from "lucide-react";
import { quickAccessStyles } from "./styles";

const Theme37QuickAccess = () => {
  const quickLinks = [
    {
      to: "/about",
      icon: <Users size={24} />,
      label: "About Me",
    },
    {
      to: "/gallery",
      icon: <Award size={24} />,
      label: "Gallery",
    },
    {
      to: "/blog",
      icon: <TrendingUp size={24} />,
      label: "Insights",
    },
    {
      to: "/contact",
      icon: <ArrowRight size={24} />,
      label: "Connect",
    },
  ];

  return (
    <section style={quickAccessStyles.section}>
      <div style={quickAccessStyles.container}>
        <div style={quickAccessStyles.header}>
          <h2 style={quickAccessStyles.title}>Explore More</h2>
          <p style={quickAccessStyles.subtitle}>
            Dive deeper into insights, achievements, and vision
          </p>
        </div>

        <div style={quickAccessStyles.grid}>
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              style={quickAccessStyles.button}
              onMouseEnter={(e) => {
                Object.assign(e.target.style, quickAccessStyles.buttonHover);
              }}
              onMouseLeave={(e) => {
                Object.assign(e.target.style, quickAccessStyles.button);
              }}
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Theme37QuickAccess;

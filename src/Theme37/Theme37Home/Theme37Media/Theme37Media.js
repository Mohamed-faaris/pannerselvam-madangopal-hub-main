import React from "react";
import { Award, Users, TrendingUp } from "lucide-react";
import { leadershipStyles } from "./styles";

const Theme37Media = () => {
  const highlights = [
    {
      icon: <Award style={leadershipStyles.highlightIcon} size={32} />,
      number: "15+ Years",
      text: "Leading Technology Innovation",
    },
    {
      icon: <Users style={leadershipStyles.highlightIcon} size={32} />,
      number: "10M+",
      text: "Lives Impacted Through Digital Initiatives",
    },
    {
      icon: <TrendingUp style={leadershipStyles.highlightIcon} size={32} />,
      number: "50+",
      text: "Digital Transformation Projects",
    },
  ];

  return (
    <section style={leadershipStyles.section}>
      <div style={leadershipStyles.container}>
        <div style={leadershipStyles.header}>
          <h2 style={leadershipStyles.title}>Leadership Impact</h2>
          <p style={leadershipStyles.subtitle}>
            Driving digital transformation and technological advancement across
            India
          </p>
        </div>

        <div style={leadershipStyles.grid}>
          {highlights.map((highlight, index) => (
            <div key={index} style={leadershipStyles.card}>
              <div style={leadershipStyles.cardContent}>
                <div style={leadershipStyles.iconWrapper}>{highlight.icon}</div>
                <h3 style={leadershipStyles.number}>{highlight.number}</h3>
                <p style={leadershipStyles.text}>{highlight.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Theme37LeadershipImpact;

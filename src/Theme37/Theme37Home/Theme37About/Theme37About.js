import React from 'react';
import { Calendar, MapPin, Award, Users, Target, Heart } from 'lucide-react';
import { aboutStyles } from './styles';

const Theme37About = () => {
  const milestones = [
    {
      year: "2024",
      title: "CEO, Ministry of Electronics and IT (Meity)",
      description: "Leading India's digital transformation initiatives and technology policy framework",
      icon: <Target style={aboutStyles.timelineIcon} size={24} />
    },
    {
      year: "2020",
      title: "Digital India Mission Leadership", 
      description: "Spearheaded nationwide digital literacy and infrastructure development programs",
      icon: <Users style={aboutStyles.timelineIcon} size={24} />
    },
    {
      year: "2018",
      title: "Technology Innovation Awards",
      description: "Recognized for outstanding contributions to India's technology ecosystem",
      icon: <Award style={aboutStyles.timelineIcon} size={24} />
    },
    {
      year: "2015",
      title: "Smart Cities Initiative",
      description: "Architected and implemented technology solutions for urban development",
      icon: <MapPin style={aboutStyles.timelineIcon} size={24} />
    }
  ];

  const expertise = [
    "Digital Transformation",
    "Policy Development", 
    "Technology Leadership",
    "Strategic Planning",
    "Innovation Management",
    "Public-Private Partnerships",
    "Cybersecurity",
    "AI & Emerging Technologies"
  ];

  return (
    <>
      {/* Hero Section */}
      <section style={aboutStyles.heroSection}>
        <div style={aboutStyles.container}>
          <h1 style={aboutStyles.heroTitle}>About Pannerselvam Madanagopal</h1>
          <p style={aboutStyles.heroSubtitle}>
            A visionary leader dedicated to transforming India's digital landscape through 
            innovative technology solutions and strategic policy development.
          </p>
        </div>
      </section>

      {/* Biography */}
      <section style={aboutStyles.bioSection}>
        <div style={aboutStyles.container}>
          <div style={aboutStyles.bioGrid}>
            <div style={aboutStyles.bioContent}>
              <h2 style={aboutStyles.bioTitle}>Leadership Journey</h2>
              <div style={aboutStyles.bioTextContainer}>
                <p style={aboutStyles.bioText}>
                  With over 15 years of distinguished service in technology leadership, 
                  Pannerselvam Madanagopal has been at the forefront of India's digital revolution. 
                  As CEO of the Ministry of Electronics and Information Technology (Meity), 
                  he drives strategic initiatives that shape the nation's technological future.
                </p>
                <p style={aboutStyles.bioText}>
                  His vision extends beyond traditional technology implementation to create 
                  comprehensive ecosystems that empower citizens, enable businesses, and 
                  strengthen India's position as a global technology leader.
                </p>
                <p style={aboutStyles.bioText}>
                  Under his leadership, numerous groundbreaking initiatives have been launched, 
                  impacting millions of lives and establishing new benchmarks in digital governance 
                  and innovation.
                </p>
              </div>
            </div>
            
            <div style={aboutStyles.expertiseCard}>
              <h3 style={aboutStyles.expertiseTitle}>Areas of Expertise</h3>
              <div style={aboutStyles.expertiseGrid}>
                {expertise.map((skill, index) => (
                  <div key={index} style={aboutStyles.expertiseBadge}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section style={aboutStyles.timelineSection}>
        <div style={aboutStyles.container}>
          <div style={aboutStyles.header}>
            <h2 style={aboutStyles.sectionTitle}>Career Milestones</h2>
            <p style={aboutStyles.sectionSubtitle}>
              Key achievements and leadership positions that shaped India's digital journey
            </p>
          </div>
          
          <div style={aboutStyles.timelineContainer}>
            {milestones.map((milestone, index) => (
              <div key={index} style={aboutStyles.timelineItem}>
                <div style={aboutStyles.timelineIconWrapper}>
                  {milestone.icon}
                </div>
                <div style={aboutStyles.timelineContent}>
                  <div style={aboutStyles.timelineYear}>{milestone.year}</div>
                  <h3 style={aboutStyles.timelineTitle}>{milestone.title}</h3>
                  <p style={aboutStyles.timelineDescription}>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section style={aboutStyles.philosophySection}>
        <div style={aboutStyles.container}>
          <div style={aboutStyles.philosophyHeader}>
            <Heart style={aboutStyles.philosophyIcon} size={48} />
            <h2 style={aboutStyles.sectionTitle}>Leadership Philosophy</h2>
          </div>
          
          <div style={aboutStyles.philosophyCard}>
            <blockquote style={aboutStyles.philosophyQuote}>
              "True leadership in technology lies not in adopting the latest trends, 
              but in understanding the deeper human needs that technology can fulfill. 
              My mission is to bridge the gap between innovation and impact, ensuring 
              that every technological advancement serves the greater good of society."
            </blockquote>
            
            <div style={aboutStyles.philosophyGrid}>
              <div style={aboutStyles.philosophyItem}>
                <div style={aboutStyles.philosophyItemIcon}>
                  <Users style={aboutStyles.iconColor} size={28} />
                </div>
                <h4 style={aboutStyles.philosophyItemTitle}>People-Centric</h4>
                <p style={aboutStyles.philosophyItemText}>
                  Technology should empower and enhance human potential
                </p>
              </div>
              
              <div style={aboutStyles.philosophyItem}>
                <div style={aboutStyles.philosophyItemIcon}>
                  <Target style={aboutStyles.iconColor} size={28} />
                </div>
                <h4 style={aboutStyles.philosophyItemTitle}>Impact-Driven</h4>
                <p style={aboutStyles.philosophyItemText}>
                  Every initiative must create measurable positive change
                </p>
              </div>
              
              <div style={aboutStyles.philosophyItem}>
                <div style={aboutStyles.philosophyItemIcon}>
                  <Award style={aboutStyles.iconColor} size={28} />
                </div>
                <h4 style={aboutStyles.philosophyItemTitle}>Excellence</h4>
                <p style={aboutStyles.philosophyItemText}>
                  Pursuing the highest standards in every endeavor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Theme37About;
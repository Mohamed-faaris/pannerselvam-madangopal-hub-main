import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { galleryStyles } from "./styles";

const Theme37Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Events", "Speaking", "Awards", "Meetings"];

  // Gallery data
  const galleryItems = [
    {
      id: 1,
      title: "Technology Leadership Summit 2024",
      category: "Speaking",
      description: "Keynote address on Digital India's future roadmap",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Innovation Excellence Award",
      category: "Awards",
      description: "Recognition for outstanding contribution to technology policy",
      image: "https://images.unsplash.com/photo-1551818255-e6e10975cd84?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Digital Infrastructure Conference",
      category: "Events",
      description: "Panel discussion on smart city implementations",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "International Tech Summit",
      category: "Speaking",
      description: "Presentation on AI and emerging technologies",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      title: "Ministry Strategic Meeting",
      category: "Meetings",
      description: "High-level discussion on cybersecurity initiatives",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop"
    },
    {
      id: 6,
      title: "Startup Ecosystem Forum",
      category: "Events",
      description: "Supporting innovation in the Indian startup landscape",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop"
    },
    {
      id: 7,
      title: "Global Technology Award",
      category: "Awards",
      description: "International recognition for digital transformation leadership",
      image: "https://images.unsplash.com/photo-1551818255-e6e10975cd84?w=800&h=600&fit=crop"
    },
    {
      id: 8,
      title: "Policy Development Workshop",
      category: "Meetings",
      description: "Collaborative session on emerging technology regulations",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop"
    }
  ];

  const filteredItems = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section style={galleryStyles.section}>
      <div style={galleryStyles.container}>
        {/* Hero Section */}
        <div style={galleryStyles.hero}>
          <h1 style={galleryStyles.heroTitle}>
            Gallery
          </h1>
          <p style={galleryStyles.heroSubtitle}>
            A visual journey through key moments, achievements, and events that shape
            the landscape of technology leadership and innovation.
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={galleryStyles.filters}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                ...galleryStyles.filterButton,
                ...(activeFilter === filter ? galleryStyles.filterButtonActive : {})
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div style={galleryStyles.grid}>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              style={galleryStyles.card}
              onMouseEnter={(e) => {
                Object.assign(e.currentTarget.style, galleryStyles.cardHover);
              }}
              onMouseLeave={(e) => {
                Object.assign(e.currentTarget.style, galleryStyles.card);
              }}
            >
              <div style={galleryStyles.cardImageContainer}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={galleryStyles.cardImage}
                  onMouseEnter={(e) => {
                    Object.assign(e.currentTarget.style, galleryStyles.cardImageHover);
                  }}
                  onMouseLeave={(e) => {
                    Object.assign(e.currentTarget.style, galleryStyles.cardImage);
                  }}
                />
                <div style={galleryStyles.categoryBadge}>
                  {item.category}
                </div>
              </div>
              <div style={galleryStyles.cardContent}>
                <h3
                  style={galleryStyles.cardTitle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = galleryStyles.cardTitleHover.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = galleryStyles.cardTitle.color;
                  }}
                >
                  {item.title}
                </h3>
                <p style={galleryStyles.cardDescription}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div style={galleryStyles.emptyState}>
            <p style={galleryStyles.emptyStateText}>
              No items found for the selected category.
            </p>
          </div>
        )}

        {/* Stats Section */}
        <div style={galleryStyles.statsSection}>
          <div style={galleryStyles.statsGrid}>
            <div>
              <div style={galleryStyles.statNumber}>50+</div>
              <div style={galleryStyles.statLabel}>Speaking Engagements</div>
            </div>
            <div>
              <div style={galleryStyles.statNumber}>25+</div>
              <div style={galleryStyles.statLabel}>Awards & Recognition</div>
            </div>
            <div>
              <div style={galleryStyles.statNumber}>100+</div>
              <div style={galleryStyles.statLabel}>Industry Events</div>
            </div>
            <div>
              <div style={galleryStyles.statNumber}>15+</div>
              <div style={galleryStyles.statLabel}>Years of Leadership</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theme37Gallery;

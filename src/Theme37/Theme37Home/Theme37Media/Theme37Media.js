import React from "react";
import {
  Play,
  ExternalLink,
  Calendar,
  Video,
  Newspaper,
  Mic,
} from "lucide-react";
import { mediaStyles } from "./styles";

const Theme37Media = () => {
  const featuredVideo = {
    title: "Keynote: The Future of Digital India",
    description:
      "Comprehensive overview of India's digital transformation roadmap and emerging technology initiatives at the National Technology Summit 2024.",
    thumbnail:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=450&fit=crop",
    duration: "28:45",
    views: "125K",
    date: "December 2024",
  };

  const videos = [
    {
      id: 1,
      title: "AI & Governance: Policy Frameworks for the Future",
      thumbnail:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=225&fit=crop",
      duration: "15:30",
      views: "85K",
      date: "Nov 2024",
    },
    {
      id: 2,
      title: "Cybersecurity in Digital Transformation",
      thumbnail:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=225&fit=crop",
      duration: "22:15",
      views: "92K",
      date: "Oct 2024",
    },
    {
      id: 3,
      title: "Building Inclusive Technology Ecosystems",
      thumbnail:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop",
      duration: "18:45",
      views: "67K",
      date: "Oct 2024",
    },
  ];

  const pressArticles = [
    {
      id: 1,
      title: "Technology Leader Shapes India's Digital Future",
      publication: "Tech Times India",
      excerpt:
        "An in-depth look at the visionary leadership driving India's technological advancement and digital infrastructure development.",
      date: "December 18, 2024",
      type: "Feature Article",
      link: "#",
    },
    {
      id: 2,
      title: "Innovation in Government: A New Paradigm",
      publication: "Digital Governance Weekly",
      excerpt:
        "Exploring how modern technology frameworks are revolutionizing public service delivery and citizen engagement.",
      date: "December 10, 2024",
      type: "Interview",
      link: "#",
    },
    {
      id: 3,
      title: "The Economics of Digital Transformation",
      publication: "Business Technology Review",
      excerpt:
        "Analysis of the economic impact and ROI of large-scale digital transformation initiatives in the public sector.",
      date: "November 28, 2024",
      type: "Opinion",
      link: "#",
    },
    {
      id: 4,
      title: "Cybersecurity Leadership in the Digital Age",
      publication: "Security Today",
      excerpt:
        "Insights into building robust cybersecurity frameworks for critical national infrastructure and digital services.",
      date: "November 15, 2024",
      type: "Expert Column",
      link: "#",
    },
  ];

  const podcasts = [
    {
      id: 1,
      title: "Technology Leadership Podcast",
      episode: "Digital Transformation at Scale",
      duration: "45:20",
      platform: "TechTalk India",
      date: "Dec 2024",
    },
    {
      id: 2,
      title: "Innovation Insights",
      episode: "The Future of Smart Cities",
      duration: "38:15",
      platform: "Urban Tech Radio",
      date: "Nov 2024",
    },
    {
      id: 3,
      title: "Policy & Progress",
      episode: "AI Ethics and Governance",
      duration: "52:30",
      platform: "Government Tech Cast",
      date: "Nov 2024",
    },
  ];

  return (
    <section style={mediaStyles.section}>
      <div style={mediaStyles.container}>
        {/* Hero Section */}
        <div style={mediaStyles.hero}>
          <h1 style={mediaStyles.heroTitle}>Media & Press</h1>
          <p style={mediaStyles.heroSubtitle}>
            Featured interviews, keynote speeches, articles, and media
            appearances showcasing insights on technology leadership and digital
            innovation.
          </p>
        </div>

        {/* Featured Video */}
        <div style={mediaStyles.featuredSection}>
          <h2 style={mediaStyles.sectionTitle}>Featured Video</h2>

          <div style={mediaStyles.featuredCard}>
            <div style={mediaStyles.featuredGrid}>
              <div style={mediaStyles.featuredImageContainer}>
                <img
                  src={featuredVideo.thumbnail}
                  alt={featuredVideo.title}
                  style={mediaStyles.featuredImage}
                />
                <div style={mediaStyles.playOverlay}>
                  <div style={mediaStyles.playButton}>
                    <Play size={24} style={mediaStyles.playIcon} />
                  </div>
                </div>
                <div style={mediaStyles.durationBadge}>
                  {featuredVideo.duration}
                </div>
              </div>
              <div style={mediaStyles.featuredContent}>
                <h3 style={mediaStyles.featuredTitle}>{featuredVideo.title}</h3>
                <p style={mediaStyles.featuredDescription}>
                  {featuredVideo.description}
                </p>
                <div style={mediaStyles.featuredMeta}>
                  <div style={mediaStyles.metaItem}>
                    <Calendar size={16} style={mediaStyles.metaIcon} />
                    {featuredVideo.date}
                  </div>
                  <div style={mediaStyles.metaItem}>
                    <Video size={16} style={mediaStyles.metaIcon} />
                    {featuredVideo.views} views
                  </div>
                </div>
                <button style={mediaStyles.watchButton}>
                  <Play size={16} style={mediaStyles.buttonIcon} />
                  Watch Full Video
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Gallery */}
        <div style={mediaStyles.videoSection}>
          <div style={mediaStyles.sectionHeader}>
            <h2 style={mediaStyles.sectionTitle}>Recent Videos</h2>
            <p style={mediaStyles.sectionSubtitle}>
              Latest speeches, interviews, and presentations
            </p>
          </div>

          <div style={mediaStyles.videoGrid}>
            {videos.map((video) => (
              <div
                key={video.id}
                style={mediaStyles.videoCard}
                onMouseEnter={(e) => {
                  Object.assign(
                    e.currentTarget.style,
                    mediaStyles.videoCardHover
                  );
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.currentTarget.style, mediaStyles.videoCard);
                }}
              >
                <div style={mediaStyles.videoThumbnailContainer}>
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    style={mediaStyles.videoThumbnail}
                  />
                  <div style={mediaStyles.videoPlayOverlay}>
                    <div style={mediaStyles.videoPlayButton}>
                      <Play size={16} style={mediaStyles.videoPlayIcon} />
                    </div>
                  </div>
                  <div style={mediaStyles.videoDurationBadge}>
                    {video.duration}
                  </div>
                </div>
                <div style={mediaStyles.videoContent}>
                  <h3 style={mediaStyles.videoTitle}>{video.title}</h3>
                  <div style={mediaStyles.videoMeta}>
                    <span>{video.date}</span>
                    <span>{video.views} views</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Press Articles */}
        <div style={mediaStyles.pressSection}>
          <div style={mediaStyles.sectionHeader}>
            <h2 style={mediaStyles.sectionTitle}>Press Coverage</h2>
            <p style={mediaStyles.sectionSubtitle}>
              Featured articles and interviews in leading technology
              publications
            </p>
          </div>

          <div style={mediaStyles.pressGrid}>
            {pressArticles.map((article) => (
              <div key={article.id} style={mediaStyles.pressCard}>
                <div style={mediaStyles.pressHeader}>
                  <div style={mediaStyles.pressMeta}>
                    <Newspaper size={16} style={mediaStyles.pressIcon} />
                    <span style={mediaStyles.publication}>
                      {article.publication}
                    </span>
                    <span style={mediaStyles.articleType}>{article.type}</span>
                  </div>
                </div>
                <h3 style={mediaStyles.pressTitle}>{article.title}</h3>
                <p style={mediaStyles.pressExcerpt}>{article.excerpt}</p>
                <div style={mediaStyles.pressFooter}>
                  <div style={mediaStyles.pressDate}>
                    <Calendar size={14} style={mediaStyles.dateIcon} />
                    {article.date}
                  </div>
                  <button style={mediaStyles.readArticleButton}>
                    Read Article
                    <ExternalLink size={14} style={mediaStyles.externalIcon} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Podcasts */}
        <div style={mediaStyles.podcastSection}>
          <div style={mediaStyles.sectionHeader}>
            <h2 style={mediaStyles.sectionTitle}>Podcast Appearances</h2>
            <p style={mediaStyles.sectionSubtitle}>
              In-depth discussions on technology leadership and innovation
            </p>
          </div>

          <div style={mediaStyles.podcastGrid}>
            {podcasts.map((podcast) => (
              <div key={podcast.id} style={mediaStyles.podcastCard}>
                <div style={mediaStyles.podcastIcon}>
                  <Mic size={24} style={mediaStyles.micIcon} />
                </div>
                <h3 style={mediaStyles.podcastTitle}>{podcast.title}</h3>
                <p style={mediaStyles.podcastEpisode}>{podcast.episode}</p>
                <div style={mediaStyles.podcastMeta}>
                  <span>{podcast.platform}</span>
                  <span>{podcast.duration}</span>
                </div>
                <div style={mediaStyles.podcastDate}>{podcast.date}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Inquiries */}
        <div style={mediaStyles.contactSection}>
          <div style={mediaStyles.contactContent}>
            <h2 style={mediaStyles.contactTitle}>Media Inquiries</h2>
            <p style={mediaStyles.contactSubtitle}>
              For interviews, speaking engagements, or media requests, please
              reach out through our contact channels.
            </p>
            <button style={mediaStyles.contactButton}>
              Contact Media Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theme37Media;

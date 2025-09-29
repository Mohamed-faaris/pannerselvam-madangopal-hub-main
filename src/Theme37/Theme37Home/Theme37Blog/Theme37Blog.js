import React, { useState } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogStyles } from "./styles";

const Theme37Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredPost = {
    title: "The Future of Digital Governance: AI-Driven Policy Making",
    excerpt:
      "Exploring how artificial intelligence can revolutionize policy development and implementation in the digital age, creating more responsive and effective governance structures.",
    readTime: "8 min read",
    date: "December 15, 2024",
    category: "Digital Governance",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
  };

  const blogPosts = [
    {
      id: 1,
      title: "Building Resilient Digital Infrastructure for Tomorrow",
      excerpt:
        "Key strategies for developing robust digital infrastructure that can adapt to emerging technologies and growing user demands.",
      category: "Infrastructure",
      readTime: "6 min read",
      date: "December 10, 2024",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
    },
    {
      id: 2,
      title: "Cybersecurity in the Age of Digital Transformation",
      excerpt:
        "Understanding the evolving threat landscape and implementing comprehensive security frameworks for digital initiatives.",
      category: "Cybersecurity",
      readTime: "7 min read",
      date: "December 5, 2024",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
    },
    {
      id: 3,
      title: "Empowering SMEs Through Digital Innovation",
      excerpt:
        "How technology can level the playing field for small and medium enterprises, driving economic growth and innovation.",
      category: "Innovation",
      readTime: "5 min read",
      date: "November 28, 2024",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    },
    {
      id: 4,
      title: "The Role of Public-Private Partnerships in Tech Development",
      excerpt:
        "Examining successful models of collaboration between government and private sector in advancing technology initiatives.",
      category: "Policy",
      readTime: "9 min read",
      date: "November 20, 2024",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    },
    {
      id: 5,
      title: "Emerging Technologies and Their Impact on Society",
      excerpt:
        "Analyzing the societal implications of breakthrough technologies and preparing for their widespread adoption.",
      category: "Technology",
      readTime: "8 min read",
      date: "November 15, 2024",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
    },
    {
      id: 6,
      title: "Digital Literacy: A Foundation for the Future",
      excerpt:
        "The critical importance of digital education and skills development in building an inclusive digital society.",
      category: "Education",
      readTime: "6 min read",
      date: "November 8, 2024",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop",
    },
  ];

  const categories = [
    "All",
    "Digital Governance",
    "Infrastructure",
    "Cybersecurity",
    "Innovation",
    "Policy",
    "Technology",
    "Education",
  ];

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <section style={blogStyles.section}>
      <div style={blogStyles.container}>
        {/* Hero Section */}
        <div style={blogStyles.hero}>
          <h1 style={blogStyles.heroTitle}>Insights & Thoughts</h1>
          <p style={blogStyles.heroSubtitle}>
            Exploring the intersection of technology, policy, and innovation.
            Sharing perspectives on building a digital future that works for
            everyone.
          </p>
        </div>

        {/* Featured Article */}
        <div style={blogStyles.featuredSection}>
          <h2 style={blogStyles.sectionTitle}>Featured Article</h2>

          <div style={blogStyles.featuredCard}>
            <div style={blogStyles.featuredGrid}>
              <div style={blogStyles.featuredImageContainer}>
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  style={blogStyles.featuredImage}
                />
                <div style={blogStyles.categoryBadge}>
                  {featuredPost.category}
                </div>
              </div>
              <div style={blogStyles.featuredContent}>
                <h3 style={blogStyles.featuredTitle}>{featuredPost.title}</h3>
                <p style={blogStyles.featuredExcerpt}>{featuredPost.excerpt}</p>
                <div style={blogStyles.featuredMeta}>
                  <div style={blogStyles.metaItem}>
                    <Calendar size={16} style={blogStyles.metaIcon} />
                    {featuredPost.date}
                  </div>
                  <div style={blogStyles.metaItem}>
                    <Clock size={16} style={blogStyles.metaIcon} />
                    {featuredPost.readTime}
                  </div>
                </div>
                <button style={blogStyles.readButton}>
                  Read Full Article
                  <ArrowRight size={16} style={blogStyles.buttonIcon} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div style={blogStyles.blogSection}>
          <div style={blogStyles.blogHeader}>
            <h2 style={blogStyles.sectionTitle}>Latest Articles</h2>
            <p style={blogStyles.sectionSubtitle}>
              Stay updated with the latest insights on technology leadership and
              innovation
            </p>
          </div>

          {/* Category Filter */}
          <div style={blogStyles.categoryFilter}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                style={{
                  ...blogStyles.categoryButton,
                  ...(activeCategory === category
                    ? blogStyles.categoryButtonActive
                    : {}),
                }}
              >
                {category}
              </button>
            ))}
          </div>

          <div style={blogStyles.blogGrid}>
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                style={blogStyles.blogCard}
                onMouseEnter={(e) => {
                  Object.assign(
                    e.currentTarget.style,
                    blogStyles.blogCardHover
                  );
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.currentTarget.style, blogStyles.blogCard);
                }}
              >
                <div style={blogStyles.blogImageContainer}>
                  <img
                    src={post.image}
                    alt={post.title}
                    style={blogStyles.blogImage}
                    onMouseEnter={(e) => {
                      Object.assign(
                        e.currentTarget.style,
                        blogStyles.blogImageHover
                      );
                    }}
                    onMouseLeave={(e) => {
                      Object.assign(
                        e.currentTarget.style,
                        blogStyles.blogImage
                      );
                    }}
                  />
                  <div style={blogStyles.blogCategoryBadge}>
                    {post.category}
                  </div>
                </div>
                <div style={blogStyles.blogContent}>
                  <h3
                    style={blogStyles.blogTitle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color =
                        blogStyles.blogTitleHover.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = blogStyles.blogTitle.color;
                    }}
                  >
                    {post.title}
                  </h3>
                  <p style={blogStyles.blogExcerpt}>{post.excerpt}</p>
                  <div style={blogStyles.blogMeta}>
                    <div style={blogStyles.metaItem}>
                      <Calendar size={14} style={blogStyles.metaIcon} />
                      {post.date}
                    </div>
                    <div style={blogStyles.metaItem}>
                      <Clock size={14} style={blogStyles.metaIcon} />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div style={blogStyles.emptyState}>
              <p style={blogStyles.emptyStateText}>
                No articles found for the selected category.
              </p>
            </div>
          )}

          <div style={blogStyles.loadMoreContainer}>
            <button style={blogStyles.loadMoreButton}>
              Load More Articles
            </button>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div style={blogStyles.newsletterSection}>
          <div style={blogStyles.newsletterContent}>
            <h2 style={blogStyles.newsletterTitle}>Stay Informed</h2>
            <p style={blogStyles.newsletterSubtitle}>
              Subscribe to receive the latest insights on technology leadership,
              policy development, and digital innovation.
            </p>
            <div style={blogStyles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter your email"
                style={blogStyles.emailInput}
              />
              <button style={blogStyles.subscribeButton}>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theme37Blog;

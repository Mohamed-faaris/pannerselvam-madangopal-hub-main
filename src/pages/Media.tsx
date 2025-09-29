import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink, Calendar, Video, Newspaper, Mic } from "lucide-react";

const Media = () => {
  const featuredVideo = {
    title: "Keynote: The Future of Digital India",
    description: "Comprehensive overview of India's digital transformation roadmap and emerging technology initiatives at the National Technology Summit 2024.",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=450&fit=crop",
    duration: "28:45",
    views: "125K",
    date: "December 2024"
  };

  const videos = [
    {
      id: 1,
      title: "AI & Governance: Policy Frameworks for the Future",
      thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=225&fit=crop",
      duration: "15:30",
      views: "85K",
      date: "Nov 2024"
    },
    {
      id: 2,
      title: "Cybersecurity in Digital Transformation",
      thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=225&fit=crop",
      duration: "22:15",
      views: "92K",
      date: "Oct 2024"
    },
    {
      id: 3,
      title: "Building Inclusive Technology Ecosystems",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop",
      duration: "18:45",
      views: "67K",
      date: "Oct 2024"
    }
  ];

  const pressArticles = [
    {
      id: 1,
      title: "Technology Leader Shapes India's Digital Future",
      publication: "Tech Times India",
      excerpt: "An in-depth look at the visionary leadership driving India's technological advancement and digital infrastructure development.",
      date: "December 18, 2024",
      type: "Feature Article",
      link: "#"
    },
    {
      id: 2,
      title: "Innovation in Government: A New Paradigm",
      publication: "Digital Governance Weekly",
      excerpt: "Exploring how modern technology frameworks are revolutionizing public service delivery and citizen engagement.",
      date: "December 10, 2024",
      type: "Interview",
      link: "#"
    },
    {
      id: 3,
      title: "The Economics of Digital Transformation",
      publication: "Business Technology Review",
      excerpt: "Analysis of the economic impact and ROI of large-scale digital transformation initiatives in the public sector.",
      date: "November 28, 2024",
      type: "Opinion",
      link: "#"
    },
    {
      id: 4,
      title: "Cybersecurity Leadership in the Digital Age",
      publication: "Security Today",
      excerpt: "Insights into building robust cybersecurity frameworks for critical national infrastructure and digital services.",
      date: "November 15, 2024",
      type: "Expert Column",
      link: "#"
    }
  ];

  const podcasts = [
    {
      id: 1,
      title: "Technology Leadership Podcast",
      episode: "Digital Transformation at Scale",
      duration: "45:20",
      platform: "TechTalk India",
      date: "Dec 2024"
    },
    {
      id: 2,
      title: "Innovation Insights",
      episode: "The Future of Smart Cities",
      duration: "38:15",
      platform: "Urban Tech Radio",
      date: "Nov 2024"
    },
    {
      id: 3,
      title: "Policy & Progress",
      episode: "AI Ethics and Governance",
      duration: "52:30",
      platform: "Government Tech Cast",
      date: "Nov 2024"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-primary mb-6">Media & Press</h1>
            <p className="text-xl text-muted-foreground">
              Featured interviews, keynote speeches, articles, and media appearances 
              showcasing insights on technology leadership and digital innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Featured Video</h2>
          </div>
          
          <Card className="max-w-5xl mx-auto shadow-medium border-card-border overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative group cursor-pointer">
                <img
                  src={featuredVideo.thumbnail}
                  alt={featuredVideo.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-all">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <Play className="text-accent-foreground ml-1" size={24} />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm">
                  {featuredVideo.duration}
                </div>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                  {featuredVideo.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredVideo.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {featuredVideo.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Video size={16} />
                    {featuredVideo.views} views
                  </div>
                </div>
                <Button className="w-fit">
                  <Play className="mr-2" size={16} />
                  Watch Full Video
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Recent Videos</h2>
            <p className="text-muted-foreground">
              Latest speeches, interviews, and presentations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <Card 
                key={video.id} 
                className="group cursor-pointer shadow-soft hover:shadow-medium transition-all duration-300 border-card-border overflow-hidden bg-background"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <Play className="text-accent-foreground ml-1" size={16} />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{video.date}</span>
                    <span>{video.views} views</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Press Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Press Coverage</h2>
            <p className="text-muted-foreground">
              Featured articles and interviews in leading technology publications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pressArticles.map((article) => (
              <Card key={article.id} className="shadow-soft hover:shadow-medium transition-all border-card-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Newspaper className="text-accent" size={16} />
                    <span className="text-sm text-muted-foreground">{article.publication}</span>
                    <Badge variant="secondary" className="text-xs">
                      {article.type}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3 hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar size={14} />
                      {article.date}
                    </div>
                    <Button variant="ghost" size="sm" className="text-accent hover:text-accent-foreground hover:bg-accent">
                      Read Article <ExternalLink className="ml-1" size={14} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Podcasts */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Podcast Appearances</h2>
            <p className="text-muted-foreground">
              In-depth discussions on technology leadership and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {podcasts.map((podcast) => (
              <Card key={podcast.id} className="shadow-soft hover:shadow-medium transition-all border-card-border bg-background">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mic className="text-accent-foreground" size={24} />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{podcast.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{podcast.episode}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span>{podcast.platform}</span>
                    <span>{podcast.duration}</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {podcast.date}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Media */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Media Inquiries</h2>
            <p className="text-lg opacity-90 mb-8">
              For interviews, speaking engagements, or media requests, 
              please reach out through our contact channels.
            </p>
            <Button variant="secondary" size="lg">
              Contact Media Team
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Media;
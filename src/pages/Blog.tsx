import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const featuredPost = {
    title: "The Future of Digital Governance: AI-Driven Policy Making",
    excerpt: "Exploring how artificial intelligence can revolutionize policy development and implementation in the digital age, creating more responsive and effective governance structures.",
    readTime: "8 min read",
    date: "December 15, 2024",
    category: "Digital Governance",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop"
  };

  const blogPosts = [
    {
      id: 1,
      title: "Building Resilient Digital Infrastructure for Tomorrow",
      excerpt: "Key strategies for developing robust digital infrastructure that can adapt to emerging technologies and growing user demands.",
      category: "Infrastructure",
      readTime: "6 min read",
      date: "December 10, 2024",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Cybersecurity in the Age of Digital Transformation",
      excerpt: "Understanding the evolving threat landscape and implementing comprehensive security frameworks for digital initiatives.",
      category: "Cybersecurity",
      readTime: "7 min read",
      date: "December 5, 2024",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Empowering SMEs Through Digital Innovation",
      excerpt: "How technology can level the playing field for small and medium enterprises, driving economic growth and innovation.",
      category: "Innovation",
      readTime: "5 min read",
      date: "November 28, 2024",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "The Role of Public-Private Partnerships in Tech Development",
      excerpt: "Examining successful models of collaboration between government and private sector in advancing technology initiatives.",
      category: "Policy",
      readTime: "9 min read",
      date: "November 20, 2024",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Emerging Technologies and Their Impact on Society",
      excerpt: "Analyzing the societal implications of breakthrough technologies and preparing for their widespread adoption.",
      category: "Technology",
      readTime: "8 min read",
      date: "November 15, 2024",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Digital Literacy: A Foundation for the Future",
      excerpt: "The critical importance of digital education and skills development in building an inclusive digital society.",
      category: "Education",
      readTime: "6 min read",
      date: "November 8, 2024",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop"
    }
  ];

  const categories = ["All", "Digital Governance", "Infrastructure", "Cybersecurity", "Innovation", "Policy", "Technology", "Education"];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-primary mb-6">Insights & Thoughts</h1>
            <p className="text-xl text-muted-foreground">
              Exploring the intersection of technology, policy, and innovation. 
              Sharing perspectives on building a digital future that works for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Featured Article</h2>
          </div>
          
          <Card className="max-w-5xl mx-auto shadow-medium border-card-border overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-accent-foreground">
                    {featuredPost.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    {featuredPost.readTime}
                  </div>
                </div>
                <Button className="w-fit">
                  Read Full Article <ArrowRight className="ml-2" size={16} />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Latest Articles</h2>
            <p className="text-muted-foreground">
              Stay updated with the latest insights on technology leadership and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card 
                key={post.id} 
                className="group cursor-pointer shadow-soft hover:shadow-medium transition-all duration-300 border-card-border overflow-hidden bg-background"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-card-border hover:border-accent">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
            <p className="text-lg opacity-90 mb-8">
              Subscribe to receive the latest insights on technology leadership, 
              policy development, and digital innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 text-primary focus:ring-2 focus:ring-accent"
              />
              <Button variant="secondary" className="px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
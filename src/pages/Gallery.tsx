import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Events", "Speaking", "Awards", "Meetings"];

  // Placeholder gallery data - in a real app, this would come from a CMS or API
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
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-primary mb-6">Gallery</h1>
            <p className="text-xl text-muted-foreground">
              A visual journey through key moments, achievements, and events that shape 
              the landscape of technology leadership and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={`${
                  activeFilter === filter 
                    ? "bg-primary text-primary-foreground" 
                    : "border-card-border hover:border-accent"
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card 
                key={item.id} 
                className="group cursor-pointer shadow-soft hover:shadow-medium transition-all duration-300 border-card-border overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No items found for the selected category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-sm opacity-90">Speaking Engagements</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">25+</div>
              <div className="text-sm opacity-90">Awards & Recognition</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">100+</div>
              <div className="text-sm opacity-90">Industry Events</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-sm opacity-90">Years of Leadership</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
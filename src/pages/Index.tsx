import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Award, Users, TrendingUp, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import portraitImage from "@/assets/pannerselvam-portrait.jpg";
import heroBackground from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(21, 45, 82, 0.8), rgba(21, 45, 82, 0.6)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Leading Innovation in the 
                <span className="text-accent"> Digital Age</span>
              </h1>
              <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
                CEO of Meity | Technology Visionary | Driving Transformational Change 
                in India's Digital Ecosystem
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" variant="secondary" className="shadow-accent">
                  <Link to="/about">
                    Learn More <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-accent rounded-2xl blur-2xl opacity-30 scale-110"></div>
                <img 
                  src={portraitImage} 
                  alt="Pannerselvam Madanagopal - CEO of Meity"
                  className="relative rounded-2xl shadow-strong max-w-md w-full"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Leadership Impact</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Driving digital transformation and technological advancement across India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 shadow-soft hover:shadow-medium transition-all border-card-border">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                  <Award className="text-accent-foreground" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary">15+ Years</h3>
                <p className="text-muted-foreground">Leading Technology Innovation</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 shadow-soft hover:shadow-medium transition-all border-card-border">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                  <Users className="text-accent-foreground" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary">10M+</h3>
                <p className="text-muted-foreground">Lives Impacted Through Digital Initiatives</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 shadow-soft hover:shadow-medium transition-all border-card-border">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                  <TrendingUp className="text-accent-foreground" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary">50+</h3>
                <p className="text-muted-foreground">Digital Transformation Projects</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="mx-auto mb-8 text-accent" size={48} />
            <blockquote className="text-2xl lg:text-3xl font-light leading-relaxed mb-8">
              "Technology is not just about innovation; it's about creating meaningful 
              impact that transforms societies and empowers people to achieve their full potential."
            </blockquote>
            <cite className="text-accent text-lg font-medium">
              — Pannerselvam Madanagopal
            </cite>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Explore More</h2>
            <p className="text-xl text-muted-foreground">
              Dive deeper into insights, achievements, and vision
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Button asChild variant="outline" size="lg" className="h-24 flex-col space-y-2 border-card-border hover:border-accent hover:shadow-soft">
              <Link to="/about">
                <Users size={24} />
                <span>About Me</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="h-24 flex-col space-y-2 border-card-border hover:border-accent hover:shadow-soft">
              <Link to="/gallery">
                <Award size={24} />
                <span>Gallery</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="h-24 flex-col space-y-2 border-card-border hover:border-accent hover:shadow-soft">
              <Link to="/blog">
                <TrendingUp size={24} />
                <span>Insights</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="h-24 flex-col space-y-2 border-card-border hover:border-accent hover:shadow-soft">
              <Link to="/contact">
                <ArrowRight size={24} />
                <span>Connect</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
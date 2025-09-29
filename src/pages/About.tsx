import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award, Users, Target, Heart } from "lucide-react";

const About = () => {
  const milestones = [
    {
      year: "2024",
      title: "CEO, Ministry of Electronics and IT (Meity)",
      description: "Leading India's digital transformation initiatives and technology policy framework",
      icon: <Target className="text-accent" size={24} />
    },
    {
      year: "2020",
      title: "Digital India Mission Leadership",
      description: "Spearheaded nationwide digital literacy and infrastructure development programs",
      icon: <Users className="text-accent" size={24} />
    },
    {
      year: "2018",
      title: "Technology Innovation Awards",
      description: "Recognized for outstanding contributions to India's technology ecosystem",
      icon: <Award className="text-accent" size={24} />
    },
    {
      year: "2015",
      title: "Smart Cities Initiative",
      description: "Architected and implemented technology solutions for urban development",
      icon: <MapPin className="text-accent" size={24} />
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
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-primary mb-6">About Pannerselvam Madanagopal</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A visionary leader dedicated to transforming India's digital landscape through 
              innovative technology solutions and strategic policy development.
            </p>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Leadership Journey</h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  With over 15 years of distinguished service in technology leadership, 
                  Pannerselvam Madanagopal has been at the forefront of India's digital revolution. 
                  As CEO of the Ministry of Electronics and Information Technology (Meity), 
                  he drives strategic initiatives that shape the nation's technological future.
                </p>
                <p>
                  His vision extends beyond traditional technology implementation to create 
                  comprehensive ecosystems that empower citizens, enable businesses, and 
                  strengthen India's position as a global technology leader.
                </p>
                <p>
                  Under his leadership, numerous groundbreaking initiatives have been launched, 
                  impacting millions of lives and establishing new benchmarks in digital governance 
                  and innovation.
                </p>
              </div>
            </div>
            
            <Card className="shadow-medium border-card-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Areas of Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  {expertise.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Career Milestones</h2>
            <p className="text-xl text-muted-foreground">
              Key achievements and leadership positions that shaped India's digital journey
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <Card key={index} className="shadow-soft border-card-border hover:shadow-medium transition-all">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row items-start gap-6">
                      <div className="flex items-center gap-4 flex-shrink-0">
                        <div className="w-12 h-12 bg-accent-light rounded-full flex items-center justify-center">
                          {milestone.icon}
                        </div>
                        <div className="text-2xl font-bold text-accent">{milestone.year}</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-primary mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Heart className="mx-auto mb-6 text-accent" size={48} />
              <h2 className="text-4xl font-bold text-primary mb-6">Leadership Philosophy</h2>
            </div>
            
            <Card className="shadow-medium border-card-border">
              <CardContent className="p-12">
                <blockquote className="text-2xl font-light text-center leading-relaxed text-muted-foreground mb-8">
                  "True leadership in technology lies not in adopting the latest trends, 
                  but in understanding the deeper human needs that technology can fulfill. 
                  My mission is to bridge the gap between innovation and impact, ensuring 
                  that every technological advancement serves the greater good of society."
                </blockquote>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="text-accent-foreground" size={28} />
                    </div>
                    <h4 className="font-semibold text-primary mb-2">People-Centric</h4>
                    <p className="text-sm text-muted-foreground">
                      Technology should empower and enhance human potential
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="text-accent-foreground" size={28} />
                    </div>
                    <h4 className="font-semibold text-primary mb-2">Impact-Driven</h4>
                    <p className="text-sm text-muted-foreground">
                      Every initiative must create measurable positive change
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="text-accent-foreground" size={28} />
                    </div>
                    <h4 className="font-semibold text-primary mb-2">Excellence</h4>
                    <p className="text-sm text-muted-foreground">
                      Pursuing the highest standards in every endeavor
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
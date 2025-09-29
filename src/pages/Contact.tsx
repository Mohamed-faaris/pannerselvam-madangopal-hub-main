import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Calendar, Linkedin, Twitter, Youtube } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-primary mb-6">Get In Touch</h1>
            <p className="text-xl text-muted-foreground">
              Connect for collaboration opportunities, speaking engagements, 
              or to discuss technology leadership and digital innovation initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-medium border-card-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Send a Message</CardTitle>
                  <p className="text-muted-foreground">
                    I'd love to hear from you. Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization</Label>
                    <Input id="organization" placeholder="Your company or organization" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Type of Inquiry</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="speaking">Speaking Engagement</SelectItem>
                        <SelectItem value="collaboration">Collaboration Opportunity</SelectItem>
                        <SelectItem value="media">Media Interview</SelectItem>
                        <SelectItem value="consulting">Consulting Request</SelectItem>
                        <SelectItem value="partnership">Partnership Proposal</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Brief subject of your message" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please provide details about your inquiry, including any specific topics, dates, or requirements..."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              
              {/* Direct Contact */}
              <Card className="shadow-soft border-card-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent-light rounded-full flex items-center justify-center">
                        <Mail className="text-accent" size={18} />
                      </div>
                      <div>
                        <p className="font-medium text-primary">Email</p>
                        <p className="text-sm text-muted-foreground">contact@pannerselvapm.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent-light rounded-full flex items-center justify-center">
                        <Phone className="text-accent" size={18} />
                      </div>
                      <div>
                        <p className="font-medium text-primary">Office</p>
                        <p className="text-sm text-muted-foreground">+91 11 2301 5000</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent-light rounded-full flex items-center justify-center">
                        <MapPin className="text-accent" size={18} />
                      </div>
                      <div>
                        <p className="font-medium text-primary">Location</p>
                        <p className="text-sm text-muted-foreground">New Delhi, India</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Speaking Engagements */}
              <Card className="shadow-soft border-card-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="text-accent" size={20} />
                    <h3 className="text-xl font-semibold text-primary">Speaking Engagements</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Available for keynotes, panel discussions, and thought leadership sessions on:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Digital Transformation</li>
                    <li>• Technology Policy</li>
                    <li>• Innovation Leadership</li>
                    <li>• Cybersecurity Frameworks</li>
                    <li>• AI and Emerging Technologies</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="shadow-soft border-card-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-4">Connect on Social Media</h3>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1 border-card-border hover:border-accent">
                      <Linkedin size={16} />
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 border-card-border hover:border-accent">
                      <Twitter size={16} />
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 border-card-border hover:border-accent">
                      <Youtube size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="shadow-soft border-card-border bg-accent-light">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">Response Time</h3>
                  <p className="text-sm text-muted-foreground">
                    I typically respond to inquiries within 48-72 hours. 
                    For urgent matters, please indicate in your subject line.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
            <p className="text-lg opacity-90 mb-8">
              Subscribe to receive updates on latest insights, speaking engagements, 
              and thought leadership content on technology and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white text-primary border-0 focus:ring-2 focus:ring-accent"
              />
              <Button variant="secondary" className="px-8 shrink-0">
                Subscribe
              </Button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
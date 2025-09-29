import { Link } from "react-router-dom";
import { Linkedin, Twitter, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Pannerselvam Madanagopal</h3>
            <p className="text-sm opacity-90">
              CEO of Meity, Technology Leader, and Visionary Entrepreneur driving innovation 
              in the digital age.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/about" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                About
              </Link>
              <Link to="/blog" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                Blog & Insights
              </Link>
              <Link to="/media" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                Media & Press
              </Link>
              <Link to="/contact" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                Contact
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="p-2 text-primary-foreground hover:bg-primary-light">
                <Linkedin size={18} />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-primary-foreground hover:bg-primary-light">
                <Twitter size={18} />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-primary-foreground hover:bg-primary-light">
                <Youtube size={18} />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-primary-foreground hover:bg-primary-light">
                <Mail size={18} />
              </Button>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold">Stay Updated</h4>
            <p className="text-sm opacity-90">
              Subscribe to receive insights on technology leadership and innovation.
            </p>
            <Button variant="secondary" size="sm" className="w-full">
              Subscribe
            </Button>
          </div>
        </div>

        <div className="border-t border-primary-light mt-8 pt-8 text-center">
          <p className="text-sm opacity-75">
            © 2024 Pannerselvam Madanagopal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
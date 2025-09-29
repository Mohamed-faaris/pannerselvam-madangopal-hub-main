import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navBarStyles } from "./styles";

const Theme37NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/blog", label: "Blog" },
    { href: "/media", label: "Media" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href) => {
    return location.pathname === href;
  };

  return (
    <nav style={navBarStyles.nav}>
      <div style={navBarStyles.container}>
        <div style={navBarStyles.flexContainer}>
          {/* Logo */}
          <Link to="/" style={navBarStyles.logo}>
            Pannerselvam Madanagopal
          </Link>

          {/* Desktop Navigation */}
          <div style={navBarStyles.desktopNav}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                style={{
                  ...navBarStyles.navLink,
                  ...(isActive(item.href) ? navBarStyles.activeLink : {}),
                }}
              >
                {item.label}
                {isActive(item.href) && (
                  <div style={navBarStyles.activeIndicator} />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={navBarStyles.mobileButton}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div style={navBarStyles.mobileNav}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                style={{
                  ...navBarStyles.mobileLink,
                  ...(isActive(item.href) ? navBarStyles.activeMobileLink : {}),
                }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Theme37NavBar;

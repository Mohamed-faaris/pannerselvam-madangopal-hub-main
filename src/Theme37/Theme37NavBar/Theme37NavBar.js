import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navBarStyles } from "./styles";

const Theme37NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredMobileButton, setHoveredMobileButton] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

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
          {!isMobile && (
            <div style={navBarStyles.desktopNav}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  style={{
                    ...navBarStyles.navLink,
                    ...(isActive(item.href) ? navBarStyles.activeLink : {}),
                    ...(hoveredLink === item.href
                      ? navBarStyles.navLinkHover
                      : {}),
                  }}
                  onMouseEnter={() => setHoveredLink(item.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <div style={navBarStyles.activeIndicator} />
                  )}
                </Link>
              ))}
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                ...navBarStyles.mobileButton,
                ...(hoveredMobileButton ? navBarStyles.mobileButtonHover : {}),
              }}
              onMouseEnter={() => setHoveredMobileButton(true)}
              onMouseLeave={() => setHoveredMobileButton(false)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        {/* Mobile Navigation */}
        {isMobile && isOpen && (
          <div style={navBarStyles.mobileNav}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                style={{
                  ...navBarStyles.mobileLink,
                  ...(isActive(item.href) ? navBarStyles.activeMobileLink : {}),
                  ...(hoveredLink === item.href
                    ? navBarStyles.mobileLinkHover
                    : {}),
                }}
                onClick={() => setIsOpen(false)}
                onMouseEnter={() => setHoveredLink(item.href)}
                onMouseLeave={() => setHoveredLink(null)}
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

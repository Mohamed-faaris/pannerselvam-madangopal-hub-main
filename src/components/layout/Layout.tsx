import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import "./Layout.css";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout = ({ children, className = "" }: LayoutProps) => {
  return (
    <div className="layout-container">
      <Navigation />
      <main className={`layout-main ${className}`}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

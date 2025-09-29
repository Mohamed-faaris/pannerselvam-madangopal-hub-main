import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Theme37Home, Theme37NavBar, Theme37Footer } from "@/Theme37";
import Theme37About from "@/Theme37/Theme37Home/Theme37About";
import Theme37Gallery from "@/Theme37/Theme37Home/Theme37Gallery";
import Theme37Media from "@/Theme37/Theme37Home/Theme37Media";
import Theme37Contact from "@/Theme37/Theme37Home/Theme37Contact";
import Theme37Blog from "@/Theme37/Theme37Home/Theme37Blog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Theme37NavBar />
      <Routes>
        <Route path="/" element={<Theme37Home />} />
        <Route path="/about" element={<Theme37About />} />
        <Route path="/gallery" element={<Theme37Gallery />} />
        <Route path="/blog" element={<Theme37Blog />} />
        <Route path="/media" element={<Theme37Media />} />
        <Route path="/contact" element={<Theme37Contact />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      </Routes>
      <Theme37Footer />
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;

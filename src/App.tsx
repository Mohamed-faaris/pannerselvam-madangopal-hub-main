import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Theme37Home, Theme37NavBar, Theme37Footer } from "@/Theme37";
import Theme37About from "@/Theme37/Theme37Home/Theme37About";
import Theme37Banner from "@/Theme37/Theme37Home/Theme37Banner";
import Theme37LeadershipImpact from "@/Theme37/Theme37Home/Theme37LeadershipImpact";
import Theme37QuickAccess from "@/Theme37/Theme37Home/Theme37QuickAccess";
import Theme37VisionStatement from "@/Theme37/Theme37Home/Theme37VisionStatement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Theme37NavBar />
      <Routes>
        <Route path="/" element={<Theme37Home />} />
        <Route path="/about" element={<Theme37About />} />
        <Route path="/gallery" element={<Theme37Banner />} />
        <Route path="/blog" element={<Theme37VisionStatement />} />
        <Route path="/media" element={<Theme37LeadershipImpact />} />
        <Route path="/contact" element={<Theme37QuickAccess />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      </Routes>
      <Theme37Footer />
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;

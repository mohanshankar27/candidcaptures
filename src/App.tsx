
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import PackageDetails from "./pages/PackageDetails";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ButtonDemo from "./pages/ButtonDemo";
import Categories from "./pages/Categories";
import Wedding from "./pages/categories/Wedding";
import Portrait from "./pages/categories/Portrait";
import Event from "./pages/categories/Event";
import Commercial from "./pages/categories/Commercial";
import { BentoGridGalleryDemo } from "./components/BentoGridGalleryDemo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <main className="min-h-screen w-full max-w-full overflow-x-hidden">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/packages/:packageId" element={<PackageDetails />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/button-demo" element={<ButtonDemo />} />
            
            {/* Category Pages */}
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/wedding" element={<Wedding />} />
            <Route path="/categories/portrait" element={<Portrait />} />
            <Route path="/categories/event" element={<Event />} />
            <Route path="/categories/commercial" element={<Commercial />} />
            
            {/* Demo Pages */}
            <Route path="/bento-demo" element={<BentoGridGalleryDemo />} />
            
            {/* Add a catch-all route that redirects to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </main>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

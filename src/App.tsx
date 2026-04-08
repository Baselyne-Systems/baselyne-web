import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AIInfrastructureConsulting from "./pages/services/AIInfrastructureConsulting";
import MLOpsConsulting from "./pages/services/MLOpsConsulting";
import DataInfrastructureConsulting from "./pages/services/DataInfrastructureConsulting";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import CDCPlatform from "./pages/blog/CDCPlatform";
import RetrievalOS from "./pages/blog/RetrievalOS";
import Bulkhead from "./pages/blog/Bulkhead";
import GateKeeper from "./pages/blog/GateKeeper";
import RobotDataLake from "./pages/blog/RobotDataLake";
import EdgeSync from "./pages/blog/EdgeSync";
import TrainingPipeline from "./pages/blog/TrainingPipeline";
import PhysicalAI from "./pages/industries/PhysicalAI";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/ai-infrastructure-consulting" element={<AIInfrastructureConsulting />} />
          <Route path="/services/mlops-consulting" element={<MLOpsConsulting />} />
          <Route path="/services/data-infrastructure-consulting" element={<DataInfrastructureConsulting />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/cdc-platform" element={<CDCPlatform />} />
          <Route path="/blog/retrieval-os" element={<RetrievalOS />} />
          <Route path="/blog/bulkhead" element={<Bulkhead />} />
          <Route path="/blog/gatekeeper" element={<GateKeeper />} />
          <Route path="/blog/robot-data-lake" element={<RobotDataLake />} />
          <Route path="/blog/edge-sync" element={<EdgeSync />} />
          <Route path="/blog/training-pipeline" element={<TrainingPipeline />} />
          <Route path="/physical-ai" element={<PhysicalAI />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;


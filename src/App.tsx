
import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Index from './pages/Index'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import { initializePerformanceOptimizations } from './utils/performance'
import GoogleReview from './components/GoogleReview' // Changed from PerformanceMonitor

// Lazy load other routes to improve initial load time
const PackageDetails = lazy(() => import('./pages/PackageDetails'))
const AboutUs = lazy(() => import('./pages/AboutUs'))

function App() {
  // Initialize performance optimizations
  useEffect(() => {
    initializePerformanceOptimizations({
      monitorRoutes: ['/services', '/packages', '/packages/corporate', '/packages/wedding'],
      criticalImages: [
        '/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png',
        '/lovable-uploads/71dc637a-2ed8-42fe-b045-b78301739a30.png',
        '/lovable-uploads/615d3ac6-4345-48d6-9ed9-b794c68b0307.png'
      ],
      priorityResources: {
        preconnect: ['https://cdn.gpteng.co', 'https://images.unsplash.com'],
        prefetch: ['/services', '/packages'],
        preload: [
          {path: '/src/components/Navbar.tsx', type: 'script' as const},
          {path: '/src/components/Footer.tsx', type: 'script' as const}
        ]
      }
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={
          <Suspense fallback={
            <div className="flex items-center justify-center h-screen">
              <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
            </div>
          }>
            <AboutUs />
          </Suspense>
        } />
        <Route 
          path="/packages/:packageId" 
          element={
            <Suspense fallback={
              <div className="flex items-center justify-center h-screen">
                <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
              </div>
            }>
              <PackageDetails />
            </Suspense>
          } 
        />
      </Routes>
      
      {/* Display Google Review component instead of PerformanceMonitor */}
      {process.env.NODE_ENV === 'development' && <GoogleReview />}
    </Router>
  )
}

export default App

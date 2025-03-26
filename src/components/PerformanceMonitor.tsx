
import React, { useEffect, useState } from 'react';

interface PerformanceMetric {
  name: string;
  value: number;
  status: 'good' | 'warning' | 'poor';
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([]);
  const [showDetails, setShowDetails] = useState(false);
  
  useEffect(() => {
    // Only run in development mode
    if (process.env.NODE_ENV !== 'development') return;
    
    const collectMetrics = () => {
      const newMetrics: PerformanceMetric[] = [];
      
      if (window.performance) {
        // Get navigation timing
        const navTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navTiming) {
          // DOM Content Loaded
          const dcl = navTiming.domContentLoadedEventEnd - navTiming.startTime;
          newMetrics.push({
            name: 'DOM Ready',
            value: Math.round(dcl),
            status: dcl < 1000 ? 'good' : dcl < 2000 ? 'warning' : 'poor'
          });
          
          // Load time
          const loadTime = navTiming.loadEventEnd - navTiming.startTime;
          newMetrics.push({
            name: 'Page Load',
            value: Math.round(loadTime),
            status: loadTime < 2000 ? 'good' : loadTime < 3000 ? 'warning' : 'poor'
          });
          
          // TTFB
          const ttfb = navTiming.responseStart - navTiming.requestStart;
          newMetrics.push({
            name: 'TTFB',
            value: Math.round(ttfb),
            status: ttfb < 200 ? 'good' : ttfb < 500 ? 'warning' : 'poor'
          });
        }
        
        // Get paint metrics
        const paintMetrics = performance.getEntriesByType('paint');
        
        const fpEntry = paintMetrics.find(entry => entry.name === 'first-paint');
        if (fpEntry) {
          newMetrics.push({
            name: 'First Paint',
            value: Math.round(fpEntry.startTime),
            status: fpEntry.startTime < 1000 ? 'good' : fpEntry.startTime < 2000 ? 'warning' : 'poor'
          });
        }
        
        const fcpEntry = paintMetrics.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          newMetrics.push({
            name: 'First Contentful Paint',
            value: Math.round(fcpEntry.startTime),
            status: fcpEntry.startTime < 1500 ? 'good' : fcpEntry.startTime < 2500 ? 'warning' : 'poor'
          });
        }
      }
      
      setMetrics(newMetrics);
    };
    
    // Collect metrics when page is fully loaded
    if (document.readyState === 'complete') {
      collectMetrics();
    } else {
      window.addEventListener('load', collectMetrics);
    }
    
    return () => {
      window.removeEventListener('load', collectMetrics);
    };
  }, []);
  
  // Only show in development mode
  if (process.env.NODE_ENV !== 'development' || metrics.length === 0) {
    return null;
  }
  
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div 
        className="bg-black/80 text-white rounded-lg shadow-lg p-3 max-w-xs cursor-pointer"
        onClick={() => setShowDetails(!showDetails)}
      >
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold">Performance Monitor</h3>
          <span className="text-xs">{showDetails ? '▲' : '▼'}</span>
        </div>
        
        {showDetails && (
          <div className="text-xs space-y-2">
            {metrics.map((metric, index) => (
              <div key={index} className="flex justify-between items-center">
                <span>{metric.name}:</span>
                <span className={
                  metric.status === 'good' ? 'text-green-400' : 
                  metric.status === 'warning' ? 'text-yellow-400' : 
                  'text-red-400'
                }>
                  {metric.value}ms
                </span>
              </div>
            ))}
            
            <div className="mt-2 pt-2 border-t border-white/20 text-[10px] text-gray-300">
              Target: &lt;2000ms
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;

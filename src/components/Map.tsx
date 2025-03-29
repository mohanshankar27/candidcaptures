
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

type MapProps = {
  className?: string;
};

const Map: React.FC<MapProps> = ({ className }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  
  // Coordinates for Uttarahalli, Bangalore
  const lat = 12.9081;
  const lng = 77.5552;

  useEffect(() => {
    if (!mapContainer.current) return;
    
    try {
      // Use a placeholder map with a static image if no token is available
      const mapboxPlaceholder = document.createElement('div');
      mapboxPlaceholder.className = 'w-full h-full rounded-lg bg-gray-100 flex items-center justify-center';
      mapboxPlaceholder.innerHTML = `
        <div class="text-center p-4">
          <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <p class="text-gray-600 text-sm">Uttarahalli, Bangalore, Karnataka, 560061</p>
        </div>
      `;
      
      if (mapContainer.current.firstChild) {
        mapContainer.current.removeChild(mapContainer.current.firstChild);
      }
      mapContainer.current.appendChild(mapboxPlaceholder);
    } catch (error) {
      console.error('Map error:', error);
    }
    
    // Cleanup function
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div ref={mapContainer} className={`w-full h-full rounded-lg ${className}`} />
  );
};

export default Map;

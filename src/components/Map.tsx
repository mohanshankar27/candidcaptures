
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

type MapProps = {
  className?: string;
};

const Map: React.FC<MapProps> = ({ className }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [tokenInput, setTokenInput] = useState<string>('');
  
  // Coordinates for Uttarahalli, Bangalore
  const lat = 12.9081;
  const lng = 77.5552;

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;
    
    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    if (map.current) return;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: 14,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add marker for location
    new mapboxgl.Marker({ color: '#ea384c' })
      .setLngLat([lng, lat])
      .setPopup(new mapboxgl.Popup().setHTML("<h3>Candid Capture</h3><p>Uttarahalli, Bangalore</p>"))
      .addTo(map.current);
  };

  useEffect(() => {
    if (mapboxToken) {
      initializeMap();
    }
    
    // Cleanup function
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [mapboxToken]);

  const handleSubmitToken = (e: React.FormEvent) => {
    e.preventDefault();
    setMapboxToken(tokenInput);
  };

  if (!mapboxToken) {
    return (
      <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
        <h3 className="text-lg font-medium mb-4 text-primary">Map Setup</h3>
        <p className="text-sm text-gray-600 mb-4">
          To display the map, please enter your Mapbox public token. You can find this in your 
          <a href="https://account.mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"> Mapbox account</a>.
        </p>
        <form onSubmit={handleSubmitToken} className="space-y-4">
          <input
            type="text"
            value={tokenInput}
            onChange={(e) => setTokenInput(e.target.value)}
            placeholder="Enter your Mapbox public token"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
            required
          />
          <button 
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
          >
            Load Map
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <div ref={mapContainer} className="w-full h-full rounded-lg shadow-lg" />
    </div>
  );
};

export default Map;

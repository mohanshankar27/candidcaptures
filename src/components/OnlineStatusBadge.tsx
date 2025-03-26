
import React, { useEffect, useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Wifi, WifiOff } from "lucide-react";
import { setupOnlineStatus } from '@/utils/performance';

const OnlineStatusBadge = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [lastSeen, setLastSeen] = useState<string | null>(null);

  useEffect(() => {
    const { isOnline: initialStatus, startTracking, stopTracking } = setupOnlineStatus();
    
    setIsOnline(initialStatus);
    
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
      if (navigator.onLine) {
        setLastSeen(new Date().toLocaleTimeString());
      }
    };
    
    // Start tracking online status
    startTracking();
    
    // Set up event listeners
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    
    // Initial status update
    updateOnlineStatus();
    
    return () => {
      stopTracking();
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  return (
    <div className="relative inline-flex items-center" title={lastSeen ? `Last seen: ${lastSeen}` : undefined}>
      <Badge 
        id="online-status-badge"
        variant={isOnline ? "default" : "outline"} 
        className={`ml-2 ${isOnline ? 'bg-green-500' : 'bg-gray-300'} transition-all duration-300`}
      >
        {isOnline ? (
          <span className="flex items-center gap-1">
            <Wifi className="h-3 w-3" /> Live
          </span>
        ) : (
          <span className="flex items-center gap-1">
            <WifiOff className="h-3 w-3" /> Offline
          </span>
        )}
      </Badge>
    </div>
  );
};

export default OnlineStatusBadge;

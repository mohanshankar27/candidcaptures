
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { measurePerformance, optimizeImageLoading } from './utils/performance'
import { initializePerformanceOptimizations } from './utils/performance' // Updated import

// Start performance measurement in development
if (import.meta.env.DEV) {
  measurePerformance();
}

// Initialize performance optimizations
initializePerformanceOptimizations();

// Mount the app
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Optimize images after initial render
optimizeImageLoading();

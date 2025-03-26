
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Enable minification for production builds
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Optimize large dependencies
    commonjsOptions: {
      include: [/node_modules/],
    },
    // Configure asset handling to optimize images
    assetsInlineLimit: 4096, // Assets smaller than 4kb will be inlined
    // Split chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@/components/ui'],
          framer: ['framer-motion'],
          carousel: ['embla-carousel-react'],
        },
      },
    },
    // Generate source maps for easier debugging in development only
    sourcemap: mode === 'development',
    // Improve chunk loading strategy
    chunkSizeWarningLimit: 1000,
  },
  // Add optimized image processing
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'embla-carousel-react'],
    exclude: [],
  },
}));

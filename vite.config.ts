
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Add response compression for dev server
    middlewareMode: false,
  },
  plugins: [
    react({
      // Fast refresh optimization
      fastRefresh: true,
    }),
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
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false,
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
          // Additional chunk splitting
          services: ['@/data/servicesList', '@/components/ServiceContent'],
          gallery: ['@/components/Gallery', '@/components/PhotoSlideshow'],
          utils: ['@/lib/utils', '@/utils/performance'],
        },
        // Improved chunking strategy
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          let extType = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          } else if (/woff|woff2|eot|ttf|otf/i.test(extType)) {
            extType = 'fonts';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
      },
    },
    // Generate source maps for easier debugging in development only
    sourcemap: mode === 'development',
    // Improve chunk loading strategy
    chunkSizeWarningLimit: 1000,
    // Preload critical chunks
    modulePreload: {
      polyfill: true,
    },
    // Target modern browsers for smaller bundles
    target: 'es2020',
  },
  // Add optimized image processing
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom', 
      'framer-motion', 
      'embla-carousel-react',
      'lucide-react',
      '@radix-ui/react-dialog',
      '@radix-ui/react-separator',
    ],
    exclude: [],
    // Force dependency pre-bundling
    force: true,
  },
  // Add caching for better performance
  cacheDir: '.vite-cache',
}));

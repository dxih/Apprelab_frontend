import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-styled-components'],
      },
    }),
    sitemap({
      hostname: 'https://apprelab.com', // Replace with production domain if different
      dynamicRoutes: [
        '/',
        '/home',
        '/learn',
        '/mentor',
        '/hire',
        '/create',
        '/about'
      ],
    }),
  ],
  server: {
    port: 5174,
    open: true,
    host: true
  },
  resolve: {
    alias: {
      '@mui/styled-engine': '@mui/styled-engine-sc',
    },
  },
});

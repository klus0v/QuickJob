import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        hmr: {
                host: '0.0.0.0',
                port: 5173,
            },
        proxy: {
            '/api': {
                target: 'http://51.250.93.99:5555',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, ''),
            },
            '/users-api': {
                target: 'http://51.250.93.99:7777',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/users-api/, ''),
            },
            '/cabinet-api': {
                target: 'http://51.250.93.99:4444',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/cabinet-api/, ''),
            },
        },
    },
});

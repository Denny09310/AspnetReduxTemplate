import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';

export default ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    return defineConfig({
        server: {
            https: {
                key: process.env.VITE_SSL_KEY_FILE,
                cert: process.env.VITE_SSL_CERT_FILE,
            },
            port: parseInt(process.env.VITE_PORT),
            proxy: {
                '/api': {
                    target: process.env.ASPNETCORE_HTTPS_PORT
                        ? `https://localhost:${process.env.ASPNETCORE_HTTPS_PORT}`
                        : process.env.ASPNETCORE_URLS
                        ? process.env.ASPNETCORE_URLS.split(';')[0]
                        : 'http://localhost:5001',
                    secure: false,
                },
            },
        },
        plugins: [mkcert(), react()],
    });
};

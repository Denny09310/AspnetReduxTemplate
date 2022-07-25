/* eslint-disable import/no-anonymous-default-export */
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import checker from 'vite-plugin-checker';
import EnvironmentPlugin from 'vite-plugin-environment';
import { createHtmlPlugin } from 'vite-plugin-html';
import mkcert from 'vite-plugin-mkcert';
import { VitePWA } from 'vite-plugin-pwa';
import pkg from './package.json';

export default ({ mode }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

	// WARNING: The homepage must start with a slash "/"
	const isDev = mode === 'development';
	const base = !isDev && pkg.homepage !== '.' ? `${pkg.homepage}/` : undefined;


	const proxyTarget = process.env.ASPNETCORE_HTTPS_PORT
		? `https://localhost:${process.env.ASPNETCORE_HTTPS_PORT}`
		: process.env.ASPNETCORE_URLS
		? process.env.ASPNETCORE_URLS.split(';')[0]
		: 'http://localhost:5001';

	return defineConfig({
		base,
		server: {
			base,
			https: {
				key: process.env.VITE_SSL_KEY_FILE,
				cert: process.env.VITE_SSL_CERT_FILE,
			},
			port: parseInt(process.env.VITE_PORT!),
			strictPort: true,

			// IMPORTANT: This is for Development only
			proxy: {
				'/api': {
					target: proxyTarget,
					changeOrigin: isDev,
					secure: !isDev,
				},
			},
		},
		build: {
			outDir: './build',
		},
		resolve: {
			alias: [
				{
					find: '@',
					replacement: path.resolve(__dirname, './src'),
				},
				{
					find: '@features',
					replacement: path.resolve(__dirname, './src/features'),
				},
				{
					find: '@app',
					replacement: path.resolve(__dirname, './src/app'),
				},
				{
					find: '@utils',
					replacement: path.resolve(__dirname, './src/utils'),
				},
			],
		},
		plugins: [
			react(),
			mkcert({
				// mkcertPath: "path/to/mkcert", // NOTE: Only if behind a proxy
			}),
			checker({ typescript: true }),
			createHtmlPlugin({
				template: './index.html',
				minify: true,
				inject: {
					data: {
						title: pkg.htmlData.title,
						description: pkg.htmlData.description,
						themeColor: pkg.htmlData.themeColor,
						base: base ?? '/',
					},
				},
			}),
			VitePWA({
				strategies: 'injectManifest',
				srcDir: 'src',
				filename: 'sw.ts',
				includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
				manifest: {
					scope: base,
					name: pkg.htmlData.title,
					short_name: pkg.htmlData.title,
					description: pkg.htmlData.description,
					start_url: './',
					background_color: pkg.htmlData.themeColor,
					theme_color: pkg.htmlData.themeColor,
					icons: [
						{
							src: 'pwa-192x192.png',
							sizes: '192x192',
							type: 'image/png',
						},
						{
							src: 'pwa-512x512.png',
							sizes: '512x512',
							type: 'image/png',
						},
					],
				},
				devOptions: {
					enabled: true,
					type: 'module',
				},
			}),
			EnvironmentPlugin('all', { prefix: 'ASPNETCORE_' }),
		],
	});
};

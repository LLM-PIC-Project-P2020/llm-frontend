import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react'
import { reactRouter } from "@react-router/dev/vite";
import { prismjsPlugin } from "vite-plugin-prismjs";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        reactRouter(),
        prismjsPlugin({
            languages: 'all',
            plugins: ['line-numbers'],
            theme: 'coy',
            css: true
        })
    ],
});

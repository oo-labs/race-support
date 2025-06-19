// ========================================
// 4) sanity.config.ts
// ========================================
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemaTypes from './schemas/schemaTypes';

export default defineConfig({
name: 'default',
title: 'Race Support',
projectId: 'ie8xrz97',
dataset: 'production',
plugins: [deskTool()],
schema: { types: schemaTypes },
vite: (config) => ({
...config,
esbuild: {
...config.esbuild,
loader: { '.ts': 'tsx', '.js': 'jsx', ...config.esbuild.loader }
}
})
});
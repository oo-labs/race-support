// File: sanity.config.ts

import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import schemaTypes from './schemas/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Race Support',
  projectId: 'ie8xrz97',
  dataset: 'production',
  plugins: [deskTool()],
  schema: { types: schemaTypes },

  // TELL VITE/ESBUILD TO LOAD .ts AS TSX INSIDE SCHEMAS
  vite: (config) => ({
    ...config,
    esbuild: {
      ...config.esbuild,
      loader: {
        // Everything in schemas/ can now parse JSX
        '.ts': 'tsx',
        '.tsx': 'tsx',
        '.js': 'jsx',
        '.jsx': 'jsx',
        ...config.esbuild?.loader,
      }
    }
  })
})
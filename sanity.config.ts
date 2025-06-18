import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import tile from './schemas/tile'
import campaignTier from './schemas/campaignTier'
import overdriveEpisode from './schemas/overdriveEpisode'

export default defineConfig({
  name: 'default',
  title: 'Race Support',

  projectId: 'ie8xrz97',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
  types: [tile, campaignTier, overdriveEpisode],
},
})

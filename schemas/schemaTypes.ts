// File: schemas/schemaTypes.ts

// import every document schema you’ve defined:
import tile from './tile';
import campaignTier from './campaignTier';
import overdriveEpisode from './overdriveEpisode';
// …if you have others, import them here…

// then export them as the array Sanity expects:
export default [
  tile,
  campaignTier,
  overdriveEpisode,
  // …and any more you imported…
];
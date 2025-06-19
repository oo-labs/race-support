import express from 'express';
import sanityClient from '@sanity/client';

const router = express.Router();
const client = sanityClient({
  projectId: 'ie8xrz97',
  dataset: 'production',
  useCdn: true
});

router.get('/api/tiles', async (_req, res) => {
  const tiles = await client.fetch(`*[_type == "tile"]{
    _id,
    title,
    "spriteUrl": sprite.asset->url,
    x,
    y,
    width,
    height
  } | order(_createdAt asc)`);
  res.json(tiles);
});

export default router;
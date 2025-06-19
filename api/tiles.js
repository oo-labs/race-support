// api/tiles.js
import express from 'express';
import { createClient } from '@sanity/client';

const router = express.Router();

// Initialize Sanity client properly
const client = createClient({
  projectId: 'ie8xrz97',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
});

router.get('/tiles', async (_req, res) => {
  try {
    const tiles = await client.fetch(
      `*[_type=="tile"]{
        _id,
        title,
        "spriteUrl": sprite.asset->url,
        x, y, width, height
      } | order(_createdAt asc)`
    );
    res.json(tiles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch tiles' });
  }
});

export default router;
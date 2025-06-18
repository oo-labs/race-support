const express = require('express')
const router = express.Router()
require('dotenv').config()

const { createClient } = require('@sanity/client')

console.log('🔐 Loaded Sanity token:', process.env.SANITY_API_TOKEN?.slice(0, 6) + '...')
console.log('🧪 Sanity client config:', {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: '2023-06-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN?.slice(0, 6) + '...'
})

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: '2023-06-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

router.get('/', async (req, res) => {
  const group = req.query.group || 'race-support';
  console.log(`📡 Querying Sanity with group: ${group}`);

  const query = `*[_type == "uiTile" && group == $group]{
    _id,
    title,
    x,
    y,
    width,
    height,
    order,
    link,
    group
  }`;

  console.log(`🛰️ Fetching tiles for group: ${group}`);

  try {
    const testQuery = `*[_type == "uiTile"][0..0]{_id, title}`;
    try {
      const testData = await client.fetch(testQuery);
      console.log(`🧪 Test query succeeded:`, testData);
    } catch (err) {
      console.error('❌ Test fetch failed:', err.message);
    }

    const data = await client.fetch(query, { group });
    console.log(`✅ Fetched ${data.length} tiles`);
    res.json(data);
  } catch (err) {
    console.error('❌ Sanity fetch error:', err.message);
    res.status(500).json({ error: 'Failed to fetch tiles' });
  }
});

module.exports = router;
// server.js
import express from 'express';
import cors from 'cors';
import tilesRouter from './api/tiles.js';

const app = express();
const PORT = process.env.PORT || 3001;

// 1) Enable CORS for all origins
app.use(cors());

// 2) JSON middleware
app.use(express.json());

// 3) Mount the tiles API
app.use('/api', tilesRouter);

// 4) Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
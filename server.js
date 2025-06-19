// ========================================
// 2) server.js
// ========================================
import express from 'express';
import cors from 'cors';
import tilesRouter from './api/tiles.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', tilesRouter);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(Server running on port ${PORT}));
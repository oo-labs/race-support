const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const path = require('path')

// Load environment variables
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// ✅ Serve static assets from the /static folder
app.use('/static', express.static(path.join(__dirname, 'static')))

// Middleware
app.use(cors())
app.use(express.json())

// API Routes
const tilesRoute = require('./api/tiles')
app.use('/api/tiles', tilesRoute)

// Health check or root route
app.get('/', (req, res) => {
  res.send('API ready and running.')
})

// Start server
app.listen(PORT, () => {
  console.log(`✅ API server listening on http://localhost:${PORT}`)
})
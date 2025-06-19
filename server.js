const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const path = require('path')

// Load environment variables
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// ✅ Allow CORS for all origins for dev stability
app.use(cors())

// Console logging
console.log('✅ Static route mounted:', path.resolve(__dirname, 'static'))

// ✅ Serve /static assets properly
app.use('/static', express.static(path.resolve(__dirname, 'static')))

// ✅ Parse incoming JSON requests
app.use(express.json())

// ✅ API Routes
const tilesRoute = require('./api/tiles')
app.use('/api/tiles', tilesRoute)

// ✅ Root health check
app.get('/', (req, res) => {
  res.send('API ready and running.')
})

// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ API server listening on http://localhost:${PORT}`)
})
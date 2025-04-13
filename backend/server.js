import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5050;

// Enhanced CORS configuration
app.use(cors({
  origin: 'http://localhost:5173', // Explicitly allow your Vite frontend
  credentials: true // If you need cookies/auth
}));

// Add request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Test endpoint with error handling
app.get('/api', (req, res) => {
  try {
    console.log('API endpoint hit!'); // Verify in terminal
    res.json({ 
      message: "Hello from backend!",
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    console.error('API Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Handle undefined routes
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Start server with error handling
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
}).on('error', (err) => {
  console.error('❌ Server startup error:', err);
});
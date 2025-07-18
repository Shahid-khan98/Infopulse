import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch'; // For Node.js fetch support

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

const NEWS_API_KEY = '32604f17666c4bd6b41e794ea9801d99'; // <-- Put your API key here

// Endpoint to get top headlines from NewsAPI
app.get('/api/news', async (req, res) => {
  try {
    const category = req.query.category || 'general';  // Allow category filter via query param
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${NEWS_API_KEY}`;

    const response = await fetch(url);
    if (!response.ok) {
      return res.status(response.status).json({ message: 'Failed to fetch news' });
    }
    const newsData = await response.json();

    // Optionally, you can process/filter the data here before sending
    res.json(newsData);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ message: 'Server error fetching news' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

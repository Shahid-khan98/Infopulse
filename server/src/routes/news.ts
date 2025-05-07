import { Router } from 'express';
import { fetchNewsByCategory } from '../services/newsService';

const router = Router();

router.get('/:category', async (req, res) => {
  const { category } = req.params;

  try {
    const articles = await fetchNewsByCategory(category);
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching news' });
  }
});

export default router;

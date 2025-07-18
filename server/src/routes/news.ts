import { Router } from 'express';
import { fetchNewsByCategory } from '../services/newsService';
import { log } from 'console';

const router = Router();

router.get('/:category', async (req, res) => {
  const { category } = req.params;

  try {
    const articles = await fetchNewsByCategory(category);
    console.log(articles);
    res.json(articles);

  } catch (error) {
    res.status(500).json({ message: 'Error fetching news' });
  }
});

export default router;

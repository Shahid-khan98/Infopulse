import { useEffect, useState } from "react";
import Header from "./components/Header";
import NewsCard from "./components/NewsCard";
import "./App.css";


interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  publishedAt: string;
  url: string;
  urlToImage: string | null;
  content: string | null;
}

function App() {
  const [category, setCategory] = useState("general");
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch('http://localhost:5001/api/news')
      .then(res => res.json())
      .then(data => {
        if (!data.articles) {
          console.error('No articles found in response:', data);
          return;
        }
        setArticles(data.articles || []);
      })
      .catch(err => console.error('Error fetching news:', err));
  }, []);
  
  return (
    <div>
      <Header selectedCategory={category} onSelectCategory={setCategory} />
      <main className="main">
        {articles.map((article, index) => (
          <NewsCard
            key={index}
            title={article.title}
            description={article.description}
            publishedAt={article.publishedAt}
          />
        ))}
      </main>
    </div>
  );
}

export default App;

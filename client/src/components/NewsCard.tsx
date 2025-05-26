import "./NewsCard.css";

interface NewsCardProps {
  title: string;
  description: string;
  publishedAt: string;
}

export default function NewsCard({ title, description, publishedAt }: NewsCardProps) {
  return (
    <div className="news-card">
      <h2 className="news-title">{title}</h2>
      <p className="news-content">{description}</p>
      <span className="news-date">{new Date(publishedAt).toLocaleString()}</span>
    </div>
  );
}

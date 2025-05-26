import "./Header.css";

interface HeaderProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function Header({ selectedCategory, onSelectCategory }: HeaderProps) {
  const categories = ["general", "entertainment", "sports", "technology", "health"];

  return (
    <header className="header">
      <h1 className="logo">News Portal</h1>
      <nav className="nav">
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "nav-button active" : "nav-button"}
            onClick={() => onSelectCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </nav>
    </header>
  );
}

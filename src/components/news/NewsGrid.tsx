
import { NewsArticle } from "@/lib/types";
import { NewsCard } from "./NewsCard";

interface NewsGridProps {
  articles: NewsArticle[];
  columns?: number;
}

export function NewsGrid({ articles, columns = 3 }: NewsGridProps) {
  if (articles.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-muted-foreground">No articles found.</p>
      </div>
    );
  }

  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${gridCols[columns as keyof typeof gridCols]} gap-6`}>
      {articles.map((article) => (
        <NewsCard key={article.id} article={article} />
      ))}
    </div>
  );
}

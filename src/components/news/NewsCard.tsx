
import { Link } from "react-router-dom";
import { NewsArticle } from "@/lib/types";
import { formatDistanceToNow } from "date-fns";
import { Bookmark, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NewsCardProps {
  article: NewsArticle;
  featured?: boolean;
  minimal?: boolean;
}

export function NewsCard({ article, featured = false, minimal = false }: NewsCardProps) {
  const formattedDate = formatDistanceToNow(new Date(article.publishedAt), {
    addSuffix: true,
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      politics: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
      business: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
      technology: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
      sports: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
      entertainment: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
      science: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300",
      health: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",
      world: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
  };

  if (minimal) {
    return (
      <Link 
        to={`/article/${article.id}`} 
        className="flex items-start gap-3 py-3 hover:bg-accent/50 rounded-md px-2 transition-colors duration-200"
      >
        {article.imageUrl && (
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="h-16 w-16 object-cover rounded-md flex-shrink-0" 
          />
        )}
        <div className="flex-1">
          <h3 className="font-medium text-sm line-clamp-2 text-balance">{article.title}</h3>
          <p className="text-xs text-muted-foreground mt-1">{formattedDate}</p>
        </div>
      </Link>
    );
  }

  if (featured) {
    return (
      <div className="premium-card group relative overflow-hidden hover-lift">
        <div className="relative h-96 w-full">
          {article.imageUrl ? (
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
          ) : (
            <div className="h-full w-full bg-muted flex items-center justify-center">No image available</div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 p-6 text-white">
            <span className={`category-pill mb-3 ${getCategoryColor(article.category)}`}>
              {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-2 text-balance">
              {article.title}
            </h2>
            <p className="text-sm text-white/80 mb-4 line-clamp-2">
              {article.description}
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-sm opacity-90">{article.source.name}</span>
                <span className="mx-2 opacity-60">•</span>
                <span className="text-sm opacity-90">{formattedDate}</span>
              </div>
              <Link 
                to={`/article/${article.id}`}
                className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white text-sm font-medium transition-all duration-200 hover:bg-white/20"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link 
      to={`/article/${article.id}`} 
      className="premium-card block h-full group overflow-hidden hover-lift"
    >
      <div className="relative aspect-video overflow-hidden">
        {article.imageUrl ? (
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        ) : (
          <div className="h-full w-full bg-muted flex items-center justify-center">No image available</div>
        )}
        <span className={`category-pill absolute top-3 left-3 ${getCategoryColor(article.category)}`}>
          {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-display font-medium text-lg mb-2 line-clamp-2 group-hover:text-primary/80 transition-colors text-balance">
          {article.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {article.description}
        </p>
        <div className="flex justify-between items-center mt-auto">
          <div className="flex items-center text-xs text-muted-foreground">
            <span>{article.source.name}</span>
            <span className="mx-1.5">•</span>
            <span>{formattedDate}</span>
          </div>
          <div className="flex space-x-1">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Bookmark className="h-4 w-4" />
              <span className="sr-only">Bookmark</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Share2 className="h-4 w-4" />
              <span className="sr-only">Share</span>
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}

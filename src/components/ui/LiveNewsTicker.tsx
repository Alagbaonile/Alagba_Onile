
import { useEffect, useState } from "react";
import { NewsArticle } from "@/lib/types";
import { getBreakingNews } from "@/hooks/useNewsData";
import { ArrowRightCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function LiveNewsTicker() {
  const [breakingNews, setBreakingNews] = useState<NewsArticle[]>([]);

  useEffect(() => {
    // In a real app, this would update periodically or with websockets
    setBreakingNews(getBreakingNews());
  }, []);
  
  if (breakingNews.length === 0) return null;

  return (
    <div className="bg-primary text-primary-foreground py-1 overflow-hidden">
      <div className="flex items-center">
        <div className="flex-shrink-0 px-4 py-1 bg-destructive text-destructive-foreground font-medium text-sm uppercase tracking-wider flex items-center">
          <span className="animate-pulse mr-1.5 h-2 w-2 rounded-full bg-white"></span>
          Breaking
        </div>
        <div className="overflow-hidden flex-grow flex px-4">
          <div className="animate-ticker whitespace-nowrap flex gap-12 items-center">
            {breakingNews.map((news, index) => (
              <Link 
                key={`${news.id}-${index}`}
                to={`/article/${news.id}`}
                className="flex items-center transition-colors hover:text-white/80"
              >
                <ArrowRightCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="font-medium text-sm">{news.title}</span>
              </Link>
            ))}
            {/* Duplicate for continuous scrolling */}
            {breakingNews.map((news, index) => (
              <Link 
                key={`duplicate-${news.id}-${index}`}
                to={`/article/${news.id}`}
                className="flex items-center transition-colors hover:text-white/80"
              >
                <ArrowRightCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="font-medium text-sm">{news.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

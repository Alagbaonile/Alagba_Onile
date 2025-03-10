
import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { NewsArticle } from "@/lib/types";
import { useNavigate } from "react-router-dom";

interface SearchBarProps {
  articles: NewsArticle[];
  className?: string;
}

export function SearchBar({ articles, className = "" }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [results, setResults] = useState<NewsArticle[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length >= 2) {
      const searchResults = articles.filter(
        article => 
          article.title.toLowerCase().includes(query.toLowerCase()) ||
          article.description.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5); // Limit to 5 results
      
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query, articles]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current && 
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleClear = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  const handleResultClick = (articleId: string) => {
    navigate(`/article/${articleId}`);
    setIsActive(false);
    setQuery("");
  };

  return (
    <div 
      ref={searchContainerRef}
      className={`relative ${className}`}
    >
      <div className={`flex items-center overflow-hidden bg-white dark:bg-accent/80 border border-border rounded-full transition-all duration-300 ${isActive ? 'shadow-md' : ''}`}>
        <div className="flex-grow flex items-center px-4 py-2">
          <Search className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0" />
          <Input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={handleFocus}
            placeholder="Search for news..."
            className="border-none shadow-none bg-transparent h-8 focus-visible:ring-0 focus-visible:ring-offset-0 px-0"
          />
          {query && (
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClear}
              className="h-7 w-7 rounded-full p-0 ml-1"
            >
              <X className="h-3 w-3 text-muted-foreground" />
              <span className="sr-only">Clear search</span>
            </Button>
          )}
        </div>
      </div>

      {isActive && results.length > 0 && (
        <div className="absolute mt-2 w-full bg-background border border-border rounded-lg shadow-lg overflow-hidden z-50 animate-fade-in">
          <ul className="py-2">
            {results.map((result) => (
              <li 
                key={result.id}
                className="px-4 py-2 hover:bg-accent cursor-pointer transition-colors duration-150"
                onClick={() => handleResultClick(result.id)}
              >
                <p className="font-medium text-sm text-foreground line-clamp-1">{result.title}</p>
                <p className="text-xs text-muted-foreground line-clamp-1">{result.source.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

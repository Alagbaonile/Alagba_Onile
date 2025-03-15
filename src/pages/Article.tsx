import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LiveNewsTicker } from "@/components/ui/LiveNewsTicker";
import { NewsCard } from "@/components/news/NewsCard";
import { Button } from "@/components/ui/button";
import { useLatestNews } from "@/hooks/useNewsData";
import { formatDistanceToNow } from "date-fns";
import { 
  Bookmark, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Copy, 
  ArrowLeft 
} from "lucide-react";
import { NewsArticle } from "@/lib/types";

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: newsData, isLoading } = useLatestNews();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow container mx-auto px-4 py-12">
          <div className="animate-pulse space-y-4 max-w-3xl mx-auto">
            <div className="h-8 bg-muted rounded w-3/4"></div>
            <div className="h-4 bg-muted rounded w-1/2"></div>
            <div className="h-96 bg-muted rounded w-full"></div>
            <div className="space-y-2">
              <div className="h-4 bg-muted rounded w-full"></div>
              <div className="h-4 bg-muted rounded w-full"></div>
              <div className="h-4 bg-muted rounded w-5/6"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  const article = newsData?.articles.find(article => article.id === id);
  
  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <p className="mb-6 text-muted-foreground">The article you're looking for doesn't exist or has been removed.</p>
          <Link to="/">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  const relatedArticles = newsData?.articles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3) || [];
  
  const formattedDate = formatDistanceToNow(new Date(article.publishedAt), {
    addSuffix: true,
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <LiveNewsTicker />
      
      <main className="flex-grow">
        <article className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/" 
              className="inline-flex items-center text-sm text-muted-foreground mb-6 hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Link>
            
            <span className="category-pill bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 mb-4">
              {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-4 text-balance">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-sm text-muted-foreground mb-6">
              {article.author && (
                <>
                  <span>By {article.author}</span>
                  <span className="mx-2">•</span>
                </>
              )}
              <span>{article.source.name}</span>
              <span className="mx-2">•</span>
              <span>{formattedDate}</span>
            </div>
            
            {article.imageUrl && (
              <div className="mb-8 rounded-lg overflow-hidden shadow-md">
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full h-auto object-cover" 
                />
              </div>
            )}
            
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-lg font-medium mb-6 text-balance">
                {article.description}
              </p>
              
              {article.content ? (
                <div>
                  {article.content.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              ) : (
                <p className="mb-4">
                  The full content of this article is available at the original source. 
                  <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary ml-1 hover:underline"
                  >
                    Read the full article
                  </a>.
                </p>
              )}
            </div>
            
            <div className="flex flex-wrap gap-4 items-center border-t border-b border-border py-4 mb-8">
              <div className="flex-grow font-medium">Share this article:</div>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Share on Facebook</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Share on Twitter</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">Share on LinkedIn</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copy link</span>
                </Button>
              </div>
              <Button variant="secondary" className="ml-auto md:ml-0">
                <Bookmark className="h-4 w-4 mr-2" />
                Save Article
              </Button>
            </div>
          </div>
        </article>
        
        {relatedArticles.length > 0 && (
          <section className="container mx-auto px-4 md:px-8 pb-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-display font-semibold mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <NewsCard key={relatedArticle.id} article={relatedArticle} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default ArticlePage;

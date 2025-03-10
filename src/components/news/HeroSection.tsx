
import { useLatestNews } from "@/hooks/useNewsData";
import { NewsCard } from "./NewsCard";
import { Skeleton } from "@/components/ui/skeleton";

export function HeroSection() {
  const { data: newsData, isLoading, error } = useLatestNews();
  
  if (isLoading) {
    return (
      <div className="container mx-auto py-8">
        <Skeleton className="h-[500px] w-full rounded-lg" />
      </div>
    );
  }
  
  if (error || !newsData) {
    return (
      <div className="container mx-auto py-8 text-center">
        <p className="text-muted-foreground">Failed to load featured news.</p>
      </div>
    );
  }
  
  // Use the first article as the featured one
  const featuredArticle = newsData.articles[0];
  
  // Use the next 3 articles for the secondary section
  const secondaryArticles = newsData.articles.slice(1, 4);

  return (
    <section className="container mx-auto py-8 px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <NewsCard article={featuredArticle} featured={true} />
        </div>
        <div className="space-y-6">
          {secondaryArticles.map((article) => (
            <NewsCard key={article.id} article={article} minimal={true} />
          ))}
        </div>
      </div>
    </section>
  );
}

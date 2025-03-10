
import { TrendingTopics } from "@/components/news/TrendingTopics";
import { SearchBar } from "@/components/ui/SearchBar";
import { useLatestNews } from "@/hooks/useNewsData";

export function Sidebar() {
  const { data: newsData } = useLatestNews();
  const articles = newsData?.articles || [];

  return (
    <aside className="w-full lg:w-80 space-y-6">
      <SearchBar articles={articles} className="lg:hidden mb-6" />
      <TrendingTopics />
      {/* We'll add more sidebar widgets in future updates */}
    </aside>
  );
}

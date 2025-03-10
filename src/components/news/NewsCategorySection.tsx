
import { useState } from "react";
import { NewsArticle, Category } from "@/lib/types";
import { useNewsByCategory } from "@/hooks/useNewsData";
import { NewsGrid } from "./NewsGrid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";

const categories: { label: string; value: Category }[] = [
  { label: "Politics", value: "politics" },
  { label: "Business", value: "business" },
  { label: "Technology", value: "technology" },
  { label: "Sports", value: "sports" },
  { label: "Entertainment", value: "entertainment" },
  { label: "Science", value: "science" },
  { label: "Health", value: "health" },
  { label: "World", value: "world" },
];

export function NewsCategorySection() {
  const [activeCategory, setActiveCategory] = useState<Category>("politics");
  const { data: categoryArticles, isLoading } = useNewsByCategory(activeCategory);
  
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category as Category);
  };

  return (
    <section className="container mx-auto py-12 px-4 md:px-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-display font-semibold">News Categories</h2>
      </div>
      
      <Tabs 
        defaultValue="politics" 
        value={activeCategory}
        onValueChange={handleCategoryChange}
        className="w-full"
      >
        <div className="overflow-x-auto pb-2 mb-6">
          <TabsList className="bg-transparent p-0 h-auto">
            {categories.map((category) => (
              <TabsTrigger
                key={category.value}
                value={category.value}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full py-1.5 px-4 text-sm font-medium transition-all data-[state=active]:shadow"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        
        {categories.map((category) => (
          <TabsContent 
            key={category.value} 
            value={category.value}
            className="mt-0 animate-fade-in"
          >
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="space-y-3">
                    <Skeleton className="h-48 w-full rounded-lg" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                ))}
              </div>
            ) : (
              <NewsGrid articles={categoryArticles || []} />
            )}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}

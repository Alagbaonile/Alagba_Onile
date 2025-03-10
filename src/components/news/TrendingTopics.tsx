
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Activity } from "lucide-react";
import { Link } from "react-router-dom";

// These would typically come from an API
const trendingTopics = [
  { id: 1, name: "Climate Change", count: 128 },
  { id: 2, name: "Artificial Intelligence", count: 94 },
  { id: 3, name: "Global Economy", count: 76 },
  { id: 4, name: "Space Exploration", count: 52 },
  { id: 5, name: "Renewable Energy", count: 48 },
  { id: 6, name: "Cryptocurrency", count: 41 },
  { id: 7, name: "Healthcare Reform", count: 37 },
  { id: 8, name: "Election 2024", count: 35 },
];

export function TrendingTopics() {
  // In a real app, this would fetch data from an API
  const { data: topics, isLoading } = useQuery({
    queryKey: ["trendingTopics"],
    queryFn: () => Promise.resolve(trendingTopics),
    staleTime: 1000 * 60 * 15, // 15 minutes
  });

  if (isLoading) {
    return (
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center">
            <Activity className="w-4 h-4 mr-2 text-primary" />
            Trending Topics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 animate-pulse">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-6 bg-muted rounded"></div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <Activity className="w-4 h-4 mr-2 text-primary" />
          Trending Topics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {topics?.map((topic) => (
            <Link to={`/search?q=${encodeURIComponent(topic.name)}`} key={topic.id}>
              <Badge variant="secondary" className="px-3 py-1.5 hover:bg-secondary/80">
                {topic.name}
                <span className="ml-1 text-xs text-muted-foreground">({topic.count})</span>
              </Badge>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

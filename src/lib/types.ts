
export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  content?: string;
  imageUrl?: string;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  };
  url: string;
  category: Category;
  author?: string;
}

export type Category = 
  | 'politics'
  | 'business'
  | 'technology'
  | 'sports'
  | 'entertainment'
  | 'science'
  | 'health'
  | 'world';

export interface NewsApiResponse {
  articles: NewsArticle[];
  status: string;
  totalResults: number;
}

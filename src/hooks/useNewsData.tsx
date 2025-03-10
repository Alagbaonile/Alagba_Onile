
import { useQuery } from '@tanstack/react-query';
import { NewsArticle, Category, NewsApiResponse } from '@/lib/types';

// This is mock data - in a real implementation, this would fetch from an API
const mockArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Breakthrough in Quantum Computing Promises New Era of Technology',
    description: 'Scientists have achieved a major milestone in quantum computing, unlocking potential for solving complex problems previously thought impossible.',
    content: 'In a groundbreaking development, researchers at MIT have successfully demonstrated quantum supremacy, completing calculations in minutes that would take traditional supercomputers thousands of years...',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
    publishedAt: '2023-10-15T14:30:00Z',
    source: {
      id: 'tech-daily',
      name: 'Tech Daily'
    },
    url: '/article/1',
    category: 'technology',
    author: 'Dr. Sarah Chen'
  },
  {
    id: '2',
    title: 'Global Markets React to Central Bank Policy Shifts',
    description: 'Stock markets worldwide experience volatility as major central banks signal changes in monetary policy approaches.',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3',
    publishedAt: '2023-10-15T12:15:00Z',
    source: {
      id: 'finance-weekly',
      name: 'Finance Weekly'
    },
    url: '/article/2',
    category: 'business',
    author: 'James Winthrop'
  },
  {
    id: '3',
    title: 'Climate Summit Concludes with Ambitious New Agreements',
    description: 'World leaders commit to accelerated timeline for carbon neutrality and increased funding for climate adaptation in developing nations.',
    imageUrl: 'https://images.unsplash.com/photo-1584949514490-84138d14ea42',
    publishedAt: '2023-10-14T18:45:00Z',
    source: {
      id: 'global-news',
      name: 'Global News Network'
    },
    url: '/article/3',
    category: 'world',
    author: 'Elena Rodriguez'
  },
  {
    id: '4',
    title: 'Historic Championship Victory Shatters Multiple Records',
    description: 'Underdog team completes remarkable season with championship win that breaks decades-old records.',
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018',
    publishedAt: '2023-10-14T21:20:00Z',
    source: {
      id: 'sports-center',
      name: 'Sports Center'
    },
    url: '/article/4',
    category: 'sports',
    author: 'Marcus Johnson'
  },
  {
    id: '5',
    title: 'Streaming Wars Intensify: New Platform Launches with Exclusive Content',
    description: 'Major entertainment conglomerate enters the crowded streaming market with high-budget original programming.',
    imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7',
    publishedAt: '2023-10-13T16:50:00Z',
    source: {
      id: 'entertainment-today',
      name: 'Entertainment Today'
    },
    url: '/article/5',
    category: 'entertainment',
    author: 'Priya Sharma'
  },
  {
    id: '6',
    title: 'New Medical Study Challenges Conventional Wisdom on Heart Health',
    description: 'Large-scale research project reveals surprising findings about dietary impacts on cardiovascular disease.',
    imageUrl: 'https://images.unsplash.com/photo-1628348070889-cb656235b4eb',
    publishedAt: '2023-10-13T14:15:00Z',
    source: {
      id: 'health-digest',
      name: 'Health Digest'
    },
    url: '/article/6',
    category: 'health',
    author: 'Dr. Michael Lee'
  },
  {
    id: '7',
    title: 'Political Tensions Rise as Key Legislation Faces Crucial Vote',
    description: 'Lawmakers prepare for contentious debate as landmark bill approaches final voting stage.',
    imageUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9',
    publishedAt: '2023-10-12T19:30:00Z',
    source: {
      id: 'capitol-report',
      name: 'Capitol Report'
    },
    url: '/article/7',
    category: 'politics',
    author: 'Alexandra Washington'
  },
  {
    id: '8',
    title: 'Mars Rover Discovers Evidence of Ancient Waterways',
    description: 'NASA announces that its latest Mars mission has uncovered compelling evidence of previously unknown water systems.',
    imageUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9',
    publishedAt: '2023-10-12T11:10:00Z',
    source: {
      id: 'science-bulletin',
      name: 'Science Bulletin'
    },
    url: '/article/8',
    category: 'science',
    author: 'Dr. Robert Chang'
  },
  {
    id: '9',
    title: 'Unexpected Economic Growth Surpasses Expert Predictions',
    description: 'Latest quarterly figures show surprising resilience in multiple sectors despite earlier pessimistic forecasts.',
    imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f',
    publishedAt: '2023-10-11T15:40:00Z',
    source: {
      id: 'business-today',
      name: 'Business Today'
    },
    url: '/article/9',
    category: 'business',
    author: 'Thomas Williams'
  },
  {
    id: '10',
    title: 'Revolutionary AI Tool Transforms Creative Industries',
    description: 'New artificial intelligence platform is changing how artists, musicians, and designers approach their craft.',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485',
    publishedAt: '2023-10-11T13:25:00Z',
    source: {
      id: 'tech-daily',
      name: 'Tech Daily'
    },
    url: '/article/10',
    category: 'technology',
    author: 'Olivia Chen'
  },
  {
    id: '11',
    title: 'Diplomatic Breakthrough in Long-Standing Regional Conflict',
    description: 'Negotiators announce unexpected progress in peace talks after decades of tension between neighboring countries.',
    imageUrl: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c',
    publishedAt: '2023-10-10T17:55:00Z',
    source: {
      id: 'global-news',
      name: 'Global News Network'
    },
    url: '/article/11',
    category: 'world',
    author: 'Jonathan Miller'
  },
  {
    id: '12',
    title: 'Acclaimed Film Director Announces Surprising Career Change',
    description: 'Award-winning filmmaker reveals plans to step away from cinema to pursue unexpected new creative direction.',
    imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
    publishedAt: '2023-10-10T12:40:00Z',
    source: {
      id: 'entertainment-today',
      name: 'Entertainment Today'
    },
    url: '/article/12',
    category: 'entertainment',
    author: 'Sophie Richardson'
  }
];

const fetchLatestNews = async (): Promise<NewsApiResponse> => {
  // This would be an API call in a real application
  // return fetch('https://api.example.com/news').then(res => res.json());
  
  // For now, we'll simulate a network request with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        articles: mockArticles,
        status: 'ok',
        totalResults: mockArticles.length
      });
    }, 800);
  });
};

const fetchNewsByCategory = async (category: Category): Promise<NewsArticle[]> => {
  // This would be an API call in a real application
  // return fetch(`https://api.example.com/news?category=${category}`).then(res => res.json());
  
  // For now, we'll filter our mock data by category
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockArticles.filter(article => article.category === category));
    }, 600);
  });
};

export const useLatestNews = () => {
  return useQuery({
    queryKey: ['latestNews'],
    queryFn: fetchLatestNews,
  });
};

export const useNewsByCategory = (category: Category) => {
  return useQuery({
    queryKey: ['news', category],
    queryFn: () => fetchNewsByCategory(category),
  });
};

export const getBreakingNews = (): NewsArticle[] => {
  // In a real app, you would apply criteria for what constitutes "breaking news"
  return mockArticles.slice(0, 5);
};

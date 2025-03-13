
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Search, 
  Filter, 
  RefreshCcw, 
  Calendar, 
  Tag, 
  ChevronRight,
  Newspaper,
  Rss
} from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
  source: string;
  url: string;
}

// Mock data for blog posts
const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Nigerian Students Excel in US Graduate Programs",
    excerpt: "Recent data shows Nigerian students achieving remarkable success in top US MBA and graduate programs, with many receiving significant scholarships.",
    date: "2023-05-15",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070",
    category: "African Students",
    source: "Education Times",
    url: "#"
  },
  {
    id: "2",
    title: "New Visa Regulations for F1 Students from Africa",
    excerpt: "The US Department of State announces updated visa regulations affecting F1 students from African countries, with important changes to the application process.",
    date: "2023-06-22",
    imageUrl: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=2564",
    category: "Visa News",
    source: "Immigration Daily",
    url: "#"
  },
  {
    id: "3",
    title: "Top MBA Programs with Strong African Student Communities",
    excerpt: "Discover which US business schools have thriving African student clubs and support networks for international students from the continent.",
    date: "2023-07-03",
    imageUrl: "https://images.unsplash.com/photo-1554269881-2a1b560f943c?q=80&w=2671",
    category: "MBA News",
    source: "Poets & Quants",
    url: "#"
  },
  {
    id: "4",
    title: "Scholarship Opportunities for African Graduate Students",
    excerpt: "A comprehensive guide to scholarships, fellowships, and financial aid options specifically available to African students pursuing graduate education in the US.",
    date: "2023-08-11",
    imageUrl: "https://images.unsplash.com/photo-1565036558162-44c9118493e6?q=80&w=2673",
    category: "Scholarships",
    source: "Financial Times",
    url: "#"
  },
  {
    id: "5",
    title: "STEM OPT Extension Benefits for International Students",
    excerpt: "How African students in STEM fields can leverage the OPT extension for valuable work experience and potential long-term employment in the United States.",
    date: "2023-09-05",
    imageUrl: "https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?q=80&w=2670",
    category: "Career Development",
    source: "STEM Daily",
    url: "#"
  },
  {
    id: "6",
    title: "Cultural Adjustment Tips for African Students in the US",
    excerpt: "Practical advice from African alumni on navigating cultural differences, building community, and thriving academically and socially on US campuses.",
    date: "2023-10-18",
    imageUrl: "https://images.unsplash.com/photo-1529693662653-9d480530a697?q=80&w=2671",
    category: "Student Life",
    source: "Campus Connect",
    url: "#"
  },
  {
    id: "7",
    title: "MSc vs MBA: Which is Right for African Professionals?",
    excerpt: "An analysis of the comparative benefits of specialized Master's programs versus MBA degrees for career advancement in African markets and globally.",
    date: "2023-11-02",
    imageUrl: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?q=80&w=2670",
    category: "Education Planning",
    source: "Career Insights",
    url: "#"
  },
  {
    id: "8",
    title: "African Universities Form Partnerships with US Institutions",
    excerpt: "Major universities across Africa establish exchange programs, research collaborations, and dual degree offerings with prestigious US schools.",
    date: "2023-12-14",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2670",
    category: "Higher Education",
    source: "Education News",
    url: "#"
  }
];

const Blog = () => {
  const { toast } = useToast();
  const [posts, setPosts] = useState<BlogPost[]>(mockBlogPosts);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(mockBlogPosts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const categories = Array.from(new Set(posts.map(post => post.category)));

  useEffect(() => {
    // Filter posts based on search term and selected category
    const results = posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    
    setFilteredPosts(results);
  }, [searchTerm, selectedCategory, posts]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const handleRefresh = () => {
    setIsLoading(true);
    
    // Simulate API fetch
    setTimeout(() => {
      // In a real app, this would be an API call
      setPosts(mockBlogPosts);
      setIsLoading(false);
      
      toast({
        title: "Content refreshed",
        description: "The latest news articles have been loaded.",
      });
    }, 1500);
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="font-semibold text-xl text-primary flex items-center gap-2">
            <GraduationCap className="h-5 w-5" /> SEVIS Pay Africa
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link to="/pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </Link>
            <Link to="/blog" className="text-sm font-medium text-primary">
              Blog
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Newspaper className="h-6 w-6 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 dark:from-primary dark:to-indigo-400 text-transparent bg-clip-text">
                Education & Visa News
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest news and insights about African students, 
              MBA programs, visa updates, and education trends.
            </p>
          </div>

          {/* Search and filter section */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={() => setSelectedCategory(null)}
              >
                <Filter className="h-4 w-4" />
                {selectedCategory ? "Clear Filter" : "All Categories"}
              </Button>
              <Button 
                variant="outline" 
                className={`flex items-center gap-2 ${isLoading ? "animate-pulse" : ""}`}
                onClick={handleRefresh}
                disabled={isLoading}
              >
                <RefreshCcw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
                Refresh
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(category => (
              <Badge 
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer transition-all hover:shadow-sm"
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Featured Article */}
          {filteredPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Rss className="h-5 w-5 text-primary" />
                Featured Article
              </h2>
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="h-64 md:h-auto bg-cover bg-center" style={{ backgroundImage: `url(${filteredPosts[0].imageUrl})` }}></div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge>{filteredPosts[0].category}</Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> {formatDate(filteredPosts[0].date)}
                        </span>
                      </div>
                      <CardTitle className="mb-3">{filteredPosts[0].title}</CardTitle>
                      <CardDescription className="text-base">{filteredPosts[0].excerpt}</CardDescription>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">Source: {filteredPosts[0].source}</div>
                      <Button size="sm" className="flex items-center gap-1">
                        Read More <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.slice(1).map(post => (
              <Card key={post.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div 
                  className="h-48 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${post.imageUrl})` }}
                ></div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-1">
                    <Badge variant="outline">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground">{formatDate(post.date)}</span>
                  </div>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex items-center justify-between pt-0">
                  <div className="text-xs text-muted-foreground">Source: {post.source}</div>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1 text-primary hover:text-primary">
                    Read More <ChevronRight className="h-3 w-3" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="mb-4 text-muted-foreground">
                <Search className="h-12 w-12 mx-auto opacity-25" />
              </div>
              <h3 className="text-xl font-medium mb-2">No articles found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory(null);
                }}
              >
                Clear all filters
              </Button>
            </div>
          )}

          <div className="mt-12 flex justify-center">
            <Button variant="outline" className="flex items-center gap-2">
              Load More Articles
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
      
      <footer className="border-t py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <GraduationCap className="h-5 w-5" /> SEVIS Pay Africa
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                We help African students simplify the SEVIS fee payment process 
                to pursue their education dreams in the United States.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
                <li><Link to="/pricing" className="text-muted-foreground hover:text-primary">Pricing</Link></li>
                <li><Link to="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  +234 123 456 7890
                </p>
                <p className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  info@sevispayafrica.com
                </p>
                <p className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  Lagos, Nigeria
                </p>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} SEVIS Pay Africa. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;

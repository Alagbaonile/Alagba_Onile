
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { SearchBar } from "@/components/ui/SearchBar";
import { Button } from "@/components/ui/button";
import { Menu, X, Bell, User } from "lucide-react";
import { useLatestNews } from "@/hooks/useNewsData";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: newsData } = useLatestNews();
  
  // Track scroll position to change navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm" 
          : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="font-display text-2xl font-bold transition-transform hover:scale-105"
          >
            NewsHub
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium hover:text-primary/80 transition-colors">Home</Link>
            <Link to="/" className="text-sm font-medium hover:text-primary/80 transition-colors">Politics</Link>
            <Link to="/" className="text-sm font-medium hover:text-primary/80 transition-colors">Business</Link>
            <Link to="/" className="text-sm font-medium hover:text-primary/80 transition-colors">Technology</Link>
            <Link to="/" className="text-sm font-medium hover:text-primary/80 transition-colors">Entertainment</Link>
            <Link to="/" className="text-sm font-medium hover:text-primary/80 transition-colors">Sports</Link>
          </nav>
          
          {/* Actions */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:block w-64">
              <SearchBar articles={newsData?.articles || []} />
            </div>
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <div className="mb-4">
              <SearchBar articles={newsData?.articles || []} className="w-full" />
            </div>
            <nav className="space-y-3">
              <Link 
                to="/" 
                className="block px-3 py-2 rounded-md hover:bg-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/" 
                className="block px-3 py-2 rounded-md hover:bg-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Politics
              </Link>
              <Link 
                to="/" 
                className="block px-3 py-2 rounded-md hover:bg-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Business
              </Link>
              <Link 
                to="/" 
                className="block px-3 py-2 rounded-md hover:bg-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Technology
              </Link>
              <Link 
                to="/" 
                className="block px-3 py-2 rounded-md hover:bg-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Entertainment
              </Link>
              <Link 
                to="/" 
                className="block px-3 py-2 rounded-md hover:bg-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sports
              </Link>
            </nav>
            <div className="mt-4 pt-4 border-t border-border flex space-x-4">
              <Button variant="outline" size="sm" className="flex-1">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
              <Button variant="default" size="sm" className="flex-1">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

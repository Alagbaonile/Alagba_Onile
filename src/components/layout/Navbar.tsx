
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { SearchBar } from "@/components/ui/SearchBar";
import { Button } from "@/components/ui/button";
import { Menu, X, Bell, User, ChevronDown } from "lucide-react";
import { useLatestNews } from "@/hooks/useNewsData";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

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
            SevPay
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/" 
              className="text-sm font-medium hover:text-primary/80 transition-colors px-3 py-2"
            >
              Home
            </Link>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-sm font-medium hover:text-primary/80 transition-colors px-3 py-2"
            >
              Services
            </button>
            <Link 
              to="/blog" 
              className="text-sm font-medium hover:text-primary/80 transition-colors px-3 py-2"
            >
              Blog
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium hover:text-primary/80 transition-colors bg-transparent">
                    Company
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-2 p-4">
                      <li>
                        <button
                          onClick={() => scrollToSection('about')}
                          className="block w-full select-none space-y-1 rounded-md p-3 hover:bg-accent text-left"
                        >
                          <div className="text-sm font-medium">About Us</div>
                          <p className="line-clamp-2 text-sm text-muted-foreground">
                            Learn more about our mission
                          </p>
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => scrollToSection('faq')}
                          className="block w-full select-none space-y-1 rounded-md p-3 hover:bg-accent text-left"
                        >
                          <div className="text-sm font-medium">FAQ</div>
                          <p className="line-clamp-2 text-sm text-muted-foreground">
                            Frequently asked questions
                          </p>
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => scrollToSection('contact-support')}
                          className="block w-full select-none space-y-1 rounded-md p-3 hover:bg-accent text-left"
                        >
                          <div className="text-sm font-medium">Support</div>
                          <p className="line-clamp-2 text-sm text-muted-foreground">
                            Get help with your payments
                          </p>
                        </button>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
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
              <button 
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 rounded-md hover:bg-accent transition-colors w-full text-left"
              >
                Services
              </button>
              <Link 
                to="/blog" 
                className="block px-3 py-2 rounded-md hover:bg-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <div className="px-3 py-2">
                <div className="font-medium mb-2">Company</div>
                <div className="space-y-2 pl-4">
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="block px-3 py-2 rounded-md hover:bg-accent transition-colors w-full text-left"
                  >
                    About Us
                  </button>
                  <button 
                    onClick={() => scrollToSection('faq')}
                    className="block px-3 py-2 rounded-md hover:bg-accent transition-colors w-full text-left"
                  >
                    FAQ
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact-support')}
                    className="block px-3 py-2 rounded-md hover:bg-accent transition-colors w-full text-left"
                  >
                    Support
                  </button>
                </div>
              </div>
            </nav>
            <div className="mt-4 pt-4 border-t border-border flex space-x-4">
              <Button variant="outline" size="sm" className="flex-1">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
              <Link to="/payment" className="flex-1">
                <Button variant="default" size="sm" className="w-full">
                  Make Payment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

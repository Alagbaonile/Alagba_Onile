
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { SearchBar } from "@/components/ui/SearchBar";
import { Button } from "@/components/ui/button";
import { Menu, X, Bell, User, ChevronDown, GraduationCap } from "lucide-react";
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
  const location = useLocation();
  
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

  // Determine if we're on the payment page to show "Back to Pricing" instead of "Pricing"
  const isPaymentPage = location.pathname === "/payment";

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm" 
          : "bg-background"
      }`}
    >
      <div className="container mx-auto px-6 md:px-10"> {/* Increased container padding */}
        <div className="flex items-center justify-between h-18 md:h-22"> {/* Increased height */}
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 font-display text-2xl font-bold transition-transform hover:scale-105"
          >
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              <GraduationCap className="h-5 w-5" />
            </div>
            <span>SEVIS Pay Africa</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8"> {/* Increased spacing */}
            <Link 
              to="/" 
              className="text-base font-medium hover:text-primary/80 transition-colors px-4 py-2"
            >
              Home
            </Link>
            {isPaymentPage ? (
              <Link 
                to="/pricing" 
                className="text-base font-medium hover:text-primary/80 transition-colors px-4 py-2"
              >
                Back to Pricing
              </Link>
            ) : (
              <>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-base font-medium hover:text-primary/80 transition-colors px-4 py-2"
                >
                  Services
                </button>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-base font-medium hover:text-primary/80 transition-colors bg-transparent">
                        Company
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[220px] gap-2 p-4">
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
              </>
            )}
          </nav>
          
          {/* Actions */}
          <div className="flex items-center space-x-5"> {/* Increased spacing */}
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
            <Link to="/payment" className="hidden md:block">
              <Button variant="default" size="sm" className="py-5 px-6 text-base"> {/* Larger button */}
                Make Payment
              </Button>
            </Link>
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
          <div className="container mx-auto px-6 py-6"> {/* Increased padding */}
            <nav className="space-y-4"> {/* Increased spacing */}
              <Link 
                to="/" 
                className="block px-4 py-3 rounded-md hover:bg-accent transition-colors text-base" {/* Increased text size and padding */}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              {isPaymentPage ? (
                <Link 
                  to="/pricing" 
                  className="block px-4 py-3 rounded-md hover:bg-accent transition-colors text-base" {/* Increased text size and padding */}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Back to Pricing
                </Link>
              ) : (
                <>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="block px-4 py-3 rounded-md hover:bg-accent transition-colors w-full text-left text-base" {/* Increased text size and padding */}
                  >
                    Services
                  </button>
                  <div className="px-4 py-3">
                    <div className="font-medium mb-3 text-base">Company</div> {/* Increased text size and margin */}
                    <div className="space-y-3 pl-5"> {/* Increased spacing */}
                      <button 
                        onClick={() => scrollToSection('about')}
                        className="block px-4 py-3 rounded-md hover:bg-accent transition-colors w-full text-left text-base" {/* Increased text size and padding */}
                      >
                        About Us
                      </button>
                      <button 
                        onClick={() => scrollToSection('faq')}
                        className="block px-4 py-3 rounded-md hover:bg-accent transition-colors w-full text-left text-base" {/* Increased text size and padding */}
                      >
                        FAQ
                      </button>
                      <button 
                        onClick={() => scrollToSection('contact-support')}
                        className="block px-4 py-3 rounded-md hover:bg-accent transition-colors w-full text-left text-base" {/* Increased text size and padding */}
                      >
                        Support
                      </button>
                    </div>
                  </div>
                </>
              )}
            </nav>
            <div className="mt-6 pt-5 border-t border-border flex space-x-4"> {/* Increased spacing */}
              <Button variant="outline" size="sm" className="flex-1 py-5 text-base"> {/* Larger button */}
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
              <Link to="/payment" className="flex-1">
                <Button variant="default" size="sm" className="w-full py-5 text-base"> {/* Larger button */}
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

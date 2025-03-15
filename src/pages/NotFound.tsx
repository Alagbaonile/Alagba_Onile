
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Footer } from "@/components/layout/Footer";
import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <Link to="/" className="font-semibold text-xl text-primary flex items-center gap-2">
            <GraduationCap className="h-5 w-5" /> SEVIS Pay Africa
          </Link>
        </div>
      </header>
      
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold mb-6">404</h1>
          <p className="text-xl text-gray-600 mb-8">Oops! The page you're looking for cannot be found.</p>
          <Link to="/">
            <Button size="lg">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;

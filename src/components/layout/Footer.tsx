
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Rss } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground py-12 mt-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h2 className="font-display text-2xl font-bold mb-4">NewsHub</h2>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Your trusted source for the latest news across politics, technology, 
              entertainment, sports, and more. Stay informed with our 
              comprehensive coverage of global events.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Rss size={20} />
                <span className="sr-only">RSS</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-primary-foreground/80 hover:text-white transition-colors">Politics</Link></li>
              <li><Link to="/" className="text-primary-foreground/80 hover:text-white transition-colors">Business</Link></li>
              <li><Link to="/" className="text-primary-foreground/80 hover:text-white transition-colors">Technology</Link></li>
              <li><Link to="/" className="text-primary-foreground/80 hover:text-white transition-colors">Entertainment</Link></li>
              <li><Link to="/" className="text-primary-foreground/80 hover:text-white transition-colors">Sports</Link></li>
              <li><Link to="/" className="text-primary-foreground/80 hover:text-white transition-colors">Science</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-primary-foreground/80 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/" className="text-primary-foreground/80 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/" className="text-primary-foreground/80 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/" className="text-primary-foreground/80 hover:text-white transition-colors">Advertise</Link></li>
              <li><Link to="/" className="text-primary-foreground/80 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/" className="text-primary-foreground/80 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} NewsHub. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-primary-foreground/60 text-sm">
              Designed with precision and care
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

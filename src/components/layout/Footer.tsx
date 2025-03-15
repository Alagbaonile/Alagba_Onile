
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, GraduationCap } from "lucide-react";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t py-16 bg-muted/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]"></div>
      
      <div className="container mx-auto px-6 md:px-10 relative z-10"> {/* Increased container padding */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14"> {/* Increased grid gap and bottom margin */}
          <div>
            <div className="flex items-center gap-3 mb-8"> {/* Increased spacing */}
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xl font-bold">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-xl">SEVIS Pay Africa</h3>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed mb-8"> {/* Increased line height and margin */}
              Making SEVIS fee payments simple, secure and stress-free for African students.
            </p>
            
            <div className="mt-6 flex gap-5"> {/* Increased gap */}
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          <div className="lg:pl-10"> {/* Added left padding on larger screens */}
            <h3 className="font-semibold text-xl mb-8">Quick Links</h3> {/* Increased font size and margin */}
            <ul className="space-y-4 text-base"> {/* Increased spacing and text size */}
              <li className="leading-relaxed">
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li className="leading-relaxed">
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li className="leading-relaxed">
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQs
                </Link>
              </li>
              <li className="leading-relaxed">
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li className="leading-relaxed">
                <Link to="/payment" className="text-muted-foreground hover:text-primary transition-colors">
                  Make a Payment
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:pl-10"> {/* Added left padding on larger screens */}
            <h3 className="font-semibold text-xl mb-8">Contact Us</h3> {/* Increased font size and margin */}
            <ul className="space-y-5 text-base"> {/* Increased spacing and text size */}
              <li className="flex items-center gap-3 text-muted-foreground"> {/* Increased gap */}
                <Phone size={18} className="text-primary" />
                <span>+234 (0) 800 SEVIS PAY</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground"> {/* Increased gap */}
                <Mail size={18} className="text-primary" />
                <span>support@sevispayafrica.com</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground"> {/* Increased gap */}
                <MapPin size={18} className="text-primary" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
            
            <div className="mt-8"> {/* Increased margin */}
              <h4 className="font-medium text-lg mb-4">Payment Partners</h4> {/* Increased font size and margin */}
              <div className="flex gap-6"> {/* Increased gap */}
                <img src="https://placehold.co/50x25?text=Visa" alt="Visa" className="h-8 opacity-75 hover:opacity-100 transition-opacity" />
                <img src="https://placehold.co/50x25?text=MC" alt="MasterCard" className="h-8 opacity-75 hover:opacity-100 transition-opacity" />
                <img src="https://placehold.co/50x25?text=Flw" alt="Flutterwave" className="h-8 opacity-75 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t pt-8 text-center text-sm text-muted-foreground"> {/* Increased top padding */}
          <p className="text-base">© {currentYear} SEVIS Pay Africa. All rights reserved.</p> {/* Increased text size */}
          <div className="mt-4 flex justify-center gap-6"> {/* Increased gap and margin */}
            <Link to="#" className="hover:text-primary transition-colors text-base">Privacy Policy</Link> {/* Increased text size */}
            <Link to="#" className="hover:text-primary transition-colors text-base">Terms of Service</Link> {/* Increased text size */}
          </div>
        </div>
      </div>
    </footer>
  );
}

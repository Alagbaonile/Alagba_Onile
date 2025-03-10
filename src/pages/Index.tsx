
import { HeroSection } from "@/components/news/HeroSection";
import { NewsCategorySection } from "@/components/news/NewsCategorySection";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LiveNewsTicker } from "@/components/ui/LiveNewsTicker";
import { Sidebar } from "@/components/layout/Sidebar";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <LiveNewsTicker />
      <main className="flex-grow">
        <HeroSection />
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <NewsCategorySection />
            </div>
            <Separator orientation="vertical" className="hidden lg:block" />
            <Sidebar />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

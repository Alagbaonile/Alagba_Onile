
import { HeroSection } from "@/components/news/HeroSection";
import { NewsCategorySection } from "@/components/news/NewsCategorySection";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LiveNewsTicker } from "@/components/ui/LiveNewsTicker";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <LiveNewsTicker />
      <main className="flex-grow">
        <HeroSection />
        <NewsCategorySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

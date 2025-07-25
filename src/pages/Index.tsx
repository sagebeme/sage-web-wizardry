import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CourseSection } from "@/components/CourseSection";
import { StudentShowcase } from "@/components/StudentShowcase";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CourseSection />
      <StudentShowcase />
      <Footer />
    </div>
  );
};

export default Index;

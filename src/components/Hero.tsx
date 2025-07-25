import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Sparkles, Code, Zap, Rocket } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-wizard-primary/5 via-background to-sage-green/5" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-wizard-primary/20 to-wizard-secondary/20 backdrop-blur-sm" />
      </div>
      <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-sage-green/20 to-accent/20 backdrop-blur-sm" />
      </div>
      <div className="absolute top-1/3 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <Code className="w-8 h-8 text-wizard-primary/30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6 text-wizard-primary border-wizard-primary/20">
            <Sparkles className="w-4 h-4 mr-2" />
            Transform Your Future with Code
          </Badge>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fadeInUp">
            Become a{" "}
            <span className="bg-gradient-to-r from-wizard-primary via-wizard-secondary to-sage-green bg-clip-text text-transparent">
              Web Wizard
            </span>
            <br />
            with Sage
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Master modern web development from HTML basics to full-stack applications. 
            Join thousands who've transformed their careers with hands-on learning and AI-powered tools.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScSor99NDUS50ftYTWvMYDi1lqP1THU-Nj3T4UM99QDwc697Q/viewform?usp=header", "_blank")}
            >
              <Rocket className="w-6 h-6" />
              Start Learning
            </Button>
            <Button variant="outline" size="xl" onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}>
              <Zap className="w-5 h-5" />
              Explore Courses
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-2xl font-bold text-wizard-primary">2000+</div>
              <div className="text-sm text-muted-foreground">Students Taught</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-sage-green">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-wizard-secondary">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">100%</div>
              <div className="text-sm text-muted-foreground">Hands-on</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
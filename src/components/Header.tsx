import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Code, Sparkles } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="rounded-lg bg-gradient-to-r from-wizard-primary to-wizard-secondary p-2">
              <Code className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-wizard-primary to-sage-green bg-clip-text text-transparent">
                Sage
              </h1>
              <p className="text-xs text-muted-foreground">with Sage</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#courses" className="text-sm font-medium hover:text-wizard-primary transition-colors">
              Courses
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-wizard-primary transition-colors">
              Success Stories
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-wizard-primary transition-colors">
              Student Work
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <Button 
              variant="wizard" 
              size="sm"
              onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScSor99NDUS50ftYTWvMYDi1lqP1THU-Nj3T4UM99QDwc697Q/viewform?usp=header", "_blank")}
            >
              <Sparkles className="h-4 w-4" />
              Join Now
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
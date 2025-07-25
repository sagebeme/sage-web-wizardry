import { Button } from "./ui/button";
import { Code, Mail, MessageCircle, BookOpen } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-wizard-primary/5 to-sage-green/5 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="rounded-lg bg-gradient-to-r from-wizard-primary to-wizard-secondary p-2">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-wizard-primary to-sage-green bg-clip-text text-transparent">
                  Sage
                </h3>
                <p className="text-xs text-muted-foreground">with Sage</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Transforming beginners into web development wizards through hands-on learning and AI-powered tools.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-wizard-primary">Courses</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#courses" className="text-muted-foreground hover:text-wizard-primary transition-colors">Frontend Bootcamp</a></li>
              <li><a href="#courses" className="text-muted-foreground hover:text-wizard-primary transition-colors">Full Stack Mastery</a></li>
              <li><a href="#projects" className="text-muted-foreground hover:text-wizard-primary transition-colors">Student Projects</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sage-green">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#testimonials" className="text-muted-foreground hover:text-sage-green transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-sage-green transition-colors">Course Materials</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-sage-green transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact & Get Started</h4>
            <div className="space-y-3">
              <Button 
                variant="wizard" 
                size="sm" 
                className="w-full"
                onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScSor99NDUS50ftYTWvMYDi1lqP1THU-Nj3T4UM99QDwc697Q/viewform?usp=header", "_blank")}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Join Course
              </Button>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">
                  <strong>Contact us:</strong>
                </div>
                <div className="text-sm font-medium">+254113180148</div>
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open("mailto:eudicas5k@gmail.com", "_blank")}
                  >
                    <Mail className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open("https://wa.me/254113180148", "_blank")}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Sage with Sage. All rights reserved. Made with ❤️ for aspiring developers.</p>
        </div>
      </div>
    </footer>
  );
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Globe, Github, Sparkles } from "lucide-react";

export function StudentShowcase() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sage-green border-sage-green/20">
            <Sparkles className="w-4 h-4 mr-2" />
            Student Success
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Amazing Projects by <span className="bg-gradient-to-r from-wizard-primary to-sage-green bg-clip-text text-transparent">Our Students</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our students have built after completing the Sage courses. Their success stories inspire us every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Placeholder project cards - you mentioned you'll add the actual links */}
          {[1, 2, 3, 4, 5, 6].map((project) => (
            <Card key={project} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-card to-muted/30">
              <CardHeader>
                <div className="w-full h-48 rounded-lg bg-gradient-to-br from-wizard-primary/20 to-sage-green/20 mb-4 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Globe className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Project Preview</p>
                    <p className="text-xs">Link coming soon</p>
                  </div>
                </div>
                <CardTitle className="group-hover:text-wizard-primary transition-colors">
                  Student Project {project}
                </CardTitle>
                <CardDescription>
                  An amazing web application showcasing the skills learned in our course.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-wizard-primary border-wizard-primary/20">
                    React
                  </Badge>
                  <Badge variant="outline" className="text-sage-green border-sage-green/20">
                    Tailwind
                  </Badge>
                  <Badge variant="outline" className="text-wizard-secondary border-wizard-secondary/20">
                    Firebase
                  </Badge>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" disabled className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" disabled>
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-wizard-primary/5 to-sage-green/5 border-dashed border-2 border-wizard-primary/20">
            <CardContent className="p-8">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-wizard-primary" />
              <h3 className="text-2xl font-bold mb-3">Your Project Could Be Here!</h3>
              <p className="text-muted-foreground mb-6">
                Join our course and build amazing projects that will showcase your new skills to the world.
              </p>
              <Button
                variant="wizard"
                size="lg"
                onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScSor99NDUS50ftYTWvMYDi1lqP1THU-Nj3T4UM99QDwc697Q/viewform?usp=header", "_blank")}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Start Building Today
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import {
  Code,
  Palette,
  Zap,
  Sparkles,
  Database,
  Lock,
  Cloud,
  Rocket,
  CheckCircle,
  Star
} from "lucide-react";

const frontendFeatures = [
  { icon: Code, title: "HTML & CSS Mastery", description: "Build semantic, accessible web structures" },
  { icon: Zap, title: "JavaScript Power", description: "Interactive web apps with modern ES6+" },
  { icon: Palette, title: "Tailwind CSS", description: "Rapid, beautiful UI development" },
  { icon: Sparkles, title: "AI-Powered Coding", description: "Boost productivity with AI tools" },
];

const fullstackFeatures = [
  { icon: Code, title: "Frontend Foundation", description: "All frontend skills included" },
  { icon: Database, title: "Firebase Database", description: "Real-time data management" },
  { icon: Lock, title: "Authentication", description: "Secure user login systems" },
  { icon: Cloud, title: "Deployment", description: "Launch your apps to the world" },
];

const testimonialsFrontend = [
  {
    name: "Sarah Chen",
    role: "Career Changer",
    content: "Learning Tailwind made styling so much faster! I went from struggling with CSS to building beautiful interfaces in weeks.",
    rating: 5
  },
  {
    name: "Mike Rodriguez",
    role: "Freelancer",
    content: "The JavaScript modules were incredible. I can now build interactive websites that wow my clients.",
    rating: 5
  },
  {
    name: "Emma Thompson",
    role: "Student",
    content: "AI coding tools changed everything for me. I'm writing better code faster than I ever thought possible.",
    rating: 5
  },
  {
    name: "David Park",
    role: "Designer",
    content: "HTML and CSS finally make sense! Guy's teaching style made complex concepts feel simple.",
    rating: 5
  }
];

const testimonialsFullstack = [
  {
    name: "Alex Johnson",
    role: "Startup Founder",
    content: "Firebase integration was a game-changer. I built and launched my MVP in just 3 weeks!",
    rating: 5
  },
  {
    name: "Lisa Wang",
    role: "Developer",
    content: "The authentication module saved me months of work. My app now has secure user management.",
    rating: 5
  },
  {
    name: "Carlos Silva",
    role: "Entrepreneur",
    content: "From frontend to full deployment - this course covered everything. My app is live and profitable!",
    rating: 5
  },
  {
    name: "Rachel Green",
    role: "Tech Lead",
    content: "Firebase database made real-time features so easy to implement. Our users love the instant updates.",
    rating: 5
  }
];

export function CourseSection() {
  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-wizard-primary border-wizard-primary/20">
            <Sparkles className="w-4 h-4 mr-2" />
            Choose Your Path
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Master <span className="bg-gradient-to-r from-wizard-primary to-sage-green bg-clip-text text-transparent">Modern Web Development</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're starting with frontend or ready for full-stack, we have the perfect path for your coding journey.
          </p>
        </div>

        <Tabs defaultValue="frontend" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12 h-14">
            <TabsTrigger value="frontend" className="text-lg py-3">
              <Code className="w-5 h-5 mr-2" />
              Frontend Focus
            </TabsTrigger>
            <TabsTrigger value="fullstack" className="text-lg py-3">
              <Rocket className="w-5 h-5 mr-2" />
              Full Stack Mastery
            </TabsTrigger>
          </TabsList>

          <TabsContent value="frontend" className="space-y-12">
            <Card className="bg-gradient-to-br from-card to-muted/50 border-wizard-primary/20 shadow-lg">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-r from-wizard-primary to-wizard-secondary flex items-center justify-center">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl mb-2">Frontend Bootcamp</CardTitle>
                <CardDescription className="text-lg mb-4">
                  Build fast, responsive websites with modern tools and AI assistance
                </CardDescription>
                <div className="text-center">
                  <div className="text-4xl font-bold text-wizard-primary mb-2">$65</div>
                  <div className="text-muted-foreground">One-time payment • Lifetime access</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {frontendFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-background/50">
                      <div className="rounded-lg bg-wizard-primary/10 p-2">
                        <feature.icon className="w-6 h-6 text-wizard-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <Button
                    variant="wizard"
                    size="lg"
                    onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScSor99NDUS50ftYTWvMYDi1lqP1THU-Nj3T4UM99QDwc697Q/viewform?usp=header", "_blank")}
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Join Frontend Bootcamp
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Frontend Testimonials */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8">Frontend Success Stories</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {testimonialsFrontend.map((testimonial, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="fullstack" className="space-y-12">
            <Card className="bg-gradient-to-br from-card to-sage-light/20 border-sage-green/20 shadow-lg">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-r from-sage-green to-accent flex items-center justify-center">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl mb-2">Full Stack Mastery</CardTitle>
                <CardDescription className="text-lg mb-4">
                  Master the complete development stack and launch real-world applications
                </CardDescription>
                <div className="text-center">
                  <div className="text-4xl font-bold text-sage-green mb-2">$120</div>
                  <div className="text-muted-foreground">One-time payment • Lifetime access</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {fullstackFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-background/50">
                      <div className="rounded-lg bg-sage-green/10 p-2">
                        <feature.icon className="w-6 h-6 text-sage-green" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <Button
                    variant="sage"
                    size="lg"
                    onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScSor99NDUS50ftYTWvMYDi1lqP1THU-Nj3T4UM99QDwc697Q/viewform?usp=header", "_blank")}
                  >
                    <Rocket className="w-5 h-5 mr-2" />
                    Start Full Stack Journey
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Full Stack Testimonials */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8">Full Stack Success Stories</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {testimonialsFullstack.map((testimonial, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
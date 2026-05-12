import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      id: 1,
      title: "AI WhatsApp Automation",
      description: "24/7 AI customer service system with voice/image processing",
      category: "AI",
      tags: ["AI Chatbot", "WhatsApp API", "Business Automation"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=500&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Connect with Bayezid",
      description: "Digital brand and personal portfolio platform",
      category: "Web",
      tags: ["Web Design", "Branding"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
    },
    {
      id: 3,
      title: "GenZ Frontier",
      description: "Digital newsportal for modern generation insights",
      category: "Content",
      tags: ["Content", "News"],
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop",
    },
  ];

  const skills = [
    { category: "Full-stack Development", items: ["React", "Node.js", "Python", "TypeScript"] },
    { category: "Digital Marketing", items: ["SEO", "Content Strategy", "Social Media", "Analytics"] },
    { category: "Web Design", items: ["UI/UX", "Figma", "Tailwind CSS", "Responsive Design"] },
    { category: "AI Integration", items: ["LLM APIs", "Automation", "Chatbots", "Data Processing"] },
  ];

  const experiences = [
    {
      company: "Connect with Bayezid",
      position: "Founder & Tech Provider",
      period: "2019 - Present",
      description: "Leading digital solutions and tech services for businesses",
    },
    {
      company: "GenZ Frontier",
      position: "Founder",
      period: "2021 - Present",
      description: "Building innovative digital ecosystem solutions",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Gobayezid
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-sm hover:text-primary transition">About</a>
            <a href="#projects" className="text-sm hover:text-primary transition">Projects</a>
            <a href="#contact" className="text-sm hover:text-primary transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Build Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Digital Future</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Professional portfolio and blog system. Showcase your work, share your stories, and connect with your audience.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">Learn More</Button>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl h-96 flex items-center justify-center border border-primary/20">
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <p className="text-muted-foreground">Your portfolio showcase</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold mb-8">About</h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            I'm a full-stack web developer, digital marketer, and tech provider specializing in innovative digital ecosystem solutions. With over 5 years of experience, I've helped numerous businesses transform their digital presence.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            My expertise spans from building scalable web applications to implementing AI-driven solutions and managing comprehensive digital marketing strategies.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-24 md:py-32 bg-secondary/30 rounded-3xl">
        <h2 className="text-4xl font-bold mb-12">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <Card key={skill.category} className="p-6 bg-background/50 backdrop-blur">
              <h3 className="font-semibold mb-4 text-lg">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <h2 className="text-4xl font-bold mb-12">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <Card key={exp.company} className="p-6 border-l-4 border-l-primary">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{exp.position}</h3>
                <span className="text-sm text-muted-foreground">{exp.period}</span>
              </div>
              <p className="text-primary font-medium mb-2">{exp.company}</p>
              <p className="text-muted-foreground">{exp.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-24 md:py-32">
        <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="w-full gap-2">
                  View Project <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Ready to start your next project? Let's collaborate and create something amazing together.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="gap-2">
              <Mail className="w-4 h-4" /> Send Email
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Github className="w-4 h-4" /> GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-24 py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <p className="text-sm text-muted-foreground">Professional portfolio and blog system for showcasing your work.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition">About</a></li>
                <li><a href="#projects" className="hover:text-primary transition">Projects</a></li>
                <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition"><Github className="w-5 h-5" /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition"><Mail className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 Gobayezid. All rights reserved.</p>
            <p className="mt-2">Built with React, Tailwind CSS, and ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

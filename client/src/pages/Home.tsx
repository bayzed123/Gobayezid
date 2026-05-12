import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Radio, Tv, Music } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Radio Broadcasting",
      description: "Professional radio hosting and content creation across multiple platforms",
      category: "Radio",
      tags: ["Radio Hosting", "Audio Production", "Broadcasting"],
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Television Appearances",
      description: "Featured in numerous television shows and entertainment programs",
      category: "Television",
      tags: ["TV Shows", "Entertainment", "Media"],
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Digital Content Creation",
      description: "Engaging digital media content connecting with millions across Bangladesh",
      category: "Digital",
      tags: ["Content Creation", "Social Media", "Digital Media"],
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop",
    },
  ];

  const skills = [
    { category: "Broadcasting & Media", items: ["Radio Hosting", "TV Presenting", "Audio Production", "Live Broadcasting"] },
    { category: "Content Creation", items: ["Digital Storytelling", "Social Media", "Video Production", "Podcast Production"] },
    { category: "Entertainment", items: ["Performance", "Comedy", "Entertainment Shows", "Event Hosting"] },
    { category: "Communication", items: ["Public Speaking", "Audience Engagement", "Narration", "Voice Acting"] },
  ];

  const experiences = [
    {
      company: "Radio Broadcasting",
      position: "Professional Radio Host",
      period: "Multiple Years",
      description: "Hosting engaging radio shows and connecting with audiences across Bangladesh",
    },
    {
      company: "Television",
      position: "TV Personality & Presenter",
      period: "Ongoing",
      description: "Featuring in entertainment and talk shows, bringing stories to life",
    },
    {
      company: "Digital Media",
      position: "Content Creator & Influencer",
      period: "Present",
      description: "Creating engaging digital content with millions of followers across platforms",
    },
  ];

  const achievements = [
    {
      title: "Multi-Platform Presence",
      description: "Active across radio, television, and digital media platforms",
    },
    {
      title: "Millions of Followers",
      description: "Connected with millions of audiences across Bangladesh and beyond",
    },
    {
      title: "Award-Winning Content",
      description: "Recognized for quality storytelling and entertainment",
    },
    {
      title: "Industry Recognition",
      description: "Featured on IMDB and major media platforms",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Musfiq R Farhan
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-sm hover:text-primary transition">About</a>
            <a href="#projects" className="text-sm hover:text-primary transition">Work</a>
            <a href="#contact" className="text-sm hover:text-primary transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Bangladesh's <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Top Celebrity</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Bridging the worlds of radio, television, and digital media with storytelling that connects with millions across Bangladesh. A multi-talented entertainer and content creator.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="gap-2">
                Follow <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">Learn More</Button>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl h-96 flex items-center justify-center border border-primary/20">
            <div className="text-center">
              <div className="text-6xl mb-4">🎙️</div>
              <p className="text-muted-foreground">Entertainer & Content Creator</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold mb-8">About</h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Musfiq R Farhan is one of Bangladesh's most recognized and celebrated personalities, known for his exceptional work across radio, television, and digital media. With a career spanning multiple years, he has built a reputation for authentic storytelling and engaging content that resonates with millions of viewers and listeners.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            His versatility as an entertainer, radio host, television presenter, and digital content creator has made him a household name in Bangladesh. Through his work, he continues to bridge different media platforms, bringing quality entertainment and meaningful stories to his diverse audience.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With a presence on IMDB and recognition across international platforms, Musfiq R Farhan represents the modern face of Bengali entertainment and digital media excellence.
          </p>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="container mx-auto px-4 py-24 md:py-32 bg-secondary/30 rounded-3xl">
        <h2 className="text-4xl font-bold mb-12">Achievements & Recognition</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement) => (
            <Card key={achievement.title} className="p-6 bg-background/50 backdrop-blur">
              <h3 className="font-semibold mb-2 text-lg">{achievement.title}</h3>
              <p className="text-muted-foreground">{achievement.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <h2 className="text-4xl font-bold mb-12">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <Card key={skill.category} className="p-6 bg-secondary/20 border border-primary/20">
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
        <h2 className="text-4xl font-bold mb-12">Professional Experience</h2>
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
        <h2 className="text-4xl font-bold mb-12">Featured Work</h2>
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
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Connect With Me</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Follow me on social media and stay updated with the latest content and announcements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="gap-2">
              <a href="https://www.instagram.com/musfiqfarhan?igsh=MWxxeWI3aTkzbHM5cQ==" target="_blank" rel="noopener noreferrer">
                📸 Instagram
              </a>
            </Button>
            <Button size="lg" asChild variant="outline" className="gap-2">
              <a href="https://www.facebook.com/share/1cQdw7JcMs/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                👍 Facebook
              </a>
            </Button>
            <Button size="lg" asChild variant="outline" className="gap-2">
              <a href="https://youtube.com/@musfiqrfarhan?si=gG4wQxD6qsIpVZCZ" target="_blank" rel="noopener noreferrer">
                ▶️ YouTube
              </a>
            </Button>
            <Button size="lg" asChild variant="outline" className="gap-2">
              <a href="https://whatsapp.com/channel/0029VbBdG03HQbS1bTrVHF1X" target="_blank" rel="noopener noreferrer">
                💬 WhatsApp
              </a>
            </Button>
            <Button size="lg" asChild variant="outline" className="gap-2">
              <a href="https://www.imdb.com/name/nm11068428/bio/" target="_blank" rel="noopener noreferrer">
                🎬 IMDB
              </a>
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
              <p className="text-sm text-muted-foreground">Bangladesh's top celebrity bridging radio, television, and digital media with engaging storytelling.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition">About</a></li>
                <li><a href="#projects" className="hover:text-primary transition">Work</a></li>
                <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow</h3>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/musfiqfarhan?igsh=MWxxeWI3aTkzbHM5cQ==" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">📸</a>
                <a href="https://www.facebook.com/share/1cQdw7JcMs/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">👍</a>
                <a href="https://youtube.com/@musfiqrfarhan?si=gG4wQxD6qsIpVZCZ" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">▶️</a>
                <a href="https://whatsapp.com/channel/0029VbBdG03HQbS1bTrVHF1X" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">💬</a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 Musfiq R Farhan. All rights reserved.</p>
            <p className="mt-2">Professional Portfolio & Media Hub</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

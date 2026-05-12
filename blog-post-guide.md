# How to Add Blog Posts to Your Portfolio

This guide explains how to add and manage blog posts on your Musfiq R Farhan portfolio.

## Current Structure

Your portfolio currently displays:
- Hero section with introduction
- About section with biography
- Achievements section
- Skills section
- Experience section
- Featured Work section
- Contact section with social links

## Adding a Blog Section (Step-by-Step)

### Step 1: Create Blog Data File

Create a new file: `client/src/data/blog-posts.json`

```json
[
  {
    "id": 1,
    "title": "My Journey in Radio Broadcasting",
    "slug": "journey-radio-broadcasting",
    "excerpt": "Discover how I started my career in radio and the lessons I learned along the way.",
    "date": "2026-05-12",
    "author": "Musfiq R Farhan",
    "category": "Radio",
    "tags": ["Radio", "Broadcasting", "Career"],
    "image": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
    "readTime": "5 min",
    "content": "# My Journey in Radio Broadcasting\n\nStarting my career in radio was one of the best decisions I made. From my first broadcast to now, I've learned so much about connecting with audiences...\n\n## The Beginning\n\nMy passion for radio started in my childhood...\n\n## Key Lessons\n\n1. Authenticity matters\n2. Listen to your audience\n3. Never stop learning\n\n## Today\n\nNow I continue to create engaging content..."
  },
  {
    "id": 2,
    "title": "Transitioning from Radio to Television",
    "slug": "radio-to-television",
    "excerpt": "The challenges and opportunities of moving into television entertainment.",
    "date": "2026-05-10",
    "author": "Musfiq R Farhan",
    "category": "Television",
    "tags": ["Television", "Entertainment", "Transition"],
    "image": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop",
    "readTime": "7 min",
    "content": "# Transitioning from Radio to Television\n\nMoving from radio to television was a significant shift in my career..."
  },
  {
    "id": 3,
    "title": "Building a Digital Presence in 2026",
    "slug": "digital-presence-2026",
    "excerpt": "How to connect with millions of followers across social media platforms.",
    "date": "2026-05-08",
    "author": "Musfiq R Farhan",
    "category": "Digital Media",
    "tags": ["Social Media", "Digital", "Content Creation"],
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
    "readTime": "6 min",
    "content": "# Building a Digital Presence in 2026\n\nIn today's world, having a strong digital presence is crucial for any entertainer..."
  }
]
```

### Step 2: Create Blog Page Component

Create a new file: `client/src/pages/Blog.tsx`

```typescript
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import blogPosts from "@/data/blog-posts.json";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(blogPosts.map((post) => post.category))];
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Musfiq R Farhan
          </div>
          <div className="hidden md:flex gap-8">
            <a href="/" className="text-sm hover:text-primary transition">Home</a>
            <a href="#blog" className="text-sm hover:text-primary transition">Blog</a>
            <a href="/#contact" className="text-sm hover:text-primary transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Blog Header */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog & Insights</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Stories, insights, and experiences from my journey in radio, television, and digital media.
        </p>
      </section>

      {/* Category Filter */}
      <section className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 pb-24">
        <div className="grid md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-sm text-primary font-medium">{post.category}</span>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                  <Button variant="outline" size="sm">Read More</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-24 py-12 bg-secondary/30">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Musfiq R Farhan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
```

### Step 3: Update App Routing

Edit `client/src/App.tsx`:

```typescript
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Blog from "./pages/Blog";  // Add this line

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/blog"} component={Blog} />  {/* Add this line */}
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
```

### Step 4: Add Blog Link to Home Page

Edit `client/src/pages/Home.tsx` and update the navigation:

```typescript
<div className="hidden md:flex gap-8">
  <a href="/" className="text-sm hover:text-primary transition">Home</a>
  <a href="/blog" className="text-sm hover:text-primary transition">Blog</a>  {/* Add this */}
  <a href="#contact" className="text-sm hover:text-primary transition">Contact</a>
</div>
```

## Adding New Blog Posts

### Method 1: Edit JSON File Directly

Edit `client/src/data/blog-posts.json` and add a new post:

```json
{
  "id": 4,
  "title": "Your New Blog Post Title",
  "slug": "your-blog-post-slug",
  "excerpt": "A short excerpt of your blog post...",
  "date": "2026-05-15",
  "author": "Musfiq R Farhan",
  "category": "Radio",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "image": "https://images.unsplash.com/photo-...",
  "readTime": "5 min",
  "content": "# Your Blog Post Title\n\nFull markdown content here..."
}
```

### Method 2: Using Markdown

Create blog posts in markdown format and convert them:

1. Create `blog-posts/my-post.md`:

```markdown
---
title: My Amazing Blog Post
slug: my-amazing-blog-post
excerpt: This is an excerpt
date: 2026-05-15
category: Radio
tags: [Radio, Broadcasting, Entertainment]
image: https://images.unsplash.com/...
readTime: 5 min
---

# My Amazing Blog Post

Your blog content here...

## Section 1

Content...

## Section 2

More content...
```

2. Convert to JSON and add to `blog-posts.json`

## Blog Post Fields Explained

| Field | Type | Example | Purpose |
|-------|------|---------|---------|
| id | number | 1 | Unique identifier |
| title | string | "My Journey" | Blog post title |
| slug | string | "my-journey" | URL-friendly name |
| excerpt | string | "Short summary..." | Preview text |
| date | string | "2026-05-12" | Publication date |
| author | string | "Musfiq R Farhan" | Author name |
| category | string | "Radio" | Blog category |
| tags | array | ["Radio", "Career"] | Search tags |
| image | string | "https://..." | Featured image URL |
| readTime | string | "5 min" | Estimated read time |
| content | string | "# Title\n\nContent..." | Full blog content (markdown) |

## Deploying Blog Changes

### Step 1: Add Blog Files

```bash
# Create the blog directory structure
mkdir -p client/src/data
mkdir -p client/src/pages
```

### Step 2: Create/Update Files

- Create `client/src/data/blog-posts.json` with your posts
- Create `client/src/pages/Blog.tsx` with the blog page component
- Update `client/src/App.tsx` with blog routing
- Update `client/src/pages/Home.tsx` with blog link

### Step 3: Test Locally

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Visit http://localhost:3000/blog
```

### Step 4: Commit and Push

```bash
# Add all changes
git add .

# Commit
git commit -m "Add blog section with initial posts"

# Push to GitHub
git push origin main
```

### Step 5: GitHub Actions Deploys

The workflow automatically builds and deploys your site to `https://musfiqrfarhan.blog`

## Blog Post Examples

### Example 1: Radio Broadcasting Post

```json
{
  "id": 1,
  "title": "The Art of Radio Hosting: Connecting Through Sound",
  "slug": "art-radio-hosting",
  "excerpt": "Exploring the techniques and passion behind creating engaging radio content.",
  "date": "2026-05-12",
  "author": "Musfiq R Farhan",
  "category": "Radio",
  "tags": ["Radio", "Hosting", "Broadcasting", "Entertainment"],
  "image": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
  "readTime": "5 min",
  "content": "# The Art of Radio Hosting\n\nRadio has been my passion for years..."
}
```

### Example 2: Television Post

```json
{
  "id": 2,
  "title": "Behind the Scenes: Television Production",
  "slug": "behind-scenes-tv",
  "excerpt": "A glimpse into the world of television entertainment.",
  "date": "2026-05-10",
  "author": "Musfiq R Farhan",
  "category": "Television",
  "tags": ["Television", "Entertainment", "Production"],
  "image": "https://images.unsplash.com/photo-1485846234645-a62644f84728",
  "readTime": "7 min",
  "content": "# Behind the Scenes\n\nTelevision production is..."
}
```

## File Paths for Blog

```
client/
├── src/
│   ├── pages/
│   │   ├── Home.tsx          # Update with blog link
│   │   ├── Blog.tsx          # NEW: Blog listing page
│   │   └── BlogPost.tsx      # NEW: Individual blog post (optional)
│   ├── data/
│   │   └── blog-posts.json   # NEW: Blog posts data
│   └── App.tsx               # Update with blog route
└── public/
    └── CNAME                 # Already configured
```

## Quick Commands

```bash
# Start development
pnpm dev

# Build for production
pnpm build

# Check for errors
pnpm check

# Deploy (push to GitHub)
git add .
git commit -m "Add/update blog posts"
git push origin main
```

## Next Steps

1. Create the blog data file with your posts
2. Create the Blog page component
3. Update App routing
4. Test locally
5. Push to GitHub
6. Your blog goes live at `https://musfiqrfarhan.blog/blog`

---

**Your blog is ready to go! Start sharing your stories with the world.**

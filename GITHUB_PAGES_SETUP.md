# Blog Setup & Update Guide for Musfiq R Farhan Portfolio

This guide explains how to add blog posts, update content, and manage your portfolio website.

## Project File Structure

```
gobayezid_project/
├── .github/
│   └── workflows/
│       └── deploy.yml                 # GitHub Actions deployment workflow
├── client/
│   ├── public/
│   │   ├── CNAME                      # Custom domain (musfiqrfarhan.blog)
│   │   ├── favicon.ico
│   │   └── robots.txt
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx               # Main portfolio page
│   │   ├── components/
│   │   │   └── ui/                    # shadcn/ui components
│   │   ├── App.tsx                    # App routing
│   │   ├── main.tsx                   # React entry point
│   │   └── index.css                  # Global styles & theme
│   └── index.html                     # HTML template
├── server/                            # Backend placeholder (not used in static)
├── shared/                            # Shared types placeholder
├── package.json                       # Project dependencies
├── vite.config.ts                     # Vite configuration
├── README.md                          # Project documentation
├── GITHUB_PAGES_SETUP.md              # GitHub Pages deployment guide
└── BLOG_SETUP_GUIDE.md                # This file

```

## How to Update Your Portfolio

### 1. Update Personal Information

Edit `client/src/pages/Home.tsx` to modify:

#### Hero Section
```typescript
// Line ~50-60
<h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
  Bangladesh's <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Top Celebrity</span>
</h1>
<p className="text-xl text-muted-foreground mb-8 leading-relaxed">
  Bridging the worlds of radio, television, and digital media...
</p>
```

#### About Section
```typescript
// Line ~120-140
<p className="text-lg text-muted-foreground mb-6 leading-relaxed">
  Musfiq R Farhan is one of Bangladesh's most recognized...
</p>
```

#### Skills
```typescript
// Line ~35-42
const skills = [
  { category: "Broadcasting & Media", items: ["Radio Hosting", "TV Presenting", ...] },
  { category: "Content Creation", items: ["Digital Storytelling", ...] },
  // Add or modify skills here
];
```

#### Experience
```typescript
// Line ~44-57
const experiences = [
  {
    company: "Radio Broadcasting",
    position: "Professional Radio Host",
    period: "Multiple Years",
    description: "Hosting engaging radio shows...",
  },
  // Add or modify experience here
];
```

#### Projects/Featured Work
```typescript
// Line ~10-34
const projects = [
  {
    id: 1,
    title: "Radio Broadcasting",
    description: "Professional radio hosting...",
    category: "Radio",
    tags: ["Radio Hosting", "Audio Production"],
    image: "https://images.unsplash.com/...",
  },
  // Add or modify projects here
];
```

#### Social Media Links
```typescript
// Line ~180-200 (Contact Section)
<a href="https://www.instagram.com/musfiqfarhan?igsh=..." target="_blank">
  📸 Instagram
</a>
// Update all social links here
```

### 2. Update Website Metadata

Edit `client/index.html` to modify:

```html
<!-- Line 9-14 -->
<title>Musfiq R Farhan - Bangladesh's Top Celebrity | Radio, TV & Digital Media</title>
<meta name="description" content="Your updated description here" />
<meta name="keywords" content="keywords, here, separated, by, comma" />
<meta name="author" content="Musfiq R Farhan" />
<meta property="og:title" content="Your OG title here" />
<meta property="og:description" content="Your OG description here" />
```

### 3. Update README

Edit `README.md` to modify:

```markdown
# Musfiq R Farhan - Professional Portfolio

Your updated description here...

## About Musfiq R Farhan

Your biography and professional information...

### Social Links

- **Instagram:** https://www.instagram.com/musfiqfarhan
- **Facebook:** https://www.facebook.com/share/...
- **YouTube:** https://youtube.com/@musfiqrfarhan
- **WhatsApp Channel:** https://whatsapp.com/channel/...
- **IMDB:** https://www.imdb.com/name/nm11068428/bio/
```

### 4. Update Custom Domain

Edit `client/public/CNAME`:

```
musfiqrfarhan.blog
```

Change to your desired domain if needed.

### 5. Update Theme Colors

Edit `client/src/index.css` to modify the color palette:

```css
:root {
  --primary: var(--color-blue-700);      /* Main brand color */
  --primary-foreground: var(--color-blue-50);
  --secondary: oklch(0.98 0.001 286.375);
  --accent: oklch(0.967 0.001 286.375);
  /* Modify other colors as needed */
}
```

## Adding Blog Posts (Future Enhancement)

To add a blog system similar to your previous portfolio:

### Step 1: Create Blog Directory

```
client/src/
├── pages/
│   ├── Home.tsx
│   └── Blog.tsx              # New blog page
├── components/
│   └── BlogPost.tsx          # Blog post component
└── data/
    └── blog-posts.json       # Blog posts data
```

### Step 2: Create Blog Posts Data

Create `client/src/data/blog-posts.json`:

```json
[
  {
    "id": 1,
    "title": "My Journey in Radio Broadcasting",
    "slug": "journey-radio-broadcasting",
    "excerpt": "A look at my career in radio...",
    "content": "Full blog post content here...",
    "date": "2026-05-12",
    "author": "Musfiq R Farhan",
    "tags": ["Radio", "Broadcasting", "Entertainment"],
    "image": "https://images.unsplash.com/...",
    "readTime": "5 min read"
  }
]
```

### Step 3: Create Blog Page Component

Create `client/src/pages/Blog.tsx` with blog listing and detail views.

### Step 4: Update App Routing

Edit `client/src/App.tsx`:

```typescript
import Blog from "@/pages/Blog";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/:slug"} component={BlogPost} />
      <Route component={NotFound} />
    </Switch>
  );
}
```

## GitHub Workflow Deployment

The `.github/workflows/deploy.yml` file automatically:

1. **Triggers** on every push to `main` branch
2. **Installs** dependencies using pnpm
3. **Builds** the project with `GITHUB_PAGES=true`
4. **Uploads** built files to GitHub Pages
5. **Deploys** to your custom domain

### Workflow Steps Explained

```yaml
# 1. Checkout your code
- name: Checkout repository
  uses: actions/checkout@v4

# 2. Setup Node.js 18
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '18'

# 3. Install pnpm package manager
- name: Install pnpm
  uses: pnpm/action-setup@v2

# 4. Install all dependencies
- name: Install dependencies
  run: pnpm install

# 5. Build the project
- name: Build project
  run: GITHUB_PAGES=true pnpm build

# 6. Deploy to GitHub Pages
- name: Deploy to GitHub Pages
  uses: actions/deploy-pages@v4
```

## How to Deploy Changes

### Step 1: Make Changes Locally

Edit files in your project directory:

```bash
# Example: Update Home.tsx
nano client/src/pages/Home.tsx

# Example: Update metadata
nano client/index.html

# Example: Update theme
nano client/src/index.css
```

### Step 2: Test Locally

```bash
# Start development server
pnpm dev

# Open http://localhost:3000 in your browser
# Test all changes
```

### Step 3: Commit Changes

```bash
# Add all changes
git add .

# Commit with a descriptive message
git commit -m "Update portfolio with new content and social links"
```

### Step 4: Push to GitHub

```bash
# Push to main branch
git push origin main
```

### Step 5: Monitor Deployment

1. Go to your repository: https://github.com/bayzed123/Gobayezid
2. Click on **Actions** tab
3. Watch the "Deploy to GitHub Pages" workflow run
4. Once complete, your site updates at `https://musfiqrfarhan.blog`

## Common Updates

### Update Social Links

Edit `client/src/pages/Home.tsx` around line 180-200:

```typescript
<Button size="lg" asChild className="gap-2">
  <a href="https://www.instagram.com/musfiqfarhan" target="_blank">
    📸 Instagram
  </a>
</Button>
```

### Add New Achievement

Edit `client/src/pages/Home.tsx` around line ~65-75:

```typescript
const achievements = [
  {
    title: "Your New Achievement",
    description: "Description of the achievement",
  },
  // Add more achievements
];
```

### Change Website Title

Edit `client/index.html`:

```html
<title>Your New Title Here</title>
```

### Update About Section

Edit `client/src/pages/Home.tsx` around line ~120-140:

```typescript
<p className="text-lg text-muted-foreground mb-6 leading-relaxed">
  Your updated about section text here...
</p>
```

## Troubleshooting

### Deployment Failed

1. Check the **Actions** tab in GitHub for error messages
2. Ensure all dependencies are installed: `pnpm install`
3. Verify TypeScript has no errors: `pnpm check`
4. Check that `package.json` has correct build script

### Site Not Updating

1. Clear browser cache (Ctrl+Shift+Delete)
2. Wait a few minutes for GitHub Pages to update
3. Check that the workflow completed successfully
4. Verify DNS is pointing to GitHub Pages

### Build Errors

1. Run `pnpm install` to ensure all dependencies are installed
2. Run `pnpm check` to verify TypeScript compilation
3. Check for any import errors in your code
4. Ensure all file paths are correct

## File Paths Reference

| File | Purpose | Edit For |
|------|---------|----------|
| `client/src/pages/Home.tsx` | Main portfolio page | Content, skills, experience, projects |
| `client/index.html` | HTML template | Page title, meta tags, description |
| `client/src/index.css` | Global styles | Colors, fonts, theme |
| `client/public/CNAME` | Custom domain | Domain name |
| `package.json` | Project config | Homepage URL, project name |
| `README.md` | Documentation | Project description, setup instructions |
| `.github/workflows/deploy.yml` | Deployment automation | Deployment settings |

## Quick Reference Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Check TypeScript errors
pnpm check

# Format code
pnpm format

# Commit changes
git add .
git commit -m "Your commit message"

# Push to GitHub
git push origin main
```

## Support & Resources

- **GitHub Pages Docs:** https://docs.github.com/en/pages
- **React Documentation:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com
- **shadcn/ui Components:** https://ui.shadcn.com

---

**Happy updating! Your portfolio is now ready for continuous deployment.**
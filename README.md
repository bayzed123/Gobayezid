# Gobayezid - Professional Portfolio & Blog System

A modern, professional portfolio and blog system built with React, Tailwind CSS, and shadcn/ui. Designed to showcase your work, share your stories, and connect with your audience.

## Features

- **Responsive Design:** Fully responsive and optimized for all devices
- **Modern UI:** Built with React 19 and Tailwind CSS 4
- **Professional Sections:** Hero, About, Skills, Experience, Projects, Contact, and Footer
- **Component Library:** shadcn/ui components for consistent design
- **Performance:** Optimized for fast loading and smooth interactions
- **SEO Ready:** Proper meta tags and semantic HTML structure
- **Accessible:** WCAG compliant with proper keyboard navigation

## Project Structure

```
client/
  public/           ← Favicon and configuration files
  src/
    pages/          ← Page components
    components/     ← Reusable UI components
    contexts/       ← React contexts
    hooks/          ← Custom React hooks
    lib/            ← Utility helpers
    App.tsx         ← Main application component
    main.tsx        ← React entry point
    index.css       ← Global styles and Tailwind configuration
  index.html        ← HTML entry point
server/             ← Server configuration (static only)
shared/             ← Shared types and constants
package.json        ← Project dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bayzed123/Gobayezid.git
cd Gobayezid
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Development

### Building

To build the project for production:
```bash
pnpm build
```

### Customization

#### Update Your Information

Edit `client/src/pages/Home.tsx` to customize:
- Hero section headline and description
- About section content
- Skills and expertise
- Experience entries
- Project showcase
- Contact information

#### Customize Colors

Edit `client/src/index.css` to modify the color palette:
```css
:root {
  --primary: var(--color-blue-700);
  --accent: oklch(0.967 0.001 286.375);
  /* ... other colors ... */
}
```

#### Update Fonts

Modify `client/index.html` to change Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet" />
```

## Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `pnpm build`
4. Set publish directory: `dist`

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect the configuration
4. Deploy with one click

### Deploy to GitHub Pages

1. Update `package.json` with your repository name
2. Run `pnpm build`
3. Deploy the `dist` folder to GitHub Pages

## Technologies Used

- **React 19:** Modern UI library
- **TypeScript:** Type-safe development
- **Tailwind CSS 4:** Utility-first CSS framework
- **shadcn/ui:** High-quality React components
- **Vite:** Next-generation build tool
- **Wouter:** Lightweight client-side router

## Components Used

- Button
- Card
- Sonner (Toast notifications)
- Tooltip
- Icons from lucide-react

## Customization Guide

### Adding New Sections

1. Create a new component in `client/src/pages/`
2. Import it in `Home.tsx`
3. Add it to the JSX structure

### Adding New Pages

1. Create a new file in `client/src/pages/`
2. Add a route in `App.tsx`
3. Update navigation links

### Styling

All styling uses Tailwind CSS utility classes. Modify `client/src/index.css` for global changes and use inline Tailwind classes for component-specific styling.

## Best Practices

- Keep components small and reusable
- Use semantic HTML
- Maintain consistent spacing and typography
- Test responsive design on multiple devices
- Optimize images before uploading
- Keep accessibility in mind (WCAG guidelines)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License. When using this template, please keep the attribution to Gobayezid in the footer.

## Support

For issues, questions, or suggestions, please open an issue on GitHub or contact us through the contact section on the website.

## Changelog

### Version 1.0.0
- Initial release
- Core portfolio sections
- Responsive design
- Modern UI components

## Roadmap

- [ ] Blog system integration
- [ ] Dark mode toggle
- [ ] Contact form with email integration
- [ ] Project filtering
- [ ] Image gallery
- [ ] Newsletter signup
- [ ] Analytics integration

---

**Built with ❤️ using React, Tailwind CSS, and shadcn/ui**

**Portfolio & Blog System by Gobayezid**

# GitHub Pages Deployment Guide

This guide will help you deploy the Gobayezid portfolio to GitHub Pages with custom domain support.

## Prerequisites

- GitHub account with the repository `bayzed123/Gobayezid`
- A custom domain (optional, but recommended)
- Basic understanding of GitHub settings

## Automatic Deployment Setup

The repository includes a GitHub Actions workflow that automatically builds and deploys your site whenever you push to the `main` branch.

### Step 1: Enable GitHub Pages

1. Go to your GitHub repository: `https://github.com/bayzed123/Gobayezid`
2. Click on **Settings** (gear icon)
3. In the left sidebar, click on **Pages**
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - This will use the workflow file `.github/workflows/deploy.yml`

### Step 2: Verify the Workflow

1. Go to the **Actions** tab in your repository
2. You should see the "Deploy to GitHub Pages" workflow
3. The workflow will automatically run on every push to `main`
4. Check the workflow status to ensure it completes successfully

### Step 3: Access Your Site

Once the workflow completes:

- **Default GitHub Pages URL**: `https://bayzed123.github.io/Gobayezid`
- Visit this URL to see your deployed portfolio

## Custom Domain Setup

To use a custom domain (e.g., `gobayezid.com`):

### Step 1: Update the CNAME File

1. Edit `client/public/CNAME` in your repository
2. Replace `gobayezid.com` with your custom domain
3. Commit and push the change

```bash
# Example: If your domain is example.com
echo "example.com" > client/public/CNAME
git add client/public/CNAME
git commit -m "Update custom domain"
git push origin main
```

### Step 2: Configure GitHub Pages with Custom Domain

1. Go to your repository **Settings** → **Pages**
2. Under "Custom domain", enter your domain (e.g., `gobayezid.com`)
3. Click **Save**
4. GitHub will automatically check for the CNAME file

### Step 3: Configure DNS Records

Contact your domain registrar and add the following DNS records:

#### Option A: Using A Records (Recommended)

Add these A records to your DNS:

```
A record: 185.199.108.153
A record: 185.199.109.153
A record: 185.199.110.153
A record: 185.199.111.153
```

#### Option B: Using CNAME Record

Add this CNAME record:

```
CNAME: bayzed123.github.io
```

### Step 4: Enable HTTPS

1. Go to **Settings** → **Pages**
2. Under "Custom domain", check **Enforce HTTPS**
3. Wait for the SSL certificate to be issued (usually takes a few minutes)

## Deployment Workflow

The GitHub Actions workflow automatically:

1. **Triggers** on every push to the `main` branch
2. **Installs** dependencies using pnpm
3. **Builds** the project with `GITHUB_PAGES=true` environment variable
4. **Uploads** the built files to GitHub Pages
5. **Deploys** the site to your GitHub Pages URL

### Build Output

- **Source**: `client/src/` (React components)
- **Build Output**: `dist/public/` (Static files)
- **Deployment**: GitHub Pages hosting

## Manual Deployment (Alternative)

If you prefer to deploy manually:

```bash
# 1. Install dependencies
pnpm install

# 2. Build the project for GitHub Pages
GITHUB_PAGES=true pnpm build

# 3. The output will be in dist/public/
# 4. Commit and push to main branch
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

## Troubleshooting

### Workflow Fails to Build

1. Check the **Actions** tab for error messages
2. Ensure all dependencies are installed: `pnpm install`
3. Verify Node.js version compatibility (18+)
4. Check for TypeScript errors: `pnpm check`

### Site Not Updating

1. Verify the workflow completed successfully in **Actions**
2. Clear your browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
3. Check the deployment URL: `https://bayzed123.github.io/Gobayezid`
4. Wait a few minutes for DNS propagation if using a custom domain

### Custom Domain Not Working

1. Verify CNAME file exists in `client/public/CNAME`
2. Check DNS records are correctly configured
3. Ensure HTTPS is enabled in GitHub Pages settings
4. Wait for SSL certificate to be issued (up to 24 hours)

### Build Fails with "Module not found"

1. Run `pnpm install` locally to verify dependencies
2. Check for any missing imports in your code
3. Ensure all file paths are correct
4. Run `pnpm check` to verify TypeScript compilation

## Environment Variables

The build process uses:

- `GITHUB_PAGES=true`: Sets the base path to `/Gobayezid/` for GitHub Pages
- All other environment variables are automatically injected by Manus

## Performance Tips

1. **Optimize Images**: Compress images before adding to the project
2. **Code Splitting**: React automatically code-splits components
3. **Caching**: GitHub Pages caches static files automatically
4. **CDN**: GitHub Pages uses Fastly CDN for fast global delivery

## Security

- HTTPS is automatically enabled for custom domains
- GitHub Pages enforces HTTPS for all connections
- No server-side code is executed (static site only)
- All assets are served from GitHub's secure infrastructure

## Monitoring

To monitor your deployments:

1. Go to the **Actions** tab
2. Click on "Deploy to GitHub Pages"
3. View the workflow runs and their status
4. Click on a run to see detailed logs

## Updating Your Site

To update your portfolio:

1. Make changes locally: `pnpm dev`
2. Test your changes: `http://localhost:3000`
3. Commit your changes: `git commit -m "Update portfolio"`
4. Push to GitHub: `git push origin main`
5. The workflow will automatically build and deploy

## Support

For issues or questions:

1. Check GitHub Pages documentation: https://docs.github.com/en/pages
2. Review the workflow logs in the **Actions** tab
3. Verify your DNS configuration with your domain registrar
4. Check for any GitHub status page updates: https://www.githubstatus.com

---

**Happy deploying! Your portfolio is now live on GitHub Pages.**

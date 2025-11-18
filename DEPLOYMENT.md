# 🚀 Deployment Guide for Little Kitchen

## Quick Deploy to Vercel (5 minutes)

### Method 1: Vercel Dashboard (Easiest - Recommended)

1. **Go to Vercel**
   - Visit: https://vercel.com/new
   - Sign up/Login with GitHub

2. **Import Repository**
   - Click "Add New Project"
   - Select "Import Git Repository"
   - Choose `JadeSure/littlekitchen`
   - Click "Import"

3. **Configure Project** (Auto-detected, but verify)
   - Framework Preset: **Next.js** ✅
   - Root Directory: `./` ✅
   - Build Command: `npm run build` ✅
   - Output Directory: `out` ✅

4. **Deploy**
   - Click "Deploy" button
   - Wait 1-2 minutes
   - Get your live URL! 🎉

**Your URL will be:** `littlekitchen-[random].vercel.app`

To get `littlekitchen.vercel.app` (without random suffix):
- Go to Project Settings → Domains
- Add custom domain (requires Vercel Pro, or use the auto-generated URL)

---

### Method 2: Vercel CLI (For Developers)

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

## Alternative: Deploy to Netlify

1. **Go to Netlify**
   - Visit: https://app.netlify.com/start
   - Sign up/Login with GitHub

2. **Import Repository**
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub → Select `littlekitchen`

3. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `out`
   - Click "Deploy site"

4. **Custom Domain** (Optional)
   - Go to Site settings → Domain management
   - Add custom domain

---

## Alternative: Deploy to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "npm run build && gh-pages -d out"

# Deploy
npm run deploy
```

Your site will be at: `https://jadesure.github.io/littlekitchen`

---

## Verify Build Locally First

Before deploying, test locally:

```bash
# Build the project
npm run build

# Preview the build (option 1)
cd out && npx serve

# Preview the build (option 2)
cd out && python3 -m http.server 8080

# Open in browser
http://localhost:8080
```

---

## Troubleshooting

### Build Fails on Vercel
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node version (should be 18+)

### 404 Errors
- Ensure `output: 'export'` is in `next.config.js` ✅
- Check that `out` directory is generated

### Fonts Not Loading
- This is a warning, not an error
- Fonts will still load from Google Fonts CDN

### Images Not Showing
- Ensure images are in `public/` directory
- Use `unoptimized: true` in next.config.js ✅

---

## Post-Deployment Checklist

✅ Site loads without errors
✅ All sections visible (Hero, Menu, Location, Footer)
✅ Buttons link to Hungry Panda
✅ Google Maps shows correctly
✅ Mobile responsive
✅ SEO meta tags present

---

## Need Help?

- Check Vercel docs: https://vercel.com/docs
- Check build logs for errors
- Ensure all files are committed to Git
- Make sure you're deploying the correct branch

---

**Last Updated:** 2025-11-18

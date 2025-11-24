# Calcify - Vercel Deployment Guide

## Project Overview

**Calcify** is a modern calculator website with 15 fully functional calculators built with React, featuring:
- Glass morphism UI design
- Cyan/teal gradient theme
- SEO-optimized pages
- PDF download functionality
- AdSense-ready placeholders

## Complete File Structure

```
/app/frontend/
├── public/
│   └── index.html (SEO meta tags included)
├── src/
│   ├── App.js (Main routing)
│   ├── App.css (Global styles)
│   ├── index.js
│   ├── index.css (Tailwind + custom CSS)
│   ├── components/
│   │   ├── CalculatorLayout.jsx (Shared layout for all calculators)
│   │   └── ui/ (Shadcn components - 48 components)
│   ├── pages/ (15 calculator pages)
│   │   ├── HomePage.jsx
│   │   ├── BMICalculator.jsx
│   │   ├── BMRCalculator.jsx
│   │   ├── LoanCalculator.jsx
│   │   ├── EMICalculator.jsx
│   │   ├── AgeCalculator.jsx
│   │   ├── SIPCalculator.jsx
│   │   ├── PercentageCalculator.jsx
│   │   ├── GSTCalculator.jsx
│   │   ├── DiscountCalculator.jsx
│   │   ├── BodyFatCalculator.jsx
│   │   ├── CalorieCalculator.jsx
│   │   ├── PregnancyCalculator.jsx
│   │   ├── CompoundInterestCalculator.jsx
│   │   ├── TipCalculator.jsx
│   │   └── CurrencyConverter.jsx
│   ├── styles/
│   │   ├── HomePage.css
│   │   └── CalculatorLayout.css
│   ├── hooks/
│   │   └── use-toast.js
│   └── lib/
│       └── utils.js
├── package.json
├── tailwind.config.js
├── craco.config.js
└── vercel.json (Created for deployment)
```

## Files Created/Modified

### Core Application Files (6 files)
1. `/app/frontend/src/App.js` - Main routing with 16 routes
2. `/app/frontend/src/App.css` - Global styling with glass effects
3. `/app/frontend/public/index.html` - Updated with SEO meta tags
4. `/app/frontend/vercel.json` - Vercel configuration
5. `/app/frontend/.vercelignore` - Files to ignore during deployment

### Layout & Styles (3 files)
6. `/app/frontend/src/components/CalculatorLayout.jsx` - Shared calculator layout
7. `/app/frontend/src/styles/HomePage.css` - Homepage styles
8. `/app/frontend/src/styles/CalculatorLayout.css` - Calculator page styles

### Calculator Pages (16 files)
9. `/app/frontend/src/pages/HomePage.jsx` - Main landing page
10. `/app/frontend/src/pages/BMICalculator.jsx`
11. `/app/frontend/src/pages/BMRCalculator.jsx`
12. `/app/frontend/src/pages/LoanCalculator.jsx`
13. `/app/frontend/src/pages/EMICalculator.jsx`
14. `/app/frontend/src/pages/AgeCalculator.jsx`
15. `/app/frontend/src/pages/SIPCalculator.jsx`
16. `/app/frontend/src/pages/PercentageCalculator.jsx`
17. `/app/frontend/src/pages/GSTCalculator.jsx`
18. `/app/frontend/src/pages/DiscountCalculator.jsx`
19. `/app/frontend/src/pages/BodyFatCalculator.jsx`
20. `/app/frontend/src/pages/CalorieCalculator.jsx`
21. `/app/frontend/src/pages/PregnancyCalculator.jsx`
22. `/app/frontend/src/pages/CompoundInterestCalculator.jsx`
23. `/app/frontend/src/pages/TipCalculator.jsx`
24. `/app/frontend/src/pages/CurrencyConverter.jsx`

**Total: 24 files created/modified**

## Deployment Steps to Vercel

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI globally:**
   ```bash
   npm install -g vercel
   ```

2. **Navigate to frontend directory:**
   ```bash
   cd /app/frontend
   ```

3. **Login to Vercel:**
   ```bash
   vercel login
   ```

4. **Deploy:**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Select "Yes" to set up and deploy
   - Choose your project name: `calcify` or your preferred name
   - Choose scope/team
   - Link to existing project or create new

5. **Deploy to production:**
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via GitHub + Vercel Dashboard

1. **Push code to GitHub:**
   ```bash
   cd /app/frontend
   git init
   git add .
   git commit -m "Initial commit - Calcify Calculator Website"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to https://vercel.com
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect Create React App settings

3. **Configure build settings:**
   - Framework Preset: `Create React App`
   - Build Command: `yarn build`
   - Output Directory: `build`
   - Install Command: `yarn install`

4. **Environment Variables (if needed):**
   - Add any environment variables in Vercel dashboard
   - For this project, no backend env variables needed (frontend only)

5. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live!

## Post-Deployment

### Custom Domain Setup
1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain (e.g., `calcify.com`)
3. Update DNS records as instructed by Vercel

### SEO & Performance
- ✅ Meta tags already configured
- ✅ Open Graph tags added
- ✅ Semantic HTML structure
- ✅ Responsive design
- ✅ Fast loading with Vercel CDN

### Google AdSense Setup
1. Ad placeholders are already in the code
2. Apply for Google AdSense
3. Replace placeholder divs with actual AdSense code
4. Locations:
   - Homepage: Top banner (728x90)
   - Calculator pages: Top, sidebar, bottom banners

### Analytics
- PostHog is already configured in index.html
- Add Google Analytics if needed

## Features of Deployed Site

### 15 Calculators:
1. **BMI Calculator** - Body Mass Index calculation
2. **BMR Calculator** - Basal Metabolic Rate
3. **Loan Calculator** - Loan EMI and interest
4. **EMI Calculator** - Monthly installment calculator
5. **Age Calculator** - Exact age calculation
6. **SIP Calculator** - Investment returns
7. **Percentage Calculator** - Percentage calculations
8. **GST Calculator** - GST inclusive/exclusive
9. **Discount Calculator** - Discount and savings
10. **Body Fat Calculator** - Body fat percentage
11. **Calorie Calculator** - Daily calorie needs
12. **Pregnancy Calculator** - Due date calculator
13. **Compound Interest Calculator** - Investment growth
14. **Tip Calculator** - Tip and bill splitting
15. **Currency Converter** - Multi-currency conversion

### Each Calculator Includes:
- ✅ Functional calculation logic
- ✅ SEO-optimized content
- ✅ Formula explanation
- ✅ FAQ section
- ✅ PDF download functionality
- ✅ Beautiful glass morphism UI
- ✅ Responsive design
- ✅ Ad placeholder sections

## Technologies Used

- **Frontend:** React 19
- **Routing:** React Router v7
- **Styling:** Tailwind CSS + Custom CSS
- **UI Components:** Shadcn/ui, Radix UI
- **Icons:** Lucide React
- **PDF Generation:** jsPDF
- **Build Tool:** Create React App with Craco
- **Deployment:** Vercel

## Support & Maintenance

### To update the site:
1. Make changes locally
2. Test thoroughly
3. Push to GitHub (if using GitHub deployment)
4. Vercel will auto-deploy

OR

1. Make changes
2. Run `vercel --prod` (if using CLI)

### Common Issues:

**Build fails:**
- Check package.json dependencies
- Ensure all imports are correct
- Check console for errors

**Routes not working:**
- vercel.json rewrites are configured
- All routes redirect to index.html for SPA routing

**Styles not loading:**
- Tailwind config is correct
- CSS files are imported in correct order

## Next Steps

1. ✅ Deploy to Vercel
2. 🔄 Set up custom domain
3. 🔄 Apply for Google AdSense
4. 🔄 Add more calculators if needed
5. 🔄 SEO optimization (submit sitemap to Google)
6. 🔄 Monitor analytics

## Contact

Built with ❤️ using Emergent.sh

---

**Ready to deploy!** Follow the steps above and your Calcify calculator website will be live on Vercel in minutes.

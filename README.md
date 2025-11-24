# Calcify - Modern Calculator Website

![Calcify](https://img.shields.io/badge/Calcify-Calculator%20Website-22d3ee)
![React](https://img.shields.io/badge/React-19-61dafb)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38bdf8)

## 🎯 Overview

Calcify is a beautiful, modern calculator website featuring 15 fully functional calculators with a stunning glass morphism UI and cyan gradient theme. SEO-optimized and ready for AdSense approval.

## ✨ Features

### 15 Professional Calculators
- 🏥 **Health:** BMI, BMR, Body Fat, Calorie, Pregnancy Due Date
- 💰 **Finance:** Loan, EMI, SIP, Compound Interest, GST
- 🧮 **Utilities:** Age, Percentage, Discount, Tip, Currency Converter

### Modern UI/UX
- Glass morphism effects
- Smooth hover animations
- Cyan/teal gradient theme
- Fully responsive design
- Dark mode optimized

### Built-in Features
- 📥 PDF download for all results
- 📊 SEO-optimized pages
- 💡 Formula explanations
- ❓ FAQ sections
- 📱 Mobile-friendly
- 🎯 AdSense placeholders

## 🚀 Quick Start

### Local Development

```bash
# Navigate to frontend
cd /app/frontend

# Install dependencies
yarn install

# Start development server
yarn start

# Build for production
yarn build
```

### Vercel Deployment

See `DEPLOYMENT_GUIDE.md` for complete deployment instructions.

**Quick Deploy:**
```bash
cd /app/frontend
vercel --prod
```

## 📁 Project Structure

```
frontend/
├── public/
│   └── index.html          # SEO meta tags
├── src/
│   ├── App.js              # Main routing
│   ├── App.css             # Global styles
│   ├── components/
│   │   ├── CalculatorLayout.jsx
│   │   └── ui/             # Shadcn components
│   ├── pages/              # 16 pages (home + 15 calculators)
│   ├── styles/             # CSS modules
│   └── hooks/              # Custom hooks
├── package.json
├── tailwind.config.js
└── vercel.json             # Vercel config
```

## 🎨 Design System

### Colors
- **Primary:** Cyan (#22d3ee)
- **Background:** Dark Navy (#0a0f1c, #1a1f3a)
- **Text:** Light (#e8edf4)
- **Accent:** Teal (#0891b2)

### Typography
- **Font:** Inter, System fonts
- **Headings:** Bold, gradient text
- **Body:** Clean, readable

## 🛠️ Tech Stack

- **Framework:** React 19
- **Routing:** React Router v7
- **Styling:** Tailwind CSS
- **UI Library:** Shadcn/ui + Radix UI
- **Icons:** Lucide React
- **PDF:** jsPDF
- **Build:** Create React App + Craco

## 📊 SEO Features

- ✅ Meta descriptions on all pages
- ✅ Open Graph tags
- ✅ Twitter cards
- ✅ Semantic HTML
- ✅ FAQ rich snippets
- ✅ Fast loading
- ✅ Mobile responsive

## 📝 Calculators List

| Calculator | Route | Description |
|------------|-------|-------------|
| BMI | `/bmi-calculator` | Body Mass Index |
| BMR | `/bmr-calculator` | Basal Metabolic Rate |
| Loan | `/loan-calculator` | Loan payments |
| EMI | `/emi-calculator` | Monthly installments |
| Age | `/age-calculator` | Exact age |
| SIP | `/sip-calculator` | Investment returns |
| Percentage | `/percentage-calculator` | Percentages |
| GST | `/gst-calculator` | Tax calculations |
| Discount | `/discount-calculator` | Savings |
| Body Fat | `/body-fat-calculator` | Body fat % |
| Calorie | `/calorie-calculator` | Daily calories |
| Pregnancy | `/pregnancy-calculator` | Due date |
| Compound Interest | `/compound-interest-calculator` | Investment growth |
| Tip | `/tip-calculator` | Tips & splitting |
| Currency | `/currency-converter` | Currency exchange |

## 🎯 AdSense Ready

Ad placeholder locations:
- Homepage: Top banner, horizontal banner
- Calculator pages: Top, sidebar, bottom

Replace placeholders with actual AdSense code after approval.

## 🔧 Configuration

### Environment Variables
No environment variables needed for frontend-only deployment.

### Vercel Configuration
See `vercel.json` for routing and build settings.

## 📈 Performance

- Fast loading with Vercel CDN
- Optimized React builds
- Lazy loading images
- Minimal bundle size

## 🤝 Contributing

Feel free to:
- Add more calculators
- Improve UI/UX
- Enhance SEO
- Fix bugs

## 📄 License

MIT License - Free to use and modify

## 🙏 Acknowledgments

- Built with [Emergent.sh](https://emergent.sh)
- UI components from [Shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev)

## 🚀 Deployment Status

- ✅ Code complete
- ✅ SEO optimized
- ✅ Responsive design
- ✅ PDF functionality
- ✅ AdSense placeholders
- 🔄 Ready for Vercel

---

**Deploy now and start ranking on Google!** 🎉

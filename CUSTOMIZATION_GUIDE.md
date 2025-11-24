# 🎨 Customization Guide - Where to Make Changes

This guide shows you exactly where to edit different parts of your Calcify calculator website.

---

## 🎨 Design & Styling Changes

### 1. Colors & Theme
**File:** `/app/frontend/src/App.css`

```css
/* Change PRIMARY color (cyan to your color) */
.gradient-text {
  background: linear-gradient(135deg, #22d3ee 0%, #06b6d4 50%, #0891b2 100%);
  /* Replace with your colors */
}

.btn-gradient {
  background: linear-gradient(135deg, #22d3ee 0%, #0891b2 100%);
  /* Change button colors */
}

/* Change BACKGROUND colors */
body {
  background: linear-gradient(135deg, #0a0f1c 0%, #1a1f3a 50%, #0f1a2e 100%);
  /* Change dark background */
}
```

**Also check:** `/app/frontend/src/index.css` for Tailwind color variables

---

### 2. Typography (Fonts)
**File:** `/app/frontend/src/index.css`

```css
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, ...;
  /* Change to your preferred font */
}
```

**To add Google Fonts:**
1. Go to `/app/frontend/public/index.html`
2. Add in `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet">
```
3. Update font-family in CSS

---

### 3. Homepage Design
**File:** `/app/frontend/src/styles/HomePage.css`

```css
/* Hero section */
.hero-title {
  font-size: 64px;  /* Change title size */
}

/* Calculator cards */
.calculator-card {
  padding: 32px 24px;  /* Change card padding */
  border-radius: 20px;  /* Change card corners */
}

/* Grid layout */
.calculators-grid {
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  /* Change card width: 280px = min card size */
}
```

---

### 4. Calculator Pages Design
**File:** `/app/frontend/src/styles/CalculatorLayout.css`

```css
/* Calculator box styling */
.calculator-box {
  padding: 40px;  /* Change inner padding */
  border-radius: 24px;  /* Change corners */
}

/* Result box styling */
.result-box {
  padding: 24px;
  border-radius: 16px;
  /* Customize result appearance */
}

/* Input fields */
.input-field {
  padding: 12px 16px;  /* Change input size */
  border-radius: 8px;  /* Change input corners */
}
```

---

## 📝 Content Changes

### 5. Website Name & Logo
**File:** `/app/frontend/src/pages/HomePage.jsx`

**Line 50-53:**
```jsx
<div className="logo">
  <Calculator className="logo-icon" />
  <span className="gradient-text logo-text">Calcify</span>
  {/* Change "Calcify" to your name */}
</div>
```

**Also update in:** `/app/frontend/src/components/CalculatorLayout.jsx` (Line 35-38)

---

### 6. Homepage Content
**File:** `/app/frontend/src/pages/HomePage.jsx`

**Hero Section (Line 59-65):**
```jsx
<h1 className="hero-title">
  <span className="gradient-text">Smart Calculators</span>
  <br />for Every Need
</h1>
<p className="hero-subtitle">
  Fast, accurate, and easy-to-use calculators...
</p>
```

**Add/Remove/Reorder Calculators (Line 12-49):**
```jsx
const calculators = [
  { 
    name: 'BMI Calculator',  // Change name
    path: '/bmi-calculator',  // Change URL
    icon: <Heart />,  // Change icon
    description: 'Calculate Body Mass Index',  // Change description
    popular: true  // Add/remove popular badge
  },
  // Add more calculators here
];
```

---

### 7. SEO Meta Tags
**File:** `/app/frontend/public/index.html`

**Lines 7-22:**
```html
<meta name="description" content="Your custom description" />
<meta name="keywords" content="your, custom, keywords" />
<title>Your Custom Title</title>

<!-- Open Graph -->
<meta property="og:title" content="Your Title" />
<meta property="og:description" content="Your Description" />
```

---

### 8. Individual Calculator Content
**Example: BMI Calculator**
**File:** `/app/frontend/src/pages/BMICalculator.jsx`

**Calculator inputs (Lines 20-40):**
```jsx
<input
  type="number"
  className="input-field"
  value={weight}
  onChange={(e) => setWeight(e.target.value)}
  placeholder="Enter weight"  // Change placeholder
/>
```

**SEO Content Section (Lines 60-120):**
```jsx
<div className="info-section">
  <h2 className="info-title">What is BMI?</h2>
  <p className="info-text">
    Body Mass Index (BMI) is...
    {/* Edit explanation text */}
  </p>
  
  <div className="faq-section">
    {/* Add/edit FAQ questions */}
  </div>
</div>
```

---

## 🧮 Calculation Logic Changes

### 9. Calculator Formulas
**Each calculator file** in `/app/frontend/src/pages/`

**Example: BMI Calculator (Line 12-27):**
```jsx
const calculate = () => {
  if (weight && height) {
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    
    // Change BMI categories here
    let category = '';
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 25) category = 'Normal weight';
    // Modify logic as needed
    
    setResult({ bmi, category });
  }
};
```

**Currency rates (CurrencyConverter.jsx, Line 13-19):**
```jsx
const exchangeRates = {
  USD: { INR: 83.12, EUR: 0.92, ... },
  // Update exchange rates here
};
```

---

## ➕ Adding New Features

### 10. Add a New Calculator

**Step 1:** Create new calculator file
```bash
cd /app/frontend/src/pages
# Copy existing calculator as template
cp BMICalculator.jsx MyNewCalculator.jsx
```

**Step 2:** Edit the new calculator
- Change component name
- Update title, description
- Modify calculation logic
- Update SEO content

**Step 3:** Add route in `/app/frontend/src/App.js`
```jsx
import MyNewCalculator from './pages/MyNewCalculator';

// Add in <Routes> (around Line 33)
<Route path="/my-new-calculator" element={<MyNewCalculator />} />
```

**Step 4:** Add card in `/app/frontend/src/pages/HomePage.jsx`
```jsx
const calculators = [
  // ... existing calculators
  {
    name: 'My New Calculator',
    path: '/my-new-calculator',
    icon: <YourIcon className="calc-icon" />,
    description: 'Your description',
    popular: false
  }
];
```

---

### 11. Add New Icons

**Available icons:** https://lucide.dev/icons

**Import in your file:**
```jsx
import { IconName } from 'lucide-react';

// Use it:
<IconName className="calc-icon" />
```

---

### 12. Change Button Styles

**Global buttons:** `/app/frontend/src/App.css`
```css
.btn-gradient {
  background: linear-gradient(135deg, #22d3ee 0%, #0891b2 100%);
  padding: 12px 32px;
  border-radius: 12px;  /* Change roundness */
  font-size: 16px;  /* Change text size */
}
```

**Specific button:** Add inline styles
```jsx
<button 
  className="btn-gradient" 
  style={{
    width: '100%',
    padding: '16px',
    fontSize: '18px'
  }}
>
  Calculate
</button>
```

---

## 📱 Layout Changes

### 13. Card Layout

**Homepage grid:** `/app/frontend/src/styles/HomePage.css`
```css
.calculators-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  /* minmax(280px, 1fr) = minimum 280px wide cards */
  gap: 24px;  /* Space between cards */
}
```

**Change to 2 columns fixed:**
```css
.calculators-grid {
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
```

**Change to 4 columns:**
```css
.calculators-grid {
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
```

---

### 14. Mobile Responsiveness

**File:** `/app/frontend/src/styles/HomePage.css`

**At bottom (Line 180+):**
```css
@media (max-width: 768px) {
  .hero-title {
    font-size: 42px;  /* Smaller on mobile */
  }
  
  .calculators-grid {
    grid-template-columns: 1fr;  /* Stack on mobile */
  }
}
```

---

## 🎯 AdSense Integration

### 15. Replace Ad Placeholders

**Find placeholders in:**
- `/app/frontend/src/pages/HomePage.jsx` (Lines 82, 113)
- `/app/frontend/src/components/CalculatorLayout.jsx` (Lines 41, 66, 72)

**Replace this:**
```jsx
<div className="ad-placeholder">
  Advertisement Space - 728x90
</div>
```

**With actual AdSense code:**
```jsx
<ins className="adsbygoogle"
     style={{display:'block'}}
     data-ad-client="ca-pub-YOUR_ID"
     data-ad-slot="YOUR_SLOT_ID"
     data-ad-format="auto"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

---

## 🔧 Advanced Changes

### 16. Add Dark/Light Mode Toggle

**Step 1:** Install package
```bash
cd /app/frontend
yarn add use-dark-mode
```

**Step 2:** Create toggle component
**File:** `/app/frontend/src/components/ThemeToggle.jsx`
```jsx
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import useDarkMode from 'use-dark-mode';

const ThemeToggle = () => {
  const darkMode = useDarkMode(false);
  
  return (
    <button onClick={darkMode.toggle}>
      {darkMode.value ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeToggle;
```

**Step 3:** Add to navbar in HomePage.jsx

---

### 17. Add Analytics

**File:** `/app/frontend/public/index.html`

**Add Google Analytics (in `<head>`):**
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YOUR_ID');
</script>
```

---

### 18. Change PDF Download Content

**File:** `/app/frontend/src/components/CalculatorLayout.jsx`

**Lines 10-35 (PDF generation):**
```jsx
const handleDownloadPDF = () => {
  const pdf = new jsPDF();
  
  // Customize PDF content
  pdf.setFontSize(20);
  pdf.text('Your Custom Title', 105, 20, { align: 'center' });
  
  // Add more customization
  const resultElement = document.querySelector('.result-box');
  if (resultElement) {
    const resultText = resultElement.innerText;
    pdf.text(resultText, 20, 50);
  }
  
  pdf.save('custom-filename.pdf');
};
```

---

## 📂 File Quick Reference

### Most Important Files to Customize:

```
Colors & Theme:
  /app/frontend/src/App.css
  /app/frontend/src/index.css

Homepage:
  /app/frontend/src/pages/HomePage.jsx
  /app/frontend/src/styles/HomePage.css

Calculator Pages:
  /app/frontend/src/pages/*.jsx (15 files)
  /app/frontend/src/styles/CalculatorLayout.css

Layout:
  /app/frontend/src/components/CalculatorLayout.jsx

SEO:
  /app/frontend/public/index.html

Routing:
  /app/frontend/src/App.js
```

---

## 🚀 After Making Changes

### 1. Test Locally
```bash
cd /app/frontend
yarn start
# Visit http://localhost:3000
```

### 2. Check for Errors
- Open browser console (F12)
- Look for red errors
- Fix any issues

### 3. Build & Deploy
```bash
yarn build  # Test production build
./deploy.sh  # Deploy to Vercel
```

---

## 💡 Tips for Customization

1. **Start Small:** Change colors first, then layout
2. **Test Often:** Check browser after each change
3. **Use Version Control:** Git commit before big changes
4. **Keep Backups:** Save original files
5. **Check Mobile:** Always test on mobile devices
6. **Read Comments:** Look for `/* */` comments in code

---

## ❓ Common Customization Questions

**Q: How to change number of calculators shown?**
A: Edit `calculators` array in HomePage.jsx (add/remove items)

**Q: How to change calculator order?**
A: Reorder items in `calculators` array in HomePage.jsx

**Q: How to hide a calculator?**
A: Comment out or delete the calculator object from array

**Q: How to add more input fields?**
A: Copy existing input JSX in calculator file, add new state variable

**Q: How to change result display?**
A: Edit the `result && (...)` section in each calculator

---

## 🆘 Need Help?

- **Syntax Errors:** Check browser console (F12)
- **Styling Issues:** Inspect element (right-click → Inspect)
- **Build Errors:** Read error message, fix the mentioned file
- **React Errors:** Check component imports and JSX syntax

---

**Happy Customizing! 🎨**

All changes are in `/app/frontend/src/` directory.
Main files: App.css, HomePage.jsx, and individual calculator pages.

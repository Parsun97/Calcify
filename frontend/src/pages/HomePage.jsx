import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Heart, TrendingUp, CreditCard, Calendar, Percent, DollarSign, ShoppingCart, Activity, Flame, Baby, Banknote, HandCoins, Globe } from 'lucide-react';
import '../styles/HomePage.css';

const HomePage = () => {
  const calculators = [
    { 
      name: 'BMI Calculator', 
      path: '/bmi-calculator', 
      icon: <Heart className="calc-icon" />,
      description: 'Calculate Body Mass Index',
      popular: true
    },
    { 
      name: 'BMR Calculator', 
      path: '/bmr-calculator', 
      icon: <Activity className="calc-icon" />,
      description: 'Basal Metabolic Rate'
    },
    { 
      name: 'Loan Calculator', 
      path: '/loan-calculator', 
      icon: <Banknote className="calc-icon" />,
      description: 'Calculate loan payments',
      popular: true
    },
    { 
      name: 'EMI Calculator', 
      path: '/emi-calculator', 
      icon: <CreditCard className="calc-icon" />,
      description: 'Monthly installment calculator'
    },
    { 
      name: 'Age Calculator', 
      path: '/age-calculator', 
      icon: <Calendar className="calc-icon" />,
      description: 'Calculate your exact age'
    },
    { 
      name: 'SIP Calculator', 
      path: '/sip-calculator', 
      icon: <TrendingUp className="calc-icon" />,
      description: 'Investment returns calculator',
      popular: true
    },
    { 
      name: 'Percentage Calculator', 
      path: '/percentage-calculator', 
      icon: <Percent className="calc-icon" />,
      description: 'Calculate percentages'
    },
    { 
      name: 'GST Calculator', 
      path: '/gst-calculator', 
      icon: <Calculator className="calc-icon" />,
      description: 'GST calculation tool'
    },
    { 
      name: 'Discount Calculator', 
      path: '/discount-calculator', 
      icon: <ShoppingCart className="calc-icon" />,
      description: 'Calculate discounts & savings'
    },
    { 
      name: 'Body Fat Calculator', 
      path: '/body-fat-calculator', 
      icon: <Activity className="calc-icon" />,
      description: 'Body fat percentage'
    },
    { 
      name: 'Calorie Calculator', 
      path: '/calorie-calculator', 
      icon: <Flame className="calc-icon" />,
      description: 'Daily calorie needs'
    },
    { 
      name: 'Pregnancy Calculator', 
      path: '/pregnancy-calculator', 
      icon: <Baby className="calc-icon" />,
      description: 'Due date calculator'
    },
    { 
      name: 'Compound Interest', 
      path: '/compound-interest-calculator', 
      icon: <TrendingUp className="calc-icon" />,
      description: 'Calculate compound interest'
    },
    { 
      name: 'Tip Calculator', 
      path: '/tip-calculator', 
      icon: <HandCoins className="calc-icon" />,
      description: 'Calculate tips & split bills'
    },
    { 
      name: 'Currency Converter', 
      path: '/currency-converter', 
      icon: <Globe className="calc-icon" />,
      description: 'Convert currencies'
    }
  ];

  return (
    <div className="homepage">
      <nav className="navbar glass-effect">
        <div className="nav-container">
          <div className="logo">
            <Calculator className="logo-icon" />
            <span className="gradient-text logo-text">Calcify</span>
          </div>
        </div>
      </nav>

      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">Smart Calculators</span>
            <br />for Every Need
          </h1>
          <p className="hero-subtitle">
            Fast, accurate, and easy-to-use calculators for all your daily calculations.
            From health to finance, we've got you covered.
          </p>
          <div className="ad-placeholder" style={{marginTop: '40px', maxWidth: '728px', margin: '40px auto 0'}}>
            Advertisement Space - 728x90
          </div>
        </div>
      </header>

      <section className="calculators-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title gradient-text">All Calculators</h2>
            <p className="section-subtitle">Choose from our collection of professional calculators</p>
          </div>

          <div className="calculators-grid">
            {calculators.map((calc, index) => (
              <Link to={calc.path} key={index} className="calculator-card glass-effect card-hover">
                {calc.popular && <div className="popular-badge">Popular</div>}
                <div className="card-icon-wrapper">
                  {calc.icon}
                </div>
                <h3 className="card-title">{calc.name}</h3>
                <p className="card-description">{calc.description}</p>
                <div className="card-arrow">→</div>
              </Link>
            ))}
          </div>

          <div className="ad-placeholder" style={{marginTop: '60px'}}>
            Advertisement Space - Horizontal Banner
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <Calculator className="logo-icon" />
              <span className="gradient-text">Calcify</span>
            </div>
            <p className="footer-text">
              Your trusted source for online calculators. Fast, accurate, and always free.
            </p>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Calcify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

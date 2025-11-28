import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import BMICalculator from './pages/BMICalculator';
import BMRCalculator from './pages/BMRCalculator';
import LoanCalculator from './pages/LoanCalculator';
import EMICalculator from './pages/EMICalculator';
import AgeCalculator from './pages/AgeCalculator';
import SIPCalculator from './pages/SIPCalculator';
import PercentageCalculator from './pages/PercentageCalculator';
import GSTCalculator from './pages/GSTCalculator';
import DiscountCalculator from './pages/DiscountCalculator';
import BodyFatCalculator from './pages/BodyFatCalculator';
import CalorieCalculator from './pages/CalorieCalculator';
import PregnancyCalculator from './pages/PregnancyCalculator';
import CompoundInterestCalculator from './pages/CompoundInterestCalculator';
import TipCalculator from './pages/TipCalculator';
import CurrencyConverter from './pages/CurrencyConverter';
import NeetingCalculator from './pages/NeetingCalculator';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bmi-calculator" element={<BMICalculator />} />
        <Route path="/bmr-calculator" element={<BMRCalculator />} />
        <Route path="/loan-calculator" element={<LoanCalculator />} />
        <Route path="/emi-calculator" element={<EMICalculator />} />
        <Route path="/age-calculator" element={<AgeCalculator />} />
        <Route path="/sip-calculator" element={<SIPCalculator />} />
        <Route path="/percentage-calculator" element={<PercentageCalculator />} />
        <Route path="/gst-calculator" element={<GSTCalculator />} />
        <Route path="/discount-calculator" element={<DiscountCalculator />} />
        <Route path="/body-fat-calculator" element={<BodyFatCalculator />} />
        <Route path="/calorie-calculator" element={<CalorieCalculator />} />
        <Route path="/pregnancy-calculator" element={<PregnancyCalculator />} />
        <Route path="/compound-interest-calculator" element={<CompoundInterestCalculator />} />
        <Route path="/tip-calculator" element={<TipCalculator />} />
        <Route path="/currency-converter" element={<CurrencyConverter />} />
  <Route path="/Neeting-calculator" element={<NeetingCalculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

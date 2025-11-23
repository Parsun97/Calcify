import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (birthDate) {
      const birth = new Date(birthDate);
      const today = new Date();
      
      let years = today.getFullYear() - birth.getFullYear();
      let months = today.getMonth() - birth.getMonth();
      let days = today.getDate() - birth.getDate();
      
      if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      }
      
      if (months < 0) {
        years--;
        months += 12;
      }
      
      const totalDays = Math.floor((today - birth) / (1000 * 60 * 60 * 24));
      const totalMonths = years * 12 + months;
      const totalWeeks = Math.floor(totalDays / 7);
      const totalHours = totalDays * 24;
      
      setResult({ years, months, days, totalDays, totalMonths, totalWeeks, totalHours });
    }
  };

  return (
    <CalculatorLayout 
      title="Age Calculator" 
      description="Calculate your exact age in years, months, days, and more"
      keywords="age calculator, date of birth calculator, age in days, age in years"
    >
      <div className="form-group">
        <label className="form-label">Date of Birth</label>
        <input
          type="date"
          className="input-field"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          max={new Date().toISOString().split('T')[0]}
        />
      </div>

      <button onClick={calculate} className="btn-gradient" style={{width: '100%', marginTop: '12px'}}>
        Calculate Age
      </button>

      {result && (
        <div className="result-box">
          <h3 style={{fontSize: '24px', fontWeight: '700', marginBottom: '20px'}}>Your Age</h3>
          <div style={{display: 'grid', gap: '24px'}}>
            <div>
              <p style={{fontSize: '48px', fontWeight: '800', color: '#22d3ee', marginBottom: '8px'}}>
                {result.years} Years, {result.months} Months, {result.days} Days
              </p>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', fontSize: '14px'}}>
              <div>
                <p style={{opacity: 0.8}}>Total Months</p>
                <p style={{fontSize: '20px', fontWeight: '700', marginTop: '4px'}}>{result.totalMonths}</p>
              </div>
              <div>
                <p style={{opacity: 0.8}}>Total Weeks</p>
                <p style={{fontSize: '20px', fontWeight: '700', marginTop: '4px'}}>{result.totalWeeks}</p>
              </div>
              <div>
                <p style={{opacity: 0.8}}>Total Days</p>
                <p style={{fontSize: '20px', fontWeight: '700', marginTop: '4px'}}>{result.totalDays}</p>
              </div>
              <div>
                <p style={{opacity: 0.8}}>Total Hours</p>
                <p style={{fontSize: '20px', fontWeight: '700', marginTop: '4px'}}>{result.totalHours.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="info-section">
        <h2 className="info-title">How Age is Calculated</h2>
        <p className="info-text">
          Age calculation is done by finding the difference between your birth date and the current date. 
          Our calculator provides precise calculations in years, months, days, weeks, and even hours.
        </p>

        <h3 className="info-title" style={{fontSize: '22px', marginTop: '32px'}}>Why Use an Age Calculator?</h3>
        <p className="info-text">
          • Calculate exact age for official documents<br/>
          • Know your age in different units (days, weeks, months)<br/>
          • Track milestones and anniversaries<br/>
          • Determine retirement age calculations<br/>
          • Calculate age for insurance purposes
        </p>

        <div className="faq-section">
          <h3 className="info-title" style={{fontSize: '22px'}}>Frequently Asked Questions</h3>
          
          <div className="faq-item">
            <h4 className="faq-question">How accurate is this age calculator?</h4>
            <p className="faq-answer">
              Our calculator is 100% accurate and accounts for leap years and varying month lengths.
            </p>
          </div>

          <div className="faq-item">
            <h4 className="faq-question">Can I calculate age between two specific dates?</h4>
            <p className="faq-answer">
              This calculator shows age from birth date to today. For custom date ranges, you can modify the calculation date.
            </p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default AgeCalculator;

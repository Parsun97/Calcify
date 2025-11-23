import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';

const PercentageCalculator = () => {
  const [value, setValue] = useState('');
  const [percentage, setPercentage] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (value && percentage) {
      const val = parseFloat(value);
      const per = parseFloat(percentage);
      const percentageValue = (val * per) / 100;
      
      setResult({
        percentageOf: percentageValue.toFixed(2),
        percentageIs: per,
        total: val
      });
    }
  };

  return (
    <CalculatorLayout 
      title="Percentage Calculator" 
      description="Calculate percentages quickly and accurately"
      keywords="percentage calculator, percent calculator, calculate percentage"
    >
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Value</label>
          <input
            type="number"
            className="input-field"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter value"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Percentage (%)</label>
          <input
            type="number"
            step="0.1"
            className="input-field"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
            placeholder="Enter percentage"
          />
        </div>
      </div>

      <button onClick={calculate} className="btn-gradient" style={{width: '100%', marginTop: '12px'}}>
        Calculate
      </button>

      {result && (
        <div className="result-box">
          <h3 style={{fontSize: '24px', fontWeight: '700', marginBottom: '16px'}}>Result</h3>
          <p style={{fontSize: '20px', marginBottom: '12px'}}>
            {result.percentageIs}% of {result.total} is:
          </p>
          <p style={{fontSize: '48px', fontWeight: '800', color: '#22d3ee'}}>{result.percentageOf}</p>
        </div>
      )}

      <div className="info-section">
        <h2 className="info-title">How to Calculate Percentages</h2>
        <p className="info-text">
          A percentage is a way to express a number as a fraction of 100. The word "percent" means "per hundred." 
          Percentages are used everywhere - in discounts, grades, statistics, and financial calculations.
        </p>

        <h3 className="info-title" style={{fontSize: '22px', marginTop: '32px'}}>Percentage Formula</h3>
        <div className="formula-box">
          Percentage Value = (Percentage / 100) × Total Value
        </div>

        <p className="info-text" style={{marginTop: '24px'}}>
          <strong>Example:</strong> 20% of 500 = (20/100) × 500 = 100
        </p>

        <div className="faq-section">
          <h3 className="info-title" style={{fontSize: '22px'}}>Frequently Asked Questions</h3>
          
          <div className="faq-item">
            <h4 className="faq-question">How do I calculate percentage increase?</h4>
            <p className="faq-answer">
              Percentage Increase = [(New Value - Old Value) / Old Value] × 100
            </p>
          </div>

          <div className="faq-item">
            <h4 className="faq-question">How do I convert a fraction to percentage?</h4>
            <p className="faq-answer">
              Divide the numerator by denominator and multiply by 100. For example, 3/4 = 0.75 × 100 = 75%
            </p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default PercentageCalculator;

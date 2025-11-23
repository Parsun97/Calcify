import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';

const CompoundInterestCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [frequency, setFrequency] = useState('12');
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (principal && rate && time) {
      const p = parseFloat(principal);
      const r = parseFloat(rate) / 100;
      const t = parseFloat(time);
      const n = parseFloat(frequency);
      
      const amount = p * Math.pow((1 + r / n), n * t);
      const interest = amount - p;
      
      setResult({
        finalAmount: amount.toFixed(2),
        principal: p.toFixed(2),
        interest: interest.toFixed(2)
      });
    }
  };

  return (
    <CalculatorLayout 
      title="Compound Interest Calculator" 
      description="Calculate compound interest on your investments and savings"
      keywords="compound interest calculator, investment calculator, savings calculator"
    >
      <div className="form-group">
        <label className="form-label">Principal Amount (₹)</label>
        <input
          type="number"
          className="input-field"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          placeholder="Initial investment"
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Annual Rate (%)</label>
          <input
            type="number"
            step="0.1"
            className="input-field"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="Interest rate"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Time Period (Years)</label>
          <input
            type="number"
            className="input-field"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="Years"
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Compounding Frequency</label>
        <select className="input-field" value={frequency} onChange={(e) => setFrequency(e.target.value)}>
          <option value="1">Annually</option>
          <option value="2">Semi-Annually</option>
          <option value="4">Quarterly</option>
          <option value="12">Monthly</option>
          <option value="365">Daily</option>
        </select>
      </div>

      <button onClick={calculate} className="btn-gradient" style={{width: '100%', marginTop: '12px'}}>
        Calculate
      </button>

      {result && (
        <div className="result-box">
          <h3 style={{fontSize: '24px', fontWeight: '700', marginBottom: '20px'}}>Investment Growth</h3>
          <div style={{display: 'grid', gap: '16px'}}>
            <div style={{padding: '20px', background: 'rgba(34, 211, 238, 0.1)', borderRadius: '12px', textAlign: 'center'}}>
              <p style={{fontSize: '14px', opacity: 0.8, marginBottom: '8px'}}>Final Amount</p>
              <p style={{fontSize: '40px', fontWeight: '800', color: '#22d3ee'}}>₹{result.finalAmount}</p>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}>
              <div style={{padding: '16px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px'}}>
                <p style={{fontSize: '14px', opacity: 0.8, marginBottom: '4px'}}>Principal</p>
                <p style={{fontSize: '24px', fontWeight: '700'}}>₹{result.principal}</p>
              </div>
              <div style={{padding: '16px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '8px'}}>
                <p style={{fontSize: '14px', opacity: 0.8, marginBottom: '4px'}}>Interest Earned</p>
                <p style={{fontSize: '24px', fontWeight: '700', color: '#10b981'}}>₹{result.interest}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="info-section">
        <h2 className="info-title">Understanding Compound Interest</h2>
        <p className="info-text">
          Compound interest is interest calculated on the initial principal and also on the accumulated interest from previous periods. 
          It's often called "interest on interest" and can significantly grow your investments over time.
        </p>

        <h3 className="info-title" style={{fontSize: '22px', marginTop: '32px'}}>Compound Interest Formula</h3>
        <div className="formula-box">
          A = P(1 + r/n)^(nt)<br/>
          Where:<br/>
          A = Final amount<br/>
          P = Principal (initial investment)<br/>
          r = Annual interest rate (decimal)<br/>
          n = Compounding frequency per year<br/>
          t = Time in years
        </div>

        <p className="info-text" style={{marginTop: '24px'}}>
          <strong>Example:</strong> ₹10,000 at 8% compounded monthly for 5 years:<br/>
          Final Amount = ₹14,898<br/>
          Interest Earned = ₹4,898
        </p>

        <h3 className="info-title" style={{fontSize: '22px', marginTop: '32px'}}>Power of Compounding</h3>
        <p className="info-text">
          • More frequent compounding = higher returns<br/>
          • Longer time period = exponential growth<br/>
          • Starting early maximizes benefits<br/>
          • Small differences in rate = big differences over time
        </p>

        <div className="faq-section">
          <h3 className="info-title" style={{fontSize: '22px'}}>Frequently Asked Questions</h3>
          
          <div className="faq-item">
            <h4 className="faq-question">What's the difference between simple and compound interest?</h4>
            <p className="faq-answer">
              Simple interest is calculated only on the principal amount, while compound interest is calculated on principal plus accumulated interest.
            </p>
          </div>

          <div className="faq-item">
            <h4 className="faq-question">How does compounding frequency affect returns?</h4>
            <p className="faq-answer">
              More frequent compounding (daily vs annually) leads to slightly higher returns due to interest earning interest more often.
            </p>
          </div>

          <div className="faq-item">
            <h4 className="faq-question">What is the Rule of 72?</h4>
            <p className="faq-answer">
              Divide 72 by your interest rate to estimate how many years it takes to double your money. Example: at 8%, your money doubles in about 9 years (72/8).
            </p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default CompoundInterestCalculator;

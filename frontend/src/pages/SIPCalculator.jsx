import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState('');
  const [expectedReturn, setExpectedReturn] = useState('');
  const [timePeriod, setTimePeriod] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (monthlyInvestment && expectedReturn && timePeriod) {
      const P = parseFloat(monthlyInvestment);
      const r = parseFloat(expectedReturn) / 100 / 12;
      const n = parseFloat(timePeriod) * 12;
      
      const futureValue = P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
      const invested = P * n;
      const returns = futureValue - invested;
      
      setResult({
        maturityAmount: futureValue.toFixed(2),
        invested: invested.toFixed(2),
        returns: returns.toFixed(2)
      });
    }
  };

  return (
    <CalculatorLayout 
      title="SIP Calculator" 
      description="Calculate returns on your Systematic Investment Plan (SIP)"
      keywords="SIP calculator, mutual fund calculator, investment calculator, SIP returns"
    >
      <div className="form-group">
        <label className="form-label">Monthly Investment (₹)</label>
        <input
          type="number"
          className="input-field"
          value={monthlyInvestment}
          onChange={(e) => setMonthlyInvestment(e.target.value)}
          placeholder="Enter monthly SIP amount"
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Expected Return (% p.a.)</label>
          <input
            type="number"
            step="0.1"
            className="input-field"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(e.target.value)}
            placeholder="Annual return %"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Time Period (Years)</label>
          <input
            type="number"
            className="input-field"
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
            placeholder="Years"
          />
        </div>
      </div>

      <button onClick={calculate} className="btn-gradient" style={{width: '100%', marginTop: '12px'}}>
        Calculate SIP Returns
      </button>

      {result && (
        <div className="result-box">
          <h3 style={{fontSize: '24px', fontWeight: '700', marginBottom: '20px'}}>Investment Summary</h3>
          <div style={{display: 'grid', gap: '20px'}}>
            <div>
              <p style={{fontSize: '14px', opacity: 0.8, marginBottom: '4px'}}>Maturity Amount</p>
              <p style={{fontSize: '40px', fontWeight: '800', color: '#22d3ee'}}>₹{result.maturityAmount}</p>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}>
              <div>
                <p style={{fontSize: '14px', opacity: 0.8, marginBottom: '4px'}}>Total Invested</p>
                <p style={{fontSize: '24px', fontWeight: '700'}}>₹{result.invested}</p>
              </div>
              <div>
                <p style={{fontSize: '14px', opacity: 0.8, marginBottom: '4px'}}>Total Returns</p>
                <p style={{fontSize: '24px', fontWeight: '700', color: '#10b981'}}>₹{result.returns}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="info-section">
        <h2 className="info-title">What is SIP?</h2>
        <p className="info-text">
          SIP (Systematic Investment Plan) is an investment strategy where you invest a fixed amount regularly in mutual funds. 
          It's a disciplined approach to wealth creation through the power of compounding and rupee cost averaging.
        </p>

        <h3 className="info-title" style={{fontSize: '22px', marginTop: '32px'}}>SIP Formula</h3>
        <div className="formula-box">
          FV = P × [((1 + r)^n - 1) / r] × (1 + r)<br/>
          Where FV = Future Value, P = Monthly Investment,<br/>
          r = Monthly Rate, n = Number of Months
        </div>

        <h3 className="info-title" style={{fontSize: '22px', marginTop: '32px'}}>Benefits of SIP</h3>
        <p className="info-text">
          • Power of compounding over time<br/>
          • Disciplined investment approach<br/>
          • Rupee cost averaging benefits<br/>
          • Flexibility to start with small amounts<br/>
          • No need for market timing
        </p>

        <div className="faq-section">
          <h3 className="info-title" style={{fontSize: '22px'}}>Frequently Asked Questions</h3>
          
          <div className="faq-item">
            <h4 className="faq-question">What is a good SIP return rate?</h4>
            <p className="faq-answer">
              Historically, equity mutual funds have delivered 12-15% average annual returns over the long term. However, returns can vary.
            </p>
          </div>

          <div className="faq-item">
            <h4 className="faq-question">Can I stop my SIP anytime?</h4>
            <p className="faq-answer">
              Yes, SIPs are flexible. You can pause, stop, or modify your SIP amount at any time without penalty.
            </p>
          </div>

          <div className="faq-item">
            <h4 className="faq-question">What is the minimum SIP amount?</h4>
            <p className="faq-answer">
              Most mutual funds allow SIP investments starting from ₹500 per month, making it accessible to all investors.
            </p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default SIPCalculator;

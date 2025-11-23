import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interest, setInterest] = useState('');
  const [tenure, setTenure] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (loanAmount && interest && tenure) {
      const p = parseFloat(loanAmount);
      const r = parseFloat(interest) / 100 / 12;
      const n = parseFloat(tenure);
      
      const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const total = emi * n;
      const interestAmount = total - p;
      
      setResult({
        emi: emi.toFixed(2),
        total: total.toFixed(2),
        interest: interestAmount.toFixed(2)
      });
    }
  };

  return (
    <CalculatorLayout 
      title="EMI Calculator" 
      description="Calculate your monthly EMI for loans and credit"
      keywords="EMI calculator, monthly installment, loan EMI, payment calculator"
    >
      <div className="form-group">
        <label className="form-label">Loan Amount (₹)</label>
        <input
          type="number"
          className="input-field"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          placeholder="Enter loan amount"
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Interest Rate (% p.a.)</label>
          <input
            type="number"
            step="0.1"
            className="input-field"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            placeholder="Annual rate"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Tenure (Months)</label>
          <input
            type="number"
            className="input-field"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            placeholder="Months"
          />
        </div>
      </div>

      <button onClick={calculate} className="btn-gradient" style={{width: '100%', marginTop: '12px'}}>
        Calculate EMI
      </button>

      {result && (
        <div className="result-box">
          <h3 style={{fontSize: '24px', fontWeight: '700', marginBottom: '20px'}}>EMI Breakdown</h3>
          <div style={{display: 'grid', gap: '16px'}}>
            <div>
              <p style={{fontSize: '14px', opacity: 0.8, marginBottom: '4px'}}>Monthly EMI</p>
              <p style={{fontSize: '36px', fontWeight: '800', color: '#22d3ee'}}>₹{result.emi}</p>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}>
              <div>
                <p style={{fontSize: '14px', opacity: 0.8, marginBottom: '4px'}}>Total Payment</p>
                <p style={{fontSize: '20px', fontWeight: '700'}}>₹{result.total}</p>
              </div>
              <div>
                <p style={{fontSize: '14px', opacity: 0.8, marginBottom: '4px'}}>Total Interest</p>
                <p style={{fontSize: '20px', fontWeight: '700'}}>₹{result.interest}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="info-section">
        <h2 className="info-title">What is EMI?</h2>
        <p className="info-text">
          EMI (Equated Monthly Installment) is a fixed payment amount made by a borrower to a lender at a specified date each month. 
          EMIs are used to pay off both interest and principal each month, ensuring the loan is fully paid off by the end of the term.
        </p>

        <h3 className="info-title" style={{fontSize: '22px', marginTop: '32px'}}>How EMI is Calculated</h3>
        <div className="formula-box">
          EMI = [P × R × (1+R)^N] / [(1+R)^N-1]<br/>
          P = Loan amount, R = Monthly interest rate, N = Loan tenure in months
        </div>

        <p className="info-text" style={{marginTop: '24px'}}>
          <strong>Example:</strong> For a loan of ₹1,00,000 at 10% annual interest for 12 months:<br/>
          EMI = ₹8,792 (approx)
        </p>

        <div className="faq-section">
          <h3 className="info-title" style={{fontSize: '22px'}}>Frequently Asked Questions</h3>
          
          <div className="faq-item">
            <h4 className="faq-question">Can I prepay my EMI?</h4>
            <p className="faq-answer">
              Yes, most lenders allow prepayment. This can reduce your total interest burden and loan tenure.
            </p>
          </div>

          <div className="faq-item">
            <h4 className="faq-question">What happens if I miss an EMI payment?</h4>
            <p className="faq-answer">
              Missing EMI payments can result in late fees, damage to your credit score, and in severe cases, loan default proceedings.
            </p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default EMICalculator;

import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';

const LoanCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (principal && rate && years) {
      const p = parseFloat(principal);
      const r = parseFloat(rate) / 100 / 12;
      const n = parseFloat(years) * 12;
      
      const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalAmount = emi * n;
      const totalInterest = totalAmount - p;
      
      setResult({
        emi: emi.toFixed(2),
        totalAmount: totalAmount.toFixed(2),
        totalInterest: totalInterest.toFixed(2)
      });
    }
  };

  return (
    <CalculatorLayout 
      title="Loan Calculator" 
      description="Calculate your loan EMI, total payment, and interest"
      keywords="loan calculator, EMI calculator, loan payment, interest calculator"
    >
      <div className="form-group">
        <label className="form-label">Loan Amount</label>
        <input
          type="number"
          className="input-field"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          placeholder="Enter loan amount"
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Interest Rate (%)</label>
          <input
            type="number"
            step="0.1"
            className="input-field"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="Annual rate"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Loan Tenure (Years)</label>
          <input
            type="number"
            className="input-field"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            placeholder="Years"
          />
        </div>
      </div>

      <button onClick={calculate} className="btn-gradient" style={{width: '100%', marginTop: '12px'}}>
        Calculate Loan
      </button>

      {result && (
        <div className="result-box">
          <h3 style={{fontSize: '24px', fontWeight: '700', marginBottom: '20px'}}>Loan Details</h3>
          <div style={{display: 'grid', gap: '16px'}}>
            <div>
              <p style={{fontSize: '14px', opacity: 0.8, marginBottom: '4px'}}>Monthly EMI</p>
              <p style={{fontSize: '32px', fontWeight: '800', color: '#22d3ee'}}>₹{result.emi}</p>
            </div>
            <div>
              <p style={{fontSize: '14px', opacity: 0.8, marginBottom: '4px'}}>Total Amount Payable</p>
              <p style={{fontSize: '24px', fontWeight: '700'}}>₹{result.totalAmount}</p>
            </div>
            <div>
              <p style={{fontSize: '14px', opacity: 0.8, marginBottom: '4px'}}>Total Interest</p>
              <p style={{fontSize: '24px', fontWeight: '700'}}>₹{result.totalInterest}</p>
            </div>
          </div>
        </div>
      )}

      <div className="info-section">
        <h2 className="info-title">Understanding Loan Calculations</h2>
        <p className="info-text">
          A loan calculator helps you estimate your monthly payments and total interest over the life of a loan. 
          This tool is essential for planning your finances before taking a loan.
        </p>

        <h3 className="info-title" style={{fontSize: '22px', marginTop: '32px'}}>EMI Formula</h3>
        <div className="formula-box">
          EMI = [P × R × (1+R)^N] / [(1+R)^N-1]<br/>
          Where P = Principal, R = Monthly Rate, N = Tenure in months
        </div>

        <div className="faq-section">
          <h3 className="info-title" style={{fontSize: '22px'}}>Frequently Asked Questions</h3>
          
          <div className="faq-item">
            <h4 className="faq-question">What is EMI?</h4>
            <p className="faq-answer">
              EMI (Equated Monthly Installment) is a fixed payment amount made by a borrower to a lender at a specified date each calendar month.
            </p>
          </div>

          <div className="faq-item">
            <h4 className="faq-question">How can I reduce my loan EMI?</h4>
            <p className="faq-answer">
              You can reduce EMI by increasing the loan tenure, making a larger down payment, or negotiating a lower interest rate.
            </p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default LoanCalculator;

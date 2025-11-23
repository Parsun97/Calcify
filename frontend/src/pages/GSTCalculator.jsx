import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';

const GSTCalculator = () => {
  const [amount, setAmount] = useState('');
  const [gstRate, setGstRate] = useState('18');
  const [calcType, setCalcType] = useState('exclusive');
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (amount && gstRate) {
      const amt = parseFloat(amount);
      const rate = parseFloat(gstRate);
      
      if (calcType === 'exclusive') {
        const gstAmount = (amt * rate) / 100;
        const total = amt + gstAmount;
        setResult({
          original: amt.toFixed(2),
          gstAmount: gstAmount.toFixed(2),
          total: total.toFixed(2)
        });
      } else {
        const original = amt / (1 + rate / 100);
        const gstAmount = amt - original;
        setResult({
          original: original.toFixed(2),
          gstAmount: gstAmount.toFixed(2),
          total: amt.toFixed(2)
        });
      }
    }
  };

  return (
    <CalculatorLayout 
      title="GST Calculator" 
      description="Calculate GST (Goods and Services Tax) on your transactions"
      keywords="GST calculator, tax calculator, GST calculation, India GST"
    >
      <div className="form-group">
        <label className="form-label">Calculation Type</label>
        <select className="input-field" value={calcType} onChange={(e) => setCalcType(e.target.value)}>
          <option value="exclusive">Add GST (Exclusive)</option>
          <option value="inclusive">Remove GST (Inclusive)</option>
        </select>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Amount (₹)</label>
          <input
            type="number"
            className="input-field"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>
        <div className="form-group">
          <label className="form-label">GST Rate (%)</label>
          <select className="input-field" value={gstRate} onChange={(e) => setGstRate(e.target.value)}>
            <option value="5">5%</option>
            <option value="12">12%</option>
            <option value="18">18%</option>
            <option value="28">28%</option>
          </select>
        </div>
      </div>

      <button onClick={calculate} className="btn-gradient" style={{width: '100%', marginTop: '12px'}}>
        Calculate GST
      </button>

      {result && (
        <div className="result-box">
          <h3 style={{fontSize: '24px', fontWeight: '700', marginBottom: '20px'}}>GST Breakdown</h3>
          <div style={{display: 'grid', gap: '16px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '18px'}}>
              <span style={{opacity: 0.8}}>Original Amount:</span>
              <span style={{fontWeight: '700'}}>₹{result.original}</span>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '18px'}}>
              <span style={{opacity: 0.8}}>GST Amount ({gstRate}%):</span>
              <span style={{fontWeight: '700', color: '#22d3ee'}}>₹{result.gstAmount}</span>
            </div>
            <div style={{borderTop: '2px solid rgba(34, 211, 238, 0.3)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', fontSize: '20px'}}>
              <span style={{fontWeight: '700'}}>Total Amount:</span>
              <span style={{fontWeight: '800', color: '#22d3ee', fontSize: '28px'}}>₹{result.total}</span>
            </div>
          </div>
        </div>
      )}

      <div className="info-section">
        <h2 className="info-title">What is GST?</h2>
        <p className="info-text">
          GST (Goods and Services Tax) is an indirect tax levied on the supply of goods and services in India. 
          It replaced multiple cascading taxes with a unified tax structure, making it easier for businesses and consumers.
        </p>

        <h3 className="info-title" style={{fontSize: '22px', marginTop: '32px'}}>GST Calculation Formula</h3>
        <div className="formula-box">
          GST Exclusive: Total = Amount + (Amount × GST Rate / 100)<br/>
          GST Inclusive: Original = Total / (1 + GST Rate / 100)
        </div>

        <h3 className="info-title" style={{fontSize: '22px', marginTop: '32px'}}>GST Rates in India</h3>
        <p className="info-text">
          • 0%: Basic necessities (grains, milk, etc.)<br/>
          • 5%: Essential items (edible oils, sugar, spices)<br/>
          • 12%: Processed foods, computers<br/>
          • 18%: Most goods and services (standard rate)<br/>
          • 28%: Luxury items, sin goods (cars, tobacco)
        </p>

        <div className="faq-section">
          <h3 className="info-title" style={{fontSize: '22px'}}>Frequently Asked Questions</h3>
          
          <div className="faq-item">
            <h4 className="faq-question">What is CGST and SGST?</h4>
            <p className="faq-answer">
              For intra-state transactions, GST is split equally into CGST (Central GST) and SGST (State GST). For inter-state, IGST (Integrated GST) applies.
            </p>
          </div>

          <div className="faq-item">
            <h4 className="faq-question">Who needs to register for GST?</h4>
            <p className="faq-answer">
              Businesses with annual turnover exceeding ₹40 lakhs (or ₹20 lakhs for special category states) must register for GST.
            </p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default GSTCalculator;

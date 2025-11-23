import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';

const DiscountCalculator = () => {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercent, setDiscountPercent] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (originalPrice && discountPercent) {
      const price = parseFloat(originalPrice);
      const discount = parseFloat(discountPercent);
      
      const discountAmount = (price * discount) / 100;
      const finalPrice = price - discountAmount;
      const savings = discountAmount;
      
      setResult({
        original: price.toFixed(2),
        discount: discountAmount.toFixed(2),
        final: finalPrice.toFixed(2),
        savings: savings.toFixed(2),
        percent: discount
      });
    }
  };

  return (
    <CalculatorLayout 
      title="Discount Calculator" 
      description="Calculate discounts and savings on your purchases"
      keywords="discount calculator, sale calculator, savings calculator, price calculator"
    >
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Original Price (₹)</label>
          <input
            type="number"
            className="input-field"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(e.target.value)}
            placeholder="Enter original price"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Discount (%)</label>
          <input
            type="number"
            step="0.1"
            className="input-field"
            value={discountPercent}
            onChange={(e) => setDiscountPercent(e.target.value)}
            placeholder="Enter discount %"
          />
        </div>
      </div>

      <button onClick={calculate} className="btn-gradient" style={{width: '100%', marginTop: '12px'}}>
        Calculate Discount
      </button>

      {result && (
        <div className="result-box">
          <h3 style={{fontSize: '24px', fontWeight: '700', marginBottom: '20px'}}>Discount Breakdown</h3>
          <div style={{display: 'grid', gap: '16px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '18px'}}>
              <span style={{opacity: 0.8}}>Original Price:</span>
              <span style={{fontWeight: '700'}}>₹{result.original}</span>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '18px'}}>
              <span style={{opacity: 0.8}}>Discount ({result.percent}%):</span>
              <span style={{fontWeight: '700', color: '#ef4444'}}>-₹{result.discount}</span>
            </div>
            <div style={{borderTop: '2px solid rgba(34, 211, 238, 0.3)', paddingTop: '16px'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '12px'}}>
                <span style={{fontSize: '20px', fontWeight: '700'}}>Final Price:</span>
                <span style={{fontWeight: '800', color: '#22d3ee', fontSize: '32px'}}>₹{result.final}</span>
              </div>
              <div style={{textAlign: 'center', padding: '12px', background: 'rgba(34, 211, 238, 0.1)', borderRadius: '8px'}}>
                <p style={{fontSize: '14px', opacity: 0.8, marginBottom: '4px'}}>You Save</p>
                <p style={{fontSize: '24px', fontWeight: '800', color: '#10b981'}}>₹{result.savings}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="info-section">
        <h2 className="info-title">How Discount Calculation Works</h2>
        <p className="info-text">
          A discount reduces the original price of a product or service by a certain percentage. 
          Understanding discount calculations helps you make informed purchasing decisions and identify real deals during sales.
        </p>

        <h3 className="info-title" style={{fontSize: '22px', marginTop: '32px'}}>Discount Formula</h3>
        <div className="formula-box">
          Discount Amount = (Original Price × Discount %) / 100<br/>
          Final Price = Original Price - Discount Amount
        </div>

        <p className="info-text" style={{marginTop: '24px'}}>
          <strong>Example:</strong> Item costs ₹1,000 with 20% discount:<br/>
          Discount Amount = ₹200<br/>
          Final Price = ₹800
        </p>

        <h3 className="info-title" style={{fontSize: '22px', marginTop: '32px'}}>Smart Shopping Tips</h3>
        <p className="info-text">
          • Compare discounts across different stores<br/>
          • Check if "sale prices" are genuinely lower<br/>
          • Consider additional coupons for extra savings<br/>
          • Calculate price per unit for bulk discounts<br/>
          • Watch out for artificial price inflation before sales
        </p>

        <div className="faq-section">
          <h3 className="info-title" style={{fontSize: '22px'}}>Frequently Asked Questions</h3>
          
          <div className="faq-item">
            <h4 className="faq-question">Can I apply multiple discounts?</h4>
            <p className="faq-answer">
              When applying multiple discounts, they're usually applied sequentially, not added together. A 20% + 10% discount is not 30% off.
            </p>
          </div>

          <div className="faq-item">
            <h4 className="faq-question">What's the difference between discount and cashback?</h4>
            <p className="faq-answer">
              Discount reduces the price you pay upfront, while cashback returns money to you after the purchase is complete.
            </p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default DiscountCalculator;

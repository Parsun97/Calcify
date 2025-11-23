import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercent, setTipPercent] = useState('15');
  const [people, setPeople] = useState('1');
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (billAmount) {
      const bill = parseFloat(billAmount);
      const tip = parseFloat(tipPercent);
      const numPeople = parseInt(people);
      
      const tipAmount = (bill * tip) / 100;
      const total = bill + tipAmount;
      const perPerson = total / numPeople;
      const tipPerPerson = tipAmount / numPeople;
      
      setResult({
        billAmount: bill.toFixed(2),
        tipAmount: tipAmount.toFixed(2),
        total: total.toFixed(2),
        perPerson: perPerson.toFixed(2),
        tipPerPerson: tipPerPerson.toFixed(2)
      });
    }
  };

  return (
    <CalculatorLayout 
      title="Tip Calculator" 
      description="Calculate tips and split bills easily"
      keywords="tip calculator, bill splitter, gratuity calculator, restaurant tip"
    >
      <div className="form-group">
        <label className="form-label">Bill Amount (₹)</label>
        <input
          type="number"
          className="input-field"
          value={billAmount}
          onChange={(e) => setBillAmount(e.target.value)}
          placeholder="Enter bill amount"
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Tip Percentage (%)</label>
          <select className="input-field" value={tipPercent} onChange={(e) => setTipPercent(e.target.value)}>
            <option value="10">10% - OK Service</option>
            <option value="15">15% - Good Service</option>
            <option value="18">18% - Great Service</option>
            <option value="20">20% - Excellent Service</option>
            <option value="25">25% - Outstanding Service</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Number of People</label>
          <input
            type="number"
            min="1"
            className="input-field"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            placeholder="Split between"
          />
        </div>
      </div>

      <button onClick={calculate} className="btn-gradient" style={{width: '100%', marginTop: '12px'}}>
        Calculate Tip
      </button>

      {result && (
        <div className="result-box">
          <h3 style={{fontSize: '24px', fontWeight: '700', marginBottom: '20px'}}>Bill Summary</h3>
          <div style={{display: 'grid', gap: '16px'}}>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', paddingBottom: '16px', borderBottom: '1px solid rgba(34, 211, 238, 0.2)'}}>
              <div>
                <p style={{fontSize: '14px', opacity: 0.8, marginBottom: '4px'}}>Bill Amount</p>
                <p style={{fontSize: '24px', fontWeight: '700'}}>₹{result.billAmount}</p>
              </div>
              <div>
                <p style={{fontSize: '14px', opacity: 0.8, marginBottom: '4px'}}>Tip Amount</p>
                <p style={{fontSize: '24px', fontWeight: '700', color: '#22d3ee'}}>₹{result.tipAmount}</p>
              </div>
            </div>
            <div style={{padding: '16px', background: 'rgba(34, 211, 238, 0.1)', borderRadius: '12px', textAlign: 'center'}}>
              <p style={{fontSize: '14px', opacity: 0.8, marginBottom: '8px'}}>Total Bill</p>
              <p style={{fontSize: '40px', fontWeight: '800', color: '#22d3ee'}}>₹{result.total}</p>
            </div>
            {parseInt(people) > 1 && (
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', paddingTop: '16px', borderTop: '1px solid rgba(34, 211, 238, 0.2)'}}>
                <div style={{textAlign: 'center'}}>
                  <p style={{fontSize: '14px', opacity: 0.8, marginBottom: '8px'}}>Per Person</p>
                  <p style={{fontSize: '28px', fontWeight: '700', color: '#22d3ee'}}>₹{result.perPerson}</p>
                </div>
                <div style={{textAlign: 'center'}}>
                  <p style={{fontSize: '14px', opacity: 0.8, marginBottom: '8px'}}>Tip Per Person</p>
                  <p style={{fontSize: '28px', fontWeight: '700'}}>₹{result.tipPerPerson}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="info-section">
        <h2 className="info-title">Tipping Guide</h2>
        <p className="info-text">
          Tipping is a way to show appreciation for good service. While tipping customs vary by country, 
          it's generally expected in restaurants, hotels, and service industries.
        </p>

        <h3 className="info-title" style={{fontSize: '22px', marginTop: '32px'}}>Standard Tipping Guidelines</h3>
        <p className="info-text">
          • <strong>Restaurants:</strong> 10-20% of the bill<br/>
          • <strong>Delivery:</strong> 10-15% or minimum ₹40-50<br/>
          • <strong>Taxi/Uber:</strong> 10-15% of fare<br/>
          • <strong>Hotels:</strong> ₹50-100 per service<br/>
          • <strong>Hair Salon:</strong> 10-20% of service cost
        </p>

        <h3 className="info-title" style={{fontSize: '22px', marginTop: '32px'}}>When to Tip More or Less</h3>
        <p className="info-text">
          <strong>Tip More (20%+) When:</strong><br/>
          • Service was exceptional<br/>
          • Your order was complicated<br/>
          • You're at a high-end establishment<br/>
          • During holidays<br/><br/>
          <strong>Tip Less (10% or standard) When:</strong><br/>
          • Service was average<br/>
          • There were issues with the service<br/>
          • Service charge already included
        </p>

        <div className="faq-section">
          <h3 className="info-title" style={{fontSize: '22px'}}>Frequently Asked Questions</h3>
          
          <div className="faq-item">
            <h4 className="faq-question">Is tipping mandatory in India?</h4>
            <p className="faq-answer">
              Tipping is not legally mandatory but is appreciated and expected in restaurants and service industries, typically 10% of the bill.
            </p>
          </div>

          <div className="faq-item">
            <h4 className="faq-question">Should I tip on the total bill including tax?</h4>
            <p className="faq-answer">
              It's common to calculate tip on the pre-tax amount, but many people tip on the total including tax for simplicity.
            </p>
          </div>

          <div className="faq-item">
            <h4 className="faq-question">What if service charge is included?</h4>
            <p className="faq-answer">
              If a service charge is already added to your bill, additional tipping is optional but appreciated for excellent service.
            </p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default TipCalculator;

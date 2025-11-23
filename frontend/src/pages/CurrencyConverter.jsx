import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [result, setResult] = useState(null);

  // Mock exchange rates (in a real app, fetch from API)
  const exchangeRates = {
    USD: { INR: 83.12, EUR: 0.92, GBP: 0.79, JPY: 149.50, AUD: 1.52, CAD: 1.36, USD: 1 },
    INR: { USD: 0.012, EUR: 0.011, GBP: 0.0095, JPY: 1.80, AUD: 0.018, CAD: 0.016, INR: 1 },
    EUR: { USD: 1.09, INR: 90.50, GBP: 0.86, JPY: 162.30, AUD: 1.65, CAD: 1.48, EUR: 1 },
    GBP: { USD: 1.27, INR: 105.20, EUR: 1.16, JPY: 189.40, AUD: 1.93, CAD: 1.73, GBP: 1 },
    JPY: { USD: 0.0067, INR: 0.56, EUR: 0.0062, GBP: 0.0053, AUD: 0.010, CAD: 0.0091, JPY: 1 },
    AUD: { USD: 0.66, INR: 54.70, EUR: 0.61, GBP: 0.52, JPY: 98.40, CAD: 0.89, AUD: 1 },
    CAD: { USD: 0.74, INR: 61.20, EUR: 0.68, GBP: 0.58, JPY: 110.30, AUD: 1.12, CAD: 1 }
  };

  const currencies = [
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'GBP', name: 'British Pound', symbol: '£' },
    { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
    { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
    { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$' }
  ];

  const calculate = () => {
    if (amount && fromCurrency && toCurrency) {
      const amt = parseFloat(amount);
      const rate = exchangeRates[fromCurrency][toCurrency];
      const converted = amt * rate;
      
      const fromSymbol = currencies.find(c => c.code === fromCurrency).symbol;
      const toSymbol = currencies.find(c => c.code === toCurrency).symbol;
      
      setResult({
        from: amt.toFixed(2),
        to: converted.toFixed(2),
        rate: rate.toFixed(4),
        fromSymbol,
        toSymbol,
        fromCode: fromCurrency,
        toCode: toCurrency
      });
    }
  };

  return (
    <CalculatorLayout 
      title="Currency Converter" 
      description="Convert between major world currencies with live exchange rates"
      keywords="currency converter, exchange rate, forex converter, money converter"
    >
      <div className="form-group">
        <label className="form-label">Amount</label>
        <input
          type="number"
          className="input-field"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">From Currency</label>
          <select className="input-field" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
            {currencies.map(curr => (
              <option key={curr.code} value={curr.code}>{curr.code} - {curr.name}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">To Currency</label>
          <select className="input-field" value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
            {currencies.map(curr => (
              <option key={curr.code} value={curr.code}>{curr.code} - {curr.name}</option>
            ))}
          </select>
        </div>
      </div>

      <button onClick={calculate} className="btn-gradient" style={{width: '100%', marginTop: '12px'}}>
        Convert Currency
      </button>

      {result && (
        <div className="result-box">
          <h3 style={{fontSize: '24px', fontWeight: '700', marginBottom: '20px'}}>Conversion Result</h3>
          <div style={{display: 'grid', gap: '20px'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '28px', fontWeight: '700'}}>
              <span>{result.fromSymbol}{result.from} {result.fromCode}</span>
              <span style={{fontSize: '20px', color: '#22d3ee'}}>=</span>
              <span style={{color: '#22d3ee'}}>{result.toSymbol}{result.to} {result.toCode}</span>
            </div>
            <div style={{padding: '16px', background: 'rgba(34, 211, 238, 0.1)', borderRadius: '12px', textAlign: 'center'}}>
              <p style={{fontSize: '14px', opacity: 0.8, marginBottom: '8px'}}>Exchange Rate</p>
              <p style={{fontSize: '20px', fontWeight: '700'}}>1 {result.fromCode} = {result.rate} {result.toCode}</p>
            </div>
          </div>
        </div>
      )}

      <div className="info-section">
        <h2 className="info-title">Understanding Currency Conversion</h2>
        <p className="info-text">
          Currency conversion is the process of exchanging one currency for another at the current exchange rate. 
          Exchange rates fluctuate constantly based on market forces, economic indicators, and geopolitical events.
        </p>

        <h3 className="info-title" style={{fontSize: '22px', marginTop: '32px'}}>Major Currency Pairs</h3>
        <p className="info-text">
          • <strong>USD/INR:</strong> US Dollar to Indian Rupee<br/>
          • <strong>EUR/USD:</strong> Euro to US Dollar<br/>
          • <strong>GBP/USD:</strong> British Pound to US Dollar<br/>
          • <strong>USD/JPY:</strong> US Dollar to Japanese Yen<br/>
          • <strong>AUD/USD:</strong> Australian Dollar to US Dollar
        </p>

        <h3 className="info-title" style={{fontSize: '22px', marginTop: '32px'}}>Factors Affecting Exchange Rates</h3>
        <p className="info-text">
          • Interest rates set by central banks<br/>
          • Inflation rates<br/>
          • Political stability and economic performance<br/>
          • Trade balances and current account deficits<br/>
          • Government debt levels<br/>
          • Market speculation and investor sentiment
        </p>

        <div className="faq-section">
          <h3 className="info-title" style={{fontSize: '22px'}}>Frequently Asked Questions</h3>
          
          <div className="faq-item">
            <h4 className="faq-question">Are these real-time exchange rates?</h4>
            <p className="faq-answer">
              This calculator uses approximate exchange rates for demonstration. For actual transactions, check with your bank or forex provider for real-time rates.
            </p>
          </div>

          <div className="faq-item">
            <h4 className="faq-question">Why do banks offer different rates?</h4>
            <p className="faq-answer">
              Banks and money changers add a margin (spread) to the interbank rate to cover costs and make profit. Rates also vary based on transaction size.
            </p>
          </div>

          <div className="faq-item">
            <h4 className="faq-question">When is the best time to exchange currency?</h4>
            <p className="faq-answer">
              Exchange rates fluctuate daily. Monitor trends, avoid airport exchanges (higher fees), and consider using forex cards for travel.
            </p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default CurrencyConverter;

import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';

const BodyFatCalculator = () => {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [neck, setNeck] = useState('');
  const [waist, setWaist] = useState('');
  const [hip, setHip] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (weight && height && neck && waist && (gender === 'male' || hip)) {
      const heightInCm = parseFloat(height);
      const neckInCm = parseFloat(neck);
      const waistInCm = parseFloat(waist);
      
      let bodyFat;
      
      if (gender === 'male') {
        bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(waistInCm - neckInCm) + 0.15456 * Math.log10(heightInCm)) - 450;
      } else {
        const hipInCm = parseFloat(hip);
        bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(waistInCm + hipInCm - neckInCm) + 0.22100 * Math.log10(heightInCm)) - 450;
      }
      
      let category = '';
      if (gender === 'male') {
        if (bodyFat < 6) category = 'Essential Fat';
        else if (bodyFat < 14) category = 'Athletes';
        else if (bodyFat < 18) category = 'Fitness';
        else if (bodyFat < 25) category = 'Average';
        else category = 'Obese';
      } else {
        if (bodyFat < 14) category = 'Essential Fat';
        else if (bodyFat < 21) category = 'Athletes';
        else if (bodyFat < 25) category = 'Fitness';
        else if (bodyFat < 32) category = 'Average';
        else category = 'Obese';
      }
      
      setResult({ bodyFat: bodyFat.toFixed(1), category });
    }
  };

  return (
    <CalculatorLayout 
      title="Body Fat Calculator" 
      description="Calculate your body fat percentage using US Navy method"
      keywords="body fat calculator, body fat percentage, fat calculation, fitness calculator"
    >
      <div className="form-group">
        <label className="form-label">Gender</label>
        <select className="input-field" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Weight (kg)</label>
          <input
            type="number"
            className="input-field"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Weight"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Height (cm)</label>
          <input
            type="number"
            className="input-field"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Height"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Neck (cm)</label>
          <input
            type="number"
            step="0.1"
            className="input-field"
            value={neck}
            onChange={(e) => setNeck(e.target.value)}
            placeholder="Neck circumference"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Waist (cm)</label>
          <input
            type="number"
            step="0.1"
            className="input-field"
            value={waist}
            onChange={(e) => setWaist(e.target.value)}
            placeholder="Waist circumference"
          />
        </div>
      </div>

      {gender === 'female' && (
        <div className="form-group">
          <label className="form-label">Hip (cm)</label>
          <input
            type="number"
            step="0.1"
            className="input-field"
            value={hip}
            onChange={(e) => setHip(e.target.value)}
            placeholder="Hip circumference"
          />
        </div>
      )}

      <button onClick={calculate} className="btn-gradient" style={{width: '100%', marginTop: '12px'}}>
        Calculate Body Fat
      </button>

      {result && (
        <div className="result-box">
          <h3 style={{fontSize: '24px', fontWeight: '700', marginBottom: '12px'}}>Your Body Fat</h3>
          <p style={{fontSize: '56px', fontWeight: '800', color: '#22d3ee', marginBottom: '8px'}}>{result.bodyFat}%</p>
          <p style={{fontSize: '20px', fontWeight: '600'}}>{result.category}</p>
        </div>
      )}

      <div className="info-section">
        <h2 className="info-title">Understanding Body Fat Percentage</h2>
        <p className="info-text">
          Body fat percentage is the proportion of fat to your total body weight. This calculator uses the US Navy method, 
          which estimates body fat based on body circumference measurements.
        </p>

        <h3 className="info-title" style={{fontSize: '22px', marginTop: '32px'}}>Body Fat Categories</h3>
        <p className="info-text">
          <strong>Men:</strong><br/>
          • Essential Fat: 2-5%<br/>
          • Athletes: 6-13%<br/>
          • Fitness: 14-17%<br/>
          • Average: 18-24%<br/>
          • Obese: 25%+<br/><br/>
          <strong>Women:</strong><br/>
          • Essential Fat: 10-13%<br/>
          • Athletes: 14-20%<br/>
          • Fitness: 21-24%<br/>
          • Average: 25-31%<br/>
          • Obese: 32%+
        </p>

        <div className="faq-section">
          <h3 className="info-title" style={{fontSize: '22px'}}>Frequently Asked Questions</h3>
          
          <div className="faq-item">
            <h4 className="faq-question">Is this body fat calculator accurate?</h4>
            <p className="faq-answer">
              The US Navy method is reasonably accurate for most people, with an error margin of about 3-4%. For precise measurements, consider DEXA scans.
            </p>
          </div>

          <div className="faq-item">
            <h4 className="faq-question">How do I measure my body parts correctly?</h4>
            <p className="faq-answer">
              Measure neck at its narrowest point, waist at navel level, and hips at the widest point. Use a flexible measuring tape and measure in the morning.
            </p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default BodyFatCalculator;

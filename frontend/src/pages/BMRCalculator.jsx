import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';

const BMRCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (weight && height && age) {
      let bmr;
      if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }
      setResult(Math.round(bmr));
    }
  };

  return (
    <CalculatorLayout 
      title="BMR Calculator" 
      description="Calculate your Basal Metabolic Rate - the calories you burn at rest"
      keywords="BMR calculator, basal metabolic rate, calorie calculator, metabolism"
    >
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Gender</label>
          <select className="input-field" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Age (years)</label>
          <input
            type="number"
            className="input-field"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter age"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Weight (kg)</label>
          <input
            type="number"
            className="input-field"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter weight"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Height (cm)</label>
          <input
            type="number"
            className="input-field"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter height"
          />
        </div>
      </div>

      <button onClick={calculate} className="btn-gradient" style={{width: '100%', marginTop: '12px'}}>
        Calculate BMR
      </button>

      {result && (
        <div className="result-box">
          <h3 style={{fontSize: '24px', fontWeight: '700', marginBottom: '12px'}}>Your BMR Result</h3>
          <p style={{fontSize: '48px', fontWeight: '800', color: '#22d3ee', marginBottom: '8px'}}>{result}</p>
          <p style={{fontSize: '16px', opacity: 0.8}}>calories per day</p>
          <p style={{marginTop: '16px', fontSize: '14px', opacity: 0.7}}>This is the number of calories your body burns at rest.</p>
        </div>
      )}

      <div className="info-section">
        <h2 className="info-title">What is BMR?</h2>
        <p className="info-text">
          Basal Metabolic Rate (BMR) is the number of calories your body needs to perform basic life-sustaining functions at rest. 
          This includes breathing, circulation, nutrient processing, and cell production.
        </p>

        <h3 className="info-title" style={{fontSize: '22px', marginTop: '32px'}}>BMR Formula (Mifflin-St Jeor)</h3>
        <div className="formula-box">
          Men: BMR = 10 × weight + 6.25 × height - 5 × age + 5<br/>
          Women: BMR = 10 × weight + 6.25 × height - 5 × age - 161
        </div>

        <div className="faq-section">
          <h3 className="info-title" style={{fontSize: '22px'}}>Frequently Asked Questions</h3>
          
          <div className="faq-item">
            <h4 className="faq-question">What's the difference between BMR and TDEE?</h4>
            <p className="faq-answer">
              BMR is calories burned at rest, while TDEE (Total Daily Energy Expenditure) includes all activities and exercise.
            </p>
          </div>

          <div className="faq-item">
            <h4 className="faq-question">How can I increase my BMR?</h4>
            <p className="faq-answer">
              Building muscle through strength training, eating enough protein, staying hydrated, and getting adequate sleep can help increase BMR.
            </p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default BMRCalculator;

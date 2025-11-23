import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      let category = '';
      
      if (bmi < 18.5) category = 'Underweight';
      else if (bmi < 25) category = 'Normal weight';
      else if (bmi < 30) category = 'Overweight';
      else category = 'Obese';
      
      setResult({ bmi, category });
    }
  };

  return (
    <CalculatorLayout 
      title="BMI Calculator" 
      description="Calculate your Body Mass Index (BMI) to assess if you're at a healthy weight"
      keywords="BMI calculator, body mass index, health calculator, weight calculator"
    >
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
        Calculate BMI
      </button>

      {result && (
        <div className="result-box">
          <h3 style={{fontSize: '24px', fontWeight: '700', marginBottom: '12px'}}>Your BMI Result</h3>
          <p style={{fontSize: '48px', fontWeight: '800', color: '#22d3ee', marginBottom: '12px'}}>{result.bmi}</p>
          <p style={{fontSize: '20px', fontWeight: '600'}}>{result.category}</p>
        </div>
      )}

      <div className="info-section">
        <h2 className="info-title">What is BMI?</h2>
        <p className="info-text">
          Body Mass Index (BMI) is a measure of body fat based on height and weight that applies to adult men and women. 
          It's a simple calculation that helps you understand if you're at a healthy weight for your height.
        </p>

        <h3 className="info-title" style={{fontSize: '22px', marginTop: '32px'}}>BMI Formula</h3>
        <div className="formula-box">
          BMI = Weight (kg) / [Height (m)]²
        </div>

        <h3 className="info-title" style={{fontSize: '22px', marginTop: '32px'}}>BMI Categories</h3>
        <p className="info-text">
          • Underweight: BMI less than 18.5<br/>
          • Normal weight: BMI 18.5-24.9<br/>
          • Overweight: BMI 25-29.9<br/>
          • Obese: BMI 30 or greater
        </p>

        <div className="faq-section">
          <h3 className="info-title" style={{fontSize: '22px'}}>Frequently Asked Questions</h3>
          
          <div className="faq-item">
            <h4 className="faq-question">Is BMI accurate for everyone?</h4>
            <p className="faq-answer">
              While BMI is a useful screening tool, it doesn't directly measure body fat. Athletes with high muscle mass may have a high BMI but low body fat.
            </p>
          </div>

          <div className="faq-item">
            <h4 className="faq-question">What is a healthy BMI range?</h4>
            <p className="faq-answer">
              A BMI between 18.5 and 24.9 is generally considered healthy for most adults.
            </p>
          </div>

          <div className="faq-item">
            <h4 className="faq-question">Should I lose weight if my BMI is high?</h4>
            <p className="faq-answer">
              If your BMI indicates you're overweight or obese, consult with a healthcare provider to discuss the best approach for you.
            </p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default BMICalculator;

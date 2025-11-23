import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';

const CalorieCalculator = () => {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activity, setActivity] = useState('1.375');
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (weight && height && age) {
      let bmr;
      if (gender === 'male') {
        bmr = 10 * parseFloat(weight) + 6.25 * parseFloat(height) - 5 * parseFloat(age) + 5;
      } else {
        bmr = 10 * parseFloat(weight) + 6.25 * parseFloat(height) - 5 * parseFloat(age) - 161;
      }
      
      const tdee = bmr * parseFloat(activity);
      const weightLoss = tdee - 500;
      const extremeLoss = tdee - 1000;
      const weightGain = tdee + 500;
      
      setResult({
        maintenance: Math.round(tdee),
        weightLoss: Math.round(weightLoss),
        extremeLoss: Math.round(extremeLoss),
        weightGain: Math.round(weightGain)
      });
    }
  };

  return (
    <CalculatorLayout 
      title="Calorie Calculator" 
      description="Calculate your daily calorie needs based on your goals"
      keywords="calorie calculator, TDEE calculator, daily calorie intake, weight loss calculator"
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
            placeholder="Age"
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

      <div className="form-group">
        <label className="form-label">Activity Level</label>
        <select className="input-field" value={activity} onChange={(e) => setActivity(e.target.value)}>
          <option value="1.2">Sedentary (little or no exercise)</option>
          <option value="1.375">Lightly active (1-3 days/week)</option>
          <option value="1.55">Moderately active (3-5 days/week)</option>
          <option value="1.725">Very active (6-7 days/week)</option>
          <option value="1.9">Super active (intense exercise daily)</option>
        </select>
      </div>

      <button onClick={calculate} className="btn-gradient" style={{width: '100%', marginTop: '12px'}}>
        Calculate Calories
      </button>

      {result && (
        <div className="result-box">
          <h3 style={{fontSize: '24px', fontWeight: '700', marginBottom: '20px'}}>Your Daily Calorie Needs</h3>
          <div style={{display: 'grid', gap: '16px'}}>
            <div style={{padding: '16px', background: 'rgba(34, 211, 238, 0.1)', borderRadius: '12px'}}>
              <p style={{fontSize: '14px', opacity: 0.8, marginBottom: '4px'}}>Maintenance (TDEE)</p>
              <p style={{fontSize: '32px', fontWeight: '800', color: '#22d3ee'}}>{result.maintenance} cal/day</p>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', fontSize: '14px'}}>
              <div style={{padding: '12px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px', textAlign: 'center'}}>
                <p style={{opacity: 0.8, marginBottom: '8px'}}>Extreme Loss</p>
                <p style={{fontSize: '18px', fontWeight: '700'}}>{result.extremeLoss}</p>
                <p style={{fontSize: '12px', opacity: 0.6, marginTop: '4px'}}>-1kg/week</p>
              </div>
              <div style={{padding: '12px', background: 'rgba(251, 146, 60, 0.1)', borderRadius: '8px', textAlign: 'center'}}>
                <p style={{opacity: 0.8, marginBottom: '8px'}}>Weight Loss</p>
                <p style={{fontSize: '18px', fontWeight: '700'}}>{result.weightLoss}</p>
                <p style={{fontSize: '12px', opacity: 0.6, marginTop: '4px'}}>-0.5kg/week</p>
              </div>
              <div style={{padding: '12px', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '8px', textAlign: 'center'}}>
                <p style={{opacity: 0.8, marginBottom: '8px'}}>Weight Gain</p>
                <p style={{fontSize: '18px', fontWeight: '700'}}>{result.weightGain}</p>
                <p style={{fontSize: '12px', opacity: 0.6, marginTop: '4px'}}>+0.5kg/week</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="info-section">
        <h2 className="info-title">Understanding Calorie Needs</h2>
        <p className="info-text">
          Your Total Daily Energy Expenditure (TDEE) is the total number of calories you burn each day. 
          This includes your Basal Metabolic Rate (BMR) plus calories burned through activity.
        </p>

        <h3 className="info-title" style={{fontSize: '22px', marginTop: '32px'}}>Calorie Goals</h3>
        <p className="info-text">
          • <strong>Maintenance:</strong> Eat this amount to maintain current weight<br/>
          • <strong>Weight Loss:</strong> Create a 500-calorie deficit for gradual weight loss<br/>
          • <strong>Extreme Loss:</strong> 1000-calorie deficit (consult a doctor first)<br/>
          • <strong>Weight Gain:</strong> Add 500 calories for muscle building
        </p>

        <div className="faq-section">
          <h3 className="info-title" style={{fontSize: '22px'}}>Frequently Asked Questions</h3>
          
          <div className="faq-item">
            <h4 className="faq-question">Is a calorie deficit enough to lose weight?</h4>
            <p className="faq-answer">
              Yes, but quality matters too. Focus on nutrient-dense foods, adequate protein, and combine with exercise for best results.
            </p>
          </div>

          <div className="faq-item">
            <h4 className="faq-question">How accurate are calorie calculators?</h4>
            <p className="faq-answer">
              They provide estimates based on averages. Monitor your progress and adjust intake based on real-world results.
            </p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default CalorieCalculator;

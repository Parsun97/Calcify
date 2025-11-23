import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';

const PregnancyCalculator = () => {
  const [lastPeriod, setLastPeriod] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (lastPeriod) {
      const lmp = new Date(lastPeriod);
      const dueDate = new Date(lmp);
      dueDate.setDate(dueDate.getDate() + 280); // Add 280 days (40 weeks)
      
      const today = new Date();
      const weeksPregnant = Math.floor((today - lmp) / (1000 * 60 * 60 * 24 * 7));
      const daysIntoWeek = Math.floor(((today - lmp) / (1000 * 60 * 60 * 24)) % 7);
      const daysUntilDue = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));
      
      const trimester = weeksPregnant < 13 ? 'First' : weeksPregnant < 27 ? 'Second' : 'Third';
      
      setResult({
        dueDate: dueDate.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }),
        weeksPregnant,
        daysIntoWeek,
        daysUntilDue,
        trimester
      });
    }
  };

  return (
    <CalculatorLayout 
      title="Pregnancy Due Date Calculator" 
      description="Calculate your pregnancy due date and track your progress"
      keywords="pregnancy calculator, due date calculator, pregnancy weeks, conception calculator"
    >
      <div className="form-group">
        <label className="form-label">First Day of Last Period</label>
        <input
          type="date"
          className="input-field"
          value={lastPeriod}
          onChange={(e) => setLastPeriod(e.target.value)}
          max={new Date().toISOString().split('T')[0]}
        />
      </div>

      <button onClick={calculate} className="btn-gradient" style={{width: '100%', marginTop: '12px'}}>
        Calculate Due Date
      </button>

      {result && (
        <div className="result-box">
          <h3 style={{fontSize: '24px', fontWeight: '700', marginBottom: '20px'}}>Your Pregnancy Details</h3>
          <div style={{display: 'grid', gap: '20px'}}>
            <div style={{textAlign: 'center', padding: '20px', background: 'rgba(34, 211, 238, 0.1)', borderRadius: '12px'}}>
              <p style={{fontSize: '14px', opacity: 0.8, marginBottom: '8px'}}>Estimated Due Date</p>
              <p style={{fontSize: '28px', fontWeight: '800', color: '#22d3ee'}}>{result.dueDate}</p>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px'}}>
              <div style={{padding: '16px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px'}}>
                <p style={{fontSize: '14px', opacity: 0.8, marginBottom: '4px'}}>You are</p>
                <p style={{fontSize: '24px', fontWeight: '700', color: '#22d3ee'}}>
                  {result.weeksPregnant}w {result.daysIntoWeek}d
                </p>
              </div>
              <div style={{padding: '16px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px'}}>
                <p style={{fontSize: '14px', opacity: 0.8, marginBottom: '4px'}}>Days until due</p>
                <p style={{fontSize: '24px', fontWeight: '700', color: '#22d3ee'}}>{result.daysUntilDue}</p>
              </div>
            </div>
            <div style={{padding: '16px', background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.15) 0%, rgba(8, 145, 178, 0.15) 100%)', borderRadius: '8px', textAlign: 'center'}}>
              <p style={{fontSize: '16px', fontWeight: '700'}}>Current Trimester: {result.trimester}</p>
            </div>
          </div>
        </div>
      )}

      <div className="info-section">
        <h2 className="info-title">How is Due Date Calculated?</h2>
        <p className="info-text">
          The due date is calculated using Naegele's Rule, which adds 280 days (40 weeks) to the first day of your last menstrual period (LMP). 
          This assumes a regular 28-day cycle and ovulation on day 14.
        </p>

        <h3 className="info-title" style={{fontSize: '22px', marginTop: '32px'}}>Pregnancy Trimesters</h3>
        <p className="info-text">
          • <strong>First Trimester:</strong> Weeks 1-12<br/>
          • <strong>Second Trimester:</strong> Weeks 13-26<br/>
          • <strong>Third Trimester:</strong> Weeks 27-40
        </p>

        <h3 className="info-title" style={{fontSize: '22px', marginTop: '32px'}}>Important Milestones</h3>
        <p className="info-text">
          • Week 12: End of first trimester, reduced miscarriage risk<br/>
          • Week 20: Anatomy scan ultrasound<br/>
          • Week 28: Start of third trimester<br/>
          • Week 37: Full term pregnancy<br/>
          • Week 40: Estimated due date
        </p>

        <div className="faq-section">
          <h3 className="info-title" style={{fontSize: '22px'}}>Frequently Asked Questions</h3>
          
          <div className="faq-item">
            <h4 className="faq-question">How accurate is the due date?</h4>
            <p className="faq-answer">
              Only 5% of babies are born on their exact due date. Most are born within 2 weeks before or after.
            </p>
          </div>

          <div className="faq-item">
            <h4 className="faq-question">Can the due date change?</h4>
            <p className="faq-answer">
              Yes, an early ultrasound (before 13 weeks) is the most accurate way to date pregnancy and may adjust your due date.
            </p>
          </div>

          <div className="faq-item">
            <h4 className="faq-question">What if I don't remember my last period?</h4>
            <p className="faq-answer">
              Your doctor can estimate due date using ultrasound measurements, particularly in the first trimester.
            </p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default PregnancyCalculator;

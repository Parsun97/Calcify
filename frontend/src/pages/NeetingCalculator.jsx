import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';

const NettingCalculator = () => {
  const [inputs, setInputs] = useState({ 
    width: '', height: '', depth: '', meshSize: '25', // mm default
    ratio: '33.3', material: 'nylon' // % hanging ratio
  });
  const [result, setResult] = useState(null);

  const calculate = () => {
    const { width, height, depth, meshSize, ratio } = inputs;
    const w = parseFloat(width), h = parseFloat(height), d = parseFloat(depth);
    const ms = parseFloat(meshSize), r = parseFloat(ratio) / 100;
    
    if (!w || !h || !d || !ms) return;

    // Mesh drop calculation [web:33]
    const meshDeep = (d / (1 - r)) * 10; // meshes needed
    const totalMeshes = Math.ceil(meshDeep * (w * 39.37 / ms)); // 39.37 inches/m
    
    // Material quantities [web:32][web:35]
    const sqMeters = (w * h * meshDeep * ms / 1000).toFixed(2);
    const cableLength = (2 * (w + h) * 3.28 + d * 2).toFixed(0); // feet
    const fasteners = Math.ceil((w + h) * 3.28 * 2); // per perimeter
    
    setResult({ 
      sqMeters, totalMeshes: totalMeshes.toLocaleString(), 
      cableLength, fasteners, meshDeep: meshDeep.toFixed(1),
      sqYards: (sqMeters * 1.196).toFixed(2)
    });
  };

  return CalculatorLayout(
    { 
      title: 'Netting Calculator', 
      description: 'Calculate mesh material, cable, and fasteners for safety nets, screens & enclosures',
      keywords: 'netting calculator, safety net, rockfall mesh, sports netting, construction mesh'
    },
    
    // Inputs
    <div className="form-group">
      <label className="form-label">Width (meters)</label>
      <input type="number" className="input-field" step="0.1"
        value={inputs.width} onChange={e => setInputs({...inputs, width: e.target.value})} />
      
      <label className="form-label">Height/Drop (meters)</label>
      <input type="number" className="input-field" step="0.1"
        value={inputs.height} onChange={e => setInputs({...inputs, height: e.target.value})} />
      
      <label className="form-label">Depth/Reach (meters)</label>
      <input type="number" className="input-field" step="0.1"
        value={inputs.depth} onChange={e => setInputs({...inputs, depth: e.target.value})} />
      
      <label className="form-label">Mesh Size (mm)</label>
      <input type="number" className="input-field" step="1" min="10" max="100"
        value={inputs.meshSize} onChange={e => setInputs({...inputs, meshSize: e.target.value})} />
      
      <label className="form-label">Hanging Ratio (%)</label>
      <select className="input-field" value={inputs.ratio} 
        onChange={e => setInputs({...inputs, ratio: e.target.value})}>
        <option value="29.3">29.3% (Tight)</option>
        <option value="33.3">33.3% (Standard)</option>
        <option value="50">50% (Medium)</option>
        <option value="66.7">66.7% (Loose)</option>
      </select>
      
      <button onClick={calculate} className="btn-gradient" 
        style={{width: '100%', marginTop: '12px'}}>
        Calculate Netting Requirements
      </button>
    </div>,

    // Results
    result && <div className="result-box">
      <h3 style={{fontSize: '24px', fontWeight: '700', marginBottom: '20px'}}>
        Netting Specifications
      </h3>
      <div style={{fontSize: '48px', fontWeight: '800', color: '#22d3ee', marginBottom: '24px'}}>
        {result.sqMeters} m² Material
      </div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px'}}>
        <div>
          <p style={{opacity: 0.8, margin: 0}}>Total Meshes</p>
          <p style={{fontSize: '28px', fontWeight: '800'}}>{result.totalMeshes}</p>
        </div>
        <div>
          <p style={{opacity: 0.8, margin: 0}}>Cable (feet)</p>
          <p style={{fontSize: '28px', fontWeight: '800'}}>{result.cableLength}</p>
        </div>
        <div>
          <p style={{opacity: 0.8, margin: 0}}>Fasteners</p>
          <p style={{fontSize: '28px', fontWeight: '800'}}>{result.fasteners}</p>
        </div>
        <div>
          <p style={{opacity: 0.8, margin: 0}}>Sq Yards</p>
          <p style={{fontSize: '28px', fontWeight: '800'}}>{result.sqYards}</p>
        </div>
      </div>
      <div style={{marginTop: '24px', padding: '16px', background: 'rgba(34,211,238,0.1)', borderRadius: '8px'}}>
        <strong>Mesh Drop:</strong> {result.meshDeep} meshes @ {inputs.ratio}% ratio [web:33]
      </div>
    </div>,

    // Usage Guide
    <div className="info-section">
      <h2 className="info-title">Applications</h2>
      <ul className="info-text">
        <li>Rockfall protection & debris netting [web:32]</li>
        <li>Sports cages (baseball, soccer) [web:33]</li>
        <li>Bird control & safety barriers [web:35]</li>
        <li>Construction screen enclosures</li>
      </ul>
      
      <h3 style={{fontSize: '22px', marginTop: '32px'}}>Pro Tips</h3>
      <ul className="info-text">
        <li>Use 29.3% ratio for tight sports netting</li>
        <li>#36 knotless nylon for high-impact areas</li>
        <li>Add 10% extra cable for tensioning</li>
      </ul>
    </div>
  );
};

export default NettingCalculator;

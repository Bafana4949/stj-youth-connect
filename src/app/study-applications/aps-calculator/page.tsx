"use client";

import { useState } from "react";
import Link from "next/link";
import { calculateAps } from "@/lib/aps";
import { ApsSubject, ApsCalculationResult } from "@/lib/types";

export default function ApsCalculatorPage() {
  const [subjects, setSubjects] = useState<ApsSubject[]>([
    { id: "1", name: "English", percentage: 0, isLifeOrientation: false },
    { id: "2", name: "Mathematics or Mathematical Literacy", percentage: 0, isLifeOrientation: false },
    { id: "3", name: "Life Orientation", percentage: 0, isLifeOrientation: true },
    { id: "4", name: "Subject 4", percentage: 0, isLifeOrientation: false },
    { id: "5", name: "Subject 5", percentage: 0, isLifeOrientation: false },
    { id: "6", name: "Subject 6", percentage: 0, isLifeOrientation: false },
    { id: "7", name: "Subject 7", percentage: 0, isLifeOrientation: false },
  ]);

  const [result, setResult] = useState<ApsCalculationResult | null>(null);

  const updateSubjectName = (id: string, name: string) => {
    setSubjects(subjects.map(s => s.id === id ? { ...s, name } : s));
  };
  const updateSubjectPercentage = (id: string, percentage: number) => {
    setSubjects(subjects.map(s => s.id === id ? { ...s, percentage } : s));
  };
  const updateSubjectLO = (id: string, isLifeOrientation: boolean) => {
    setSubjects(subjects.map(s => s.id === id ? { ...s, isLifeOrientation } : s));
  };

  const addSubject = () => {
    setSubjects([...subjects, { id: Date.now().toString(), name: `Subject ${subjects.length + 1}`, percentage: 0 }]);
  };

  const removeSubject = (id: string) => {
    setSubjects(subjects.filter(s => s.id !== id));
  };

  const resetCalculator = () => {
    setSubjects(subjects.map(s => ({ ...s, percentage: 0 })));
    setResult(null);
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setResult(calculateAps(subjects));
  };

  return (
    <>
      <section className="page-hero" style={{ paddingBottom: "40px" }}>
        <Link href="/study-applications" className="text-link" style={{ marginBottom: "20px", display: "inline-block" }}>
          ← Back to Study Applications
        </Link>
        <span className="eyebrow" style={{ display: "block", marginBottom: "12px" }}>Calculator</span>
        <h1>Admission Point Score (APS)</h1>
        <p>
          Estimate your APS based on your Grade 12 marks. We use the standard 7-point scale and exclude Life Orientation from the final total by default.
        </p>
      </section>

      <section className="section">
        <div className="admin-layout" style={{ gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
          
          {/* LEFT: FORM */}
          <div className="form-panel">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <h2 style={{ margin: 0 }}>Your Subjects</h2>
              <button type="button" onClick={resetCalculator} className="btn" style={{ fontSize: "0.85rem", padding: "6px 12px", background: "#f2f4f7" }}>Reset</button>
            </div>
            
            <form onSubmit={handleCalculate} className="form-grid">
              <div style={{ display: "grid", gap: "16px" }}>
                {subjects.map((sub, index) => (
                  <div key={sub.id} style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap", background: "#f8f9fc", padding: "12px", borderRadius: "12px" }}>
                    <div style={{ flex: "1 1 200px" }}>
                      <label style={{ fontSize: "0.85rem", marginBottom: "4px" }}>Subject Name</label>
                      <input 
                        type="text" 
                        value={sub.name} 
                        onChange={(e) => updateSubjectName(sub.id, e.target.value)} 
                        required
                        style={{ padding: "8px 12px" }}
                      />
                    </div>
                    <div style={{ flex: "0 1 120px" }}>
                      <label style={{ fontSize: "0.85rem", marginBottom: "4px" }}>Percentage (%)</label>
                      <input 
                        type="number" 
                        min="0" 
                        max="100" 
                        value={sub.percentage || ""} 
                        onChange={(e) => updateSubjectPercentage(sub.id, Number(e.target.value))} 
                        required
                        style={{ padding: "8px 12px" }}
                      />
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "22px" }}>
                      <input 
                        type="checkbox" 
                        checked={sub.isLifeOrientation || false}
                        onChange={(e) => updateSubjectLO(sub.id, e.target.checked)}
                        style={{ width: "auto", margin: 0 }}
                      />
                      <label style={{ fontSize: "0.85rem", margin: 0, fontWeight: "normal" }}>Is LO?</label>
                    </div>
                    
                    {index > 2 && (
                      <button type="button" onClick={() => removeSubject(sub.id)} style={{ marginTop: "22px", background: "none", border: "none", color: "var(--danger)", cursor: "pointer", fontWeight: "bold" }}>
                        ✕
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
                <button type="button" onClick={addSubject} className="btn" style={{ background: "#e9ecff", color: "var(--blue-950)" }}>
                  + Add Subject
                </button>
                <button type="submit" className="btn btn-dark" style={{ flex: 1 }}>
                  Calculate APS
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT: RESULTS */}
          <div style={{ display: "grid", gap: "24px", alignContent: "start" }}>
            {result && (
              <div className="card" style={{ background: "var(--blue-950)", color: "white", borderColor: "var(--blue-950)" }}>
                <h3 style={{ color: "white", marginTop: 0 }}>Your Estimated APS</h3>
                <div style={{ fontSize: "4rem", fontWeight: "900", lineHeight: 1, margin: "16px 0", color: "var(--gold)" }}>
                  {result.totalAps} <span style={{ fontSize: "1.5rem", color: "rgba(255,255,255,0.6)" }}>/ {result.maxAps}</span>
                </div>
                
                <p style={{ background: "rgba(255,255,255,0.1)", padding: "16px", borderRadius: "12px", fontSize: "0.95rem" }}>
                  <strong>Example interpretation:</strong><br/>
                  Your estimated APS is {result.totalAps} out of {result.maxAps}. {result.guidanceBand} Please confirm requirements on the official university, TVET college, or college website.
                </p>

                {result.warnings.length > 0 && (
                  <div style={{ marginTop: "16px", background: "#fef3f2", color: "#b42318", padding: "12px", borderRadius: "8px", fontSize: "0.85rem" }}>
                    {result.warnings.map((w, i) => <div key={i}>• {w}</div>)}
                  </div>
                )}
                
                <div style={{ marginTop: "24px" }}>
                  <Link href="/ai-assistant" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                    Ask AI to explain my APS & career options
                  </Link>
                </div>
              </div>
            )}

            {result && (
              <div className="card">
                <h3>Calculation Breakdown</h3>
                
                <div style={{ marginBottom: "16px" }}>
                  <strong style={{ fontSize: "0.9rem", color: "var(--muted)", textTransform: "uppercase" }}>Subjects Used (Best {result.subjectsUsed.length})</strong>
                  <ul className="simple-list" style={{ marginTop: "8px" }}>
                    {result.subjectsUsed.map(s => (
                      <li key={s.id} style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>{s.name} ({s.percentage}%)</span>
                        <strong>{s.apsPoints} pts</strong>
                      </li>
                    ))}
                  </ul>
                </div>

                {result.subjectsExcluded.length > 0 && (
                  <div style={{ borderTop: "1px solid var(--line)", paddingTop: "16px" }}>
                    <strong style={{ fontSize: "0.9rem", color: "var(--muted)", textTransform: "uppercase" }}>Excluded Subjects</strong>
                    <ul className="simple-list" style={{ marginTop: "8px" }}>
                      {result.subjectsExcluded.map(s => (
                        <li key={s.id} style={{ display: "flex", justifyContent: "space-between", color: "var(--muted)" }}>
                          <span>{s.name} ({s.percentage}%) {s.isLifeOrientation ? "(LO)" : ""}</span>
                          <span>{s.apsPoints} pts</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            <div className="card" style={{ background: "#fffbfa", borderColor: "#f9d0c4" }}>
              <h3 style={{ color: "#b54708", marginTop: 0 }}>⚠️ Compulsory Subject Warning</h3>
              <p style={{ fontSize: "0.9rem", color: "#b54708", marginBottom: "12px" }}>
                This APS Calculator provides an estimate only. Universities, TVET colleges, private colleges, and specific courses may use different APS rules or additional subject requirements.
              </p>
              <ul className="simple-list" style={{ fontSize: "0.85rem", color: "#b54708" }}>
                <li>• <strong>Engineering</strong> may require Mathematics and Physical Sciences.</li>
                <li>• <strong>Health Sciences</strong> may require Mathematics, Life Sciences, and Physical Sciences.</li>
                <li>• <strong>Commerce</strong> may require Mathematics or Mathematical Literacy depending on the course.</li>
                <li>• APS alone is not enough. Always confirm the final requirements on the official institution website.</li>
              </ul>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}

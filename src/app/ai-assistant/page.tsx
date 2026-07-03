import { aiPrompts } from "@/lib/mock-data";

export default function AiAssistantPage() {
  return (
    <>
      <section className="page-hero" style={{ background: "linear-gradient(135deg, #11106f, #211fa2)", color: "white" }}>
        <span className="eyebrow" style={{ background: "rgba(255,255,255,0.2)", color: "white" }}>Artificial Intelligence</span>
        <h1 style={{ color: "white" }}>Your Personal Career Assistant.</h1>
        <p style={{ color: "rgba(255,255,255,0.8)" }}>
          We are building an AI-powered assistant to help you with career choices, CV reviews, and understanding complex application processes.
        </p>
      </section>

      <section className="section">
        <div className="grid-2">
          <div className="form-panel">
            <h2>How it will help learners</h2>
            <ul className="check-list" style={{ marginTop: "16px" }}>
              <li>Career guidance quiz based on your subjects.</li>
              <li>APS explanation and study route suggestions.</li>
              <li>Motivation letter helper for bursary applications.</li>
              <li>Guidance on gathering application documents.</li>
            </ul>
            
            <h2 style={{ marginTop: "32px" }}>How it will help job seekers</h2>
            <ul className="check-list" style={{ marginTop: "16px" }}>
              <li>Automated CV review and formatting tips.</li>
              <li>Cover letter generation tailored to specific job posts.</li>
              <li>Interview preparation questions and answers.</li>
              <li>Job scam checker to verify suspicious postings.</li>
            </ul>
          </div>
          
          <div className="form-panel" style={{ background: "#f8f9fc" }}>
            <h3>Try a Prompt (Mock Preview)</h3>
            <div className="ai-chat" style={{ marginTop: "24px" }}>
              <div className="chat-bubble chat-user">
                Can you review my CV for a retail assistant role?
              </div>
              <div className="chat-bubble chat-ai">
                <strong>St.J Assistant:</strong> I&apos;d be happy to help! For a retail assistant role, make sure you highlight any customer service experience, communication skills, and reliability. Please paste your CV text below and I&apos;ll give you specific feedback.
              </div>
            </div>
            
            <div style={{ marginTop: "32px" }}>
              <strong>Suggested prompts:</strong>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "12px" }}>
                {aiPrompts.map((prompt, idx) => (
                  <span key={idx} className="pill" style={{ cursor: "pointer", fontSize: "0.8rem" }}>{prompt}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="hero-panel" style={{ background: "#fffbfa", borderColor: "#f9d0c4" }}>
          <h3 style={{ color: "#b54708", marginTop: 0 }}>⚠️ Important Notice on AI</h3>
          <ul className="simple-list" style={{ color: "#b54708" }}>
            <li>• AI gives guidance only and may occasionally make mistakes.</li>
            <li>• AI does not guarantee university acceptance or employment.</li>
            <li>• Always confirm requirements on the official institution or company websites.</li>
            <li>• Do not share sensitive documents (like your ID number or banking details) with the AI.</li>
          </ul>
        </div>
      </section>
    </>
  );
}

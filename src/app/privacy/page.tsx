export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Trust & Safety</span>
        <h1>Privacy and Consent.</h1>
        <p>
          Your privacy is our priority. Read how we protect your data and ensure a safe platform for our community.
        </p>
      </section>

      <section className="section">
        <div className="form-panel" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2>Data Protection (POPIA)</h2>
          <p style={{ marginBottom: "16px" }}>
            We comply with the Protection of Personal Information Act (POPIA). Any information you share with us is used solely for the purpose of assisting you with study applications, job opportunities, and platform administration.
          </p>
          
          <h3 style={{ marginTop: "32px" }}>Private Document Storage</h3>
          <p style={{ marginBottom: "16px" }}>
            When you upload sensitive documents (such as your ID or Matric results), they are securely stored. Only authorized administrators and your assigned volunteer can access these documents, and only to assist you with your applications.
          </p>
          
          <h3 style={{ marginTop: "32px" }}>Third-Party Passwords</h3>
          <div style={{ background: "#fef3f2", borderLeft: "4px solid #b42318", padding: "16px", borderRadius: "8px", marginTop: "12px", color: "#b42318" }}>
            <strong>St.J Youth Connect will NEVER ask for your passwords.</strong><br/>
            We will never ask you for your login details for NSFAS, university portals, personal email accounts, or SAYouth. If anyone on the platform asks for this information, please report them immediately.
          </div>
          
          <h3 style={{ marginTop: "32px" }}>Your Rights</h3>
          <ul className="simple-list">
            <li>• You have the right to request access to the data we hold about you.</li>
            <li>• You can request the deletion of your account and all associated documents at any time.</li>
            <li>• You can revoke consent for volunteers to assist with your applications.</li>
          </ul>
        </div>
      </section>
    </>
  );
}

"use client";

export default function SupportUsPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Sponsors & Partners</span>
        <h1>Support the Youth Mission.</h1>
        <p>
          We are actively seeking sponsors and partners to help sustain and grow this platform. Your support directly impacts young lives.
        </p>
      </section>

      <section className="section">
        <div className="grid-2">
          <div>
            <h2>How You Can Help</h2>
            <p style={{ marginBottom: "20px" }}>
              Our platform relies on the generosity of sponsors to provide essential services to learners and job seekers. We need assistance with:
            </p>
            <ul className="check-list">
              <li>Hosting costs and domain name registration.</li>
              <li>Data support for volunteers and learners.</li>
              <li>Printing services for CVs and application documents.</li>
              <li>Laptops and devices for youth workshops.</li>
              <li>Transport for volunteers assisting in communities.</li>
              <li>Stationery and food for educational events.</li>
              <li>Mentorship and internship/job opportunities.</li>
              <li>API costs for our AI career assistant.</li>
            </ul>
          </div>

          <div className="form-panel">
            <h3>Sponsor Enquiry Form</h3>
            <p style={{ marginBottom: "20px", fontSize: "0.9rem", color: "var(--muted)" }}>
              Leave your details and our team will contact you to discuss partnership opportunities.
            </p>
            <form className="form-grid" onSubmit={(e) => e.preventDefault()}>
              <label>
                Full Name
                <input type="text" placeholder="e.g. Jane Doe" required />
              </label>
              <label>
                Organization / Company Name
                <input type="text" placeholder="e.g. Tech for Good NGO" required />
              </label>
              <label>
                Email Address
                <input type="email" placeholder="jane@example.com" required />
              </label>
              <label>
                Phone Number
                <input type="tel" placeholder="082 000 0000" required />
              </label>
              <label>
                Type of Support
                <select required>
                  <option value="">Select support type...</option>
                  <option value="financial">Financial Contribution</option>
                  <option value="equipment">Equipment (Laptops, Devices)</option>
                  <option value="services">Services (Printing, Hosting, Data)</option>
                  <option value="opportunities">Job / Internship Opportunities</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <label>
                Message
                <textarea placeholder="How would you like to partner with us?" required></textarea>
              </label>
              <button type="button" className="btn btn-dark" style={{ marginTop: "10px" }}>
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

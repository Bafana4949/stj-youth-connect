import { PageHero } from "@/components/PageHero";
import { StatusBadge } from "@/components/StatusBadge";
import { learnerCases } from "@/lib/data";

const checklist = [
  "Create learner profile",
  "Capture subjects and marks for APS guidance",
  "Upload ID document",
  "Upload Grade 11 or Matric results",
  "Choose university, TVET, college, or learnership route",
  "Check NSFAS or funding guidance",
  "Submit application on official portal",
  "Capture reference number",
  "Track application outcome"
];

export default function StudyPage() {
  return (
    <>
      <PageHero
        eyebrow="Study application support"
        title="Help Matric learners apply with confidence."
        description="Learners can create profiles, upload documents, complete checklists, request volunteer support, and receive guidance for university, TVET, college, NSFAS, and career choices."
      />

      <section className="section">
        <div className="grid-2">
          <article className="form-panel">
            <span className="eyebrow">Learner intake</span>
            <h2>Prototype learner request form</h2>
            <div className="form-grid">
              <label>
                Full name
                <input placeholder="e.g. Nomsa Mokoena" />
              </label>
              <label>
                Province
                <select defaultValue="">
                  <option value="" disabled>
                    Select province
                  </option>
                  <option>Mpumalanga</option>
                  <option>Gauteng</option>
                  <option>Limpopo</option>
                  <option>KwaZulu-Natal</option>
                  <option>Eastern Cape</option>
                </select>
              </label>
              <label>
                Matric year
                <input placeholder="2026" />
              </label>
              <label>
                What help do you need?
                <textarea placeholder="I need help choosing courses and checking documents..." />
              </label>
              <button className="btn btn-dark" type="button">
                Request support
              </button>
            </div>
          </article>

          <article className="card">
            <span className="eyebrow">Checklist</span>
            <h2>Application progress checklist</h2>
            <ul className="check-list">
              {checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Volunteer dashboard preview</span>
            <h2>Support cases must be assigned before volunteers can view learner documents.</h2>
          </div>
          <p>
            This protects learners' personal information. Volunteers should only see cases assigned to them by an admin.
          </p>
        </div>
        <div className="table-like">
          {learnerCases.map((learnerCase) => {
            const width = `${Math.round((learnerCase.checklistComplete / learnerCase.checklistTotal) * 100)}%`;
            return (
              <article className="table-row" key={learnerCase.id}>
                <div>
                  <strong>{learnerCase.learnerName}</strong>
                  <div className="meta-row">
                    <span>{learnerCase.province}</span>
                    <span>Matric {learnerCase.matricYear}</span>
                  </div>
                </div>
                <span>Volunteer: {learnerCase.assignedVolunteer}</span>
                <div>
                  <span>
                    {learnerCase.checklistComplete}/{learnerCase.checklistTotal} complete
                  </span>
                  <div className="progress-bar" aria-label="Checklist progress">
                    <span style={{ width }} />
                  </div>
                </div>
                <StatusBadge label={learnerCase.status} />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

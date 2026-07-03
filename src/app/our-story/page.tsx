import Link from "next/link";

export default function OurStoryPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Our Story</span>
        <h1>From a TikTok Live to a Community Movement.</h1>
        <p>
          Discover how St.J Youth Connect was born out of a simple conversation among youth members of the St Johns Apostolic Faith Mission Church.
        </p>
      </section>
      
      <section className="section">
        <div className="grid-2">
          <article className="card">
            <h3>The Spark</h3>
            <p>
              The idea originated during a TikTok Live discussion. Youth members of the St Johns Apostolic Faith Mission Church were talking about the challenges young people face in our communities.
            </p>
            <p>
              We realized that many Matric learners struggle with university and TVET college applications, not because they lack potential, but because they lack guidance and access to information.
            </p>
          </article>
          <article className="card">
            <h3>Expanding the Vision</h3>
            <p>
              The conversation didn&apos;t stop at education. We recognized that unemployed youth also need support to find trusted job opportunities, write professional CVs, and prepare for interviews.
            </p>
            <p>
              By combining technology, our faith-based commitment to service, and the power of youth teamwork, we decided to build a platform that bridges these gaps.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="hero-panel" style={{ textAlign: "center" }}>
          <h2>Join the Movement</h2>
          <p style={{ maxWidth: "600px", margin: "0 auto 24px" }}>
            Whether you are a learner needing help, a volunteer willing to guide others, or a sponsor looking to make an impact, there is a place for you here.
          </p>
          <Link href="/support-us" className="btn btn-primary">
            Become a Sponsor
          </Link>
        </div>
      </section>
    </>
  );
}

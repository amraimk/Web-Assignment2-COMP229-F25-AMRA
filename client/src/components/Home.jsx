export default function Home() {
  return (
    <>
      <section className="home">
        <div className="home-content">

          {/* --- Intro Section --- */}
          <div className="intro">
            <h1>Hello, I’m Amra.</h1>
            <p className="tagline">
              <strong>Software Engineer & Data Analyst</strong> dedicated to creating
              efficient, reliable, and future-ready solutions.
            </p>
          </div>

          {/* --- Welcome Text --- */}
          <div className="home-welcome-text">
            <p>
              Welcome to my portfolio! Explore my projects, education, and services, and learn more
              about my work and expertise.
            </p>
            <p>
              My mission is to explore and leverage the power of data. I love working with databases,
              analyzing complex datasets, and creating solutions that transform information into impact.
            </p>

            <a href="/about" className="btn-about-me">Learn More About Me</a>
          </div>

          {/* --- Skills / Highlights Section --- */}
          <section className="highlights">
            <div className="highlight-card">
              <span className="icon">💻</span>
              <h3>Software Engineering</h3>
              <p>Building scalable, efficient, and modern applications.</p>
            </div>

            <div className="highlight-card">
              <span className="icon">📊</span>
              <h3>Data Analytics</h3>
              <p>Turning raw data into valuable insights that drive decisions.</p>
            </div>

            <div className="highlight-card">
              <span className="icon">🗄️</span>
              <h3>Database Design</h3>
              <p>Designing and managing robust and efficient database systems.</p>
            </div>

            <div className="highlight-card">
              <span className="icon">🛠️</span>
              <h3>System Design</h3>
              <p>Creating effective software architectures and system solutions.</p>
            </div>
          </section>

        </div>
      </section>
    </>
  );
}

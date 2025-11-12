import './Page.css'

function Home() {
  return (
    <div className="page">
      <div className="photo-container">
        {/* Option 1: Using public folder (recommended) */}
        {/* Place your photo in: public/images/your-photo.jpg */}
        <div className="photo-placeholder">
          <img src="/images/me.png" alt="Christian Giovannetti" />
        </div>
        
       
      </div>

      <header className="page-header">
        <h1>About Me</h1>
      </header>

      <section className="intro-section">
        <p>
        I'm Christian Giovannetti, a Computer Science student at the University of Central Florida with a Mathematics minor and a 4.0 GPA. My experience spans DevOps, cloud infrastructure, and software engineering, with hands-on roles at Abbott Laboratories and Limbitless Solutions. I'm passionate about building efficient, secure systems that bridge software engineering and infrastructure, always striving for reliability, scalability, and clean design.
        </p>
      </section>

      <section className="content-section">
        <h2>Education</h2>
        <p>
          <strong>Major:</strong> Computer Science
        </p>
        <p>
          <strong>Minor:</strong> Mathematics
        </p>
        <p>
          <strong>Key Courses:</strong>
        </p>
        <ul>
          <li>Advanced Computer Architecture</li>
          <li>Security in Computing</li>
          <li>Processes for Object-Oriented Software Development</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>Work Experience</h2>
        <p>
        At Abbott, I contribute to cloud infrastructure and deployment automation, using Terraform and AWS to provision environments, Docker and Kubernetes for container orchestration, and CI/CD to ship changes reliably. Previously at Limbitless Solutions, I developed secure APIs and cross‑platform features in a collaborative, accessibility‑focused environment. As a Lead Undergraduate TA for Object‑Oriented Programming, I mentored students on clean, maintainable code and system design while supporting labs and reviews.  
        </p>
      </section>

      <section className="content-section">
        <h2>Notable Skills & Accomplishments</h2>
        <p>
          <strong>Programming Languages:</strong> Java, Python, C, Bash, SQL, JavaScript, TypeScript
        </p>
        <p>
          <strong>Technical Expertise:</strong> Cloud-native development, CI/CD automation, Infrastructure as Code (Terraform, Docker, Kubernetes, ArgoCD, Ansible)
        </p>
        <p>
          <strong>Achievements:</strong> Consistently recognized on the President’s Honor Roll at the University of Central Florida for maintaining a 4.0 GPA
        </p>
      </section>
    </div>
  )
}

export default Home


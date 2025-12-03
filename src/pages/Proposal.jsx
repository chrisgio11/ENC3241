import './Page.css'

function Proposal() {
  return (
    <div className="page">
      <header className="page-header">
        <h1>Proposal Project</h1>
      </header>

      <section className="intro-section">
        <p>
        For this assignment, I developed a full research proposal examining how deep learning models can improve diagnostic accuracy in medical imaging, focusing specifically on CT and MRI analysis. I reviewed peer-reviewed studies, analyzed model architectures and datasets, and outlined a structured methodology, timeline, expected outcomes, and budget. I also incorporated a literature review and summarized my prior experience to demonstrate my preparedness to carry out the project.
        </p>
      </section>

      <section className="content-section">
        <h2>Revised/Finalized Proposal</h2>
        <div className="download-section">
          <a 
            href="/Research_Proposal.pdf" 
            download="Research_Proposal.pdf"
            className="download-button"
          >
            Click here to download Proposal Project
          </a>
        </div>
      </section>
    </div>
  )
}

export default Proposal


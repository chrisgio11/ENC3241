import './Page.css'

function CoverLetter() {
  return (
    <div className="page">
      <header className="page-header">
        <h1>Cover Letter</h1>
      </header>

      <section className="content-section">
        <h2>Revised Cover Letter</h2>
        <div className="download-section">
          <a 
            href="/Cover Letter (redacted).pdf" 
            download="Cover Letter (redacted).pdf"
            className="download-button"
          >
            Click here to download Cover Letter
          </a>
        </div>
      </section>
    </div>
  )
}

export default CoverLetter


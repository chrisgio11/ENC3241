import './Page.css'

function Resume() {
  return (
    <div className="page">
      <header className="page-header">
        <h1>Resume</h1>
      </header>

      <section className="content-section">
        <h2>Revised Resume</h2>
        <div className="download-section">
          <a 
            href="/CHRISTIAN_GIOVANNETTI_RESUME__REDACTED_.pdf" 
            download="CHRISTIAN_GIOVANNETTI_RESUME__REDACTED_.pdf"
            className="download-button"
          >
            Click here to download Resume
          </a>
        </div>
      </section>
    </div>
  )
}

export default Resume


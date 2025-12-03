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
            href="/Minecraft_Instructions.pdf" 
            download="Minecraft_Instructions.pdf"
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


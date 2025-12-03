import './Page.css'

function MiniInterview() {
  return (
    <div className="page">
      <header className="page-header">
        <h1>Mini Interview</h1>
      </header>

      <section className="content-section">
        <h2>Revised Mini Interview</h2>
        <div className="video-section">
          <div className="video-container">
            <iframe
              className="video-embed"
              src="https://www.youtube.com/embed/RkTFt1K-UNY"
              title="Mini Interview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MiniInterview


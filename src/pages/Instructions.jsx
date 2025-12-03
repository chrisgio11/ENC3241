import './Page.css'

function Instructions() {
  return (
    <div className="page">
      <header className="page-header">
        <h1>Instructions Project</h1>
      </header>

      <section className="intro-section">
        <p>
For this assignment, I created a clear, well-organized set of instructions that taught someone how to complete a specific process of my choice. I broke the task into simple steps, used strong action-focused language, and included visuals and design elements to make the instructions easy for my intended audience to follow. The final product functioned as a real user guide that someone could use to successfully complete the task on their own.

        </p>
      </section>

      <section className="content-section">
        <h2>Revised Instructions</h2>
        <div className="download-section">
          <a 
            href="/Minecraft_Instructions.pdf" 
            download="Minecraft_Instructions.pdf"
            className="download-button"
          >
            Click here to download Instructions Project
          </a>
        </div>
      </section>
    </div>
  )
}

export default Instructions


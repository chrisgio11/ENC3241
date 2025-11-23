import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Instructions from './pages/Instructions'
import CoverLetter from './pages/CoverLetter'
import Resume from './pages/Resume'
import MiniInterview from './pages/MiniInterview'
import Proposal from './pages/Proposal'
import Reflection from './pages/Reflection'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/instructions" element={<Instructions />} />
            <Route path="/cover-letter" element={<CoverLetter />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/mini-interview" element={<MiniInterview />} />
            <Route path="/proposal" element={<Proposal />} />
            <Route path="/reflection" element={<Reflection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App


import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import AnalyzePage from './pages/AnalyzePage'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('plantaid-theme')
    if (saved === 'dark') setDarkMode(true)
  }, [])

  const toggleDark = () => {
    const next = !darkMode
    setDarkMode(next)
    localStorage.setItem('plantaid-theme', next ? 'dark' : 'light')
  }

  return (
    <BrowserRouter>
      <div className={darkMode ? 'dark' : ''}>
        <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', transition: 'background 0.3s' }}>
          <Navbar darkMode={darkMode} toggleDark={toggleDark} />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/analyze" element={<AnalyzePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

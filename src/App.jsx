import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Page1 from './pages/Page1.jsx'
import Page2 from './pages/Page2.jsx'
import Page3 from './pages/Page3.jsx'
import Navbar from './Components/Navbar.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
      <Navbar />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App

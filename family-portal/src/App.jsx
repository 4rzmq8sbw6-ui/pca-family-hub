import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import ParentsPage from './components/ParentsPage'
import StudentsPage from './components/StudentsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/parents" element={<ParentsPage />} />
        <Route path="/students" element={<StudentsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

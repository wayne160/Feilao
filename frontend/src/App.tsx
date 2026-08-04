import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import './App.css'
import Dried from './pages/Dried'
import Soup from './pages/Soup'
import PrintTest from './pages/PrintTest'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dried" element={<Dried />} />
        <Route path="/soup" element={<Soup />} />
        <Route path="/print-test" element={<PrintTest />} />
      </Routes>
    </>
  )
}

export default App

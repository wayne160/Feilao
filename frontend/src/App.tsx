import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import './App.css'
import Dried from './pages/Dried'
import Soup from './pages/Soup'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dried" element={<Dried />} />
        <Route path="/soup" element={<Soup />} />
      </Routes>
    </>
  )
}

export default App

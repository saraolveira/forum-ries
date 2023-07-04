import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import RIES22 from './pages/RIES22.jsx'
import RIES21 from './pages/RIES21.jsx'
import '@fontsource/varela-round'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ries22" element={<RIES22 />} />
          <Route path="/ries21" element={<RIES21 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

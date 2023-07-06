import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import PremiosRIES from './pages/PremiosRIES.jsx'
import RIES22 from './pages/RIES22.jsx'
import RIES21 from './pages/RIES21.jsx'
import RIES20 from './pages/RIES20.jsx'
import RIES19 from './pages/RIES19.jsx'
import RIES18 from './pages/RIES18.jsx'
import RIES17 from './pages/RIES17.jsx'
import RIES16 from './pages/RIES16.jsx'
import '@fontsource/varela-round'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/premios" element={<PremiosRIES />} />
          <Route path="/ries22" element={<RIES22 />} />
          <Route path="/ries21" element={<RIES21 />} />
          <Route path="/ries20" element={<RIES20 />} />
          <Route path="/ries19" element={<RIES19 />} />
          <Route path="/ries18" element={<RIES18 />} />
          <Route path="/ries17" element={<RIES17 />} />
          <Route path="/ries16" element={<RIES16 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

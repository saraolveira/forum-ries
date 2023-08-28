import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import ReactGA from "react-ga4"
import Home from './pages/Home.jsx'
import PremiosRIES from './pages/PremiosRIES.jsx'
import RIES23 from './pages/RIES23.jsx'
import RIES22 from './pages/RIES22.jsx'
import RIES21 from './pages/RIES21.jsx'
import RIES20 from './pages/RIES20.jsx'
import RIES19 from './pages/RIES19.jsx'
import RIES18 from './pages/RIES18.jsx'
import RIES17 from './pages/RIES17.jsx'
import RIES16 from './pages/RIES16.jsx'
import CSG from './pages/CSG.jsx'
import EXPORPYMES from './pages/EXPORPYMES.jsx'
import Patrocinios from './pages/Patrocinios.jsx'
import '@fontsource/varela-round'

const App = () => {

  const location = useLocation()

  useEffect(() => {
    ReactGA.initialize("G-V7J6BCMDV0") 
  }, [])

  useEffect(() => {
    ReactGA.send(
      { hitType: "pageview", page: location.pathname, title: document.title }
    )
  }, [location])
  


  return (
    <>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/premios" element={<PremiosRIES />} />
          <Route path="/patrocinios" element={<Patrocinios />} />
          <Route path="/ries22" element={<RIES22 />} />
          <Route path="/ries21" element={<RIES21 />} />
          <Route path="/ries20" element={<RIES20 />} />
          <Route path="/ries19" element={<RIES19 />} />
          <Route path="/ries18" element={<RIES18 />} />
          <Route path="/ries17" element={<RIES17 />} />
          <Route path="/ries16" element={<RIES16 />} />
          <Route path="/csg" element={<CSG />} />
          <Route path="/exporpymes" element={<EXPORPYMES />} />
          <Route path="/ries23" element={<RIES23 />} />
        </Routes>
    </>
  )
}

export default App

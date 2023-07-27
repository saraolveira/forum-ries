import Navbar from "../components/Navbar.jsx"
import Hero23 from "../components/Hero23.jsx"
import Icono from "../components/Icono.jsx"
import Ediciones from "../components/Ediciones.jsx"
import Footer from "../components/Footer.jsx"
import Premios from "../components/Premios.jsx"


const RIES23 = () => {
    document.documentElement.style.setProperty('--color1', '#C48B27')
    document.documentElement.style.setProperty('--color2', '#0e1e2f')
    document.title = "Fórum RIES"
    
    return (
        <>
            <Navbar />
            <Hero23 />
            {/* <Icono /> */}
            <Ediciones />
            <Premios />
            <Footer />
        </>
    )
}

export default RIES23
import Navbar from "../components/Navbar.jsx"
import EdicionHero from "../components/EdicionHero.jsx"
import Icono from "../components/Icono.jsx"
import Footer from "../components/Footer.jsx"

const RIES18 = () => {
    document.documentElement.style.setProperty('--color1', 'rgba(183,233,114,1)')
    document.documentElement.style.setProperty('--color2', 'rgba(0,173,238,1)')

    return (
        <>
            <Navbar />
            <EdicionHero 
                logo="/ries18-logo.png"
                imagen="/ries18.jpg"
                tematica="Ciudades inteligentes, saludables y amigables"
            />
            <Icono />
            <Footer />
        </>
    )
}

export default RIES18
import Navbar from "../components/Navbar.jsx"
import EdicionHero from "../components/EdicionHero.jsx"
import Icono from "../components/Icono.jsx"
import Footer from "../components/Footer.jsx"

const RIES22 = () => {
    document.documentElement.style.setProperty('--color1', '#0178be')
    document.documentElement.style.setProperty('--color2', '#adc7ee')

    return (
        <>
            <Navbar />
            <EdicionHero 
                logo="/ries22-logo.png"
                imagen="/ries22.png"
                tematica="Salud de Vanguardia: innovación asistencial y modelos de cuidados"
            />
            <Icono />
            <Footer />
        </>
    )
}

export default RIES22
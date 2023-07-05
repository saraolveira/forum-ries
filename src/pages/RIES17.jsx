import Navbar from "../components/Navbar.jsx"
import EdicionHeroSinIMG from "../components/EdicionHeroSinIMG.jsx"
import Icono from "../components/Icono.jsx"
import Footer from "../components/Footer.jsx"

const RIES17 = () => {
    document.documentElement.style.setProperty('--color1', 'rgba(183,233,114,1)')
    document.documentElement.style.setProperty('--color2', 'rgba(0,173,238,1)')

    return (
        <>
            <Navbar />
            <EdicionHeroSinIMG 
                logo="/RIES-logo.png"
                imagen="/RIES-logo.png"
                tematica="Living Labs. Presentación de LabSaúde"
            />
            <Icono />
            <Footer />
        </>
    )
}

export default RIES17
import Navbar from "../components/Navbar.jsx"
import EdicionHero from "../components/EdicionHero.jsx"
import Icono from "../components/Icono.jsx"
import Footer from "../components/Footer.jsx"

const RIES19 = () => {
    document.documentElement.style.setProperty('--color1', '#1aabe3')
    document.documentElement.style.setProperty('--color2', '#fbbc40')

    return (
        <>
            <Navbar />
            <EdicionHero 
                logo="/ries19-logo.png"
                imagen="/ries19.jpg"
                tematica="Silver Economy: por un envejecimiento activo y saludable"
            />
            <Icono />
            <Footer />
        </>
    )
}

export default RIES19
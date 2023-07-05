import Navbar from "../components/Navbar.jsx"
import Hero from "../components/Hero.jsx"
import Icono from "../components/Icono.jsx"
import Ediciones from "../components/Ediciones.jsx"
import Footer from "../components/Footer.jsx"
import Premios from "../components/Premios.jsx"


const Home = () => {
    document.documentElement.style.setProperty('--color1', 'rgba(183,233,114,1)')
    document.documentElement.style.setProperty('--color2', 'rgba(0,173,238,1)')
    
    return (
        <>
            <Navbar />
            <Hero />
            <Icono />
            <Ediciones />
            <Premios />
            <Footer />
        </>
    )
}

export default Home
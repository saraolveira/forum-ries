import Navbar from "../components/Navbar.jsx"
import Hero from "../components/Hero.jsx"
import Icono from "../components/Icono.jsx"
import Ediciones from "../components/Ediciones.jsx"
import Premios from "../components/Premios.jsx"
import Footer from "../components/Footer.jsx"
import PhoneNav from "../components/PhoneNav.jsx"


// 23
import Hero23 from "../components/Hero23.jsx"
import Basic from "../components/Basic.jsx"
import Info from "../components/Info.jsx"
import Programa from "../components/Programa.jsx"
import PonentesBlock from "../components/PonentesBlock.jsx"
import Comite from "../components/Comite.jsx"
import MailChimpForm from "../components/MailChimpForm.jsx"
import PatrocinadoresSlide from "../components/PatrocinadoresSlide.jsx"


const Home = () => {
    // document.documentElement.style.setProperty('--color1', 'rgba(183,233,114,1)')
    // document.documentElement.style.setProperty('--color2', 'rgba(0,173,238,1)')
    document.documentElement.style.setProperty('--color1', '#C48B27')
    document.documentElement.style.setProperty('--color2', '#0e1e2f')
    document.title = "Fórum RIES"
    
    return (
        <>
            <Navbar />
            <Hero23 />
            <Basic />
            {/* <Icono /> */}
            {/* <Info /> */}
            <PatrocinadoresSlide />
            <Programa />
            <PonentesBlock />
            <Comite />
            <Premios />
            <MailChimpForm />
            <Ediciones />
            <Footer />
            <PhoneNav />
        </>
    )
}

export default Home
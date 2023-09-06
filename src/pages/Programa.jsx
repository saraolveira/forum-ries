import Navbar from "../components/Navbar.jsx"
import Programa from "../components/Programa.jsx"
import Footer from "../components/Footer.jsx"

const ProgramaPage = () => {
    
    document.documentElement.style.setProperty('--color1', '#C48B27')
    document.documentElement.style.setProperty('--color2', '#0e1e2f')

    return (<>
        <Navbar />
        <div id="programa-page">
            <Programa />
        </div>
        <Footer />
        </>
    )
}

export default ProgramaPage
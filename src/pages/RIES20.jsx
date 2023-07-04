import Navbar from "../components/Navbar.jsx"
import EdicionHero from "../components/EdicionHero.jsx"
import Icono from "../components/Icono.jsx"

const RIES20 = () => {
    document.documentElement.style.setProperty('--color1', '#00AFEF')
    document.documentElement.style.setProperty('--color2', '#FFAF8C')

    return (
        <>
            <Navbar />
            <EdicionHero 
                logo="/ries20-logo.png"
                imagen="/ries20.jpg"
                tematica="Silver Economy: alimentación y calidad de vida"
            />
            <Icono />
        </>
    )
}

export default RIES20
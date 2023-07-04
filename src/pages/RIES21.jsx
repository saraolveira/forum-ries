import Navbar from "../components/Navbar.jsx"
import EdicionHero from "../components/EdicionHero.jsx"
import Icono from "../components/Icono.jsx"

const RIES21 = () => {
    document.documentElement.style.setProperty('--color1', '#F650FF')
    document.documentElement.style.setProperty('--color2', '#8D5FFF')

    return (
        <>
            <Navbar />
            <EdicionHero 
                logo="/ries21-logo.png"
                imagen="/ries21.png"
                tematica="La revolución digital en la atención sanitaria y los cuidados"
            />
            <Icono />
        </>
    )
}

export default RIES21
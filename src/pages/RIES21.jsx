import Navbar from "../components/Navbar.jsx"
import EdicionHero from "../components/EdicionHero.jsx"
import Icono from "../components/Icono.jsx"
import Footer from "../components/Footer.jsx"

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
                links={<>
                    <a href='https://forumries.com/introduccion-3/' target='_blank'>Introducción</a>
                    <a href='https://forumries.com/wp-content/uploads/2021/12/Programa_RIES21_final-1_compressed.pdf' target='_blank'>Programa</a>
                    <a href='https://forumries.com/comite-ries21/' target='_blank'>Comité</a>
                    <a href='https://forumries.com/ponentes-3/' target='_blank'>Ponentes</a>
                    <a href='https://forumries.com/wp-content/uploads/2021/12/DOSSIER-29-11-OK_compressed-3.pdf' target='_blank'>Dossier #RIES21</a>
                </>}  
            />
            <Icono />
            <Footer />
        </>
    )
}

export default RIES21
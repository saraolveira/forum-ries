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
                links={<>
                    <a href='https://forumries.com/introduccion-22/' target='_blank'>Introducción</a>
                    <a href='https://forumries.com/presentacion-22/' target='_blank'>Saludo presidenta</a>
                    <a href='https://forumries.com/carta-presidente/' target='_blank'>Carta del Presidente #RIES22</a>
                    <a href='https://forumries.com/programa-22/' target='_blank'>Programa</a>
                    <a href='https://forumries.com/ponentes-22/' target='_blank'>Ponentes</a>
                    <a href='https://forumries.com/wp-content/uploads/2022/10/Dossier-RIES22-1.pdf' target='_blank'>Dossier #RIES22</a>
                    <a href='https://forumries.com/premiados-ries22/' target='_blank'>Premios #RIES22</a>
                </>}                
            />
            <Icono />
            <Footer />
        </>
    )
}

export default RIES22
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
                links={<>
                    <a href='https://forumries.com/introduccion/' target='_blank'>Introducción</a>
                    <a href='https://forumries.com/presentacion/' target='_blank'>Presentación</a>
                    <a href='https://forumries.com/galeria-de-fotos/' target='_blank'>Galeria</a>
                    <a href='https://forumries.com/noticias-forum-ries19/' target='_blank'>Noticias</a>
                    <a href='https://forumries.com/programa/' target='_blank'>Programa</a>
                    <a href='https://forumries.com/ponentes/' target='_blank'>Ponentes</a>
                    <a href='https://forumries.com/docs/IV-FORUM-RIES19-dossier-ESP.pdf' target='_blank'>Dossier #RIES19</a>
                    <a href='https://forumries.com/presentaciones/' target='_blank'>Presentaciones</a>
                    <a href='https://clustersaude.com/proyectos/neuroatlantic/' target='_blank'>Proyecto neuroATLANTIC</a>
                </>}  
            />
            <Icono />
            <Footer />
        </>
    )
}

export default RIES19
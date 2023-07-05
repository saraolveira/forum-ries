import Navbar from "../components/Navbar.jsx"
import EdicionHero from "../components/EdicionHero.jsx"
import Icono from "../components/Icono.jsx"
import Footer from "../components/Footer.jsx"

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
                links={<>
                    <a href='https://forumries.com/introduccion-2/' target='_blank'>Introducción</a>
                    <a href='https://forumries.com/programa-2/' target='_blank'>Programa</a>
                    <a href='https://forumries.com/ponentes-2/' target='_blank'>Ponentes</a>
                    <a href='https://forumries.com/wp-content/uploads/2020/11/Dossier-RIES20-Castellano-Imprimir_compressed.pdf' target='_blank'>Dossier #RIES20</a>
                    <a href='https://forumries.com/proyecto-ahfes/' target='_blank'>Proyecto AHFES</a>
                </>}  
            />
            <Icono />
            <Footer />
        </>
    )
}

export default RIES20
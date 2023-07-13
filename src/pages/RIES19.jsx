import { useTranslation } from 'react-i18next'
import Navbar from "../components/Navbar.jsx"
import EdicionHero from "../components/EdicionHero.jsx"
import Icono from "../components/Icono.jsx"
import Footer from "../components/Footer.jsx"

const RIES19 = () => {
    document.documentElement.style.setProperty('--color1', '#1aabe3')
    document.documentElement.style.setProperty('--color2', '#fbbc40')
    document.title = "#RIES19"

    const { t } = useTranslation()

    return (
        <>
            <Navbar />
            <EdicionHero 
                logo="/ries19-logo.png"
                imagen="/ries19.jpg"
                tematica={t('tematicas.nineteen')}
                links={<>
                    <a href='https://forumries.com/introduccion/' target='_blank'>{t('links.introduction')}</a>
                    <a href='https://forumries.com/presentacion/' target='_blank'>{t('links.presentation')}</a>
                    <a href='https://forumries.com/galeria-de-fotos/' target='_blank'>{t('links.gallery')}</a>
                    <a href='https://forumries.com/noticias-forum-ries19/' target='_blank'>{t('links.news')}</a>
                    <a href='https://forumries.com/programa/' target='_blank'>{t('links.program')}</a>
                    <a href='https://forumries.com/ponentes/' target='_blank'>{t('links.speakers')}</a>
                    <a href='https://forumries.com/docs/IV-FORUM-RIES19-dossier-ESP.pdf' target='_blank'>Dossier #RIES19</a>
                    <a href='https://forumries.com/presentaciones/' target='_blank'>{t('links.presentations')}</a>
                    <a href='https://clustersaude.com/proyectos/neuroatlantic/' target='_blank'>{t('links.neuroatlantic')}</a>
                </>}  
            />
            <Icono />
            <Footer />
        </>
    )
}

export default RIES19
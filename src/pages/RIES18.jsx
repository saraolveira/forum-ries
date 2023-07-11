import { useTranslation } from 'react-i18next'
import Navbar from "../components/Navbar.jsx"
import EdicionHero from "../components/EdicionHero.jsx"
import Icono from "../components/Icono.jsx"
import Footer from "../components/Footer.jsx"

const RIES18 = () => {
    document.documentElement.style.setProperty('--color1', 'rgba(183,233,114,1)')
    document.documentElement.style.setProperty('--color2', 'rgba(0,173,238,1)')

    const { t } = useTranslation()

    return (
        <>
            <Navbar />
            <EdicionHero 
                logo="/ries18-logo.png"
                imagen="/ries18.jpg"
                tematica={t('tematicas.eighteen')}
                links={<>
                    <a href='https://forumries.com/noticias-forum-ries18/' target='_blank'>{t('links.news')}</a>
                    <a href='https://forumries.com/clipping-de-prensa/' target='_blank'>{t('links.press')}</a>
                    <a href='https://forumries.com/videos/' target='_blank'>{t('links.videos')}</a>
                    <a href='https://forumries.com/docs/III-Forum-RIES18-Memoria.pdf' target='_blank'>{t('links.report')} #RIES18</a>
                    <a href='https://forumries.com/docs/RIES2018_programa.pdf' target='_blank'>{t('links.program')}</a>
                    <a href='https://forumries.com/ponentes-ries-18/' target='_blank'>{t('links.speakers')}</a>
                    <a href='https://forumries.com/pechakutcha-y-workshops/#pechakucha' target='_blank'>PechaKutcha</a>
                    <a href='https://forumries.com/pechakutcha-y-workshops/#workshops' target='_blank'>Democenter Workshops</a>
                </>}  
            />
            <Icono />
            <Footer />
        </>
    )
}

export default RIES18
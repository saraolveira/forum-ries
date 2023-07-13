import { useTranslation } from 'react-i18next'
import Navbar from "../components/Navbar.jsx"
import EdicionHeroSinIMG from "../components/EdicionHeroSinIMG.jsx"
import Icono from "../components/Icono.jsx"
import Footer from "../components/Footer.jsx"


const RIES16 = () => {
    document.documentElement.style.setProperty('--color1', 'rgba(183,233,114,1)')
    document.documentElement.style.setProperty('--color2', 'rgba(0,173,238,1)')
    document.title = "#RIES16"

    const { t } = useTranslation()

    return (
        <>
            <Navbar />
            <EdicionHeroSinIMG 
                logo="/RIES-logo.png"
                imagen="/RIES-logo.png"
                tematica={t('tematicas.sixteen')}
                links={<>
                    <a href='https://forumries.com/docs/RIES2016_memoria.pdf' target='_blank'>{t('links.report')} #RIES16</a>
                    <a href='https://forumries.com/galeria-ediciones-anteriores/#ries2016' target='_blank'>{t('links.gallery')}</a>
                </>}  
            />
            <Icono />
            <Footer />
        </>
    )
}

export default RIES16
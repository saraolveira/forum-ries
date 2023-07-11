import { useTranslation } from 'react-i18next'
import Navbar from "../components/Navbar.jsx"
import EdicionHero from "../components/EdicionHero.jsx"
import Icono from "../components/Icono.jsx"
import Footer from "../components/Footer.jsx"

const RIES21 = () => {
    document.documentElement.style.setProperty('--color1', '#F650FF')
    document.documentElement.style.setProperty('--color2', '#8D5FFF')

    const { t } = useTranslation()

    return (
        <>
            <Navbar />
            <EdicionHero 
                logo="/ries21-logo.png"
                imagen="/ries21.png"
                tematica={t('tematicas.twentyone')}
                links={<>
                    <a href='https://forumries.com/introduccion-3/' target='_blank'>{t('links.introduction')}</a>
                    <a href='https://forumries.com/wp-content/uploads/2021/12/Programa_RIES21_final-1_compressed.pdf' target='_blank'>{t('links.program')}</a>
                    <a href='https://forumries.com/comite-ries21/' target='_blank'>{t('links.committee')}</a>
                    <a href='https://forumries.com/ponentes-3/' target='_blank'>{t('links.speakers')}</a>
                    <a href='https://forumries.com/wp-content/uploads/2021/12/DOSSIER-29-11-OK_compressed-3.pdf' target='_blank'>Dossier #RIES21</a>
                </>}  
            />
            <Icono />
            <Footer />
        </>
    )
}

export default RIES21
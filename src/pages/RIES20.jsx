import { useTranslation } from 'react-i18next'
import Navbar from "../components/Navbar.jsx"
import EdicionHero from "../components/EdicionHero.jsx"
import Icono from "../components/Icono.jsx"
import Footer from "../components/Footer.jsx"

const RIES20 = () => {
    document.documentElement.style.setProperty('--color1', '#00AFEF')
    document.documentElement.style.setProperty('--color2', '#FFAF8C')

    const { t } = useTranslation()

    return (
        <>
            <Navbar />
            <EdicionHero 
                logo="/ries20-logo.png"
                imagen="/ries20.jpg"
                tematica={t('tematicas.twenty')}
                links={<>
                    <a href='https://forumries.com/introduccion-2/' target='_blank'>{t('links.introduction')}</a>
                    <a href='https://forumries.com/programa-2/' target='_blank'>{t('links.program')}</a>
                    <a href='https://forumries.com/ponentes-2/' target='_blank'>{t('links.speakers')}</a>
                    <a href='https://forumries.com/wp-content/uploads/2020/11/Dossier-RIES20-Castellano-Imprimir_compressed.pdf' target='_blank'>Dossier #RIES20</a>
                    <a href='https://forumries.com/proyecto-ahfes/' target='_blank'>{t('links.ahfes')}</a>
                </>}  
            />
            <Icono />
            <Footer />
        </>
    )
}

export default RIES20
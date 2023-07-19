import { useTranslation } from 'react-i18next'
import Navbar from "../components/Navbar.jsx"
import Icono from "../components/Icono.jsx"
import Footer from "../components/Footer.jsx"

const CSG = () => {
    document.documentElement.style.setProperty('--color1', 'rgba(183,233,114,1)')
    document.documentElement.style.setProperty('--color2', 'rgba(0,173,238,1)')
    document.title = "Cluster Saúde de Galicia, CSG"

    const { t } = useTranslation()

    return (<>
    <Navbar />
    <section className="page">
        <p>{t('pages.csg.p1')}</p>
        <p>{t('pages.csg.p2')}</p>
        <p>{t('pages.csg.p3')}</p>
        <p>{t('pages.csg.p4')}</p>
        <p>{t('pages.csg.p5')}</p>
        <a href={t('pages.csg.url')} target="_blank" className="cta">{t('pages.csg.cta')}</a>
    </section>
    <Icono />
    <Footer />
    </>)
}

export default CSG
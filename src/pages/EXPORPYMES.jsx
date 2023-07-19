import { useTranslation } from 'react-i18next'
import Navbar from "../components/Navbar.jsx"
import Icono from "../components/Icono.jsx"
import Footer from "../components/Footer.jsx"

const EXPORPYMES = () => {
    document.documentElement.style.setProperty('--color1', 'rgba(183,233,114,1)')
    document.documentElement.style.setProperty('--color2', 'rgba(0,173,238,1)')
    document.title = "EXPORPYMES"

    const { t } = useTranslation()

    return (<>
        <Navbar />
        <section className="page">
            <img src="/exporpymes.png" alt="Logo Exporpymnes" />
            <p>{t('pages.exporpymes.p1')}</p>
            <a href="https://www.instagram.com/p/CuoJz6arzjY/" target="_blank" className="cta">{t('pages.exporpymes.r23')}</a>
            <a href={t('pages.exporpymes.g23url')} target="_blank" className="cta">{t('pages.exporpymes.g23')}</a>
            <a href="https://www.instagram.com/reel/CkK8huzMu7F/" target="_blank" className="cta">{t('pages.exporpymes.r22')}</a>
        </section>
        <Icono />
        <Footer />
    </>)
}

export default EXPORPYMES
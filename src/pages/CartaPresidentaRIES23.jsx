import { useTranslation } from 'react-i18next'
import Navbar from "../components/Navbar.jsx"
import Icono from "../components/Icono.jsx"
import Footer from "../components/Footer.jsx"

const CartaPresidentaRIES23 = () => {
    document.documentElement.style.setProperty('--color1', '#C48B27')
    document.documentElement.style.setProperty('--color2', '#0e1e2f')

    document.title = "Carta de la presidenta #RIES23"

    const { t } = useTranslation()

    return (<>
    <Navbar />
    <section className="page">
        <h2>{t('pages.carta23.carta')}</h2>
        <img src="/comite/beatriz-zendal.png" alt="Presidenta del Comité Organizador de #RIES23" id="img-carta"/>
        <p className="margin-img">{t('pages.carta23.p1')}</p>
        <p className="margin-img">{t('pages.carta23.p2')} </p>
        <p className="margin-img">{t('pages.carta23.p3')} </p>
        <p className="margin-img">{t('pages.carta23.p4')}</p>
        <ul>
            <li>{t('pages.carta23.p5')}</li>
            <li>{t('pages.carta23.p6')}</li>
            <li>{t('pages.carta23.p7')}</li>
            <li>{t('pages.carta23.p8')}</li>
        </ul>
        <p>{t('pages.carta23.p9')}</p>
        <p>{t('pages.carta23.p10')}</p>
    </section>
    <Icono />
    <Footer />
    </>)
}

export default CartaPresidentaRIES23
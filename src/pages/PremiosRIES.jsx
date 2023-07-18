import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Navbar.jsx'
import Premio3D from '../components/Premio3D.jsx'
import Premios22 from '../components/Premios22.jsx'
import Premios21 from '../components/Premios21.jsx'
import { useTranslation } from 'react-i18next'

const PremiosRIES = () => {

    document.title = "Premios RIES"
    const { t } = useTranslation()

    return (<>
        <Navbar />
        <div id="premios-page">
            <Premio3D id="modelo"/>
            <div id="premios-section">
                <h2>{t('premios.twentytwo')}</h2>
                <div id="premios-22"><Premios22 /></div>
                
                <h2>{t('premios.twentyone')}</h2>
                <div id="premios-21"><Premios21 /></div>
            </div>
        </div>
        <Footer />
    </>)
}

export default PremiosRIES
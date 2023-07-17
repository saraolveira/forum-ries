import Premio3D from "./Premio3D"
import SliderPremios from "./SliderPremios"
import { useTranslation } from 'react-i18next'
import { Link } from "react-router-dom"

const Premios = () => {

    const { t } = useTranslation()

    return (<div id="premios">
        <h2>{t('premios.awards')}</h2>
        <Premio3D />
        <SliderPremios />
        <Link to="/premios" id="cta-premios" className="cta">{t('premios.cta')}</Link>
    </div>)
}

export default Premios
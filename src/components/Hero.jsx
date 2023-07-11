import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'

const Hero = () => {

    const { t } = useTranslation()

    return <div id="hero">
        <h1 id="titulo">{t('ediciones.twentythree')}</h1>
        <div id="fecha">
            <FontAwesomeIcon icon={faCalendar} />
            <p>{t('hero.date')}</p>

        </div>
        <div id="lugar">
            <FontAwesomeIcon icon={faLocationDot} />
            <p>Vigo, Galicia</p>
        </div>
        <a href="mailto:forumries@clustersaude.com" className="cta">{t('hero.cta')}</a>
        <div id="descripcion">
            <p>{t('hero.description')}</p>
        </div>
    </div>
}

export default Hero
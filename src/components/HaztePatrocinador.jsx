import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const HaztePatrocinador = () => {
    const { t } = useTranslation()

    return (<div id="cta-patrocinador" className="text">
        <a href={t('hero.register')} target='_blank'className="cta">{t('hero.cta')}</a>
        <Link to="/patrocinios"className='cta'>{t('patrocinios.cta')}</Link>
    </div>)
}

export default HaztePatrocinador
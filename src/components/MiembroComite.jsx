import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const MiembroComite = ({name, role, linkedin, img, carta}) => {
    const { t } = useTranslation()
    return (<div className="miembro-comite">
        <img className="comite-img" src={img} alt="" />
        {linkedin && <a href={linkedin} target="_blank" className="lkd"><FontAwesomeIcon icon={faLinkedin} /></a>}        
        <p className="miembro-name">{name}</p>
        <p className="miembro-role">{role}</p>
        {carta && <Link to="carta-presidenta-ries23" id="cta-carta">{t('pages.carta23.carta')}</Link>}
    </div>)
}

export default MiembroComite

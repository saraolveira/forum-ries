import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingHeart, faRectangleList, faTicket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const PhoneNav = () => {

    const { t } = useTranslation()

    return (<div id="phone-nav">
        <div className="phone-nav-icon">
            <a href={t('hero.register')} target="_blank"><FontAwesomeIcon icon={faTicket} /></a>
        </div>
        <div className="phone-nav-icon">
            <a href={t('hero23.link')} target="_blank"><FontAwesomeIcon icon={faRectangleList} /></a>
        </div>
        <div className="phone-nav-icon">
            <Link to="/patrocinios" target="_blank"><FontAwesomeIcon icon={faHandHoldingHeart} /></Link>
        </div>
    </div>)
}

export default PhoneNav
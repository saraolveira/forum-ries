import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

const Info = () => {
    const { t } = useTranslation()

    return (<div className="section text">
        <div style={{textAlign: 'center'}}>
            <h3>{t('info.booking')}</h3>
            <p style={{textAlign: 'center', fontSize: '0.8em'}}>{t('info.valid')}</p>
        </div>
        <p><FontAwesomeIcon icon={faCaretRight} />{t('info.hab1')}</p>
        <p><FontAwesomeIcon icon={faCaretRight} />{t('info.hab2')}</p>
        <p>{t('info.reserva')} <a href="mailto:Info.Vigo@attica21hotels.com">Info.Vigo@attica21hotels.com</a> {t('info.reserva2')}</p>
    </div>)
}

export default Info
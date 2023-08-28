import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Navbar.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'

const Patrocinios = () => {

    document.title = "Fórum RIES"
    const { t } = useTranslation()
    document.documentElement.style.setProperty('--color1', '#C48B27')
    document.documentElement.style.setProperty('--color2', '#0e1e2f')

    return (<>
        <Navbar />
        <div className='page'>
            <h2>{t('patrocinios.title')}</h2>
            <p>{t('patrocinios.granito')}</p>
            <div className='patrocinio-links'>
                <a href={t('patrocinios.link')} target="_blank">{t('patrocinios.linkName')}</a>
                <a href={t('patrocinios.form')} target="_blank">{t('patrocinios.support')}</a>
                {/* <a href="https://registro.forumries.com/wp-content/uploads/2023/08/RIES23_Patrocinadores-1.pdf" target="_blank">Dossier de patrocinadores</a>
                <a href="https://registro.forumries.com/wp-content/uploads/2023/08/RIES23_Sponsorships-1.pdf" target="_blank">Sponsorships Dossier</a> */}
            </div>

            <div id="tipos-patrocinio">
                <p><FontAwesomeIcon icon={faCaretRight} />{t('patrocinios.type1')}</p>
                <p><FontAwesomeIcon icon={faCaretRight} />{t('patrocinios.type2')}</p>
                <p><FontAwesomeIcon icon={faCaretRight} />{t('patrocinios.type3')}</p>
                <p><FontAwesomeIcon icon={faCaretRight} />{t('patrocinios.type4')}</p>
                <p><FontAwesomeIcon icon={faCaretRight} />{t('patrocinios.type5')}</p>
                <p><FontAwesomeIcon icon={faCaretRight} />{t('patrocinios.type6')}</p>
                <p><FontAwesomeIcon icon={faCaretRight} />{t('patrocinios.type7')}</p>
                <p><FontAwesomeIcon icon={faCaretRight} />{t('patrocinios.type8')}</p>
                <p><FontAwesomeIcon icon={faCaretRight} />{t('patrocinios.type9')}</p>
                <p><FontAwesomeIcon icon={faCaretRight} />{t('patrocinios.type10')}</p>
                <p><FontAwesomeIcon icon={faCaretRight} />{t('patrocinios.type11')}</p>
                <p><FontAwesomeIcon icon={faCaretRight} />{t('patrocinios.type12')}</p>
                <p><FontAwesomeIcon icon={faCaretRight} />{t('patrocinios.type13')}</p>
                <p><FontAwesomeIcon icon={faCaretRight} />{t('patrocinios.type14')}</p>
                <p><FontAwesomeIcon icon={faCaretRight} />{t('patrocinios.type15')}</p>
                <p><FontAwesomeIcon icon={faCaretRight} />{t('patrocinios.type16')}</p>
                <p><FontAwesomeIcon icon={faCaretRight} />{t('patrocinios.type17')}</p>
            </div>

            <div className='patrocinio-links'>
                <a href={t('patrocinios.form')} target="_blank">{t('patrocinios.support')}</a>
            </div>
        </div>
        <Footer />
    </>)
}

export default Patrocinios
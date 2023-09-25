import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Navbar.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { useTranslation } from 'react-i18next'

const Ponentes = () => {

    document.title = "Ponentes #RIES23"
    const { t } = useTranslation()
    document.documentElement.style.setProperty('--color1', '#C48B27')
    document.documentElement.style.setProperty('--color2', '#0e1e2f')

    return (<>
        <Navbar />
        <div className='page'>
            <div id="ponentes">
                <h3>{t('pages.ponentes.tipos.keynotes')}</h3>
                <div className="miembros-comite ponentes">
                    <div className="miembro-comite ponente">
                        
                        <img src="../ponentes/vania-de-la-fuente.png" alt="Vânia de la Fuente-Núñez" className="comite-img" />
                        <p className="miembro-name">Vânia de la Fuente-Núñez <a href="https://www.linkedin.com/in/drvdelafuente" className="linkedin" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></p>
                        
                        <p className="miembro-role">{t('pages.ponentes.rol.vania')}</p>
                        <p className="miembro-description">
                        {t('pages.ponentes.description.vania1')}
                        <br /><br />
                        {t('pages.ponentes.description.vania2')}
                        <br /><br />
                        {t('pages.ponentes.description.vania3')}
                    </p>
                    </div>
                    <div className="miembro-comite ponente">
                        
                        <img src="../ponentes/nick-guldemond.png" alt="Nick Guldemond" className="comite-img" />
                        <p className="miembro-name">Nick Guldemond <a href="https://www.linkedin.com/in/nick-guldemond-a01b3a5/" className="linkedin" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></p>
                        <p className="miembro-role">Leiden University Medical Centre / Medical University Gdansk</p>
                        <p className="miembro-role">{t('pages.ponentes.rol.nick')}</p>
                        <p className="miembro-description">{t('pages.ponentes.description.nick')}</p>
                    </div>
                </div>

            </div>
            
        </div>
        <Footer />
    </>)
}

export default Ponentes
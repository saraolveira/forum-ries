import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next"

const PonentesBlock = () => {


    const {t} = useTranslation()

    return (
    <div className="comite" id="ponentes-block">
        <h2>{t('pages.ponentes.ponentes')}</h2>
        <div className="miembros-comite">        
            <div className="miembro-comite">
                <img className="comite-img" src="/ponentes/vania-de-la-fuente.png" alt="Vânia de la Fuente-Núñez" />
                <a href="https://www.linkedin.com/in/drvdelafuente" target="_blank" className="lkd"><FontAwesomeIcon icon={faLinkedin} /></a>        
                <p className="miembro-name">Vânia de la Fuente-Núñez</p>
                <p className="miembro-role speaker">{t('pages.ponentes.tipos.keynote')}</p>
                <p className="miembro-role">{t('pages.ponentes.rol.vania')}</p>
            </div>
            <div className="miembro-comite">
                <img className="comite-img" src="/ponentes/nick-guldemond.png" alt="Nick Guldemond " />
                <a href="https://www.linkedin.com/in/nick-guldemond-a01b3a5/" target="_blank" className="lkd"><FontAwesomeIcon icon={faLinkedin} /></a>        
                <p className="miembro-name">Nick Guldemond </p>
                <p className="miembro-role speaker">{t('pages.ponentes.tipos.keynote')}</p>
                <p className="miembro-role">Leiden University Medical Centre / Medical University Gdansk</p>
                <p className="miembro-role">{t('pages.ponentes.rol.nick')}</p>
            </div>
        </div>
        <Link to="ponentes" className="cta cta2">{t('pages.ponentes.cta')}</Link>
    </div>)
}

export default PonentesBlock
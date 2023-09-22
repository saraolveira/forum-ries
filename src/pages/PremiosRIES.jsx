import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Navbar.jsx'
import Premio3D from '../components/Premio3D.jsx'
import Premios22 from '../components/Premios22.jsx'
import Premios21 from '../components/Premios21.jsx'
import { useTranslation } from 'react-i18next'

const PremiosRIES = () => {

    document.documentElement.style.setProperty('--color1', '#C48B27')
    document.documentElement.style.setProperty('--color2', '#0e1e2f')
    document.title = "Premios RIES"
    const { t } = useTranslation()

    return (<>
        <Navbar />
        <div id="premios-page">
            <Premio3D id="modelo"/>
            <div id="premios-section">
                <h2>{t('premios.texto23.convocatoria')}</h2>
                <div className="premios-texto">
                    <p>{t('premios.texto23.participa')}</p>
                    <ul>
                        <li>{t('premios.texto23.innovacion')}</li>
                        <li>{t('premios.texto23.impacto')}</li>
                        <li>{t('premios.texto23.conocimiento')}</li>
                        <li>{t('premios.texto23.comunidad')}</li>
                        <li>{t('premios.texto23.revelacion')}</li>
                        <li>{t('premios.texto23.resiliencia')}</li>
                    </ul>
                    <p className="margin-top">{t('premios.texto23.requisitos')}</p>
                    <ul>
                        <li>{t('premios.texto23.video')}</li>
                        <li>{t('premios.texto23.presentacion')}</li>
                        <li>{t('premios.texto23.formulario')}</li>
                    </ul>
                    <a href="https://registro.forumries.com/premios-ries23/" target="_blank" className='cta'>{t('premios.texto23.cta')}</a>
                </div>
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
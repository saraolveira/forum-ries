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
                <h2>Premios #RIES23 — ¡Convocatoria abierta!</h2>
                <div className="premios-texto">
                    <p>Si eres una empresa con un proyecto innovador en el sector salud o sociosanitario, participa en los premios #RIES23. ¡Una gran oportunidad de dar visibilidad a tu proyecto de innovación!</p>
                    <ul>
                        <li>Premio Innovación CSG a las empresas más innovadoras</li>
                        <li>Premio Impacto en las personas a las empresas con servicios o productos de mayor impacto en las personas</li>
                        <li>Premio Conocimiento a las empresas que hayan generado más conocimiento</li>
                        <li>Premio Comunidad CSG a las empresas más comprometidas con la #ComunidadCSG</li>
                        <li>Premio Revelación a las empresas que han destacado recientemente por lograr un impacto significativo</li>
                        <li>Premio Resiliencia a las empresas que han demostrado capacidad de superar adversidades, adaptarse a situaciones difíciles y recuperarse de ellas de manera ejemplar </li>
                    </ul>
                    <p className="margin-top">Requisitos para participar:</p>
                    <ul>
                        <li>Explica tu proyecto en un vídeo de  máximo 1’ de duración en formato horizontal 16:9 a mínimo 1920 x 1080.</li>
                        <li>Haz una breve presentación con lo más destacado de tu proyecto </li>
                        <li>Completa tus datos de contacto y sube ambos archivos en este formulario:</li>
                    </ul>
                    <a href="https://registro.forumries.com/premios-ries23/" target="_blank" className='cta'>Participa los Premios #RIES23</a>
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
    return <div id="hero">
        <h1 id="titulo">VIII Fórum RIES 2023</h1>
        <div id="fecha">
            <FontAwesomeIcon icon={faCalendar} />
            <p>8-9 de noviembre</p>

        </div>
        <div id="lugar">
            <FontAwesomeIcon icon={faLocationDot} />
            <p>Vigo, Galicia</p>
        </div>
        <a href="mailto:forumries@clustersaude.com" className="cta">Reserva tu plaza</a>
        <div id="descripcion">
            <p>#RIES es el fórum internacional de referencia a nivel nacional e internacional para abordar los retos y oportunidades del ecosistema de la salud. Liderado por el CSG (Cluster Saúde de Galicia), se ha gestado como foro de encuentro entre los principales agentes de los sectores sanitario y socio sanitario del ámbito público y privado a nivel nacional e internacional, en colaboración con nuestros partners estratégicos de la #ComunidadCSG</p>
        </div>
    </div>
}

export default Hero
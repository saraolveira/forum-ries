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
    </div>
}

export default Hero
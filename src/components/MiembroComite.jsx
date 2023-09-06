import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const MiembroComite = ({name, role, linkedin, img}) => {
    return (<div className="miembro-comite">
        <img className="comite-img" src={img} alt="" />
        {linkedin && <a href={linkedin} target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>}        
        <p className="miembro-name">{name}</p>
        <p className="miembro-role">{role}</p>
    </div>)
}

export default MiembroComite

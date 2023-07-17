import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faTwitter, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'

const RRSS = () => {
    return (<div id="rrss">
        <a href="https://www.linkedin.com/company/cluster-sa%C3%BAde-de-galicia/about/" className="rrss" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://www.instagram.com/clustersaude/" className="rrss" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://twitter.com/clustersaude" className="rrss" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="https://www.facebook.com/clustersaude/" className="rrss" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://www.youtube.com/channel/UCisy5d87j2cHSsqxWfZRF9A" className="rrss" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
        
    </div>)
}

export default RRSS
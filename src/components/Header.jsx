import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return <div id="header">
    <img id="logo" src="/RIES-logo-negativo.png" />
    <FontAwesomeIcon icon={faBars} size="2xl" id="menu-button"/>
  </div>
}

export default Header
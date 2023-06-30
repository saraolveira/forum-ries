import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
      setClicked(!clicked)
    }

    return <nav id="header">
    <img id="logo" src="/RIES-logo-negativo.png" />
    <div id="links" className={clicked ? 'active' : ''}></div>
    <FontAwesomeIcon icon={faBars} size="2xl" id="menu-button" onClick={handleClick}/>
  </nav>
}

export default Header
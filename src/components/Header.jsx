import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const [clicked, setClicked] = useState(false)
    const [icon, setIcon] = useState(faBars)
    const handleClick = () => {
      setClicked(!clicked)
      if (!clicked) {
        setIcon(faXmark)
      } else {
        setIcon(faBars)
      }
      
    }

    return <nav id="header">
    <img id="logo" src="/RIES-logo-negativo.png" />
    <div id="links" className={clicked ? 'active' : ''}></div>
    <FontAwesomeIcon icon={icon} size="2xl" id="menu-button" onClick={handleClick}/>
  </nav>
}

export default Header
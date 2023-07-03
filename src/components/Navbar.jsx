import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

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

    return <nav id="navbar">
    <img id="logo" src="/RIES-logo-negativo.png" />
    <div id="links" className={clicked ? 'active' : ''}>
      <a href="">#RIES22</a>
      <a href="">#RIES21</a>
      <a href="">#RIES20</a>
      <a href="">#RIES19</a>
      <a href="">#RIES18</a>
      <a href="">#RIES17</a>
      <a href="">#RIES16</a>
      <a href="https://forumries.com/exporpymes-2023/">EXPORPYMES</a>
    </div>
    <FontAwesomeIcon icon={icon} size="2xl" id="menu-button" onClick={handleClick}/>
  </nav>
}

export default Navbar
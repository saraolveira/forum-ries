import { useState } from 'react'
import { Link } from 'react-router-dom'
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
      <Link to="/"><img id="logo" src="/RIES-logo-negativo.png" /></Link>
    
    <div id="links" className={clicked ? 'active' : ''}>
      <Link to="/ries22">#RIES22</Link>
      <Link to="/ries21">#RIES21</Link>
      <Link to="/ries20">#RIES20</Link>
      <Link to="/ries19">#RIES19</Link>
      <Link to="/ries18">#RIES18</Link>
      <Link to="/ries17">#RIES17</Link>
      <Link to="/ries16">#RIES16</Link>
      <a href="https://forumries.com/exporpymes-2023/">EXPORPYMES</a>
    </div>
    <FontAwesomeIcon icon={icon} size="2xl" id="menu-button" onClick={handleClick}/>
  </nav>
}

export default Navbar
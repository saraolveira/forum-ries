import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'
import RRSS from './RRSS'

const lngs = {
  en: { nativeName: 'EN' },
  es: { nativeName: 'ES' },
  gl: { nativeName: 'GL' },
}

const Navbar = () => {

    const [clicked, setClicked] = useState(false)
    const [desplegar, setDesplegar] = useState(false)
    const [icon, setIcon] = useState(faBars)
    const [arrow, setArrow] = useState(faCaretDown)
    const handleClick = () => {
      setClicked(!clicked)
      if (!clicked) {
        setIcon(faXmark)
      } else {
        setIcon(faBars)
      }
    }
    const handleDesplegar = () => {
      setDesplegar(!desplegar)

      if (!desplegar) {
        setArrow(faCaretUp)
      } else {
        setArrow(faCaretDown)
      }
    }

    const { t, i18n } = useTranslation()

    return <nav id="navbar">
      <div id="logos">
        <Link to="/"><img id="logo" src="/RIES-logo-negativo.png" /></Link>
        <Link to="http://clustersaude.com/"><img id="logo-csg" src="/csg-negativo.png" /></Link>
      </div>

    
    <div id="links" className={clicked ? 'active' : ''}>
      <div id="main">
        <Link to="/premios">{t('menu.awards')}</Link>
        <div id="language-selector">
          {Object.keys(lngs).map((lng) => (
              <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                {lngs[lng].nativeName}
              </button>
          ))}
        </div>
      </div>
      <a href="#" onClick={handleDesplegar}>Ediciones RIES <FontAwesomeIcon icon={arrow} /></a>
      <div id="desplegable" className={desplegar ? 'open' : ''}>
        <Link to="/ries22">#RIES22</Link>
        <Link to="/ries21">#RIES21</Link>
        <Link to="/ries20">#RIES20</Link>
        <Link to="/ries19">#RIES19</Link>
        <Link to="/ries18">#RIES18</Link>
        <Link to="/ries17">#RIES17</Link>
        <Link to="/ries16">#RIES16</Link>
      </div>
      <a href="https://forumries.com/exporpymes-2023/">EXPORPYMES</a>
      <a href="https://clustersaude.com">CSG</a>
      <RRSS />
    </div>
    <FontAwesomeIcon icon={icon} size="2xl" id="menu-button" onClick={handleClick}/>
  </nav>
}

export default Navbar
import Edicion from "./Edicion"

const EdicionHero = ({logo, imagen, tematica}) => {
    return <div className="edicion-hero">
        <img className="logo" src={logo} />
        <img className="imagen" src={imagen}/>
        <p className="tematica-pag">{tematica}</p>
        <div className="edicion-links">
            <a>Programa</a>
            <a>Programa</a>
            <a>Programa</a>
        </div>
    </div>
}

export default EdicionHero
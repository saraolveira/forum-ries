const EdicionHeroSinIMG = ({logo, tematica}) => {
    return <div className="edicion-hero">
        <img className="logo sin-img" src={logo} />
        <p className="tematica-pag">{tematica}</p>
        <div className="edicion-links">
            <a>Programa</a>
            <a>Programa</a>
            <a>Programa</a>
        </div>
    </div>
}

export default EdicionHeroSinIMG
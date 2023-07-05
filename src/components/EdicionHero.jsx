const EdicionHero = ({logo, imagen, tematica, links}) => {
    return <div className="edicion-hero">
        <img className="logo" src={logo} />
        <img className="imagen" src={imagen}/>
        <p className="tematica-pag">{tematica}</p>
        <div className="edicion-links">{links}</div>
    </div>
}

export default EdicionHero
const EdicionHeroSinIMG = ({logo, tematica, links}) => {
    return <div className="edicion-hero">
        <img className="logo sin-img" src={logo} />
        <p className="tematica-pag">{tematica}</p>
        <div className="edicion-links">{links}</div>
    </div>
}

export default EdicionHeroSinIMG
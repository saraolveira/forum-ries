const PremioSlide = ({premio, proyecto, entidad, web, img}) => {
    return (<div className="premio-slide">
        <p className="nome-premio">{premio}</p>
        <div className="proyecto-entidad">
            <p className="proyecto">{proyecto}</p>
            <a href={web} target="_blank" className="entidad">{entidad}</a>
        </div>
        <img className="logo-premio" src={img} />
    </div>)
}

export default PremioSlide
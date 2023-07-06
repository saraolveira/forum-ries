import Premio3D from "./Premio3D"
import SliderPremios from "./SliderPremios"

const Premios = () => {
    return (<div id="premios">
        <h2>Premios RIES</h2>
        <Premio3D />
        <SliderPremios />
        <a href="/premios" id="cta-premios" className="cta">Descubre todos los premiados</a>
    </div>)
}

export default Premios
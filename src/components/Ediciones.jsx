import Edicion from "./Edicion.jsx"
import { Link } from "react-router-dom"

const Ediciones = () => {

    return <div id="ediciones">
         <Link to="/ries22"><Edicion 
            id="ries22"
            edicion="VII Fórum RIES 2022"
            tematica="Salud de Vanguardia: innovación asistencial y modelos de cuidados"
            ano="2022"
            lugar="Santiago de Compostela"
            delay={0.25}
        /></Link>
        <Edicion 
            id="ries21"
            edicion="VI Fórum RIES 2021"
            tematica="La revolución digital en la atención sanitaria y los cuidados"
            ano="2021"
            lugar="Mondariz, Pontevedra"
            delay={0.35}
        />
        <Edicion 
            id="ries20"
            edicion="V Fórum RIES 2020"
            tematica="Silver Economy: alimentación y calidad de vida"
            ano="2020"
            lugar="Palas de Rei, Lugo"
            delay={0.45}
        />
        <Edicion 
            id="ries19"
            edicion="IV Fórum RIES 2019"
            tematica="Silver Economy: por un envejecimiento activo y saludable"
            ano="2019"
            lugar="A Coruña"
            delay={0.55}
        />
        <Edicion 
            id="ries18"
            edicion="III Fórum RIES 2018"
            tematica="Ciudades inteligentes, saludables y amigables"
            ano="2018"
            lugar="Pontevedra"
            delay={0.25}
        />
        <Edicion 
            id="ries17"
            edicion="II Fórum RIES 2017"
            tematica="Living Labs. Presentación de LabSaúde"
            ano="2017"
            lugar="Ourense"
            delay={0.35}
        />
        <Edicion 
            id="ries18"
            edicion="I Fórum RIES 2016"
            tematica="Retos Internacionales del Ecosistema Salud. Soluciones Locales"
            ano="2016"
            lugar="Santiago de Compostela"
            delay={0.45}
        />
    </div>
}

export default Ediciones
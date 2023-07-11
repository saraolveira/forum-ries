import Edicion from "./Edicion.jsx"
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'

const Ediciones = () => {

    const { t } = useTranslation()

    return <div id="ediciones">
         <Link to="/ries22"><Edicion 
            id="ries22"
            edicion={t('ediciones.twentytwo')}
            tematica={t('tematicas.twentytwo')}
            ano="2022"
            lugar="Santiago de Compostela"
            delay={0.25}
        /></Link>
        <Link to="/ries21"><Edicion 
            id="ries21"
            edicion={t('ediciones.twentyone')}
            tematica={t('tematicas.twentyone')}
            ano="2021"
            lugar="Mondariz, Pontevedra"
            delay={0.35}
        /></Link>
        <Link to="/ries20"><Edicion 
            id="ries20"
            edicion={t('ediciones.twenty')}
            tematica={t('tematicas.twenty')}
            ano="2020"
            lugar="Palas de Rei, Lugo"
            delay={0.45}
        /></Link>
        <Link to="/ries19"><Edicion 
            id="ries19"
            edicion={t('ediciones.nineteen')}
            tematica={t('tematicas.nineteen')}
            ano="2019"
            lugar="A Coruña"
            delay={0.55}
        /></Link>
        <Link to="/ries18"><Edicion 
            id="ries18"
            edicion={t('ediciones.eighteen')}
            tematica={t('tematicas.eighteen')}
            ano="2018"
            lugar="Pontevedra"
            delay={0.25}
        /></Link>
        <Link to="/ries17"><Edicion 
            id="ries17"
            edicion={t('ediciones.seventeen')}
            tematica={t('tematicas.seventeen')}
            ano="2017"
            lugar="Ourense"
            delay={0.35}
        /></Link>
        <Link to="/ries16"><Edicion 
            id="ries18"
            edicion={t('ediciones.sixteen')}
            tematica={t('tematicas.sixteen')}
            ano="2016"
            lugar="Santiago de Compostela"
            delay={0.45}
        /></Link>
    </div>
}

export default Ediciones
import MiembroComite from './MiembroComite'
import datos from '../data.json'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next"

const Comite = () => {


    const {t} = useTranslation()

    const miembros  = datos[0].comite

    return (
    <div className="comite" id="comite">
        <h2>{t('pages.comite.comite')}</h2>
        <div className="miembros-comite">        
            {miembros.map((miembro, i) => <MiembroComite 
                key={i} 
                name={miembro.name}
                role={miembro.role}
                linkedin={miembro.linkedin}
                img={miembro.img}
                carta={miembro.carta}
            />)}
        </div>
        <Link to="comite" className="cta cta2">{t('pages.comite.cta')}</Link>
    </div>)
}

export default Comite
import MiembroComite from './MiembroComite'
import datos from '../data.json'

const Comite = () => {

    const miembros  = datos[0].comite

    return (
    <div className="comite" id="comite">
        <h2>Comité Organizador #RIES23</h2>
        <div className="miembros-comite">        
            {miembros.map((miembro, i) => <MiembroComite 
                key={i} 
                name={miembro.name}
                role={miembro.role}
                linkedin={miembro.linkedin}
                img={miembro.img}
            />)}
        </div>

    </div>)
}

export default Comite
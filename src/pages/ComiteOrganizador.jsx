import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import MiembroComiteDescripcion from '../components/MiembroComiteDescripcion'
import datos from '../data.json'

const ComiteOrganizador = () => {

    document.title = "Comité #RIES23"

    document.documentElement.style.setProperty('--color1', '#C48B27')
    document.documentElement.style.setProperty('--color2', '#0e1e2f')


    const miembros  = datos[0].comite

    return (<>
        <Navbar />
        <div className="comite" id="comite-page">
            <h2>Comité Organizador #RIES23</h2>
            <div className="miembros-comite">        
                {miembros.map((miembro, i) => <MiembroComiteDescripcion 
                    key={i} 
                    name={miembro.name}
                    role={miembro.role}
                    description={miembro.description}
                    linkedin={miembro.linkedin}
                    img={miembro.img}
                />)}
            </div>

        </div>
        <Footer />
    </>
    )
}

export default ComiteOrganizador
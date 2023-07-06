import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Navbar.jsx'
import Premio3D from '../components/Premio3D.jsx'
import Premios22 from '../components/Premios22.jsx'

const PremiosRIES = () => {
    return (<>
        <Navbar />
        <div id="premios-page">
            <Premio3D id="modelo"/>
            <div id="premios-section">
                <h2>Premios #RIES22</h2>
                <Premios22 />

                <h2>Premios #RIES21</h2>
            </div>
        </div>
        <Footer />
    </>)
}

export default PremiosRIES
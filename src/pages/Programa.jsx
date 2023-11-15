import Navbar from "../components/Navbar.jsx"
import Programa from "../components/Programa.jsx"
import Footer from "../components/Footer.jsx"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const ProgramaPage = () => {
    const { t } = useTranslation()

    document.title = "Programa #RIES23"

    document.documentElement.style.setProperty("--color1", "#C48B27")
    document.documentElement.style.setProperty("--color2", "#0e1e2f")

    return (
        <>
            <Navbar />
            <div id="programa-page">
                <Programa />

                <div className="patrocinio-links">
                    <a href="/Programa_RIES23.pdf" target="_blank">{t("pages.ponentes.programa")}</a>
                    <Link to="/ponentes">{t("pages.ponentes.cta")}</Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProgramaPage

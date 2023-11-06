import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Navbar.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { useTranslation } from "react-i18next"

const Ponentes = () => {
    document.title = "Ponentes #RIES23"
    const { t } = useTranslation()
    document.documentElement.style.setProperty("--color1", "#C48B27")
    document.documentElement.style.setProperty("--color2", "#0e1e2f")

    return (
        <>
            <Navbar />
            <div className="page">
                <div id="ponentes">
                    <h3>{t("pages.ponentes.tipos.keynotes")}</h3>
                    <div className="miembros-comite ponentes">
                        <div className="miembro-comite ponente">
                            <img
                                src="../ponentes/vania-de-la-fuente.png"
                                alt="Vânia de la Fuente-Núñez"
                                className="comite-img"
                            />
                            <p className="miembro-name">
                                Vânia de la Fuente-Núñez{" "}
                                <a
                                    href="https://www.linkedin.com/in/drvdelafuente"
                                    className="linkedin"
                                    target="_blank"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </p>

                            <p className="miembro-role">
                                {t("pages.ponentes.rol.vania")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.vania1")}
                                <br />
                                <br />
                                {t("pages.ponentes.description.vania2")}
                                <br />
                                <br />
                                {t("pages.ponentes.description.vania3")}
                            </p>
                            <p className="miembro-name">
                                {t("pages.ponentes.tipos.keynoteVania")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.resumenes.keynoteVania")}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                src="../ponentes/nick-guldemond.png"
                                alt="Nick Guldemond"
                                className="comite-img"
                            />
                            <p className="miembro-name">
                                Nick Guldemond{" "}
                                <a
                                    href="https://www.linkedin.com/in/nick-guldemond-a01b3a5/"
                                    className="linkedin"
                                    target="_blank"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </p>
                            <p className="miembro-role">
                                Leiden University Medical Centre / Medical
                                University Gdansk
                            </p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.nick")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.nick")}
                            </p>
                            <p className="miembro-name">
                                {t("pages.ponentes.tipos.keynoteNick")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.resumenes.keynoteNick")}
                            </p>
                        </div>
                    </div>

                    <h3>{t("pages.ponentes.tipos.agoraPlexus")}</h3>
                    <p className="resumen-programa">
                        {t("pages.ponentes.resumenes.agoraPlexus")}
                    </p>
                    <div className="miembros-comite ponentes">
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/jose-manuel-chao.png"
                                alt="José Manuel Chao Ardao"
                            />

                            <p className="miembro-name">
                                José Manuel Chao Ardao
                                <a
                                    href="https://www.linkedin.com/in/jos%C3%A9-manuel-chao-ardao-8986801ab/"
                                    target="_blank"
                                    className="linkedin"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.agoraLead")}
                            </p>
                            <p className="miembro-role">Plexus Tech</p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.joseManuel")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.joseManuel")}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/maria-brion.png"
                                alt="Maria Brion Martínez"
                            />

                            <p className="miembro-name">Maria Brion Martínez</p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.agoraLead")}
                            </p>
                            <p className="miembro-role">
                                Fundación Pública Galega de Medicina Xenómica
                            </p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.maria")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.maria")}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/xurxo-cegarra.png"
                                alt="Xurxo Cegarra González"
                            />

                            <p className="miembro-name">
                                Xurxo Cegarra González
                                <a
                                    href="https://www.linkedin.com/in/xurxoc"
                                    target="_blank"
                                    className="linkedin"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.agoraSpeak")}
                            </p>
                            <p className="miembro-role">Insati Innovation</p>
                            <p className="miembro-role">CEO</p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.xurxo")}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/mariona-baliu.png"
                                alt="Mariona Baliu Piqué"
                            />

                            <p className="miembro-name">
                                Mariona Baliu Piqué{" "}
                                <a
                                    href="https://www.linkedin.com/in/mariona-baliu-piqu%C3%A9-2305b499/"
                                    target="_blank"
                                    className="linkedin"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.agoraSpeak")}
                            </p>
                            <p className="miembro-role">Galaria EPSS</p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.mariona")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.mariona")}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/marcos-ortega.png"
                                alt="Marcos Ortega Hortas"
                            />

                            <p className="miembro-name">
                                Marcos Ortega Hortas
                                <a
                                    href="https://www.linkedin.com/in/marcos-ortega-hortas-82108b9/"
                                    target="_blank"
                                    className="linkedin"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.agoraSpeak")}
                            </p>
                            <p className="miembro-role">
                                Universidade da Coruña
                            </p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.marcos")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.marcos")}
                            </p>
                        </div>
                    </div>

                    <h3>{t("pages.ponentes.tipos.agoraITGALL")}</h3>
                    <p className="resumen-programa">
                        {t("pages.ponentes.resumenes.agoraITGALL")}
                    </p>
                    <div className="miembros-comite ponentes">
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/angel-rodriguez.png"
                                alt="Ángel Rodríguez Cerdeira"
                            />

                            <p className="miembro-name">
                                Ángel Rodríguez Cerdeira
                                <a
                                    href="https://www.linkedin.com/in/angel-rodriguez-cerdeira/"
                                    target="_blank"
                                    className="linkedin"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.agoraLead")} &{" "}
                                {t("pages.ponentes.tipos.proyecto")}
                            </p>
                            <p className="miembro-role">Atendo</p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.angel")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.angel")}
                                <br />
                                {t("pages.ponentes.description.angel2")}
                                <br />
                                {t("pages.ponentes.description.angel3")}
                                <br />
                                {t("pages.ponentes.description.angel4")}
                                <br />
                                {t("pages.ponentes.description.angel5")}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/nieves-freire.png"
                                alt="Nieves Freire Barea"
                            />

                            <p className="miembro-name">
                                Nieves Freire Barea
                                <a
                                    href="https://www.linkedin.com/in/nieves-freire-barea-ab5867173/"
                                    target="_blank"
                                    className="linkedin"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.agoraLead")}
                            </p>
                            <p className="miembro-role">
                                Cluster Saúde de Galicia, CSG
                            </p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.nieves")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.nieves")}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/cristofol-vidal.png"
                                alt="Cristofol Vidal Massanet"
                            />

                            <p className="miembro-name">
                                Cristofol Vidal Massanet
                                <a
                                    href="https://www.linkedin.com/in/cristofolvidalmassanet6766791a/"
                                    target="_blank"
                                    className="linkedin"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.agoraSpeak")}
                            </p>
                            <p className="miembro-role">
                                Health Living Lab Son Espases
                            </p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.cristofol")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.cristofol")}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                src="../ponentes/nick-guldemond.png"
                                alt="Nick Guldemond"
                                className="comite-img"
                            />
                            <p className="miembro-name">
                                Nick Guldemond{" "}
                                <a
                                    href="https://www.linkedin.com/in/nick-guldemond-a01b3a5/"
                                    className="linkedin"
                                    target="_blank"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.agoraSpeak")}
                            </p>
                            <p className="miembro-role">
                                Leiden University Medical Centre / Medical
                                University Gdansk
                            </p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.nick")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.nick")}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                src="../ponentes/konstantina-tsimpita.png"
                                alt="Konstantina Tsimpita"
                                className="comite-img"
                            />
                            <p className="miembro-name">
                                Konstantina Tsimpita{" "}
                                <a
                                    href="https://www.linkedin.com/in/konstantina-tsimpita-940814187/"
                                    className="linkedin"
                                    target="_blank"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.agoraSpeak")}
                            </p>
                            <p className="miembro-role">
                                Aristotle University of Thessaloniki
                            </p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.konstantina")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.konstantina")}
                            </p>
                        </div>
                    </div>

                    <h3>{t("pages.ponentes.tipos.agoraGradiant")}</h3>
                    <p className="resumen-programa">
                        {t("pages.ponentes.resumenes.agoraGradiant")}
                    </p>
                    <div className="miembros-comite ponentes">
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/agustin-canas.png"
                                alt="Agustín Cañas Rodríguez"
                            />

                            <p className="miembro-name">
                                Agustín Cañas Rodríguez{" "}
                                <a
                                    href="https://linkedin.com/in/agustincanas"
                                    target="_blank"
                                    className="linkedin"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.agoraLead")}
                            </p>
                            <p className="miembro-role">GRADIANT</p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.agustin")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.agustin")}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/joao-castro.png"
                                alt="João Castro Gomes"
                            />

                            <p className="miembro-name">
                                João Castro Gomes{" "}
                                <a
                                    href="https://www.linkedin.com/in/joaogomes91/"
                                    target="_blank"
                                    className="linkedin"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.agoraSpeak")}
                            </p>
                            <p className="miembro-role">Promptly Health</p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.joao")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.joao")}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/jorge-prado.png"
                                alt="Jorge Prado Casal"
                            />
                            <p className="miembro-name">Jorge Prado Casal</p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.agoraSpeak")}
                            </p>
                            <p className="miembro-role">
                                Conselleria de Sanidade / Servizo Galego de
                                Saúde
                            </p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.jorge")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.jorge")}
                            </p>
                        </div>
                    </div>

                    <h3>{t("pages.ponentes.tipos.agoraDomusVi")}</h3>
                    <p className="resumen-programa">
                        {t("pages.ponentes.resumenes.agoraDomusVi")}
                    </p>
                    <div className="miembros-comite ponentes">
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/jose-manuel-perez.png"
                                alt="José Manuel Pérez Fernández"
                            />
                            <p className="miembro-name">
                                José Manuel Pérez Fernández
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.agoraLead")}
                            </p>
                            <p className="miembro-role">DomusVi</p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.joseManuelPerez")}
                            </p>
                            <p className="miembro-description">
                                {t(
                                    "pages.ponentes.description.joseManuelPerez"
                                )}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/karen-hedge.png"
                                alt="Karen Hedge"
                            />

                            <p className="miembro-name">
                                Karen Hedge{" "}
                                <a
                                    href="https://linkedin.com/in/karen-hedge"
                                    target="_blank"
                                    className="linkedin"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.agoraSpeak")}
                            </p>
                            <p className="miembro-role">Scottish Care </p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.karen")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.karen")}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/ramon-ceravalls.png"
                                alt="Ramon Ceravalls"
                            />

                            <p className="miembro-name">
                                Ramon Ceravalls{" "}
                                <a
                                    href="https://www.linkedin.com/in/ramon-ceravalls-rabassa-1a3098ab"
                                    target="_blank"
                                    className="linkedin"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.agoraSpeak")}
                            </p>
                            <p className="miembro-role">Qida</p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.ramon")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.ramon")}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/roberto-carlos-agis.png"
                                alt="Roberto Carlos Agís Balboa"
                            />

                            <p className="miembro-name">
                                Roberto Carlos Agís Balboa{" "}
                                <a
                                    href="https://linkedin.com/in/robertocarlosagisbalboa"
                                    target="_blank"
                                    className="linkedin"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.agoraSpeak")}
                            </p>
                            <p className="miembro-role">
                                NeuroEpigenetics Lab - Grupo de Investigación
                                Traslacional en Enfermedades Neurológicas (ITEN)
                                del IDIS
                            </p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.robertoCarlos")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.robertoCarlos")}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/cesar-veiga.png"
                                alt="Cesar Veiga"
                            />
                            <p className="miembro-name">Cesar Veiga</p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.agoraSpeak")}
                            </p>
                            <p className="miembro-role">
                                IISGS-Fundación Biomédica Galicia Sur
                            </p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.cesar")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.cesar")}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/javier-ventosa.png"
                                alt="Jose Javier Ventosa Rial"
                            />

                            <p className="miembro-name">
                                Jose Javier Ventosa Rial
                                <a
                                    href="https://linkedin.com/in/javier-ventosa-rial-b200884a"
                                    target="_blank"
                                    className="linkedin"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.agoraSpeak")}
                            </p>
                            <p className="miembro-role">
                                Conselleria de Politica Social e Xuventude,
                                Xunta de Galicia
                            </p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.javier")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.javier")}
                            </p>
                        </div>
                    </div>

                    <h3>{t("pages.ponentes.tipos.agoraRibera")}</h3>
                    <p className="resumen-programa">
                        {t("pages.ponentes.resumenes.agoraRibera")}
                    </p>
                    <div className="miembros-comite ponentes">
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/jose-david-zafrilla.png"
                                alt="José David Zafrilla Martinez"
                            />

                            <p className="miembro-name">
                                José David Zafrilla Martinez{" "}
                                <a
                                    href="https://www.linkedin.com/company/ribera-salud-s-a-/"
                                    target="_blank"
                                    className="linkedin"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.agoraLead")}
                            </p>
                            <p className="miembro-role">Grupo Ribera Salud</p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.joseDavid")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.joseDavid")}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/carlos-catalan.png"
                                alt="Carlos Catalán Oliver"
                            />
                            <p className="miembro-name">
                                Carlos Catalán Oliver
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.agoraSpeak")}
                            </p>
                            <p className="miembro-role">Grupo Ribera Salud</p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.carlosCatalan")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.carlosCatalan")}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/antonio-pose.png"
                                alt="Antonio Pose Reino"
                            />
                            <p className="miembro-name">Antonio Pose Reino</p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.agoraSpeak")}
                            </p>
                            <p className="miembro-role">
                                Servizo Galego de Saúde
                            </p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.antonio")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.antonio")}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/jorge-aboal.png"
                                alt="Jorge Aboal Viñas"
                            />
                            <p className="miembro-name">Jorge Aboal Viñas</p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.agoraSpeak")}
                            </p>
                            <p className="miembro-role">Xunta de Galicia</p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.jorgeAboal")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.jorgeAboal")}
                            </p>
                        </div>
                    </div>

                    <h3>{t("pages.ponentes.tipos.agoraFerrovial")}</h3>
                    <p className="resumen-programa">
                        {t("pages.ponentes.resumenes.agoraFerrovial")}
                    </p>
                    <div className="miembros-comite ponentes">
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/pablo-alvarez.png"
                                alt="Pablo Alvarez Alvarez"
                            />

                            <p className="miembro-name">
                                Pablo Alvarez Alvarez{" "}
                                <a
                                    href="https://www.linkedin.com/in/pabloalvareza"
                                    target="_blank"
                                    className="linkedin"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.agoraLead")}
                            </p>
                            <p className="miembro-role">Ferrovial</p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.pablo")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.pablo")}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/francisco-javier-cobas.png"
                                alt="Francisco Javier Cobas Gamallo"
                            />

                            <p className="miembro-name ">
                                Francisco Javier Cobas Gamallo
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.agoraSpeak")}
                            </p>
                            <p className="miembro-role">
                                Hospital Universitario La Paz
                            </p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.franciscoJavier")}
                            </p>
                            <p className="miembro-description">
                                {t(
                                    "pages.ponentes.description.franciscoJavier"
                                )}
                            </p>
                        </div>

                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/miguel-angel-navas.png"
                                alt="Miguel Angel Navas Martín"
                            />
                            <p className="miembro-name">
                                Miguel Angel Navas Martín
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.agoraSpeak")}
                            </p>
                            <p className="miembro-role">
                                Ingeniería ABConsultores
                            </p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.miguelAngel")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.miguelAngel")}
                            </p>
                        </div>
                    </div>

                    <h3>{t("pages.ponentes.tipos.mesaBalidea")}</h3>
                    <p className="resumen-programa">
                        {t("pages.ponentes.resumenes.mesaBalidea")}
                    </p>
                    <div className="miembros-comite ponentes">
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/jose-angel-abeal.png"
                                alt="Jose Angel Abeal Riveiros"
                            />

                            <p className="miembro-name">
                                Jose Angel Abeal Riveiros
                                <a
                                    href="https://www.linkedin.com/in/jose-angel-abeal-riveiros-4016819/"
                                    target="_blank"
                                    className="linkedin"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.mesaM")}
                            </p>
                            <p className="miembro-role">Balidea</p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.joseAngel")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.joseAngel")}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/albert-king.png"
                                alt="Albert King"
                            />
                            <p className="miembro-name">Albert King</p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.mesaS")}
                            </p>
                            <p className="miembro-role">
                                NHS National Services Scotland
                            </p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.albert")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.albert")}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/carmen-garcia.png"
                                alt="Carmen García Mateo"
                            />

                            <p className="miembro-name">
                                Carmen García Mateo{" "}
                                <a
                                    href="https://www.linkedin.com/in/carmen-garc%C3%ADa-mateo-19018a8b/"
                                    target="_blank"
                                    className="linkedin"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.mesaS")}
                            </p>
                            <p className="miembro-role">
                                AtlanTTic Research Center - Universidad de Vigo
                            </p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.carmen")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.carmen")}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/marcos-ortega.png"
                                alt="Marcos Ortega Hortas"
                            />

                            <p className="miembro-name">
                                Marcos Ortega Hortas{" "}
                                <a
                                    href="https://www.linkedin.com/in/marcos-ortega-hortas-82108b9/"
                                    target="_blank"
                                    className="linkedin"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.mesaS")}
                            </p>
                            <p className="miembro-role">
                                Universidade da Coruña
                            </p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.marcos")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.marcos")}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/benigno-roson.png"
                                alt="Benigno Rosón"
                            />
                            <p className="miembro-name">Benigno Rosón</p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.mesaS")}
                            </p>
                            <p className="miembro-role">Xunta de Galicia</p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.benigno")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.benigno")}
                            </p>
                        </div>
                    </div>

                    <h3>{t("pages.ponentes.tipos.mesaTecnologia")}</h3>
                    <p className="resumen-programa">
                        {t("pages.ponentes.resumenes.mesaTecnologia")}
                    </p>
                    <div className="miembros-comite ponentes">
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/patricia-fernandez.png"
                                alt="Patricia Fernández Liz"
                            />

                            <p className="miembro-name">
                                Patricia Fernández Liz
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.mesaM")}
                            </p>
                            <p className="miembro-role">
                                Axencia Galega de Innovación
                            </p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.patricia")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.patricia")}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/carlos-alberto-castaño.png"
                                alt="Carlos Alberto Castaño Moraga"
                            />

                            <p className="miembro-name">
                                Carlos Alberto Castaño Moraga{" "}
                                <a
                                    href="https://www.linkedin.com/in/carlos-alberto-casta%C3%B1o-moraga-887a5854/"
                                    target="_blank"
                                    className="linkedin"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.mesaS")}
                            </p>
                            <p className="miembro-role">
                                Fujitsu Technology Solutions
                            </p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.carlos")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.carlos")}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/abdel-hakim.png"
                                alt="Abdel Hakim Moustafa"
                            />

                            <p className="miembro-name">
                                Abdel Hakim Moustafa{" "}
                                <a
                                    href="https://www.linkedin.com/in/amoustafamd/"
                                    target="_blank"
                                    className="linkedin"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.mesaS")}
                            </p>
                            <p className="miembro-role">
                                Hospital de la Santa Creu i Sant Pau
                            </p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.abdel")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.abdel")}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/manuel-rodriguez.png"
                                alt="Manuel Rodríguez Fernández"
                            />

                            <p className="miembro-name">
                                Manuel Rodríguez Fernández{" "}
                                <a
                                    href="https://www.linkedin.com/in/manuel-pm4gov/"
                                    target="_blank"
                                    className="linkedin"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.mesaS")}
                            </p>
                            <p className="miembro-role">PM4GOV</p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.manuel")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.manuel")}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/david-pisano.png"
                                alt="David G Pisano"
                            />

                            <p className="miembro-name">
                                David G Pisano{" "}
                                <a
                                    href="https://es.linkedin.com/in/david-g-pisano"
                                    target="_blank"
                                    className="linkedin"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.mesaS")}
                            </p>
                            <p className="miembro-role">
                                GENOMCORE - Telefónica
                            </p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.david")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.david")}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/david-dapena.png"
                                alt="David Dapena Ortiz"
                            />

                            <p className="miembro-name">
                                David Dapena Ortiz{" "}
                                <a
                                    href="https://www.linkedin.com/in/david-dapena-ortiz-a3407613/"
                                    target="_blank"
                                    className="linkedin"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.mesaS")}
                            </p>
                            <p className="miembro-role">Grupo Ribera Salud</p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.manuelBosch")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.manuelBosch")}
                            </p>
                        </div>
                    </div>

                    <h3>{t("pages.ponentes.tipos.mesaZendal")}</h3>
                    <p className="resumen-programa">
                        {t("pages.ponentes.resumenes.mesaZendal")}
                    </p>
                    <div className="miembros-comite ponentes">
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/beatriz-diaz.png"
                                alt="Beatriz Díaz Lorenzo"
                            />

                            <p className="miembro-name">
                                Beatriz Díaz Lorenzo{" "}
                                <a
                                    href="https://www.linkedin.com/in/beatrizd%C3%ADazlorenzo/"
                                    target="_blank"
                                    className="linkedin"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.mesaM")}
                            </p>
                            <p className="miembro-role">Zendal</p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.beatriz")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.beatriz")}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/graziella-almendral.png"
                                alt="Graziella Almendral Del Rio"
                            />

                            <p className="miembro-name">
                                Graziella Almendral Del Rio{" "}
                                <a
                                    href="https://www.linkedin.com/in/graziellaalmendral/"
                                    target="_blank"
                                    className="linkedin"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.mesaS")}
                            </p>
                            <p className="miembro-role">ANIS</p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.graziella")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.graziella")}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/jose-antonio-lopez.png"
                                alt="José Antonio López Guerrero"
                            />

                            <p className="miembro-name">
                                José Antonio López Guerrero
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.mesaS")}
                            </p>
                            <p className="miembro-role">
                                Universidad Autónoma de Madrid
                            </p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.joseAntonioLopez")}
                            </p>
                            <p className="miembro-description">
                                {t(
                                    "pages.ponentes.description.joseAntonioLopez"
                                )}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/bruno-gonzalez.png"
                                alt="Bruno González Zorn"
                            />
                            <p className="miembro-name">
                                Bruno González Zorn{" "}
                                <a
                                    href="https://www.linkedin.com/in/bruno-gonzalez-zorn-21214a/"
                                    target="_blank"
                                    className="linkedin"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.mesaS")}
                            </p>
                            <p className="miembro-role">
                                Universidad Complutense de Madrid
                            </p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.bruno")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.bruno")}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/joaquim-magalhaes.png"
                                alt="Joaquim Magalhães"
                            />
                            <p className="miembro-name">Joaquim Magalhães</p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.mesaS")}
                            </p>
                            <p className="miembro-role">
                                Health Cluster Portugal
                            </p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.joaquim")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.joaquim")}
                            </p>
                        </div>
                    </div>

                    <h3>{t("pages.ponentes.tipos.proyectos")}</h3>
                    <div className="miembros-comite ponentes">
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/silvia-suarez.png"
                                alt="Silvia Suárez Luque"
                            />

                            <p className="miembro-name">Silvia Suárez Luque </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.proyecto")}
                            </p>
                            <p className="miembro-role">
                                Dirección Xeral de Saúde Pública
                            </p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.silvia")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.silvia")}
                            </p>
                            <p className="miembro-name">
                                {t("pages.ponentes.tipos.proyectoXoia")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.resumenes.proyectoXoia")}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/jose-antonio-pena.png"
                                alt="José Antonio Pena Parga"
                            />

                            <p className="miembro-name">
                                José Antonio Pena Parga{" "}
                                <a
                                    href="https://www.linkedin.com/in/joseantoniopenaparga/"
                                    target="_blank"
                                    className="linkedin"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.proyecto")}
                            </p>
                            <p className="miembro-role">
                                Ocean Kube Environment
                            </p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.joseAntonio")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.joseAntonio")}
                            </p>
                            <p className="miembro-name">
                                {t("pages.ponentes.tipos.proyectoOcean")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.resumenes.proyectoOcean")}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/ricardo-boedo.png"
                                alt="Ricardo Boedo Facal"
                            />

                            <p className="miembro-name">Ricardo Boedo Facal</p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.proyecto")}
                            </p>
                            <p className="miembro-role">GSK</p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.ricardo")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.ricardo")}
                            </p>
                            <p className="miembro-name">
                                {t("pages.ponentes.tipos.proyectoGSK")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.resumenes.proyectoGSK")}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/angel-rodriguez.png"
                                alt="Ángel Rodríguez Cerdeira"
                            />

                            <p className="miembro-name">
                                Ángel Rodríguez Cerdeira
                                <a
                                    href="https://www.linkedin.com/in/angel-rodriguez-cerdeira/"
                                    target="_blank"
                                    className="linkedin"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.proyecto")}
                            </p>
                            <p className="miembro-role">Longevita</p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.angel")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.angel")}
                                <br />
                                {t("pages.ponentes.description.angel2")}
                                <br />
                                {t("pages.ponentes.description.angel3")}
                                <br />
                                {t("pages.ponentes.description.angel4")}
                                <br />
                                {t("pages.ponentes.description.angel5")}
                            </p>
                            <p className="miembro-name">
                                {t(
                                    "pages.ponentes.tipos.proyectoLongevitaAtendo"
                                )}
                            </p>
                            <p className="miembro-description">
                                {t(
                                    "pages.ponentes.resumenes.proyectoLongevitaAtendo"
                                )}
                            </p>
                        </div>
                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/luis-barros.png"
                                alt="Luis Barros Ríos"
                            />

                            <p className="miembro-name">
                                Luis Barros Ríos{" "}
                                <a
                                    href="https://www.linkedin.com/in/luisbarrosrios/"
                                    target="_blank"
                                    className="linkedin"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.proyecto")}
                            </p>
                            <p className="miembro-role">Atendo</p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.luis")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.luis")}
                            </p>
                            <p className="miembro-name">
                                {t(
                                    "pages.ponentes.tipos.proyectoLongevitaAtendo"
                                )}
                            </p>
                            <p className="miembro-description">
                                {t(
                                    "pages.ponentes.resumenes.proyectoLongevitaAtendo"
                                )}
                            </p>
                        </div>

                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/albert-creixell.png"
                                alt="Albert Creixell Pons"
                            />

                            <p className="miembro-name">
                                Albert Creixell Pons{" "}
                                <a
                                    href="https://www.linkedin.com/in/acreixell/"
                                    target="_blank"
                                    className="linkedin"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.proyecto")}
                            </p>
                            <p className="miembro-role">Amazon</p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.albertCreixell")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.albertCreixell")}
                            </p>
                            <p className="miembro-name">
                                {t("pages.ponentes.tipos.proyectoAmazon")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.resumenes.proyectoAmazon")}
                            </p>
                        </div>

                        <div className="miembro-comite ponente">
                            <img
                                className="comite-img"
                                src="/ponentes/andrea-lopez.png"
                                alt="Andrea López Sánchez"
                            />

                            <p className="miembro-name">Andrea López Sánchez</p>
                            <p className="miembro-role speaker">
                                {t("pages.ponentes.tipos.proyecto")}
                            </p>
                            <p className="miembro-role">IKEA</p>
                            <p className="miembro-role">
                                {t("pages.ponentes.rol.andrea")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.description.andrea")}
                            </p>
                            <p className="miembro-name">
                                {t("pages.ponentes.tipos.proyectoIKEA")}
                            </p>
                            <p className="miembro-description">
                                {t("pages.ponentes.resumenes.proyectoIKEA")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Ponentes

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const PonentesBlock = () => {
    const { t } = useTranslation()

    return (
        <div className="comite" id="ponentes-block">
            <h2>{t("pages.ponentes.ponentes")}</h2>

            <div className="miembros-comite">
                {/* keynotes */}
                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/vania-de-la-fuente.png"
                        alt="Vânia de la Fuente-Núñez"
                    />
                    <a
                        href="https://www.linkedin.com/in/drvdelafuente"
                        target="_blank"
                        className="lkd"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <p className="miembro-name">Vânia de la Fuente-Núñez</p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.keynote")}
                    </p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.vania")}
                    </p>
                </div>
                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/nick-guldemond.png"
                        alt="Nick Guldemond "
                    />
                    <a
                        href="https://www.linkedin.com/in/nick-guldemond-a01b3a5/"
                        target="_blank"
                        className="lkd"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <p className="miembro-name">Nick Guldemond </p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.keynote")} &{" "}
                        {t("pages.ponentes.tipos.agoraSpeak")}
                    </p>
                    <p className="miembro-role">
                        Leiden University Medical Centre / Medical University
                        Gdansk
                    </p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.nick")}
                    </p>
                </div>

                {/* agora leader */}
                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/jose-manuel-chao.png"
                        alt="José Manuel Chao Ardao"
                    />
                    <a
                        href="https://www.linkedin.com/in/jos%C3%A9-manuel-chao-ardao-8986801ab/"
                        target="_blank"
                        className="lkd"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <p className="miembro-name">José Manuel Chao Ardao</p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.agoraLead")}
                    </p>
                    <p className="miembro-role">Plexus Tech</p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.joseManuel")}
                    </p>
                </div>

                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/angel-rodriguez.png"
                        alt="Ángel Rodríguez Cerdeira"
                    />
                    <a
                        href="https://www.linkedin.com/in/angel-rodriguez-cerdeira/"
                        target="_blank"
                        className="lkd"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <p className="miembro-name">Ángel Rodríguez Cerdeira</p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.agoraLead")}
                    </p>
                    <p className="miembro-role">Atendo</p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.angel")}
                    </p>
                </div>

                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/nieves-freire.png"
                        alt="Nieves Freire Barea"
                    />
                    <a
                        href="https://www.linkedin.com/in/nieves-freire-barea-ab5867173/"
                        target="_blank"
                        className="lkd"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <p className="miembro-name">Nieves Freire Barea</p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.agoraLead")}
                    </p>
                    <p className="miembro-role">
                        Cluster Saúde de Galicia, CSG
                    </p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.nieves")}
                    </p>
                </div>

                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/agustin-canas.png"
                        alt="Agustín Cañas Rodríguez"
                    />
                    <a
                        href="https://linkedin.com/in/agustincanas"
                        target="_blank"
                        className="lkd"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <p className="miembro-name">Agustín Cañas Rodríguez</p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.agoraLead")}
                    </p>
                    <p className="miembro-role">GRADIANT</p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.agustin")}
                    </p>
                </div>

                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/jose-manuel-perez.png"
                        alt="José Manuel Pérez Fernández"
                    />
                    <p className="miembro-name">José Manuel Pérez Fernández</p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.agoraLead")}
                    </p>
                    <p className="miembro-role">DomusVi</p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.joseManuelPerez")}
                    </p>
                </div>

                {/* round table moderator */}
                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/jose-angel-abeal.png"
                        alt="Jose Angel Abeal Riveiros"
                    />
                    <a
                        href="https://www.linkedin.com/in/jose-angel-abeal-riveiros-4016819/"
                        target="_blank"
                        className="lkd"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <p className="miembro-name">Jose Angel Abeal Riveiros</p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.mesaM")}
                    </p>
                    <p className="miembro-role">Balidea</p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.joseAngel")}
                    </p>
                </div>

                {/* agora speaker */}
                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/xurxo-cegarra.png"
                        alt="Xurxo Cegarra González"
                    />
                    <a
                        href="https://www.linkedin.com/in/xurxoc"
                        target="_blank"
                        className="lkd"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <p className="miembro-name">Xurxo Cegarra González</p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.agoraSpeak")}
                    </p>
                    <p className="miembro-role">Insati Innovation</p>
                    <p className="miembro-role">CEO</p>
                </div>
                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/mariona-baliu.png"
                        alt="Mariona Baliu Piqué"
                    />
                    <a
                        href="https://www.linkedin.com/in/mariona-baliu-piqu%C3%A9-2305b499/"
                        target="_blank"
                        className="lkd"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <p className="miembro-name">Mariona Baliu Piqué</p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.agoraSpeak")}
                    </p>
                    <p className="miembro-role">Galaria EPSS</p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.mariona")}
                    </p>
                </div>
                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/marcos-ortega.png"
                        alt="Marcos Ortega Hortas"
                    />
                    <a
                        href="https://www.linkedin.com/in/marcos-ortega-hortas-82108b9/"
                        target="_blank"
                        className="lkd"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <p className="miembro-name">Marcos Ortega Hortas</p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.agoraSpeak")} &{" "}
                        {t("pages.ponentes.tipos.mesaS")}
                    </p>
                    <p className="miembro-role">Universidade da Coruña</p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.marcos")}
                    </p>
                </div>

                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/cristofol-vidal.png"
                        alt="Cristofol Vidal Massanet"
                    />
                    <a
                        href="https://www.linkedin.com/in/cristofolvidalmassanet6766791a/"
                        target="_blank"
                        className="lkd"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <p className="miembro-name">Cristofol Vidal Massanet</p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.agoraSpeak")}
                    </p>
                    <p className="miembro-role">
                        Health Living Lab Son Espases
                    </p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.cristofol")}
                    </p>
                </div>
                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/karen-hedge.png"
                        alt="Karen Hedge"
                    />
                    <a
                        href="https://linkedin.com/in/karen-hedge"
                        target="_blank"
                        className="lkd"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <p className="miembro-name">Karen Hedge</p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.agoraSpeak")}
                    </p>
                    <p className="miembro-role">Scottish Care </p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.karen")}
                    </p>
                </div>

                {/* round table speaker */}
                <div className="miembro-comite">
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
                </div>

                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/carmen-garcia.png"
                        alt="Carmen García Mateo"
                    />
                    <a
                        href="https://www.linkedin.com/in/carmen-garc%C3%ADa-mateo-19018a8b/"
                        target="_blank"
                        className="lkd"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <p className="miembro-name">Carmen García Mateo</p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.mesaS")}
                    </p>
                    <p className="miembro-role">
                        AtlanTTic Research Center - Universidad de Vigo
                    </p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.carmen")}
                    </p>
                </div>
            </div>
            <Link to="ponentes" className="cta cta2">
                {t("pages.ponentes.cta")}
            </Link>
        </div>
    )
}

export default PonentesBlock

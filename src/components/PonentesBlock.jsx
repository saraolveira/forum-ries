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
                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/jose-david-zafrilla.png"
                        alt="José David Zafrilla Martinez"
                    />
                    <a
                        href="https://www.linkedin.com/company/ribera-salud-s-a-/"
                        target="_blank"
                        className="lkd"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <p className="miembro-name">José David Zafrilla Martinez</p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.agoraLead")}
                    </p>
                    <p className="miembro-role">Grupo Ribera Salud</p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.joseDavid")}
                    </p>
                </div>
                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/pablo-alvarez.png"
                        alt="Pablo Alvarez Alvarez"
                    />
                    <a
                        href="https://www.linkedin.com/in/pabloalvareza"
                        target="_blank"
                        className="lkd"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <p className="miembro-name">Pablo Alvarez Alvarez</p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.agoraLead")}
                    </p>
                    <p className="miembro-role">Ferrovial</p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.pablo")}
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
                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/patricia-fernandez.png"
                        alt="Patricia Fernández Liz"
                    />

                    <p className="miembro-name">Patricia Fernández Liz</p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.mesaM")}
                    </p>
                    <p className="miembro-role">Axencia Galega de Innovación</p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.patricia")}
                    </p>
                </div>
                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/beatriz-diaz.png"
                        alt="Beatriz Díaz Lorenzo"
                    />
                    <a
                        href="https://www.linkedin.com/in/beatrizd%C3%ADazlorenzo/"
                        target="_blank"
                        className="lkd"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <p className="miembro-name">Beatriz Díaz Lorenzo</p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.mesaM")}
                    </p>
                    <p className="miembro-role">Zendal</p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.beatriz")}
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
                        src="/ponentes/konstantina-tsimpita.png"
                        alt="Konstantina Tsimpita"
                    />
                    <a
                        href="https://www.linkedin.com/in/konstantina-tsimpita-940814187/"
                        target="_blank"
                        className="lkd"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <p className="miembro-name">Konstantina Tsimpita</p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.agoraSpeak")}
                    </p>
                    <p className="miembro-role">
                        Aristotle University of Thessaloniki
                    </p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.konstantina")}
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
                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/ramon-ceravalls.png"
                        alt="Ramon Ceravalls"
                    />
                    <a
                        href="https://www.linkedin.com/in/ramon-ceravalls-rabassa-1a3098ab"
                        target="_blank"
                        className="lkd"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <p className="miembro-name">Ramon Ceravalls</p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.agoraSpeak")}
                    </p>
                    <p className="miembro-role">QIDA</p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.ramon")}
                    </p>
                </div>
                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/roberto-carlos-agis.png"
                        alt="Roberto Carlos Agís Balboa"
                    />
                    <a
                        href="https://linkedin.com/in/robertocarlosagisbalboa"
                        target="_blank"
                        className="lkd"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <p className="miembro-name">Roberto Carlos Agís Balboa</p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.agoraSpeak")}
                    </p>
                    <p className="miembro-role">
                        NeuroEpigenetics Lab - Grupo de Investigación
                        Traslacional en Enfermedades Neurológicas (ITEN) del
                        IDIS
                    </p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.robertoCarlos")}
                    </p>
                </div>
                <div className="miembro-comite">
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
                </div>
                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/javier-ventosa.png"
                        alt="Jose Javier Ventosa Rial"
                    />
                    <a
                        href="https://linkedin.com/in/javier-ventosa-rial-b200884a"
                        target="_blank"
                        className="lkd"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <p className="miembro-name">Jose Javier Ventosa Rial</p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.agoraSpeak")}
                    </p>
                    <p className="miembro-role">
                        Conselleria de Politica Social e Xuventude, Xunta de
                        Galicia
                    </p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.javier")}
                    </p>
                </div>
                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/joao-castro.png"
                        alt="João Castro Gomes"
                    />
                    <a
                        href="https://www.linkedin.com/in/joaogomes91/"
                        target="_blank"
                        className="lkd"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <p className="miembro-name">João Castro Gomes</p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.agoraSpeak")}
                    </p>
                    <p className="miembro-role">Promptly Health</p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.joao")}
                    </p>
                </div>
                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/carlos-catalan.png"
                        alt="Carlos Catalán Oliver"
                    />
                    <p className="miembro-name">Carlos Catalán Oliver</p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.agoraSpeak")}
                    </p>
                    <p className="miembro-role">Grupo Ribera Salud</p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.carlosCatalan")}
                    </p>
                </div>
                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/antonio-pose.png"
                        alt="Antonio Pose Reino"
                    />
                    <p className="miembro-name">Antonio Pose Reino</p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.agoraSpeak")}
                    </p>
                    <p className="miembro-role">Servizo Galego de Saúde</p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.antonio")}
                    </p>
                </div>
                <div className="miembro-comite">
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
                </div>
                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/francisco-javier-cobas.png"
                        alt="Francisco Javier Cobas Gamallo"
                    />

                    <p className="miembro-name">
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
                </div>

                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/miguel-angel-navas.png"
                        alt="Miguel Angel Navas Martín"
                    />
                    <p className="miembro-name">Miguel Angel Navas Martín</p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.agoraSpeak")}
                    </p>
                    <p className="miembro-role">Ingeniería ABConsultores</p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.miguel")}
                    </p>
                </div>

                <div className="miembro-comite">
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
                        Conselleria de Sanidade / Servizo Galego de Saúde
                    </p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.jorge")}
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
                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/carlos-alberto-castaño.png"
                        alt="Carlos Alberto Castaño Moraga"
                    />
                    <a
                        href="https://www.linkedin.com/in/carlos-alberto-casta%C3%B1o-moraga-887a5854/"
                        target="_blank"
                        className="lkd"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <p className="miembro-name">
                        Carlos Alberto Castaño Moraga
                    </p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.mesaS")}
                    </p>
                    <p className="miembro-role">Fujitsu Technology Solutions</p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.carlos")}
                    </p>
                </div>
                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/abdel-hakim.png"
                        alt="Abdel Hakim Moustafa"
                    />
                    <a
                        href="https://www.linkedin.com/in/amoustafamd/"
                        target="_blank"
                        className="lkd"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <p className="miembro-name">Abdel Hakim Moustafa</p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.mesaS")}
                    </p>
                    <p className="miembro-role">
                        Hospital de la Santa Creu i Sant Pau
                    </p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.abdel")}
                    </p>
                </div>
                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/graziella-almendral.png"
                        alt="Graziella Almendral Del Rio"
                    />
                    <a
                        href="https://www.linkedin.com/in/graziellaalmendral/"
                        target="_blank"
                        className="lkd"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <p className="miembro-name">Graziella Almendral Del Rio</p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.mesaS")}
                    </p>
                    <p className="miembro-role">Anis</p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.graziella")}
                    </p>
                </div>
                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/manuel-rodriguez.png"
                        alt="Manuel Rodríguez Fernández"
                    />
                    <a
                        href="https://www.linkedin.com/in/manuel-pm4gov/"
                        target="_blank"
                        className="lkd"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <p className="miembro-name">Manuel Rodríguez Fernández</p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.mesaS")}
                    </p>
                    <p className="miembro-role">PM4GOV</p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.manuel")}
                    </p>
                </div>
                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/jose-antonio-lopez.png"
                        alt="José Antonio López Guerrero"
                    />
                    <p className="miembro-name">José Antonio López Guerrero</p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.mesaS")}
                    </p>
                    <p className="miembro-role">
                        Universidad Autónoma de Madrid
                    </p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.joseAntonioLopez")}
                    </p>
                </div>
                <div className="miembro-comite">
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
                </div>
                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/david-pisano.png"
                        alt="David G Pisano"
                    />
                    <a
                        href="https://es.linkedin.com/in/david-g-pisano"
                        target="_blank"
                        className="lkd"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <p className="miembro-name">David G Pisano</p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.mesaS")}
                    </p>
                    <p className="miembro-role">GENOMCORE - Telefónica</p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.david")}
                    </p>
                </div>
                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/david-dapena.png"
                        alt="David Dapena Ortiz"
                    />
                    <a
                        href="https://www.linkedin.com/in/david-dapena-ortiz-a3407613/"
                        target="_blank"
                        className="lkd"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <p className="miembro-name">David Dapena Ortiz</p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.mesaS")}
                    </p>
                    <p className="miembro-role">Grupo Ribera Salud</p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.manuelBosch")}
                    </p>
                </div>
                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/bruno-gonzalez.png"
                        alt="Bruno González Zorn"
                    />
                    <a
                        href="https://www.linkedin.com/in/bruno-gonzalez-zorn-21214a/"
                        target="_blank"
                        className="lkd"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <p className="miembro-name">Bruno González Zorn</p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.mesaS")}
                    </p>
                    <p className="miembro-role">
                        Universidad Complutense de Madrid
                    </p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.bruno")}
                    </p>
                </div>
                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/joaquim-magalhaes.png"
                        alt="Joaquim Magalhães"
                    />
                    <p className="miembro-name">Joaquim Magalhães</p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.mesaS")}
                    </p>
                    <p className="miembro-role">Health Cluster Portugal</p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.joaquim")}
                    </p>
                </div>
                {/* proyectos */}
                <div className="miembro-comite">
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
                </div>
                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/jose-antonio-pena.png"
                        alt="José Antonio Pena Parga"
                    />
                    <a
                        href="https://www.linkedin.com/in/joseantoniopenaparga/"
                        target="_blank"
                        className="lkd"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>

                    <p className="miembro-name">José Antonio Pena Parga </p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.proyecto")}
                    </p>
                    <p className="miembro-role">Ocean Kube Environment</p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.joseAntonio")}
                    </p>
                </div>
                <div className="miembro-comite">
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
                </div>
                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/luis-barros.png"
                        alt="Luis Barros Ríos"
                    />
                    <a
                        href="https://www.linkedin.com/in/luisbarrosrios/"
                        target="_blank"
                        className="lkd"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>

                    <p className="miembro-name">Luis Barros Ríos</p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.proyecto")}
                    </p>
                    <p className="miembro-role">Atendo</p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.luis")}
                    </p>
                </div>

                <div className="miembro-comite">
                    <img
                        className="comite-img"
                        src="/ponentes/albert-creixell.png"
                        alt="Albert Creixell Pons"
                    />
                    <a
                        href="https://www.linkedin.com/in/acreixell/"
                        target="_blank"
                        className="lkd"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>

                    <p className="miembro-name">Albert Creixell Pons</p>
                    <p className="miembro-role speaker">
                        {t("pages.ponentes.tipos.proyecto")}
                    </p>
                    <p className="miembro-role">Amazon</p>
                    <p className="miembro-role">
                        {t("pages.ponentes.rol.albertCreixell")}
                    </p>
                </div>

                <div className="miembro-comite">
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
                </div>
            </div>
            <Link to="ponentes" className="cta cta2">
                {t("pages.ponentes.cta")}
            </Link>
        </div>
    )
}

export default PonentesBlock

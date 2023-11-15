import Premio from "./Premio"
import { useTranslation } from "react-i18next"

const Premios23 = () => {
    const { t } = useTranslation()

    return (
        <>
            <Premio
                premio={t("premios.innovacion")}
                proyecto="Plataforma de Resultados en Salud"
                entidad="PlexusTech"
                web="https://www.plexus.es/gl/"
                video="https://youtu.be/7Y8KV3L-V04"
            />
            <Premio
                premio={t("premios.impacto")}
                proyecto="Albergue de Peregrinos Senior Bidealde"
                entidad="IDEA"
                web="http://www.ideainnovacion.com/"
                video="https://youtu.be/-gkw-D0fzCQ"
            />
            <Premio
                premio={t("premios.conocimiento")}
                proyecto="10mets"
                entidad="10 METS"
                web="https://10mets.com/"
                video="https://youtu.be/qI1_Glt5XaU"
            />
            <Premio
                premio={t("premios.comunidad")}
                proyecto="BiG TEAM"
                entidad="BiG Formación"
                web="https://www.bigformacion.es/"
                video="https://youtu.be/gfDUEtdSKvs"
            />
            <Premio
                premio={t("premios.revelacion")}
                proyecto="FlowReserve: medicina personalizada en cardiología"
                entidad="FlowReserve Labs"
                web="http://flowreserve.es/"
                video="https://youtu.be/MliGx0T4iIM"
            />
            <Premio
                premio={t("premios.resiliencia")}
                entidad="UNIRISCO"
                web="https://www.unirisco.com/"
            />
        </>
    )
}

export default Premios23

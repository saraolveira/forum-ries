import MiembroComite from "./MiembroComite"
import datos from "../data.json"
import { useTranslation } from "react-i18next"

const ComiteHonor = () => {
    const { t } = useTranslation()

    const miembros = datos[0].honorifico

    return (
        <div className="comite" id="comite">
            <h2>{t("pages.comite.honorifico")}</h2>
            <div className="miembros-comite">
                {miembros.map((miembro, i) => (
                    <MiembroComite
                        key={i}
                        name={miembro.name}
                        img={miembro.img}
                    />
                ))}
            </div>
        </div>
    )
}

export default ComiteHonor

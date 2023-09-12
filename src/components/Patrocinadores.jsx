import { useTranslation } from "react-i18next"
const Patrocinadores = () => {

    const { t } = useTranslation()

    return (<div id="patrocinadores">
        <h3>{t('patrocinios.ltype2')}</h3>
            <a href="https://www.atendo.es/" target="_blank"><img src="/patrocinadores/atendo.png" alt="Atendo" /></a>
        <h3>{t('patrocinios.ltype3')}</h3>
        <div className="block-patrocinadores">
            <a href="https://www.domusvi.es/" target="_blank"><img src="/patrocinadores/domusvi.png" alt="Gradiant" /></a>
            <a href="https://www.gradiant.org/" target="_blank"><img src="/patrocinadores/gradiant.png" alt="Gradiant" /></a>
            <a href="https://www.plexus.es/" target="_blank"><img src="/patrocinadores/plexus.png" alt="Plexus" /></a>
        </div>
        <h3>{t('patrocinios.ltype5')}</h3>
        <div className="block-patrocinadores">
            <a href="https://www.balidea.com/" target="_blank"><img src="/patrocinadores/balidea.png" alt="Balidea" /></a>
        </div>
    </div>)
}

export default Patrocinadores
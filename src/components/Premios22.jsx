import Premio from "./Premio"
import { useTranslation } from 'react-i18next'

const Premios22 = () => {
    const { t } = useTranslation()

    return (<>
        <Premio 
            premio={t('premios.innovacion')}
            proyecto="Clusteres Tereapéuticos Moleculares para el tratamiento del cáncer: eliminar el miedo al diagnóstico"
            entidad="Arjuna Therapeutics"
            web="https://arjunatherapeutics.com/"
            video="https://youtu.be/suDgCT-JKLk"
        />
        <Premio 
            premio={t('premios.impacto')}
            proyecto="Estratexias para hábitats saudables"
            entidad="Estudio MMASA"
            web="https://www.mmasa.net/"
            video="https://youtu.be/XEXVKXb96d0"
        />
        <Premio 
            premio={t('premios.conocimiento')}
            proyecto="Neuro-TIC"
            entidad="Grupo VARPA – UDC"
            web="http://www.varpa.es/"
            video="https://youtu.be/KnfFzTLv-4g"
        />
        <Premio 
            premio={t('premios.comunidad')}
            proyecto="Cátedra de edadismo"
            entidad="ATENDO/AFAGA"
            web="http://edadismo.org/"
            video="https://youtu.be/xOH2pSwLlzk"
        />
        <Premio 
            premio={t('premios.revelacion')}
            proyecto="Fisioterapia virtual inmersiva en personas mayores para la mejora de capacidades físicas y funcionales"
            entidad="Universidade de Vigo"
            web="https://www.uvigo.gal/"
            video="https://youtu.be/l4yx1qoathE"
        />
        <Premio 
            premio={t('premios.resiliencia')}
            entidad="Hifas da Terra"
            web="https://hifasdaterra.com/"
            video="https://youtu.be/WNp9HrXaj8U"
        />

    </>)
}

export default Premios22
import Premio from "./Premio"
import { useTranslation } from 'react-i18next'

const Premios21 = () => {
    const { t } = useTranslation()

    return (<>
        <Premio 
            premio={t('premios.innovacion')}
            proyecto="NETA"
            entidad="Balidea"
            web="https://www.balidea.com/"
            video="https://youtu.be/PArGM-YAu3Y"
        />
        <Premio 
            premio={t('premios.impacto')}
            proyecto="ENREDANDO"
            entidad="Cruz Vermella"
            web="https://cruzvermella.gal/"
            video="https://www.youtube.com/watch?v=uxpeRNd9pgg"
        />
        <Premio 
            premio={t('premios.conocimiento')}
            proyecto="SMARTCARDIA"
            entidad="Balidea"
            web="https://www.balidea.com/"
            video="https://www.youtube.com/watch?v=xVBqIXy6Njg"
        />
        <Premio 
            premio={t('premios.comunidad')}
            proyecto="Plexus Tech"
            entidad="Plexus Tech"
            web="https://www.plexus.es/"
            video="https://www.youtube.com/watch?v=twY6uUO54jw"
        />
        <Premio 
            premio={t('premios.revelacion')}
            proyecto="SignaMed"
            entidad="Universidad de Vigo"
            web="https://signamed.uvigo.es/"
            video="https://www.youtube.com/watch?v=MOn9dO7Ae9M"
        />
        <Premio 
            premio={t('premios.resiliencia')}
            proyecto="Sonidos de la memoria"
            entidad="AFAGA Alzheimer"
            web="https://afaga.com/"
            video="https://www.youtube.com/watch?v=UCOvCdohOHw"
        />

    </>)
}

export default Premios21
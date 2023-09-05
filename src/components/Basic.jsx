
import { useTranslation } from 'react-i18next'
import ReactPlayer from 'react-player/youtube'

const Basic = () => {
    const { t } = useTranslation()

    return (
        <div id="basic" className="section text">
            <div id="introduccion">
                <p>{t('hero.description')}</p>
                <div id="bullets">
                    <div className="bullet">
                        <img src="/icono1.png" />
                        <p>{t('hero23.i1')}</p>
                    </div>
                    <div className="bullet">
                        <img src="/icono2.png" />
                        <p>{t('hero23.i2')}</p>
                    </div>
                    <div className="bullet">
                        <img src="/icono3.png" />
                        <p>{t('hero23.i3')}</p>
                    </div>
                    <div className="bullet">
                        <img src="/icono4.png" />
                        <p>{t('hero23.i4')}</p>
                    </div>
                    <div className="bullet">
                        <img src="/icono5.png" />
                        <p>{t('hero23.i5')}</p>
                    </div>
                </div>
            </div>
            <div id="teaser"><ReactPlayer url="https://www.youtube.com/watch?v=prjPkqKQiaY&ab_channel=ClusterSa%C3%BAdedeGalicia" /></div>
        </div>
    )
}

export default Basic
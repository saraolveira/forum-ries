import { useTranslation } from "react-i18next"

const Programa = () => {

    const {t} = useTranslation()

    return (<div id="programa">
        <div className="columna-programa">
            <p className="dia-programa">{t('program23.day8')}</p>
            <p className="horario">{t('program23.hour8')}</p>
            <table className="tabla-programa">
                <tr>
                    <td><img className="icono-programa" src="/icono23.svg" /></td>
                    <td>{t('program23.p81')}</td>
                </tr>
                <tr>
                    <td><img className="icono-programa" src="/icono23.svg" /></td>
                    <td>{t('program23.p82')}</td>
                </tr>
                <tr>
                    <td><img className="icono-programa" src="/icono23.svg" /></td>
                    <td>{t('program23.p83')}</td>
                </tr>
                <tr>
                    <td><img className="icono-programa" src="/icono23.svg" /></td>
                    <td>{t('program23.p84')}</td>
                </tr>
                <tr>
                    <td><img className="icono-programa" src="/icono23.svg" /></td>
                    <td>{t('program23.p85')}</td>
                </tr>
                <tr>
                    <td><img className="icono-programa" src="/icono23.svg" /></td>
                    <td>{t('program23.p86')}</td>
                </tr>
            </table>
        </div>
        <div className="columna-programa">
            <p className="dia-programa">{t('program23.day9')}</p>
            <p className="horario">{t('program23.hour9')}</p>
            <table className="tabla-programa">
                <tr>
                    <td><img className="icono-programa" src="/icono23.svg" /></td>
                    <td>{t('program23.p91')}</td>
                </tr>
                <tr>
                    <td><img className="icono-programa" src="/icono23.svg" /></td>
                    <td>{t('program23.p92')}</td>
                </tr>
                <tr>
                    <td><img className="icono-programa" src="/icono23.svg" /></td>
                    <td>{t('program23.p93')}</td>
                </tr>
                <tr>
                    <td><img className="icono-programa" src="/icono23.svg" /></td>
                    <td>{t('program23.p94')}</td>
                </tr>
                <tr>
                    <td><img className="icono-programa" src="/icono23.svg" /></td>
                    <td>{t('program23.p95')}</td>
                </tr>
                <tr>
                    <td><img className="icono-programa" src="/icono23.svg" /></td>
                    <td>{t('program23.p96')}</td>
                </tr>
                <tr>
                    <td><img className="icono-programa" src="/icono23.svg" /></td>
                    <td>{t('program23.p97')}</td>
                </tr>
            </table>
        </div>
    </div>)
}

export default Programa
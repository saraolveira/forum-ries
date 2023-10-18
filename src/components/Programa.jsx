import { useTranslation } from "react-i18next"

const Programa = ({ hide }) => {
    const { t } = useTranslation()

    return (
        <div id="programa">
            <div className="columna-programa">
                <p className="dia-programa">{t("program23.day8")}</p>
                <p className="horario">{t("program23.hour8")}</p>
                <table className="tabla-programa">
                    <tbody>
                        <tr>
                            <td className="td-icono">
                                <img
                                    className="icono-programa"
                                    src="/icono23.svg"
                                />
                            </td>
                            <td className="hora-programa">16:00 18:00</td>
                            <td>{t("program23.p81")}</td>
                        </tr>
                        <tr>
                            <td className="td-icono">
                                <img
                                    className="icono-programa"
                                    src="/icono23.svg"
                                />
                            </td>
                            <td className="hora-programa">19:00</td>

                            <td>{t("program23.p82")}</td>
                        </tr>
                        <tr>
                            <td className="td-icono">
                                <img
                                    className="icono-programa"
                                    src="/icono23.svg"
                                />
                            </td>
                            <td className="hora-programa">19:40</td>

                            <td>{t("program23.p83")}</td>
                        </tr>
                        <tr>
                            <td className="td-icono">
                                <img
                                    className="icono-programa"
                                    src="/icono23.svg"
                                />
                            </td>
                            <td className="hora-programa">20:40</td>

                            <td>{t("program23.p84")}</td>
                        </tr>
                        <tr>
                            <td className="td-icono">
                                <img
                                    className="icono-programa"
                                    src="/icono23.svg"
                                />
                            </td>
                            <td className="hora-programa">20:45</td>

                            <td>{t("program23.p85")}</td>
                        </tr>
                        <tr>
                            <td className="td-icono">
                                <img
                                    className="icono-programa"
                                    src="/icono23.svg"
                                />
                            </td>
                            <td className="hora-programa">22:00</td>

                            <td>{t("program23.p86")}</td>
                        </tr>
                        <tr>
                            <td className="td-icono">
                                <img
                                    className="icono-programa"
                                    src="/icono23.svg"
                                />
                            </td>
                            <td className="hora-programa">22:30</td>

                            <td>{t("program23.p87")}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="columna-programa">
                <p className="dia-programa">{t("program23.day9")}</p>
                <p className="horario">{t("program23.hour9")}</p>
                <table className="tabla-programa">
                    <tbody>
                        <tr>
                            <td className="td-icono">
                                <img
                                    className="icono-programa"
                                    src="/icono23.svg"
                                />
                            </td>
                            <td className="hora-programa">9:15 9:30</td>
                            <td>{t("program23.p91")}</td>
                        </tr>
                        <tr>
                            <td className="td-icono">
                                <img
                                    className="icono-programa"
                                    src="/icono23.svg"
                                />
                            </td>
                            <td className="hora-programa">9:30 10:00</td>
                            <td>{t("program23.p92")}</td>
                        </tr>
                        <tr>
                            <td className="td-icono">
                                <img
                                    className="icono-programa"
                                    src="/icono23.svg"
                                />
                            </td>
                            <td className="hora-programa">10:00 10:45</td>

                            <td>{t("program23.p93")}</td>
                        </tr>
                        <tr>
                            <td className="td-icono">
                                <img
                                    className="icono-programa"
                                    src="/icono23.svg"
                                />
                            </td>
                            <td className="hora-programa">10:45 11:30</td>

                            <td>{t("program23.p94")}</td>
                        </tr>
                        <tr>
                            <td className="td-icono">
                                <img
                                    className="icono-programa"
                                    src="/icono23.svg"
                                />
                            </td>
                            <td className="hora-programa">11:30 12:15</td>

                            <td>{t("program23.p95")}</td>
                        </tr>
                        <tr>
                            <td className="td-icono">
                                <img
                                    className="icono-programa"
                                    src="/icono23.svg"
                                />
                            </td>
                            <td className="hora-programa">12:15 12:45</td>

                            <td>{t("program23.p96")}</td>
                        </tr>
                        <tr>
                            <td className="td-icono">
                                <img
                                    className="icono-programa"
                                    src="/icono23.svg"
                                />
                            </td>
                            <td className="hora-programa">12:45 13:30</td>

                            <td>{t("program23.p97")}</td>
                        </tr>
                        <tr>
                            <td className="td-icono">
                                <img
                                    className="icono-programa"
                                    src="/icono23.svg"
                                />
                            </td>
                            <td className="hora-programa">13:30 14:00</td>

                            <td>{t("program23.p98")}</td>
                        </tr>
                        <tr>
                            <td className="td-icono">
                                <img
                                    className="icono-programa"
                                    src="/icono23.svg"
                                />
                            </td>
                            <td className="hora-programa">14:00 15:30</td>

                            <td>{t("program23.p99")}</td>
                        </tr>
                        <tr className="no-bottom">
                            <td className="td-icono">
                                <img
                                    className="icono-programa"
                                    src="/icono23.svg"
                                />
                            </td>
                            <td className="hora-programa">15:30 18:30</td>

                            <td>{t("program23.p910")}</td>
                        </tr>
                        <tr className={`${hide ? "extra-no" : "extra"} `}>
                            <td className="td-icono"></td>
                            <td className="hora-programa">15:30 16:30</td>

                            <td>
                                {t("pages.ponentes.tipos.agoraGradiant")}|{" "}
                                {t("pages.ponentes.tipos.agoraFerrovial")} |{" "}
                                {t("program23.pitch")}
                            </td>
                        </tr>
                        <tr className={`${hide ? "extra-no" : "extra"} `}>
                            <td className="td-icono"></td>
                            <td className="hora-programa">16:30 17:30</td>

                            <td>
                                {t("pages.ponentes.tipos.agoraPlexus")} |{" "}
                                {t("pages.ponentes.tipos.agoraDomusVi")} |{" "}
                                {t("program23.pitch")}
                            </td>
                        </tr>
                        <tr
                            className={`${
                                hide ? "extra-no" : "extra extra-last"
                            } `}
                        >
                            <td className="td-icono"></td>
                            <td className="hora-programa">17:30 18:30</td>

                            <td>
                                {t("pages.ponentes.tipos.agoraITGALL")} | Ágora
                                TBC | {t("program23.pitch")}
                            </td>
                        </tr>
                        <tr>
                            <td className="td-icono">
                                <img
                                    className="icono-programa"
                                    src="/icono23.svg"
                                />
                            </td>
                            <td className="hora-programa">18:30 19:00 </td>

                            <td>{t("program23.p911")}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Programa

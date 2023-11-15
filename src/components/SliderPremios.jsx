import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules"
import { useTranslation } from "react-i18next"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import PremioSlide from "./PremioSlide.jsx"

const SliderPremios = () => {
    const { t } = useTranslation()

    return (
        <div id="slider-premios">
            <Swiper
                effect={"coverflow"}
                centeredSlides={true}
                slidesPerView={"auto"}
                loop={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 30,
                    depth: 100,
                    modifier: 5,
                    slideShadows: false,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[EffectCoverflow, Autoplay]}
            >
                {/* 23 */}
                <SwiperSlide>
                    <PremioSlide
                        premio={t("premios.innovacion")}
                        proyecto="Plataforma de Resultados en Salud"
                        entidad="PlexusTech"
                        web="https://www.plexus.es/gl/"
                        img="/ries23-logo.png"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PremioSlide
                        premio={t("premios.impacto")}
                        proyecto="Albergue de Peregrinos Senior Bidealde"
                        entidad="IDEA"
                        web="http://www.ideainnovacion.com/"
                        img="/ries23-logo.png"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PremioSlide
                        premio={t("premios.conocimiento")}
                        proyecto="10mets"
                        entidad="10 METS"
                        web="https://10mets.com/"
                        img="/ries23-logo.png"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PremioSlide
                        premio={t("premios.comunidad")}
                        proyecto="BiG TEAM"
                        entidad="BiG Formación"
                        web="https://www.bigformacion.es/"
                        img="/ries23-logo.png"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PremioSlide
                        premio={t("premios.revelacion")}
                        proyecto="FlowReserve: medicina personalizada en cardiología"
                        entidad="FlowReserve Labs"
                        web="http://flowreserve.es/"
                        img="/ries23-logo.png"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PremioSlide
                        premio={t("premios.resiliencia")}
                        entidad="UNIRISCO"
                        web="https://www.unirisco.com/"
                        img="/ries23-logo.png"
                    />
                </SwiperSlide>
                {/* 22 */}
                <SwiperSlide>
                    <PremioSlide
                        premio={t("premios.innovacion")}
                        proyecto="Clusteres Tereapéuticos Moleculares para el tratamiento del cáncer: eliminar el miedo al diagnóstico"
                        entidad="Arjuna Therapeutics"
                        web="https://arjunatherapeutics.com/"
                        img="/ries22-logo.png"
                    ></PremioSlide>
                </SwiperSlide>
                <SwiperSlide>
                    <PremioSlide
                        premio={t("premios.impacto")}
                        proyecto="Estratexias para hábitats saudables"
                        entidad="Estudio MMASA"
                        web="https://www.mmasa.net/"
                        img="/ries22-logo.png"
                    ></PremioSlide>
                </SwiperSlide>
                <SwiperSlide>
                    <PremioSlide
                        premio={t("premios.conocimiento")}
                        proyecto="Neuro-TIC"
                        entidad="Grupo VARPA – UDC"
                        web="http://www.varpa.es/"
                        img="/ries22-logo.png"
                    ></PremioSlide>
                </SwiperSlide>
                <SwiperSlide>
                    <PremioSlide
                        premio={t("premios.comunidad")}
                        proyecto="Cátedra de edadismo"
                        entidad="ATENDO/AFAGA"
                        web="http://edadismo.org/"
                        img="/ries22-logo.png"
                    ></PremioSlide>
                </SwiperSlide>
                <SwiperSlide>
                    <PremioSlide
                        premio={t("premios.revelacion")}
                        proyecto="Fisioterapia virtual inmersiva en personas mayores para la mejora de capacidades físicas y funcionales"
                        entidad="Universidade de Vigo"
                        web="https://www.uvigo.gal/"
                        img="/ries22-logo.png"
                    ></PremioSlide>
                </SwiperSlide>
                <SwiperSlide>
                    <PremioSlide
                        premio={t("premios.resiliencia")}
                        proyecto="Entregado por BIOREPOS a:"
                        entidad="Hifas da Terra"
                        web="https://hifasdaterra.com/"
                        img="/ries22-logo.png"
                    ></PremioSlide>
                </SwiperSlide>
                {/* 21 */}
                <SwiperSlide>
                    <PremioSlide
                        premio={t("premios.innovacion")}
                        proyecto="NETA"
                        entidad="Balidea"
                        web="https://www.balidea.com/"
                        img="/ries21-logo.png"
                    ></PremioSlide>
                </SwiperSlide>
                <SwiperSlide>
                    <PremioSlide
                        premio={t("premios.impacto")}
                        proyecto="ENREDANDO"
                        entidad="Cruz Vermella"
                        web="https://cruzvermella.gal/"
                        img="/ries21-logo.png"
                    ></PremioSlide>
                </SwiperSlide>
                <SwiperSlide>
                    <PremioSlide
                        premio={t("premios.conocimiento")}
                        proyecto="SMARTCARDIA"
                        entidad="Balidea"
                        web="https://www.balidea.com/"
                        img="/ries21-logo.png"
                    ></PremioSlide>
                </SwiperSlide>
                <SwiperSlide>
                    <PremioSlide
                        premio={t("premios.comunidad")}
                        proyecto="Plexus Tech"
                        entidad="Plexus Tech"
                        web="https://www.plexus.es/"
                        img="/ries21-logo.png"
                    ></PremioSlide>
                </SwiperSlide>
                <SwiperSlide>
                    <PremioSlide
                        premio={t("premios.revelacion")}
                        proyecto="SignaMed"
                        entidad="Universidad de Vigo"
                        web="https://signamed.uvigo.es/"
                        img="/ries21-logo.png"
                    ></PremioSlide>
                </SwiperSlide>
                <SwiperSlide>
                    <PremioSlide
                        premio={t("premios.resiliencia")}
                        proyecto="Sonidos de la memoria"
                        entidad="AFAGA Alzheimer"
                        web="https://afaga.com/"
                        img="/ries21-logo.png"
                    ></PremioSlide>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SliderPremios

import {Swiper, SwiperSlide} from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import PremioSlide from './PremioSlide.jsx'


const SliderPremios = () => {

    return (<div id="slider-premios">
      <Swiper
            effect={'coverflow'}
            centeredSlides={true}
            slidesPerView={'auto'}
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
                disableOnInteraction: false
            }}
            modules={[EffectCoverflow, Autoplay]}
        >
            {/* 22 */}
            <SwiperSlide>
                <PremioSlide
                    premio="Innovación CSG"
                    proyecto="Clusteres Tereapéuticos Moleculares para el tratamiento del cáncer: eliminar el miedo al diagnóstico"
                    entidad="Arjuna Therapeutics"
                    web="https://arjunatherapeutics.com/"
                    img="/ries22-logo.png"
                ></PremioSlide>
            </SwiperSlide>
            <SwiperSlide>
                <PremioSlide
                    premio="Impacto en las personas"
                    proyecto="Estratexias para hábitats saudables"
                    entidad="Estudio MMASA"
                    web="https://www.mmasa.net/"
                    img="/ries22-logo.png"
                ></PremioSlide>
            </SwiperSlide>
            <SwiperSlide>
                <PremioSlide
                    premio="Conocimiento"
                    proyecto="Neuro-TIC"
                    entidad="Grupo VARPA – UDC"
                    web="http://www.varpa.es/"
                    img="/ries22-logo.png"
                ></PremioSlide>
            </SwiperSlide>
            <SwiperSlide>
                <PremioSlide
                    premio="Comunidad CSG"
                    proyecto="Cátedra de edadismo"
                    entidad="ATENDO/AFAGA"
                    web="http://edadismo.org/"
                    img="/ries22-logo.png"
                ></PremioSlide>
            </SwiperSlide>
            <SwiperSlide>
                <PremioSlide
                    premio="Revelación"
                    proyecto="Fisioterapia virtual inmersiva en personas mayores para la mejora de capacidades físicas y funcionales"
                    entidad="Universidade de Vigo"
                    web="https://www.uvigo.gal/"
                    img="/ries22-logo.png"
                ></PremioSlide>
            </SwiperSlide>
            <SwiperSlide>
                <PremioSlide
                    premio="Resiliencia"
                    proyecto="Entregado por BIOREPOS a:"
                    entidad="Hifas da Terra"
                    web="https://hifasdaterra.com/"
                    img="/ries22-logo.png"
                ></PremioSlide>
            </SwiperSlide>
            {/* 21 */}
            <SwiperSlide>
                <PremioSlide
                    premio="Innovación CSG"
                    proyecto="NETA"
                    entidad="Balidea"
                    web="https://www.balidea.com/"
                    img="/ries21-logo.png"
                ></PremioSlide>
            </SwiperSlide>
            <SwiperSlide>
                <PremioSlide
                    premio="Impacto en las personas"
                    proyecto="ENREDANDO"
                    entidad="Cruz Vermella"
                    web="https://cruzvermella.gal/"
                    img="/ries21-logo.png"
                ></PremioSlide>
            </SwiperSlide>
            <SwiperSlide>
                <PremioSlide
                    premio="Conocimiento"
                    proyecto="SMARTCARDIA"
                    entidad="Balidea"
                    web="https://www.balidea.com/"
                    img="/ries21-logo.png"
                ></PremioSlide>
            </SwiperSlide>
            <SwiperSlide>
                <PremioSlide
                    premio="Comunidad CSG"
                    proyecto="Plexus Tech"
                    entidad="Plexus Tech"
                    web="https://www.plexus.es/"
                    img="/ries21-logo.png"
                ></PremioSlide>
            </SwiperSlide>
            <SwiperSlide>
                <PremioSlide
                    premio="Revelación"
                    proyecto="SignaMed"
                    entidad="Universidad de Vigo"
                    web="https://signamed.uvigo.es/"
                    img="/ries21-logo.png"
                ></PremioSlide>
            </SwiperSlide>
            <SwiperSlide>
                <PremioSlide
                    premio="Resiliencia"
                    proyecto="Sonidos de la memoria"
                    entidad="AFAGA Alzheimer"
                    web="https://afaga.com/"
                    img="/ries21-logo.png"
                ></PremioSlide>
            </SwiperSlide>
      </Swiper>
    </div>)
}

export default SliderPremios
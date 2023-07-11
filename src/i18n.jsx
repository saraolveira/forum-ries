import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            es: {
                translation: {
                    menu: {
                        awards: 'Premios RIES'
                    },
                    ediciones: {
                        twentythree: 'VIII Fórum RIES 2023',
                        twentytwo: 'VII Fórum RIES 2022',
                        twentyone: 'VI Fórum RIES 2021',
                        twenty: 'V Fórum RIES 2020',
                        nineteen: 'IV Fórum RIES 2019',
                        eighteen: 'III Fórum RIES 2018',
                        seventeen: 'II Fórum RIES 2017',
                        sixteen: 'I Fórum RIES 2016',
                    },
                    tematicas: {
                        twentytwo: 'Salud de Vanguardia: innovación asistencial y modelos de cuidados',
                        twentyone: 'La revolución digital en la atención sanitaria y los cuidados',
                        twenty: 'Silver Economy: alimentación y calidad de vida',
                        nineteen: 'Silver Economy: por un envejecimiento activo y saludable',
                        eighteen: 'Ciudades inteligentes, saludables y amigables',
                        seventeen: 'Living Labs. Presentación de LabSaúde',
                        sixteen: 'Retos Internacionales del Ecosistema Salud. Soluciones Locales',
                    },
                    hero: {
                        date: '8-9 de noviembre',
                        cta: 'Reserva tu plaza',
                        description: '#RIES es el fórum internacional de referencia a nivel nacional e internacional para abordar los retos y oportunidades del ecosistema de la salud. Liderado por el CSG (Cluster Saúde de Galicia), se ha gestado como foro de encuentro entre los principales agentes de los sectores sanitario y socio sanitario del ámbito público y privado a nivel nacional e internacional, en colaboración con nuestros partners estratégicos de la #ComunidadCSG'
                    },
                    premios: {
                        awards: 'Premios RIES',
                        twentytwo: 'Premios #RIES22',
                        twentyone: 'Premios #RIES21',
                        cta: 'Descubre todos los premiados',
                        innovacion: 'Innovacion CSG',
                        impacto: 'Impacto en las personas',
                        conocimiento: 'Conocimiento',
                        comunidad: 'Comunidad CSG',
                        revelacion: 'Revelación',
                        resiliencia: 'Resiliencia'
                    },
                    links: {
                        report: 'Memoria',
                        gallery: 'Galería',
                        news: 'Noticias',
                        press:  'Clipping de prensa',
                        videos: 'Vídeos',
                        program: 'Programa',
                        speakers: 'Ponentes',
                        introduction: 'Introducción',
                        presentation: 'Presentación',
                        presentations: 'Presentaciones',
                        neuroatlantic: 'Proyecto neuroATLANTIC',
                        ahfes: 'Proyecto AHFES',
                        committee: 'Comité',
                        greeting: 'Saludo presidenta',
                        letter: 'Carta del Presidente #RIES22'
                    }
                }
            },
            en: {
                translation: {
                    menu: {
                        awards: 'RIES Awards'
                    },
                    ediciones: {
                        twentythree: 'VIII RIES Forum 2023',
                        twentytwo: 'VII RIES Forum 2022',
                        twentyone: 'VI RIES Forum 2021',
                        twenty: 'V RIES Forum 2020',
                        nineteen: 'IV RIES Forum 2019',
                        eighteen: 'III RIES Forum 2018',
                        seventeen: 'II RIES Forum 2017',
                        sixteen: 'I RIES Forum 2016',
                    },
                    tematicas: {
                        twentytwo: 'State of the Art in Health: Healthcare Innovation and New Care Models',
                        twentyone: 'Digital Revolution in Healthcare and Care',
                        twenty: 'Silver Economy: Food & Wellbneing',
                        nineteen: 'Silver Economy: for Active and Healthy Ageing',
                        eighteen: 'Smart, healthy and friendly cities',
                        seventeen: 'Living Labs. LabSaúde presentation',
                        sixteen: 'International Challenges of the Health Ecosystem. Local Solutions.',
                    },
                    hero: {
                        date: 'November 8th-9th',
                        cta: 'Book your place',
                        description: '#RIES is the international reference forum at a national and international level to address the challenges and opportunities of the health ecosystem. Led by the CSG (Cluster Saúde de Galicia), it has been created as a meeting forum between the main agents of the public and private health and socio-health sectors at a European level in collaboration with our strategic partners of the #CSG_Community'
                    },
                    premios: {
                        awards: 'RIES Awards',
                        twentytwo: '#RIES22 Awards',
                        twentyone: '#RIES21 Awards',
                        cta: 'Discover all the awarded projects',
                        innovacion: 'Innovation CSG',
                        impacto: 'Impact on people',
                        conocimiento: 'Knowledge',
                        comunidad: 'CSG Community',
                        revelacion: 'Revelation',
                        resiliencia: 'Resilience'
                    },
                    links: {
                        report: 'Report',
                        gallery: 'Gallery',
                        news: 'News',
                        press:  'Press clipping',
                        videos: 'Videos',
                        program: 'Program',
                        speakers: 'Speakers',
                        introduction: 'Introduction',
                        presentation: 'Presentation',
                        presentations: 'Presentations',
                        neuroatlantic: 'neuroATLANTIC proyect',
                        ahfes: 'AHFES proyect',
                        committee: 'Committee',
                        greeting: "President's Greeting",
                        letter: 'Letter from the #RIES22 President'
                    }
                }
            }
        }
    })

    export default i18n
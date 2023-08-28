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
                        awards: 'Premios RIES',
                        editions: 'Ediciones RIES',
                        sponsors: 'Patrocinios'
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
                        cta: 'Regístrate',
                        register: 'https://registro.forumries.com/',
                        description: '#RIES es el fórum internacional de referencia a nivel nacional e internacional para abordar los retos y oportunidades del ecosistema de la salud. Liderado por el Cluster Saúde de Galicia, CSG, se ha gestado como foro de encuentro entre los principales agentes de los sectores sanitario y sociosanitario del ámbito público y privado a nivel nacional e internacional, en colaboración con nuestros partners estratégicos de la #ComunidadCSG'
                    },
                    premios: {
                        awards: 'Premios RIES',
                        twentytwo: 'Premios #RIES22',
                        twentyone: 'Premios #RIES21',
                        cta: 'Descubre todos los premiados',
                        innovacion: 'Innovación CSG',
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
                    },
                    pages: {
                        csg: {
                            p1: 'El Cluster Saúde de Galicia, CSG, incluye entidades públicas y privadas de los sectores de salud y sociosanitario. El Cluster Saúde de Galicia, CSG, es una entidad privada sin ánimo de lucro. Actuamos como una plataforma profesional, dentro del ecosistema de salud gallego, para la cooperación público-privada, con el propósito de apoyar la innovación para la co-creación de soluciones que mejoren el bienestar de las personas.',
                            p2: 'Nuestros miembros incluyen asociaciones de pacientes, emprendedores/startups, PYMES, multinacionales, así como universidades, centros tecnológicos, fundaciones biomédicas, asociaciones sin ánimo de lucro y profesionales de los sectores de la salud y sociosanitario.',
                            p3: 'Hoy, más de 10 años después de su fundación, el ecosistema CSG engloba a más de 100 entidades entre usuarios, industria y reguladores, consiguiendo año tras año elevar a Galicia a nivel nacional e internacional a través de la innovación en salud, apoyando e impulsando la competitividad del sector.',
                            p4: 'Por otra parte, el CSG se ha posicionado como una plataforma profesional de colaboración para proyectos y alianzas globales y como organismo catalizador de las necesidades e inquietudes de sus asociados contando con más de 100 socios, alrededor de 70 proyectos y presencia en más de 100 mercados. Todo ello con el objetivo de seguir creando alianzas globales en pro del desarrollo económico y social de Galicia.',
                            p5: 'Nuestro objetivo es posicionar al Cluster Saúde de Galicia, CSG, como el Faro Guía hacia el futuro del ecosistema de salud gallego y afianzarnos como sinónimo de la búsqueda constante de mejora e innovación.',
                            url: 'https://clustersaude.com/',
                            cta: 'Visita la página web del CSG'
                        },
                        exporpymes: {
                            p1: 'EXPORPYMES es el renombrado evento de internacionalización para la promoción del comercio exterior que la Cámara de Comercio de A Coruña organiza desde 2013. El principal objetivo es impulsar el B2B entre PYMES internacionales y gallegas de los sectores representativos de la actividad exportadora de Galicia. Desde 2022 y en colaboración con el CSG, el sector salud pasa a ser uno de los sectores representados ofreciendo una oportunidad única para la industria de la salud.',
                            r23: 'Revive EXPORPYMES 2023',
                            g23: 'Descubre más info y la galería de EXPORPYMES 2023',
                            g23url: 'https://clustersaude.com/el-cluster-saude-de-galicia-csg-apuesta-por-la-promocion-de-la-internacionalizacion-de-las-empresas-gallegas/',
                            r22: 'Revive EXPORPYMES 2022',
                        }
                    },
                    hero23: {
                        date: '8 y 9 de noviembre de 2023',
                        longevity: 'Longevidad',
                        ia: 'IA',
                        logo: "/logo-azul.png",
                        organiza: "Organiza",
                        colabora: "Colabora:"
                    },
                    logos: {
                        csgNeg: '/csg-negativo.png',
                        csgPos: '/csg-positivo.png',
                        ries: '/RIES-logo-negativo.png'
                    },
                    patrocinios: {
                        title: 'Tipos de patrocinios y colaboraciones',
                        granito: 'A continuación, te enumeramos varios formatos de patrocinio o colaboraciones (que podéis consultar en detalle en el dossier), pero escribenos si se te ocurre cualquier otra forma de “poner tu granito de arena”. ¡Nuestros mejores embajadores sois vosotros!',
                        linkName: 'Dossier de patrocinadores',
                        link: 'https://registro.forumries.com/wp-content/uploads/2023/08/RIES23_Patrocinadores-1.pdf',
                        support: '¡Hazte patrocinador!',
                        form: 'https://registro.forumries.com/patrocinadores',
                        type1: 'DIAMANTE (1 patrocinio posible | 8000€ + IVA)',
                        type2: 'PLATINUM (8 patrocinios posibles | 3500€ + IVA)',
                        type3: 'DINAMIZADOR ÁGORA (6 patrocinios posibles | 2500€ + IVA)',
                        type4: 'PONENTE ÁGORA (18 patrocinios posibles, 3 max/ágora 500€ + IVA)',
                        type5: 'MODERADOR MESA REDONDA (2 patrocinios posibles | 1500€ + IVA)',
                        type6: 'PONENTES MESA REDONDA (8 patrocinios posibles, 4 max/mesa redonda 11000€ + IVA)',
                        type7: 'PROYECTO (4 patrocinios posibles | 1500€ + IVA)',
                        type8: 'GOLD (10 patrocinios posibles 11000€ + IVA)',
                        type9: 'SILVER (20 patrocinios posibles 1500€ + IVA)',
                        type10: 'Socio colaborador (# ilimitado de patrocinios posibles | 250€ + IVA). ',
                        type11: 'Colaboración con Coffee-break -1 (2 patrocinios posibles | 1200€ + IVA) ',
                        type12: 'Colaboración con almuerzo de trabajo (2 patrocinios posibles | 1200€ + IVA}',
                        type13: 'Colaboración con visita cultural (1 patrocinio posible | 2000€ + IVA) ',
                        type14: 'Colaboración con Lanyard (2 patrocinios posibles | 1200€ + IVA)',
                        type15: 'Colaboración con alguna sección de #RIES23 de la jornada del 9 de noviembre (4 patrocinios posibles | 250€ + IVA)',
                        type16: 'Roll-up en Coffee-breaks (# ilimitado de patrocinios posibles | 350€ + IVA) ',
                        type17: 'Folletos en mesa (# ilimitado de patrocinios posibles | 150€ + IVA) ',
                    }
                }
            },
            en: {
                translation: {
                    menu: {
                        awards: 'RIES Awards',
                        editions: 'RIES Editions',
                        sponsors: 'Sponsors'
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
                        cta: 'Register',
                        register: 'https://registro.forumries.com/en/',
                        description: '#RIES is the international reference forum at a national and international level to address the challenges and opportunities of the health ecosystem. Led by the Galician Health Cluster, CSG, it has been created as a meeting forum between the main agents of the public and private health and socio-health sectors at a European level in collaboration with our strategic partners of the #CSG_Community'
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
                    },

                    pages: {
                        csg: {
                            p1: 'The Galician Health Cluster, CSG, includes public and private entities from the healthcare and social care sectors. The Galician Health Cluster, CSG, is a private non-profit entity. Within the Galician health ecosystem, we act as a professional platform that encourages public-private cooperation to support innovation for the co-creation of solutions that improve people’s well-being.',
                            p2: 'Our members include patient associations, entrepreneurs, startups, SMEs, multinationals, as well as universities, technology centers, biomedical foundations, non-profit associations, and professionals from the healthcare and social care sectors.',
                            p3: 'Today, more than 10 years after its foundation, the CSG ecosystem includes more than 100 entities between users, industry, and regulators, managing year after year to elevate Galicia to a national and international level through innovation in health, supporting and promoting the competitiveness of the sector.',
                            p4: 'On the other hand, the CSG has positioned itself as a professional collaboration platform for global projects and alliances and as a catalyst for the needs and concerns of its associates with more than 100 partners, around 70 projects, and a presence in over 100 markets. All this with the aim of continuing to create global alliances for the economic and social development of Galicia.',
                            p5: 'Our objective is to position the Cluster Saúde de Galicia, CSG, as the Guiding Lighthouse toward the future of the Galician health ecosystem and to continuously strengthen our position with the constant search for improvement and innovation.',
                            url: 'https://clustersaude.com/en/',
                            cta: "Visit CSG's website"
                        },
                        exporpymes: {
                            p1: 'EXPORPYMES is the renowned internationalization event for the promotion of foreign trade that the Chamber of Commerce of A Coruña has organized since 2013. The main objective is to promote B2B between international and Galician SMEs in the food, beverage, construction materials and nautical sectors, all of them very representative of the export activity of Galicia. Since 2022, in collaboration with the CSG, the health sector becomes one of the sectors represented, offering a unique opportunity for the health industry.',
                            r23: 'Relive EXPORPYMES 2023',
                            g23: 'Discover more info and the EXPORPYMES 2023 gallery',
                            g23url: 'https://clustersaude.com/en/the-galician-health-cluster-csg-commits-to-promoting-the-internazionalitation-of-galician-companies/',
                            r22: 'Relive EXPORPYMES 2022',
                        }
                    },
                    hero23: {
                        date: 'November 8th-9th 2023',
                        longevity: 'Longevity',
                        ia: 'AI',
                        logo: "/logo-azul-en.png",
                        organiza: "Organized by:",
                        colabora: "Collaborators:"
                    },
                    logos: {
                        csgNeg: '/csg-negative.png',
                        csgPos: '/csg-positive.png',
                        ries: '/RIES-logo-negative.png'
                    },
                    patrocinios: {
                        title: 'Sponsorship & partnership possibilities',
                        granito: "Following, we list severa! sponsorship or collaboration formats (you can consult all details in the dossier), but don't hesitate to contact us if you can think of any other way to 'do your bit'. Our best ambassadors are you!",
                        linkName: 'Sponsorships Dossier',
                        link: 'https://registro.forumries.com/wp-content/uploads/2023/08/RIES23_Sponsorships-1.pdf',
                        support: 'Become a sponsor!',
                        form: 'https://registro.forumries.com/patrocinadores',
                        type1: 'DIAMOND (1 possible sponsorship | 8000€ + VAT)',
                        type2: 'PLATINUM (8 possible sponsorships | 3500€ + VAT)',
                        type3: 'AGORA LEADER (6 possible sponsorships | 2500€ + VAT)',
                        type4: 'AGORA SPEAKER (18 possible sponsorships, 3 max/ágora 500€ + VAT)',
                        type5: 'ROUND TABLE MODERATOR (2 possible sponsorships | 1500€ + VAT)',
                        type6: 'ROUND TABLE SPEAKER (8 possible sponsorships, 4 max/mesa redonda 11000€ + VAT)',
                        type7: 'PROJECT PRESENTATION (4 possible sponsorships | 1500€ + VAT)',
                        type8: 'GOLD (10 possible sponsorships 11000€ + VAT)',
                        type9: 'SILVER (20 possible sponsorships 1500€ + VAT)',
                        type10: '#RIES23 Partnership (# ilimitado de possible sponsorships | 250€ + VAT). ',
                        type11: 'Partnership with Coffee-break -1 (2 possible sponsorships | 1200€ + VAT) ',
                        type12: 'Partnership with working lunch (2 possible sponsorships | 1200€ + VAT}',
                        type13: 'Partnership with cultural visit (1 possible sponsorship | 2000€ + VAT) ',
                        type14: 'Partnership with Lanyard (2 possible sponsorships | 1200€ + VAT)',
                        type15: 'Partnership with a section of #RIES23 on November 9th(4 possible sponsorships | 250€ + VAT)',
                        type16: 'Roll-up in Coffee-breaks (# ilimitado de possible sponsorships | 350€ + VAT) ',
                        type17: 'Brochures at the table (# ilimitado de possible sponsorships | 150€ + VAT) ',
                    }

                }
            },
            gl: {
                translation: {
                    menu: {
                        awards: 'Premios RIES',
                        editions: 'Edicións RIES',
                        sponsors: 'Patrocinios'
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
                        twentytwo: 'Saúde de Vangarda: innovación asistencial e modelos de coidados',
                        twentyone: 'A revolución dixital na atención sanitaria e nos coidados',
                        twenty: 'Silver Economy: alimentación e calidade de vida',
                        nineteen: 'Silver Economy: por un envellecemento activo e saudable',
                        eighteen: 'Cidades intelixentes, saudables e amigables',
                        seventeen: 'Living Labs. Presentación de LabSaúde',
                        sixteen: 'Retos Internacionais do Ecosistema Saúde. Solucións Locais',
                    },
                    hero: {
                        date: '8-9 de novembro',
                        cta: 'Rexístrate',
                        register: 'https://registro.forumries.com/',
                        description: '#RIES é o fórum internacional de referencia a nivel nacional e internacional para abordar os retos e oportunidades do ecosistema da saúde. Liderado polo Cluster Saúde de Galicia, CSG, xestouse como foro de encontro entre os principais axentes dos sectores sanitario e sociosanitario do ámbito público e privado a nivel nacional e internacional, en colaboración cos nosos partners estratéxicos da #ComunidadeCSG'
                    },
                    premios: {
                        awards: 'Premios RIES',
                        twentytwo: 'Premios #RIES22',
                        twentyone: 'Premios #RIES21',
                        cta: 'Descubre todos os premiados',
                        innovacion: 'Innovación CSG',
                        impacto: 'Impacto nas persoas',
                        conocimiento: 'Coñecemento',
                        comunidad: 'Comunidade CSG',
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
                        speakers: 'Relatores',
                        introduction: 'Introdución',
                        presentation: 'Presentación',
                        presentations: 'Presentacións',
                        neuroatlantic: 'Proxecto neuroATLANTIC',
                        ahfes: 'Proxecto AHFES',
                        committee: 'Comité',
                        greeting: 'Saludo presidenta',
                        letter: 'Carta do Presidente #RIES22'
                    },
                    pages: {
                        csg: {
                            p1: 'O Cluster Saúde de Galicia, CSG, inclúe entidades públicas e privadas do sectores de saúde e sociosanitario. O Cluster Saúde de Galicia, CSG, é unha entidade privada sen ánimo de lucro. Actuamos como unha plataforma profesional, dentro do ecosistema de saúde galego, para a cooperación público-privada, co propósito de apoiar s innovación para a co-creación de solucións que melloren o benestar das persoas.',
                            p2: 'Os nosos membros incluen asociacións de pacientes, emprendedores/startups, PEMES, multinacionais, así como universidades, centros tecnolóxicos, fundacións biomédicas, asociacións sen ánimo de lucro e profesionais dod sectores da saúde e sociosanitario.',
                            p3: 'Hoxe, máis de 10 anos despois da súa fundación, o ecosistema CSG engloba a máis de 100 entidades entre usuarios, industria e reguladores, conseguendo ano tras ano elevar a Galicia a nivel nacional e internacional a través da innovación en saúde, apoiando e impulsando a competitividade do sector.',
                            p4: 'Por outra parte, o CSG posicionouse como unha plataforma profesional de colaboración para proxectos e alianzas globales e como organismo catalizador das necesidades e inquietudes dos seus asociados contando con máis de 100 socios, ó rededor de 70 proxectos e presencia en máis de 100 mercados. Todo elo co obxectivo de seguir creando alianzas globais en pro do desarrollo económico e social de Galicia.',
                            p5: 'Nuestro objetivo es posicionar al Cluster Saúde de Galicia, CSG, como el Faro Guía hacia el futuro del ecosistema de salud gallego y afianzarnos como sinónimo de la búsqueda constante de mejora e innovación.',
                            url: 'https://clustersaude.com/gl/',
                            cta: 'Visita a páxina web do CSG'
                        },
                        exporpymes: {
                            p1: 'EXPORPYMES é o evento de renome de internacionalización para a promoción do comercio exterior que a Cámara de Comercio da Coruña organiza desde 2013. O principal obxectivo é impulsar o B2B entre PEMES internacionais e galegas dos sectores representativos da actividade exportadora de Galicia. Dende 2022 e en colaboración co CSG, o sector saúde pasa a ser un dos sectores representados ofrecendo unha oportunidade única para a industria da saúde.',
                            r23: 'Revive EXPORPYMES 2023',
                            g23: 'Descubre máis info e a galería de EXPORPYMES 2023',
                            g23url: 'https://clustersaude.com/gl/o-cluster-saude-de-galicia-csg-aposta-pola-promocion-da-internacionalizacion-das-empresas-galegas/',
                            r22: 'Revive EXPORPYMES 2022',
                        }
                    },
                    hero23: {
                        date: '8 e 9 de novembro de 2023',
                        longevity: 'Lonxevidade',
                        ia: 'IA',
                        logo: "/logo-azul-gl.png",
                        organiza: "Organiza",
                        colabora: "Colabora:"
                    },
                    logos: {
                        csgNeg: '/csg-negativo.png',
                        csgPos: '/csg-positivo.png',
                        ries: '/RIES-logo-negativo.png'
                    },
                    patrocinios: {
                        title: 'Tipos de patrocinios e colaboracións',
                        granito: 'A continuación, enumeramos varios formatos de patrocinio ou colaboracións (que podedes consultar en detalle no dossier), pero escribenos si se che ocurre calquera outra maneira de “poñer o teu gran de area". ¡Os nosos mellores embaixadores sodes vos!',
                        linkName: 'Dossier de patrocinadores',
                        link: 'https://registro.forumries.com/wp-content/uploads/2023/08/RIES23_Patrocinadores-1.pdf',
                        support: 'Faite patrocinador!',
                        form: 'https://registro.forumries.com/patrocinadores',
                        type1: 'DIAMANTE (1 patrocinio posible | 8000€ + IVA)',
                        type2: 'PLATINUM (8 patrocinios posibles | 3500€ + IVA)',
                        type3: 'DINAMIZADOR ÁGORA (6 patrocinios posibles | 2500€ + IVA)',
                        type4: 'PONENTE ÁGORA (18 patrocinios posibles, 3 max/ágora 500€ + IVA)',
                        type5: 'MODERADOR MESA REDONDA (2 patrocinios posibles | 1500€ + IVA)',
                        type6: 'PONENTES MESA REDONDA (8 patrocinios posibles, 4 max/mesa redonda 11000€ + IVA)',
                        type7: 'PROXECTO (4 patrocinios posibles | 1500€ + IVA)',
                        type8: 'GOLD (10 patrocinios posibles 11000€ + IVA)',
                        type9: 'SILVER (20 patrocinios posibles 1500€ + IVA)',
                        type10: 'Socio colaborador (# ilimitado de patrocinios posibles | 250€ + IVA). ',
                        type11: 'Colaboración con Coffee-break -1 (2 patrocinios posibles | 1200€ + IVA) ',
                        type12: 'Colaboración con almorzo de traballo (2 patrocinios posibles | 1200€ + IVA}',
                        type13: 'Colaboración con visita cultural (1 patrocinio posible | 2000€ + IVA) ',
                        type14: 'Colaboración con Lanyard (2 patrocinios posibles | 1200€ + IVA)',
                        type15: 'Colaboración con algunha sección de #RIES23 na xornada do 9 de novembro (4 patrocinios posibles | 250€ + IVA)',
                        type16: 'Roll-up en Coffee-breaks (# ilimitado de patrocinios posibles | 350€ + IVA) ',
                        type17: 'Folletos en mesa (# ilimitado de patrocinios posibles | 150€ + IVA) ',
                    }
                }
            }
        }
    })

    export default i18n
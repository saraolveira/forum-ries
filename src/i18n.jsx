import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "es",
        interpolation: {
            escapeValue: false,
        },
        resources: {
            es: {
                translation: {
                    menu: {
                        awards: "Premios RIES",
                        editions: "Ediciones RIES",
                        sponsors: "Patrocinios",
                        comite: "Comité #RIES23",
                    },
                    ediciones: {
                        twentythree: "VIII Fórum RIES 2023",
                        twentytwo: "VII Fórum RIES 2022",
                        twentyone: "VI Fórum RIES 2021",
                        twenty: "V Fórum RIES 2020",
                        nineteen: "IV Fórum RIES 2019",
                        eighteen: "III Fórum RIES 2018",
                        seventeen: "II Fórum RIES 2017",
                        sixteen: "I Fórum RIES 2016",
                    },
                    tematicas: {
                        twentytwo:
                            "Salud de Vanguardia: innovación asistencial y modelos de cuidados",
                        twentyone:
                            "La revolución digital en la atención sanitaria y los cuidados",
                        twenty: "Silver Economy: alimentación y calidad de vida",
                        nineteen:
                            "Silver Economy: por un envejecimiento activo y saludable",
                        eighteen:
                            "Ciudades inteligentes, saludables y amigables",
                        seventeen: "Living Labs. Presentación de LabSaúde",
                        sixteen:
                            "Retos Internacionales del Ecosistema Salud. Soluciones Locales",
                    },
                    hero: {
                        date: "8-9 de noviembre",
                        cta: "Regístrate",
                        register: "https://registro.forumries.com/",
                        description:
                            "#RIES es el fórum internacional de referencia a nivel nacional e internacional para abordar los retos y oportunidades del ecosistema de la salud. Liderado por el Cluster Saúde de Galicia, CSG, se ha gestado como foro de encuentro entre los principales agentes de los sectores sanitario y sociosanitario del ámbito público y privado a nivel nacional e internacional, en colaboración con nuestros partners estratégicos de la #ComunidadCSG",
                    },
                    premios: {
                        awards: "Premios RIES",
                        twentythree: "Premios #RIES23",
                        twentytwo: "Premios #RIES22",
                        twentyone: "Premios #RIES21",
                        cta: "Participa en los Premios #RIES23 y descubre todos los premiados",
                        innovacion: "Innovación CSG",
                        impacto: "Impacto en las personas",
                        conocimiento: "Conocimiento",
                        comunidad: "Comunidad CSG",
                        revelacion: "Revelación",
                        resiliencia: "Resiliencia",
                        texto23: {
                            convocatoria:
                                "Premios #RIES23 — ¡Convocatoria abierta!",
                            participa:
                                "Si eres una entidad con un proyecto innovador en el sector salud o sociosanitario, participa en los premios #RIES23. ¡Una gran oportunidad de dar visibilidad a tu proyecto de innovación!",
                            innovacion:
                                "Premio Innovación CSG a las entidades más innovadoras",
                            impacto:
                                "Premio Impacto en las personas a las entidades con servicios o productos de mayor impacto en las personas",
                            conocimiento:
                                "Premio Conocimiento a las entidades que hayan generado más conocimiento",
                            comunidad:
                                "Premio Comunidad CSG a las entidades más comprometidas con la #ComunidadCSG",
                            revelacion:
                                "Premio Revelación a las entidades que han destacado recientemente por lograr un impacto significativo",
                            resiliencia:
                                "Premio Resiliencia a las entidades que han demostrado capacidad de superar adversidades, adaptarse a situaciones difíciles y recuperarse de ellas de manera ejemplar",
                            requisitos: "Requisitos para participar:",
                            video: "Explica tu proyecto en un vídeo de  máximo 1’ de duración en formato horizontal 16:9 a mínimo 1920 x 1080.",
                            presentacion:
                                "Haz una breve presentación con lo más destacado de tu proyecto",
                            formulario:
                                "Completa tus datos de contacto y sube ambos archivos en este formulario:",
                            limite: "Fecha límite: 18 de octubre",
                            cta: "Participa en los Premios #RIES23",
                        },
                    },
                    links: {
                        report: "Memoria",
                        gallery: "Galería",
                        news: "Noticias",
                        press: "Clipping de prensa",
                        videos: "Vídeos",
                        program: "Programa",
                        speakers: "Ponentes",
                        introduction: "Introducción",
                        presentation: "Presentación",
                        presentations: "Presentaciones",
                        neuroatlantic: "Proyecto neuroATLANTIC",
                        ahfes: "Proyecto AHFES",
                        committee: "Comité",
                        greeting: "Saludo presidenta",
                        letter: "Carta del Presidente #RIES22",
                    },
                    pages: {
                        csg: {
                            p1: "El Cluster Saúde de Galicia, CSG, incluye entidades públicas y privadas de los sectores de salud y sociosanitario. El Cluster Saúde de Galicia, CSG, es una entidad privada sin ánimo de lucro. Actuamos como una plataforma profesional, dentro del ecosistema de salud gallego, para la cooperación público-privada, con el propósito de apoyar la innovación para la co-creación de soluciones que mejoren el bienestar de las personas.",
                            p2: "Nuestros miembros incluyen asociaciones de pacientes, emprendedores/startups, PYMES, multinacionales, así como universidades, centros tecnológicos, fundaciones biomédicas, asociaciones sin ánimo de lucro y profesionales de los sectores de la salud y sociosanitario.",
                            p3: "Hoy, más de 10 años después de su fundación, el ecosistema CSG engloba a más de 100 entidades entre usuarios, industria y reguladores, consiguiendo año tras año elevar a Galicia a nivel nacional e internacional a través de la innovación en salud, apoyando e impulsando la competitividad del sector.",
                            p4: "Por otra parte, el CSG se ha posicionado como una plataforma profesional de colaboración para proyectos y alianzas globales y como organismo catalizador de las necesidades e inquietudes de sus asociados contando con más de 100 socios, alrededor de 70 proyectos y presencia en más de 100 mercados. Todo ello con el objetivo de seguir creando alianzas globales en pro del desarrollo económico y social de Galicia.",
                            p5: "Nuestro objetivo es posicionar al Cluster Saúde de Galicia, CSG, como el Faro Guía hacia el futuro del ecosistema de salud gallego y afianzarnos como sinónimo de la búsqueda constante de mejora e innovación.",
                            url: "https://clustersaude.com/",
                            cta: "Visita la página web del CSG",
                        },
                        exporpymes: {
                            p1: "EXPORPYMES es el renombrado evento de internacionalización para la promoción del comercio exterior que la Cámara de Comercio de A Coruña organiza desde 2013. El principal objetivo es impulsar el B2B entre PYMES internacionales y gallegas de los sectores representativos de la actividad exportadora de Galicia. Desde 2022 y en colaboración con el CSG, el sector salud pasa a ser uno de los sectores representados ofreciendo una oportunidad única para la industria de la salud.",
                            r23: "Revive EXPORPYMES 2023",
                            g23: "Descubre más info y la galería de EXPORPYMES 2023",
                            g23url: "https://clustersaude.com/el-cluster-saude-de-galicia-csg-apuesta-por-la-promocion-de-la-internacionalizacion-de-las-empresas-gallegas/",
                            r22: "Revive EXPORPYMES 2022",
                        },
                        carta23: {
                            carta: "Carta de la presidenta de #RIES23",
                            p1: "Estimados colaboradores,",
                            p2: "Alcanzada esta octava edición del Fórum RIES 2023 tras años especialmente complejos, creemos que este evento ha cogido altura, pero es necesario mantener nuestro esfuerzo en el impulso al sector de la salud.",
                            p3: "Hoy nadie duda que la prosperidad y el futuro de la sociedad depende en gran medida de nuestro mayor bien: la salud. Una salud cuya fortaleza y bienestar debe sustentarse en avances científicos y tecnológicos que aborden los desafíos actuales y futuros. ",
                            p4: "En esta octava edición ponemos el foco en dos realidades, la Longevidad de la población y la salud global desde un enfoque OneHealth, y dos herramientas de enorme impacto, la Biotecnología y la Inteligencia Artificial.",
                            p5: "La Longevidad: el envejecimiento de la población es una realidad creciente, y por ello debemos encarar nuevos retos vinculados a ello que requiere de una reformulación del abordaje en términos de mayor humanización, flexibilidad y eficiencia.",
                            p6: "La OneHealth: una perspectiva sanitaria y científica que ha incorporado de lleno este concepto que nos habla de una sola salud, al igual que tenemos un único planeta. Hoy, tras un siglo XXI con brotes epidémicos de gran relevancia, nadie duda de la interrelación entre aspectos como el medioambiente, cambio climático, globalización, la salud humana y animal.",
                            p7: "La Biotecnología: el COVID nos mostró claramente el camino: investigación y prevención de enfermedades por medio de la biotecnología y las vacunas. La mejor inversión en Sanidad es la prevención y dentro de los sistemas de prevención más potentes están las vacunas, cuyo balance coste/beneficio es inigualable a cualquier otro.",
                            p8: "Por último, la Inteligencia Artificial (IA) está transformando la forma en la que se brinda el cuidado de la salud. A su vez, aparecen nuevos desafíos y oportunidades que deben ser abordados desde una perspectiva amplia y con un objetivo principal: promover el bienestar y la seguridad de las personas y el interés público.",
                            p9: "Avancemos hacia esa nueva forma de entender la salud, de una manera global. Este es nuestro compromiso con esta edición VIII Fórum RIES 2023, centrado en los Ecosistemas Innovadores de Salud. ",
                            p10: "Estoy convencida de que será de gran interés con la aportación de todos los implicados. ",
                        },
                        comite: {
                            comite: "Comité Organizador #RIES23",
                            cta: "Descubre toda la información sobre el Comité Organizador #RIES23",
                        },
                        ponentes: {
                            ponentes: "Ponentes #RIES23",
                            cta: "Descubre todos los ponentes de #RIES23",
                            programa: "Descarga el programa completo",
                            tipos: {
                                keynote: "Keynote",
                                keynotes: "Keynotes",
                                agoraLead: "Dinamizador Ágora",
                                agoraSpeak: "Ponente Ágora",
                                mesaM: "Moderador Mesa Redonda",
                                mesaS: "Pontente Mesa Redonda",
                                proyecto: "Presentación Proyecto",
                                proyectos: "Proyectos",
                                agoraPlexus:
                                    "Ágora Medicina Personalizada, Tecnologías y Datos",
                                agoraITGALL:
                                    "Ágora Living Labs in Care. Cómo homogeneizar a nivel europeo la validación de soluciones digitales en cuidados a través de los Living Labs",
                                agoraGradiant:
                                    "Ágora Transformando la Atención Socio-Sanitaria: El Papel de los Espacios de Datos Europeo",
                                agoraFerrovial:
                                    "Ágora El proceso de la descarbonización en el sector: centros sanitarios Neutros en Carbono",
                                agoraDomusVi:
                                    "Ágora Tecnología Social para una Longevidad Activa",
                                agoraRibera:
                                    "Atención a la cronicidad en el siglo XXI",
                                mesaBalidea:
                                    "Mesa Redonda Retos de los Sistemas Sanitarios ante la I.A.",
                                mesaTecnologia:
                                    "Mesa Redonda El uso de las tecnologías en salud: retos, benchmark y limitaciones",
                                mesaZendal:
                                    "Mesa Redonda Retos ante futuras emergencias sanitarias. Prevención y vacunas",
                                keynoteVania:
                                    "Envejecimiento saludable: la clave para desatar las oportunidades de nuestra creciente longevidad",
                                keynoteNick:
                                    "Lecciones aprendidas de la transformación de la atención sanitaria y el papel de los clusters de innovación",
                                proyectoXoia:
                                    "Sanidade Mediaverso: La tecnología para promover un estilo de vida saludable ",
                                proyectoOcean: "Ecología, higiene y sanidad.",
                                proyectoGSK:
                                    "Impulsando la descarbonización del sector de la salud en España",
                                proyectoLongevitaAtendo:
                                    "Atendo Senior Living: Alianzas Estratégicas de un Centro Residencial de Innovación y Alojamiento con Cuidados",
                                proyectoAmazon:
                                    "Alexa aún más cerca de los mayores en España: Alexa for Senior Living",
                                proyectoIKEA: "IKEA: #RETO25",
                            },
                            rol: {
                                vania: "Consultora independiente",
                                nick: "Profesor",
                                joseManuel: "Socio director",
                                maria: "Coordinador de la Estrategia de Medicina Personalizada de Galicia",
                                mariona: "Jefa de Sección Terapia Celular",
                                marcos: "Coordinador del Nodo de IA de la UDC",
                                angel: "Responsable de Transformación Digital",
                                nieves: "Asistente de coordinación ITGALL",
                                cristofol: "Project Manager Innovación",
                                konstantina:
                                    "Laboratorio de Física Médica e Innovación Digital",
                                agustin: "Responsable de tecnología",
                                joseManuelPerez:
                                    "Responsable de Coordinación de Asistencia Técnica",
                                karen: "Deputy CEO",
                                ramon: "VP Expansión Nacional",
                                joseAngel: "Director de Desarrollo de Negocio",
                                albert: "Director de Datos",
                                carmen: "Profesora de universidad",
                                carlos: "Director Técnico CoE Data Intelligence",
                                abdel: "Director Dimension Lab.",
                                beatriz:
                                    "Directora Corporativa de Comunicación e Imagen",
                                graziella: "Presidenta",
                                silvia: "Subdirectora General de Programas de fomento de estilos de vida saludables",
                                joseAntonio: "Fundador y Director Comercial",
                                manuel: "CEO",
                                joseAntonioLopez:
                                    "Catedrático de microbiología y director del grupo de Neurovirología UAM",
                                robertoCarlos: "Investigador Principal",
                                cesar: "Investigador Senior",
                                javier: "Subdirector Xeral de Atencion Sociosanitari e Innovación Asistencial",
                                joao: "Head of Product",
                                joseDavid: "Director de Operaciones",
                                carlosCatalan: "Director asistencial ",
                                pablo: "Director Comercial Eficiencia Energética",
                                franciscoJavier: "Subgerente",
                                miguelAngel: "Director",
                                benigno:
                                    "Subdirector General de Sistemas y Tecnologías de la Información",
                                patricia: "Directora Área de Servicios",
                                david: "Director de Bioinformática Clínica",
                                manuelBosch:
                                    "Responsable de Integración Tecnológica",
                                bruno: "Catedrático de Universidad, Director de la Unidad de Resistencia a los Antimicrobianos y Asesor de la OMS",
                                joaquim: "Director Ejecutivo",
                                jorge: "Jefe del servicio de protección de datos y gestión del servicio de T.I.  y Delegado de Protección de Datos del Sistema Público de Salud de Galicia",
                                ricardo:
                                    "Director de Asuntos Corporativos y Gubernamentales de Medicamentos Generales",
                                antonio:
                                    "Profesor titular y director de la Cátedra de Cronicidad de la Universidad de Santiago de Compostela. Miembro de la Real Academia de Medicina de Galicia",
                                jorgeAboal:
                                    "Director General de Asistencia Sanitaria",
                                luis: "CEO",
                                albertCreixell:
                                    "Responsable de Alexa Enterprise en España y Reino Unido",
                                andrea: "HF&RD, Responsable de Marketing y Sostenibilidad ",
                            },
                            description: {
                                vania1: "La Dra. Vânia de la Fuente-Núñez es experta internacional en envejecimiento saludable y edadismo. Actualmente trabaja como consultora independiente, ofreciendo asesoramiento técnico y estratégico a diferentes entidades para ayudar a mejorar la vida de las personas mayores. Su cartera de servicios abarca desde la investigación y la formación hasta el desarrollo y evaluación de estrategias. Es una oradora reconocida, que encabeza esfuerzos para desarrollar políticas y programas que permitan responder mejor al envejecimiento de la población en diferentes países y que trabaja para atraer mayor financiación al área de envejecimiento. ",
                                vania2: "Previamente, la Dra. de la Fuente-Núñez trabajó como funcionaria internacional en la Organización Mundial de la Salud durante casi una década, siendo responsable de la Campaña Mundial Contra el Edadismo y coautora del histórico Informe Mundial sobre el Edadismo de las Naciones Unidas. También dirigió el área de formación y capacitación sobre envejecimiento saludable, implementando programas de aprendizaje innovadores y apoyando el desarrollo de políticas y programas en países y regiones de todo el mundo. Además, contribuyó al lanzamiento del Observatorio Mundial de Investigación y Desarrollo en Salud de la OMS y apoyó a la Secretaría del Comité de Ética en Investigación de la OMS durante el brote de ébola de 2014-15.",
                                vania3: "Antes de trabajar en la OMS, Vânia trabajó con diferentes ONGs e institutos de investigación en países de ingresos altos y bajos. Vânia es licenciada en medicina y en antropología social y cultural, y completó un Máster en Filosofía, Política y Economía de la Salud gracias a una beca de La Caixa.",
                                nick: 'Nick Guldemond es profesor de atención sanitaria y salud pública en la Universidad Médica de Gdansk, Polonia, y en el Centro Médico de la Universidad de Leiden, en los Países Bajos, y tiene títulos en medicina e ingeniería eléctrica y un doctorado de la Universidad de Maastricht. Es un experto en el campo de la salud digital, la eSalud y la innovación sanitaria. Es conocido por su trabajo en el avance del uso de la tecnología, particularmente soluciones digitales y basadas en datos, en la atención médica para mejorar la atención al paciente, la salud de la población y los sistemas de atención médica. Fue el director ejecutivo y fundador del Medical Field Lab (principios de 2000), es decir, el primer ejemplo internacional de un "Living Lab" basado en un hospital universitario dedicado a la ciencia, la innovación y el impacto social. Como tal, también fue cofundador de la Iniciativa holandesa de dispositivos médicos innovadores. Nick Guldemond ha ocupado varios puestos académicos y ha participado en muchos proyectos de investigación relacionados con la salud digital y la innovación sanitaria. También ha sido ponente, panelista en numerosos congresos y foros internacionales. Es asesor de muchos gobiernos, la OMS, la Comisión Europea e industrias de todo el mundo.',
                                joseManuel:
                                    "Actualmente Socio Director en Plexus Tech, dirigiendo el área de salud, bienestar sociaI y mutuas de la compañía, estableciendo la estrategia e innovación en nuevas soluciones y servicios, las alianzas y mercados así como el desarrollo de la compañía en los sectores de responsabilidad.  Más de 25 años de experiencia en proyectos de innovación, soluciones y servicios relacionados con la transformación de las organizaciones sociosanitarias basadas en el uso de las TIC. Ingeniero en Informática, Master en Dirección de empresas, cursos y seminarios de especialización en las tecnologías, metodologías y nuevos modelos de gestión aplicadas al sector sociosanitario.",
                                maria: "Licenciada en Biología, doctora por la Universidade de Santiago de Compostela, realizó su postdoctorado en la Universidad de Sao Paulo (Brasil) Desde hace 15 años es coordinadora de la Unidad de Genética Cardiovascular del Instituto de Investigación Sanitaria de Santiago (IDIS) y actualmente coordina desde la FPGMX la Estrategia de Medicina Personalizada de Precisión de Galicia. Ha trabajado en genética humana durante más de 25 años y junto a su labor investigadora, desarrolla una labor asistencial como genetista responsable de los estudios genéticos de la Unidad de Cardiopatías Familiares del Servicio de Cardiología del Complejo Hospitalario de Santiago de Compostela. A lo largo de su carrera profesional ha liderado proyectos nacionales y autonómicosen el area de la genómica, participado en la creación de empresas a partir de los resultados de investigación, ha registrado patentes y ha publicado multitud de artículos de investigación. A nivel docente dirige tesis doctorales, trabajos fin de máster y trabajos fin de grado y ha impartido docencia en títulos propios, así como en varios máster y posgrados.",
                                xurxo: "Xurxo Cegarra es licenciado en Ciencias Físicas especialidad Optoelectrónica por la USC, Master en Telemática especialidad Redes y Comunicaciones la UDC y cofundador de las empresas tecnológicas Wireless Galicia e Insati Innovation. Con una trayectoria de 20 años en el sector TIC, lidera grupos de trabajo y proyectos tecnológicos innovadores en el ámbito de la salud, en colaboración con grupos de investigación, centros tecnológicos, hospitales, institutos de investigación biomédica, asociaciones de pacientes y empresas, siempre bajo el prisma de la innovación abierta y la cuádruple hélice.",
                                mariona:
                                    "Formada en Biotecnología (2013), con un máster en medicina traslacional (2014) y doctorada en inmunología traslacional (2019), es la Responsable del Centro de Producción de Inmunoterapias de Galicia y receptora un contrato de personal de alta cualificación del programa Talento Senior de la Xunta de Galicia. Realizó trabajos de investigación durante sus estudios en la KlinikumRechts der Isar, en la Technische Universität München y en el Instituto de Investigación Biomedica de Bacelona. Su tesis doctoral desarrollada en el University Medical Center of Utrecht, se centró en la investigación de las dinámicas de los linfocitos T y B durante el proceso de reconstitución inmune en pacientes tratados con quimioterapia. Durante su formación posdoctoral en el Hospital Clínico San Carlos, trabajó en la caracterización y expansión de linfocitos tumorales infiltrantes para el desarrollo de productos de terapia adoptiva en cáncer ovárico y otros tumores, así como en la identificación de biomarcadores genómicos y transcriptómicos de respuesta y supervivencia a dicha inmunoterapia.",
                                marcos: "Doctor e Ingeniero en Informática, es profesor de la UDC donde ejerce actualmente como Coordinador de su Nodo en IA y Director del grupo de investigación de Visión Artificial y Reconocimiento de Patrones (VARPA). Ha sido galardonado con el Premio Nacional de Informática y Salud (2022) y distinguido por la Real Academia Gallega de Ciencias por su labor investigadora en la lucha contra el Covid-19 (2020), entre otros reconocimientos. Autor de más de 100 publicaciones científicas e investigador principal en más de 30 proyectos y contratos de investigación en el ámbito de la inteligencia artificial aplicada al sector salud entre otros. Autor de tres patentes y numerosas aplicaciones de software en explotación por diferentes centros sanitarios.Vocal del Comité Técnico de Normalización de la UNE de Inteligencia Artificial y Big Data así como del grupo de expertos de la Computational Intelligence Society del IEEE. Representante de la UDC en el Digital Innovation Hub DIHGIGAL de Galicia, siendo coordinador de su nodo tecnológico de Inteligencia Artificial. Director de la Cátedra Institucional UDC-ITG sobre Vehículos Aéreos no Tripulados.",
                                angel: "Posición actual: Responsable de Transformación Digital en Atendo",
                                angel2: "Background: Ingeniero Informático (Universidade de Santiago de Compostela)",
                                angel3: "Masters: Executive Master Digital Management (UIE). ThePowerMBA - Future Leaders",
                                angel4: "Programas de Negocios: From Start-up to Scale-Up Nation: Value through Innovation and Data (Tel Aviv University - Coller School of Management). Digital Companies & E-Business Revolution (University of California, Northridge).",
                                angel5: "Propósito: Mejorar la vida de las personas mayores a través de la tecnología",
                                nieves: "Nieves Freire Barea se ha declinado por la parte más social, estudiando el grado de Trabajo Social en la Universidad de Vigo y un Máster de Mediación en la Universidad de Málaga. Tras casi tres años siendo Coordinadora del Servicio de Ayuda a Domicilio en Atendo se dió cuenta de la importancia de la persona dentro del ecosistema y realizó el Máster del Modelo de Atención Centrada en la Persona especializado en Dependencia y Discapacidad en la Universitat de Vic (Barcelona). Actualmente se encuentro dentro del equipo del Cluster de Salud de Galicia, CSG como INVESTIGO en el servicio de ITGALL como asistente de coordinación.",
                                cristofol:
                                    "Cristòfol Vidal es un profesional con una amplia experiencia internacional en la gestión de proyectos. Graduado en Administración de Empresas por la Universitat Autònoma de Barcelona y con un máster en Técnicas de Investigación Social Aplicadas en la Universidad de Barcelona, su trayectoria profesional lo ha llevado a trabajar en diversas ciudades, incluyendo México, Barcelona, Londres y su posición actual en el Hospital Universitario de Son Espases en Mallorca, España. Esta experiencia en diferentes entornos culturales le ha proporcionado una visión transversal y adaptativa que le permite pensar out of the box. Cristòfol ha desempeñado roles clave en la gestión de proyectos, incluyendo su trabajo como project and panel manager en Ipsos Mori en Londres. Su competencia en metodologías de investigación como las entrevistas en profundidad, design thinking y grupos focales, lo posiciona como un activo valioso para la evaluación de necesidades y el desarrollo de proyectos. Además, su papel como gestor de proyecto demuestra su capacidad para supervisar y ejecutar proyectos de manera efectiva, asegurando que se alineen con las metas y objetivos de la organización.",
                                konstantina:
                                    "Konstantina Tsimpita tiene una licenciatura en Física de la Universidad Aristóteles de Tesalónica y actualmente está cursando su maestría en Ingeniería Biomédica en el Departamento de Medicina. Con una amplia experiencia en gestión de proyectos, trabajó como gerente de proyectos de la UE durante dos años, supervisando y manteniendo operaciones fluidas en varios proyectos relacionados con la tecnología. Su principal foco de investigación se centra en tecnologías inteligentes y la aplicación de metodologías Open Living Lab tanto en el sector médico como en el de software.",
                                agustin:
                                    "Agustín Cañas Rodríguez es Ingeniero de Telecomunicación (especialidad Telemática) y Máster Universitario en Ingeniería Telemática (especialidad Servicios y Aplicaciones) por la Universidad de Vigo. En sus primeros años de experiencia laboral compaginó sus estudios con trabajos de consultoría TIC, ingeniería e investigación. Durante esta etapa participó en múltiples proyectos regionales y europeos, en la mayoría de los casos centrados en el diseño de sistemas inteligentes aplicados a escenarios de aprendizaje. En esta temática es autor de publicaciones en congresos y revistas de ámbito internacional. Ya en GRADIANT, continuó de forma natural su especialización hasta asumir el liderazgo técnico de la línea de eLearning. Después de cinco años centrado en el sector educativo, a comienzos del año 2019 amplía su foco de acción para asumir la dirección técnica del Área de Sistemas Inteligentes y trabajar en la puesta en valor de soluciones inteligentes de captura y análisis de datos en diversos sectores. Desde esta posición, recientemente ha promocionado a Responsable de Tecnología para definir la estrategia tecnológica y gestionar los activos de un centro tecnológico TIC que en la actualidad cuenta con unos 180 profesionales trabajando en los ámbitos de la inteligencia, la seguridad y la conectividad.",
                                joseManuelPerez:
                                    "25 años en el sector del cuidado a las personas mayores; Grado de Enfermería con especialidad en geriatría. Distintas responsabilidades en estos 25 años relacionadas siempre con el cuidado a personas y la gestión.",
                                karen: "Karen es embajadora de la atención social. Su carrera comenzó como una carrera remunerada mientras estudiaba en la universidad y, aunque gratificante, rápidamente se sintió motivada por las presiones del sector. Defensora de la participación y la coproducción, cree que la prueba del impacto es ver la diferencia que supone para las personas. Promotora de un enfoque basado en evidencia y fanática de los datos, forma parte del equipo de liderazgo de IMPACT y trabaja para cerrar la brecha en la implementación de evidencia. Ha trabajado en varios puestos de la mesa de atención social, así como para el Gobierno y como Directora de la Fundación Príncipe de Gales. En su puesto actual como directora ejecutiva adjunta de Scottish Care, continúa dando forma al futuro de la atención social con un enfoque en los derechos humanos, la puesta en servicio, el trabajo justo y la tecnología. Cuando no está trabajando, esta muchacha de Ayrshire se puede encontrar en la playa con su familia. Miembro del tribunal de UWS, guardacostas, FRSA, MIoD y aspirante a lobo de mar salado.",
                                ramon: "Ramon Ceravalls 34 años, de Barcelona. Licenciado en Ingeniería Industrial Mi experiencia profesional está dividida en 2 etapas: La primera etapa enfocada en el mundo de las Operaciones en el sector de la gran distribución donde tuve la oportunidad de vivir 2 años en Alemania para la implementación de SAP en la gran distribución. También en el sector de la movilidad compartida y sostenible en una start-up americana. La segunda etapa está enfocada en el Desarrollo de Negocio en Qida, empresa de ayuda a domicilio de Impacto Social, donde mi función ha sido la de liderar la expansión nacional a través de la apertura de nuevas delegaciones de Qida tanto en Madrid como en Bilbao. Actualmente estamos también valorando la llegada de Qida a Galicia, donde creemos que un producto como el de Qida, con Impacto Social y tecnología podría ayudar a las personas crónicas y dependientes a vivir más tiempo y con mejor calidad de vida en un entorno tan complejo como el de Galicia.",
                                joseAngel:
                                    "Licenciado en Ciencias Físicas, especialidad de Electrónica. 25 años de experiencia en el sector TIC, de los cuales 20 han estado relacionados con proyectos de ámbito sanitario. Master MBA en Dirección y Administración de Empresas y Master en Economía de las Telecomunicaciones. Actualmente soy el Director de Desarrollo de Negocio en Balidea, puesto que desempeño desde el año 2015. Previamente mi carrera profesional se desarrolló como Director Gerente en RETEGAL, Director Técnico en Ednon y Consultor en UNISYS",
                                albert: " Albert King es director de datos de NHS National Services Scotland (NSS). NHS NSS sirve como centro de datos para la economía de la asistencia sanitaria y social en Escocia. A través de una combinación incomparable de conjuntos de datos de atención sanitaria y social, capacidad profesional y su plataforma tecnológica líder (SEER), respalda el desarrollo de conocimientos con socios, incluidos Public Health Scotland, Health Boards y el gobierno local y nacional. Anteriormente, Albert se desempeñó como director de datos en el gobierno escocés, donde dirigió la implementación de la estrategia de inteligencia artificial de Escocia. Cuenta con más de 20 años de experiencia en datos y tecnología de la industria y del sector público.",
                                carmen: "Nacida en 1963 en Vigo. Es Ingeniera de Telecomunicación (1987) y Doctora ingeniera de Telecomunicación por la Universidad Politécnica de Madrid (1993). Completó su formación con estadías de investigación en diferentes universidades y centros de investigación extranjeros. Centró su investigación en la tecnología del habla en gallego y castellano, la segmentación de audio, el reconocimiento biométrico de personas, y la detección por voz de enfermedades neurodexenerativas. Es catedrática en el área de Teoría de la Señal y Comunicaciones (TSC) de la Universidad de Vigo y responsable del grupo de investigación en Tecnologías Multimedia (GTM). Fue Vicerrectora de Titulaciones y Convergencia europea de la Universidad de Vigo (2006-2010). Fue la coordinadora del programa de doctorado en Tecnologías de la Información y Comunicaciones (DocTIC) de la Universidad de Vigo desde su puesta en marcha en 2012 hasta 2019, y directora del departamento de Teoría de la señal y comunicación desde 2017 a 2019. Dirigió y coordinó numerosos proyectos de investigación y tesis doctorales, y publicó más de 150 artículos en revistas y congresos internacionales. Participa de forma habitual en eventos de formación, fomento y #divulgación relacionadas con la presencia femenina en STEM. Ha participado en proyectos como Cotovía, el primero conversor texto-voz bilingüe en gallego y castellano,  en VOGATEL o FalAI centrados en la recogida de grabaciones de voz en gallego para entrenar sistemas conversacionais, COPERIA, estudio para la detección de COVID persistente mediante análisis acústico de toses y voz, o VISIA, con el que se presente desarrollar un centinela para rastrear el riesgo de suicidio en adolescentes basado en inteligencia artificial. En septiembre de 2014 recibió el Premio de la Xunta de Galicia “Josefa Wonenburger” por su relevante trayectoria en los campos de las ciencias y de la tecnología. Desde 2016 es miembro del plenario y coordinadora de la sección de lengua, literatura y comunicación del Consello da Cultura Galega.",
                                carlos: "Carlos Alberto Castaño Moraga es Ingeniero de Telecomunicación por la Universidad de Valladolid y doctor en procesado de señales por la Universidad de Las Palmas de Gran Canaria. Además, complementa su formación de negocio con un Executive MBA por IESE Business School, combinando así una gran formación técnica con una visión de negocio. Se unió a Fujitsu en 2014, centrando sus esfuerzos en desarrollar la actividad del CoE de Data Intelligence, centrada en la transformación y digitalización de procesos en organizaciones de diferentes sectores, especialmente en el sector sanitario y organizaciones del sector público.",
                                abdel: "Soy cardiólogo con especialización en imágenes cardíacas avanzadas y actualmente dirijo el Dimension Lab en el Hospital de la Santa Creu i Sant Pau, Barcelona. Este laboratorio se centra en la planificación virtual avanzada para cirugías mediante tecnologías como el modelado 3D y gemelos digitales, así como en el diseño y fabricación mediante impresión 3D de dispositivos médicos personalizados para brindar medicina precisa y medida a pacientes complejos. Comencé mi trayectoria educativa obteniendo mi título de Medicina con honores en 2008 y luego especializándome en Cardiología, centrándome en imágenes cardíacas multimodales y patologías valvulares y estructurales complejas. En 2019, fundé el modelado cardiovascular en 3D y la impresión, que evolucionó al Dimension Lab, sirviendo a todo el hospital. Actualmente, como candidato a doctorado en la UAB, me enfoco en diseñar dispositivos de oclusión cardíaca personalizados y colaboro en investigaciones sobre inteligencia artificial (IA) para mejorar terapias cardíacas. Lidero un proyecto para integrar IA en nuestro hospital y colaboro con diversas instituciones académicas y líderes de la industria. Además de mis roles clínicos e investigativos, me comprometo activamente con la educación, formando a estudiantes en ingeniería biomédica y especialistas en imágenes cardíacas avanzadas. Mi objetivo es aplicar tecnologías de vanguardia para abordar desafíos clínicos y mejorar la atención al paciente en la práctica clínica.",
                                beatriz:
                                    "Licenciada en Ciencias Económicas por la Universidad de Vigo donde estudió el Master de Dirección Comercial y Ventas en la Escuela de negocios IESIDE. Posteriormente se formó en Marketing y Comunicación en el ámbito de comunicación, marketing y el marketing digital en respectivas escuelas de IESE, IESIDE y ESADE así como en la consultora COONIC. En la actualidad es Directora corporativa de comunicación e imagen del grupo del grupo farmacéutico Zendal http://www.zendal.com enfocado en biotecnología y vacunas con 8 empresas bajo su paraguas, dónde con varios años de experiencia en el sector salud dirige el marketing y la reputación corporativa. Miembro de la asociación de Informadores de la Salud (ANIS). Socia de asociaciones de marketing y comunicación, DIRCOM y MARKEA. Desde 2018 “Referente Gallega” por la asociación del mismo nombre y miembro de Executivas de Galicia y de Mujeres en Farma. Ponente de cursos de Marketing y Comunicación en la escuela de negocios y partícipe asidua en eventos y foros varios relacionados con la biotecnología y comunicación",
                                graziella:
                                    "Periodista de ciencia y salud especializada en formatos audiovisuales. Comentarista sobre Covid-19 en los programas Al Rojo Vivo y La Sexta Noche en La Sexta. Mentora sobre pandemias, salud y ciencia para la organización internacional Internews. Autora del libro Vacunas, cuando los seres humanos ganamos la guerra invisible (Urano 2021). En el área de documentales ha dirigido y guionizado más de 10 documentales científicos para canales como National Geographic o Documentos TV de TVE. Ha trabajado 13 años en los servicios informativos de Antena 3 Television.. Es Máster Internacional en Medicina Humanitaria. Actual Presidenta de la Asociación Nacional de Informadores de la Salud (ANIS)",
                                silvia: "Doctora en Farmacia en Química Analítica, Nutrición y Bromatología y Licenciada en Química. Diplomada en Salud Pública y Máster en Economía de la Salud. Desde el año 2008, funcionaria de carrera ocupando diferentes puestos en salud pública y coordinación sociosanitaria. Desde octubre de 2020, Subdirectora General de Programas de Fomento de Estilos de Vida Saludables de la Dirección General de Salud Pública",
                                joseAntonio:
                                    "Educado en un ambiente familiar de empresarias emprendedoras nacidas en 1904 y 1928 respectivamente . Formado en el sistema educativo español publico, Grado Medio en Electricidad, Grado superior en Telecomunicaciones , Especialidad Fibra óptica, Estudios de Derecho (en curso).1997 fundo una constructora y promotora inmobiliaria, 2003 a 2015 Apoderado de zona noroeste en Contenur (mejor fabricante de contenedores plásticos del mundo). 2016 fundó Urbano y Accesible S. L empresa Alternativa de mobiliario urbano sostenible y predecesora de Ocean Kube Environment S.L D de 2019 , empresa especializada en Contenedores para la recogida de residuos",
                                manuel: "Consultor con más de 15 años de experiencia en proyectos de salud digital. Tras formar parte del equipo de sanidad pública en everis y posteriormente en Deloitte, desde 2022 forma parte de PM4GOV, empresa especializada en la gestión de proyectos TIC en el ámbito de la salud digital. Actualmente PM4GOV trabaja con el Ministerio de Sanidad y varios servicios de salud autonómicos en la definición y ejecución de estrategias y proyectos TIC.",
                                joseAntonioLopez:
                                    "José Antonio López Guerrero, JAL, (Madrid 1962) es investigador, catedrático de microbiología de la Universidad Autónoma de Madrid y director del departamento de Cultura Científica del Centro de Biología Molecular Severo Ochoa. Tras un primer Postdoc en el Centro de Investigaciones Biológicas, se trasladó al Centro Alemán de Investigaciones Oncológicas (Heidelberg, 1993-1996). En la actualidad dirige el grupo de NeuroVirología de la UAM. Dirige, presenta o colabora en programas de Radio Nacional (Entre Probetas, El LAB de JAL o Marca España), TVE (La Hora de la 1 (TVE), prensa (El Cultural). Autor de más de una docena de libros y más de 300 artículos tanto científicos como de divulgación. Más información en www.uam.es/ja.lopez.",
                                robertoCarlos:
                                    "El Dr. Agís-Balboa es Licenciado en Biología (2001) con un Máster en Neurociencias (2005) ambos por la USC. Obtuvo su doctorado (2008) en la UIC (Chicago). Después, trabajó como postdoc en Alemania en el Instituto Europeo de Neurociencias-Gotinga (2008-2013). Allí, enfocó su investigación en las interacciones genoma-ambiente (o epigenoma) que ocurren durante el deterioro cognitivo asociado con el envejecimiento normal, los trastornos psiquiátricos y las enfermedades neurodegenerativas. Fue galardonado con la prestigiosa beca postdoctoral EMBO, el premio de la Fundación de Alzheimer de Gotinga 'Inge und Fritz Kleekamm-Forschungspreis 2012', y una beca de investigación de la DFG alemana. En 2013, regresa a España para trabajar como investigador bajo el proyecto BIOCAPS y luego con un contrato Ramón y Cajal en el Grupo de Neurociencia Traslacional del IIS Galicia Sur. En 2022, y ya como investigador estabilizado del SERGAS, se incorpora el Grupo de Investigación Traslacional en Enfermedades Neurológicas (ITEN) del IDIS. En sus proyectos estudia: 1) los mecanismos epigenéticos (ej. microARNs) asociados con enfermedades neurológicas. 2) biomarcadores y dianas terapéuticas en enfermedades neurológicas (ej. IGF signalling). 3) Herramientas bioinformáticas en neurología (ej. myBrain-Seq). 4) Inteligencia Artificial y Enfermedades Neurológicas (ej. Alzheimer) - Proyecto COGNISANCE. Para más información puedes revisar sus perfiles ORCID (http:// orcid.org/0000-0001-9934-8733) y Linkedin (es.linkedin.com/in/robertocarlosagisbalboa/).",
                                cesar: "El Dr. Cesar Veiga investiga sobre la aplicación de técnicas de IA en la investigación biomédica aplicando tecnologías informáticas al ámbito médico. Licenciado en Física (1993), y doctor en Informática e Inteligencia Artificial (USC-1998), ambos por la Universidad de Santiago de Compostela. Durante los últimos 25 años ha adquirido experiencia en este campo en varias instituciones como el Institute for Joint Research Center (ISIS-JRC, Italia), la empresa privada Intelsis Sistemas Inteligentes SA. o el Centro de Supercomputación de Galicia (CESGA), donde lidera proyectos sobre 1) Computación de Alto Rendimiento para simular procesos biomédicos (Tesis Doctoral Marcos García Loureiro, Premio al Mejor Póster de la Sociedad Europea de Cardiología); 2) Técnicas de visión por computadora y reconocimiento de patrones para el análisis e interpretación automáticos del análisis de datos médicos (MD-CAD: UNA INFRAESTRUCTURA INFORMÁTICA DE ALTO RENDIMIENTO PARA SERVICIOS AVANZADOS DE IMAGEN MÉDICA: DISAGNOSTICO AYUDADO POR COMPUTADORA (CAD). Incite 2010 IN830N 2010/30-0 8796 ; 3) Algoritmos de Inteligencia Artificial para el análisis de señales biomédicas, como COGNISANCE: COGNitive Impairment aSessment (screening y progresión) usando Artificial iNtelligenCE y biomarcadores epigenómicos en población anciana), y 4) Marcos de Machine and Deep Learning para analizar datos masivos de salud de as (COVID - GANANCIA IN845D 2020/29).",
                                javier: "Licenciado en medicina y Cirugia por la Universidad de Santiago , Diplomado en Diplomado en Sanidad, Medicinal and Pharmaceutical Chemistry Por la escuela Nacional de Salud Publica, Diplomado en curso superior(Master) de Gerontología clínica y social,por la Universidad de Santiago ; Master en Medicina de urgencias por la Universidad Da Coruña y Diplomado en curso superior de Xestion Clínica de Unidades e Servicios de Atención Primaria, Pola Escola Galega de Administración Sanitaria. Ha ocupado diversos puestos directivos en el Servicio Galego de Saude y fuer representante institucional de la comunidad Gallega en varias de las estrategias del Sistema Nacional de salud . Actualmente ejerce como Subdirector Xeral de Atencion Sociosanitaria e Innovación Asistencial en la Conselleria de Política social e Xuventude da Xunta de Galicia, estando su labor enfocada en al desarrollo de un nuevo modelo de atención sociosanitaria en la comunidad",
                                joao: "João Gomes, Director de Producto, es un profesional experimentado con una sólida formación en ingeniería biomédica. Obtuvo su maestría en la Universidad de Minho, especializándose en este dinámico campo. Con más de una década de experiencia en el sector de resultados y atención médica impulsado por la tecnología, João ha perfeccionado su experiencia trabajando con instituciones de salud de renombre como la Clínica Mayo y el Hospital Oncológico de Porto, así como con líderes de la industria como Cerner y compañías farmacéuticas. Su experiencia diversa y su profundo conocimiento de la intersección de la atención médica y la tecnología lo convierten en un líder valioso en la creación de productos innovadores que generan impactos positivos en la industria de la salud.",
                                joseDavid:
                                    "Jose David Zafrilla es desde 2020 el director de Operaciones del grupo Ribera. Cuenta con más de 20 años de experiencia como gestor sanitario en el Sistema Nacional de Salud. Durante varios años ejerció como técnico en las Direcciones de los Departamentos de Salud del Hospital Universitario La Fe y Departamento de la Ribera), trabajando en la planificación sanitaria, en el desarrollo de herramientas informáticas para la gestión y la práctica clínica y especialmente en la integración entre Atención Primaria y Atención Hospitalaria. En el grupo Ribera ha ocupado diferentes cargos de responsabilidad como director corporativo de Enfermería, adjunto a gerencia de los departamentos de Torrevieja y Vinalopó (Alicante), y gerente del Departamento de Salud de Torrevieja y del hospital Ribera Povisa (Vigo). Jose David es Grado de Enfermería por la Universidad de Valencia, Máster en Bioética por la Universidad Católica de Valencia. Completa su formación con el programa de Alta Dirección de Instituciones Sanitarias del IESE de la Universidad de Navarra y el programa de Excelencia en la Gestión Sanitaria de ESADE.",
                                carlosCatalan:
                                    "Carlos Catalán es desde 2012 el director Asistencial del grupo Ribera. Es responsable de la organización de la atención a los pacientes en los distintos ámbitos asistenciales y de la continuidad asistencial. Ha participado en la apertura del Hospital y Departamento de Salud del Vinalopó, en el modelo de servicios compartidos con el Departamento de Salud de Torrevieja, así como en la planificación asistencial del resto de proyectos de integración del grupo. Su experiencia profesional está ligada al grupo Ribera desde 1999, ya que ejerció como médico en el Hospital de La Ribera de Alzira, antes de pasar a la Subdirección Asistencial del Departamento de Salud de La Ribera, coincidiendo con la implantación del modelo de integración asistencial Primaria-Especializada en este Departamento de Salud. Carlos es Licenciado en Medicina y Cirugía por la Universidad de Valencia y especialista en Medicina Familiar y Comunitaria.",
                                pablo: "Director de desarrollo de negocio e innovación de eficiencia energética en Ferrovial. Pablo tiene más de 20 años de experiencia desarrollando e implementando estrategias de negocio a nivel internacional y nacional en diferentes sectores. Con anterioridad a Ferrovial, estuvo 14 años en ACCIONA, donde lideró la implantación de la división de infraestructuras en Australia y de servicios en Canadá. Ingeniero de Caminos, Canales y Puertos por la UPM, MBA por ESADE y el EOI, y coach certificado.",
                                franciscoJavier:
                                    "Médico, especialista en Medicina de Familia, dedicado a la gestión hospitalaria, siendo directivo de varios centros hospitalarios y desde 2005 subgerente del Hospital Universitario La Paz. Tutor de prácticas desde hace 13 años de EHESP (Escuela de altos estudios sanidad francesa)",
                                miguelAngel:
                                    "Director de Ingeniería abconsultores (ingeniería dedicada a instalaciones de edificios) y Gestor energético europeo. Ejerzo como docente en el curso de postgrado “Ingeniero de climatización” de la Universidad de Valladolid, en el máster de “diseño ambiental y constructivo: Módulo Gestión energética” de la Universidad de Navarra, en el curso de postgrado “Gestor en Eficiencia Energética” de la Universidad de Extremadura y en el curso de experto de climatización de Atecyr. Soy autor de varios libros y documentos (regulación y control en instalaciones de climatización, fundamentos de climatización, auditorías energéticas, certificación energética, …). Imparto cursos sobre RITE, CTE, eficiencia energética, certificación energética. Lider, Calener Vyp y Calener GT (formador de formadores de los programas de certificación energética oficiales), auditorías energéticas, etc. Doy ponencias en distintas Ferias y Congresos del sector de la climatización y la eficiencia energética. Además, soy Secretario nacional de Atecyr, Miembro del Comité técnico de Atecyr y Presidente de la agrupación ATECYR Castilla y León.",
                                benigno:
                                    "Ingeniero Informático por la Universidad de la Coruña (1990-1995). Título Máster en Dirección de Sistemas e Comunicaciones por el Instituto Nacional de Administración Pública y la Universidad Politécnica de Madrid. Diploma de directivo de la Xunta de Galicia cursando el Programa de Dirección Innovadora. Inicio su carrera profesional en el año 1995 trabajando en empresas del sector TIC. Desde el año 1999 pertenece al cuerpo de Técnicos Superiores de Sistemas y Tecnologías de la Información del Servicio Gallego de Salud. Desde el año 2009 es Subdirector General de Sistemas y Tecnologías de la Información en la Consejería de Sanidad de la Xunta de Galicia. Esta Subdirección ha desarrollado en los últimos años proyectos pioneros de gran repercusión tecnológica y asistencial, como la informatización de la historia clínica con un enfoque regional la implantación de la receta electrónica o la digitalización de toda la imagen digital generada en el Servicio Gallego de Salud. También se han liderado grandes proyectos de Compra Pública de Tecnología Innovadora, como han sido los proyectos H2050, Innova Saúde o Codigo100 con una dotación superior a 100 millones de euros y que son un modelo de referencia en Europa. Actualmente su departamento está acometiendo un proceso de transformación digital, impulsando los procesos de telemonitorización domiciliaria, la conectividad a través de la IoT y 5G de dispositivos electromédicos de uso por parte del paciente, la inclusión del BigData en el proceso de toma de decisiones clínica, el uso de la inteligencia artificial en el diagnostico asistido por ordenador y el uso de las APPs para el autocuidado de la salud. Premio a su Trayectoria Profesional en el año 2015 el Colegio Profesional de Ingeniería en Informática de Galicia le concedió el Premio al CIO del sector salud en el año 2020 la Sociedad Española de Informática Sanitaria (SEIS). Profesional Colegiado del Año de Ingeniería Informática en el año 2021 de la Asociación Union Profesional de Galicia.",
                                patricia:
                                    "Patricia Fernández es ingeniera industrial y Master en Business Administration, cuenta con más de 10 años de experiencia en financiación de la innovación. Desde 2021 es la directora del área de Servicios de la Agencia, donde coordina las acciones de la Agencia relativas al impulso de la innovación en las pymes, el emprendimiento tecnológico y la Estrategia de Consolidación de la Biotecnología en Galicia.",
                                david: "David G Pisano es el Director de Bioinformática Clínica de Genomcore. Tiene más de 25 años de experiencia en consultoría tecnológica y de procesos, y en prestación de servicios profesionales en Europa y Latinoamérica (Thermo Fisher), bioinformática (Zeltia, Instituto  Nacional de Bioinformática), genómica del cáncer (Centro Nacional de Investigaciones Oncológicas) y ciencia de datos/análisis avanzado dentro del sector de seguros/atención médica (Sanitas). Tiene un conocimiento profundo de los procesos y los requerimientos tecnológicos relacionados con la gestión y la analítica de datos en las industrias de salud y farmacéutica, el diagnóstico in vitro, la biotecnología, la I+D, la investigación del cáncer y la informática de alto rendimiento. Es coautor de más de 100 publicaciones en revistas internacionales y lleva más de 20 años impartiendo clases de postgrado en la Escuela Nacional de Sanidad, la Universidad Complutense de Madrid y la Universidad Francisco de Vitoria, entre otras instituciones. Actualmente, también es profesor asociado en la IE University donde imparte clases de Estrategia y Health Analytics en el Master in Business Analytics & Big Data organizado por la IE School of Science & Technology, y en el Bachelor in Data and Business Analytics de la IE University, donde coordina el track Artificial Intelligence and Healthcare.",
                                manuelBosch:
                                    "Responsable de Integraciones de negocio IT del Grupo Ribera Salud: David Dapena se incorporó a Ribera en el año 2019 y actualmente lidera los proyectos de integración de las unidades del negocio del grupo a nivel europeo. Así mismo lidera proyectos internacionales de puesta en marcha de Hospitales y aéreas de Salud en Middle East, así como iniciativas tecnológicas de la gestión de la salud de la población. Es licenciado en Informatica por la Universidad Politecnica de Valencia, MBA y posee un Máster en Alta Direccion de Instuticiones Sanitarias por el IESE Business School (Madrid). Tiene mas de 20 años de experiencia en el sector de Sanidad, ha trabajado y sido Director de IT en varios Hospitales en distintas Comunidades Autónomas.",
                                bruno: "Catedrático de Universidad, Director de la Unidad de Resistencia a los Antimicrobianos, Asesor de la OMS. González Zorn ha sido Presidente del Grupo de Microbiología Molecular de la Sociedad  Española de Microbiología, miembro del Comité Científico del Programa Europeo de Resistencia a Antibióticos JPIAMR, coautor del programa H2020 de la UE y miembro del Grupo de trabajo del Plan Estatal de Investigación. Desde Septiembre del 2021 es el único español asesor de la OMS de los 15 miembros del Grupo One Health CIA (Critically Important Antibiotics for human health). Este es el primer grupo de trabajo desde la perspectiva One Health en la OMS en resistencia a los antimicrobianos. Ha sido autor del primer Programa Estratégico de Investigación en resistencia a antibióticos One Health de la UE en 2014, modelo de investigación del Plan Mundial de resistencia de la OMS de 2015. Este año 2023, además, ha sido requerido para redactar el Plan Mundial de Investigación contra la resistencia a los antibióticos 2025-2032, y será conferenciante invitado en el European Health Forum 2023 de la UE y OMS de Bad Gastein, el foro sanitario más importante del mundo.",
                                joaquim:
                                    "Joaquim Magalhães da Cunha, Ingeniero de Sistemas e Informática , es el Director Ejecutivo del Cluster de Salud de Portugal, una iniciativa única que reúne a un conjunto muy representativo de actores de la cadena de valor de la salud, en base a una misión y objetivo común, basados en una misión muy fuerte y galvanizadora- transformar Portugal en un actor cada vez más competitivo en la investigación, desarrollo, fabricación y comercialización de productos y servicios asociados a la salud. Gran parte de su actividad profesional ha sido dedicada a Caso- Consultores Associados de Organizações e Informática, Lda, que fundó en 1983, y donde desde entonces ha ejercido las funciones de Director General. Caso es una empresa de consultoría orientada al desarrollo empresarial, con sede en Braga y actuación a nivel nacional, que integra las aportaciones de un personal técnico  con intereses y especializaciones complementarias en las áreas de las ciencias de la información,  tecnologías de producción, organización de gestión, economía y formación profesional. También fue fundador de MinhoDigital SA, con experiencia de clusterización regional en el sector de las TIC, y de la NanoLogic, empresa pionera a nivel mundial en la microinyección biomateriales. Entre 2004 y 2006 fue miembro del Consejo de Administración de Pronefro - Productos Nefralógicos, SA, empresa líder en el campo de dispositivos médicos para hemodiálisis. ",
                                jorge: "Licenciado en Ciencias Físicas por la USC. Máster en Dirección de Sistemas y T.I.C. por la Universidad Politécnica de Madrid-INAP. Delegado de Protección de Datos Certificado por CERPER con código ES2112391. Experto en ciberseguridad STIC por INAP/CCN. ITIL Expert. En mis más de 25 años de experiencia en el sector de la tecnologías de la información he tenido la suerte de participar en el proceso de digitalización de la sanidad pública de Galicia y observar los retos que en la actualidad suponen la transformación digital, las amenazas que surgen en el ámbito de la ciberseguridad, la gestión de los datos sanitarios y la aplicación de la inteligencia artificial en las práctica totalidad de los ámbitos del sector.",
                                ricardo:
                                    "Licenciado en Dirección y Administración de Empresas, llevo 25 años trabajando en la industria farmacéutica. Actualmente dirijo las relaciones corporativa en el área de General Medicines de GSK, liderando proyectos como la descarbonización en el sector de la salud",
                                antonio:
                                    "Licenciado en Medicina y Cirugía 1979 por la USC y doctor por la misma universidad en 1994. Profesor titular y director de la Cátedra de Cronicidad de la Universidad de Santiago de Compostela. Miembro de la Real Academia de Medicina de Galicia. En su carrera profesional ha ejercido de Jefe de Servicio de Medicina Interna del CHUS (2017 - 2022) y coordinador de la Unidad de Pluripatología y Edad Avanzada del mismo centro. Miembro de la Junta Directiva de la Sociedad española de HTA, presidente de la Sociedad gallega de HTA y riesgo vascular y de la Academia médico-quirúrgica de Santiago. Coordinador del Grupo de riesgo vascular de la Sociedad Gallega de Medicina Interna y profesor asociado de Ciencias de la Salud del Departamento de Medicina de la Facultade de Medicina y participación docente en el tercer ciclo de Medicina. Coordinador de la docencia de residentes de Medicina Familiar y Comunitaria del CHUS. Especialista en Hipertensión por la Sociedad Europea de Hipertensión desde el 2002.",
                                jorgeAboal:
                                    "Nació en Palencia en 1962. Es licenciado en Medicina y Cirugía por la Universidad Autónoma de Madrid. Grado de doctor en Medicina y Cirugía por la Universidad de Santiago de Compostela. Diploma de Alta Dirección Hospitalaria impartido por la Escuela Gallega de Administración Sanitaria. Experto universitario de Admisión y Documentación Clínica por la Universidad Complutense de Madrid.",
                                luis: "Licenciado en Psicología (Universidad de Santiago de Compostela) Master en Gestión de Centros y Servicios para Personas Mayores (Universidad de La Coruña) y Curso Experto en Inteligencia Emocional y Bienestar Organizacional (Universidad de Santiago de Compostela). Cofundador y actual CEO de Atendo, Presidente Longevita, Vicepresidente del Cluster Saúde de Galicia (CSG).Miembro de la Comisión de Seguimiento en la Cátedra Afaga-Atendo de Edadismo de la Uvigo y nuevo Patrono de la Fundación Grandes Amigos. Desde hace 23 años trabaja en la búsqueda de un lugar en el mundo para cuando vamos cumpliendo años y en hacer de Galicia el mejor lugar en el mundo para vivir y envejecer con salud. En este RIES23 acompañado de gran parte del equipo, presentan en primicia nuevo proyecto.",
                                albertCreixell:
                                    "Albert Creixell es el responsable de Alexa Enterprise en Reino Unido y Espana. Su equipo se encarga de integrar experiencias con Alexa y AI en entornos de salud, gente mayor y hospitality. Albert es Ingeniero Superior de Telecomunicacion por la Univerisdad Politecnica de Catalunya y MBA por la London Business School.",
                                andrea: "Actual HF&RD,Marketing and Sustainability Manager de IKEA en España. Andrea es una profesional del Retail especialista en técnicas de Visual Merchandising, Interiorismo y Marketing. Analiza los insigths de mercado conforme a dar una mayor calidad en la experiencia del cliente en los puntos de encuentro desarrollando el negocio de una manera responsable y sostenible con un buen impacto en nuestra comunidad.",
                            },
                            resumenes: {
                                agoraPlexus:
                                    "Partiendo de una visión holística de la salud de las personas y con la participación de profesionales de dilatada experiencia en sus campos de actuación pretendemos analizar cómo los avances en los estudios genéticos, las nuevas generaciones de fármacos y terapias, las capacidades actuales de procesamiento de imágenes y datos así como el uso de la Inteligencia Artificial, Machine Learning, Big Data, etc. nos pueden facilitar la implementación de estrategias y protocolos de Medicina Personalizada desde la prevención, detección temprana, tratamiento y monitorización de la salud de las personas.",
                                agoraITGALL:
                                    "Un Living Lab es un ecosistema de innovación abierta en entornos reales de la vida. Un concepto de actualidad donde existe un campo muy amplio de recursos en los que queda mucho recorrido por aprender y progresar dentro del ecosistema de cuidados. En este Ágora se pretende facilitar la colaboración y el intercambio de conocimientos entre las diferentes partes del ecosistema para promover la homogeneización de la validación de soluciones digitales en cuidados. Para ello, debemos tratar diferentes temas donde hay que avanzar y crecer. Entre ellos tenemos: la estandarización europea, la búsqueda de financiación y cooperación, la ética y privacidad, la co-creación con los ciudadanos, los desafíos y oportunidades futuras, la red de colaboración y las mejores prácticas que ya existen. En este Ágora también habrá un debate abierto sobre cómo los Living Labs pueden aportar valor al mundo empresarial y emprendedor, para generar sinergias con Start-ups, aceleradoras, PYMES y grandes empresas tecnológicas.",
                                agoraGradiant:
                                    "El sector sanitario está muy regulado y los datos sanitarios se consideran merecedores de una protección especial. Por ello, se espera en este ágora evaluar la utilidad del modelo europeo de Espacio de Datos Europeo de Salud, las principales problemáticas asociadas a su puesta en marcha y las ventajas que dicho modelo puede aportar para la mejora de los cuidados socio-sanitarios, la personalización de los planes de tratamiento, la investigación médica y/o el desarrollo de medicamentos.",
                                agoraFerrovial:
                                    "La temática del ágora hila con la reciente Estrategia de Economía Circular que el Sergas ha lanzado, y que incluye planes de reducción de CO2 y mejora de la Eficiencia Energética, así como la adecuación de los centros sanitarios para evitar pérdidas energéticas. En la Mesa del Ágora nos gustaría que se trataran las diferentes formas de poder alcanzar estos objetivos mediante modelos de inversión directa, financiados con colaboración público- privada, o a través de mecanismos de Compra Pública Innovadora.",
                                agoraDomusVi:
                                    "Como sociedad tenemos que implicarnos y decidir qué tipo de longevidad queremos. El objetivo no es sólo vivir más, sino vivir mejor y que cada persona pueda elegir en base a sus preferencias cómo afrontar la longevidad. Como sociedad tenemos que ser capaces de dar respuesta a los grandes retos que este nuevo paradigma representa.",
                                agoraRibera:
                                    "Uno de los mayores retos a los que se enfrenta el sector sanitario es el del abordaje de las patologías crónicas y la adecuada atención a estos pacientes desde el sistema. Analizaremos desde puntos de vista diferentes la evolución de la atención a la cronicidad y cómo la incorporación de la tecnología y el uso de la inteligencia artificial ha ayudado al seguimiento de los pacientes crónicos sin necesidad de desplazarse hasta el hospital.",
                                mesaBalidea:
                                    "En la actualidad son muchos los retos a los que se enfrentan los sistemas sanitarios. La Inteligencia Artificial parece que puede ayudar a solucionar alguno de ellos, pero al mismo tiempo supone en sí misma uno de los mayores retos a los que se tiene enfrentado la Sanidad: desde los retos éticos a los tecnológicos, desde su uso como apoyo a la decisión clínica como la necesidad de confiar en algoritmos complejos... Esta mesa pretende aproximarse al enfoque que los sistemas sanitarios deben tener para sacarle partida a esta disrupción tecnológica y a los posibles peajes que puede suponer.",
                                mesaTecnologia:
                                    "El uso de las tecnologías en el ámbito de la salud está experimentando un crecimiento significativo en las últimas décadas, ofreciendo diversas oportunidades, como pueden ser la mejora en el diagnóstico, la telemedicina, el registro electrónico de salud o la medicina personalizada, entre otras. Este tema también presenta diversos desafíos, como puede ser la brecha digital, el marco regulatorio, la privacidad y seguridad en el almacenamiento o la transmisión de datos, con sus respectivas limitaciones en lo relativo a los costos por la inversión de tecnologías en salud, la resistencia que existe al cambio o los errores algorítmicos. El benchmarking de casos exitosos y la consideración de las limitaciones son fundamentales para aprovechar al máximo el potencial de estas tecnologías en el cuidado de la salud pero, sin olvidarnos que la tecnología a veces no es un reto en sí mismo, sino el reto viene en cómo se adapta esta tecnología al contexto y de qué manera evoluciona de la mano de las personas que integran el ecosistema.",
                                mesaZendal:
                                    "Mesa redonda con expertos líderes en el ecosistema salud y vacunología para dialogar sobre los desafíos de la salud global. La salud no tiene fronteras geográficas por ello debemos trabajar para una mejor preparación ante posibles emergencias sanitarias desde nuestro ámbito de actuación, Europa. La mesa ofrecerá una oportunidad exclusiva para conocer a expertos nacionales e internacionales que trabajan en el ecosistema de la salud y vacunas, desde el enfoque más técnico, universitario hasta la parte industrial y de información pública. Tratará aspectos relativos a la necesidad de una mejor preparación y respuesta frente a exigencias o emergencias sanitarias y futuras pandemias para abordar posibles futuras crisis o emergencias de salud global desde una perspectiva ONE Health y desde un marco europeo. ",
                                keynoteVania:
                                    "En esta conferencia magistral, se profundizará en el papel vital del envejecimiento saludable como puerta de entrada para aprovechar las oportunidades ilimitadas que presenta nuestra prolongada esperanza de vida. Podrás descubrir que cambios e innovaciones se precisan para asegurar que podamos continuar siendo y haciendo lo que valoremos en la vejez, incluyendo la transformación que se precisa en la forma en que trabajamos, vivimos y contribuimos a la sociedad. No te pierdas este Keynote que te permitirá desbloquear todo el potencial de nuestra mayor longevidad y convertirla en una fuerza transformadora tanto para individuos como para comunidades y la sociedad en su conjunto.",
                                keynoteNick:
                                    "Este discurso ofrece una visión general de las políticas de investigación e innovación de los últimos 25 años desde una perspectiva europea e internacional, centrándose en los grupos de funciones (medicina, ciencias de la vida y salud, incluida la tecnología y lo digital). Se describirán los objetivos, instrumentos y contexto de las políticas junto con buenas prácticas y lecciones aprendidas para la educación, la investigación, la innovación y el desarrollo de clusters. Preguntas como '¿Qué podemos aprender de los fracasos y los éxitos?', '¿Deberíamos continuar con este enfoque de clusters de innovación en salud considerando los desafíos socioeconómicos actuales?' y '¿Cuáles son las implicaciones de las lecciones aprendidas para los clusters emergentes en el sudeste de Europa?'. Esta presentación se acercará a un nivel de políticas y se acercará a ejemplos prácticos y experiencias personales en todo el mundo (tanto públicas como privadas) con las últimas tendencias y el estado actual de las cosas con respecto a la innovación y la transformación de la atención médica.",
                                proyectoXoia:
                                    "Sanidade Mediaverso es una plataforma de gestión de contenidos multitecnológicos para la promoción de estilos de vida saludables, que ha desarrollado la UTE BiGXoia, contratada por la Dirección Xeral de Saúde Pública y financiada en el marco del eje REACT-UE del programa operativo FEDER Galicia 2014-2020. Esta plataforma contiene recursos digitales que orientan a la ciudadanía gallega en cómo incluir hábitos de vida saludables en sus rutinas diarias. Aplicaciones móviles, de realidad vitual, de realidad aumentada, píldoras formativas, menús saludables y otros contenidos relacionados con la alimentación equilibrada, la promoción de la actividad física, el sueño saludable y el bienestar emocional ayudarán a conseguir los objetivos marcados en el Plan Obesidade Zero en Galicia.",
                                proyectoOcean:
                                    " Cómo un nuevo paradigma en la recogida de residuos sólidos puede mejorar la sostenibilidad del sistema y puede además lograr una mayor seguridad sanitaria . Desplastificación, Atenuación de la Huella Hídrica , Disminución de la Huella Hídrica , Accesibilidad  Universal: son las directrices que definen este cambio de paradigma y que dan lugar a una mejor higiene y seguridad sanitaria.      ",
                                proyectoGSK:
                                    " El cambio climático es la principal amenaza para la salud humana según OMS. Las emisiones del sector de la salud suponen el 4,5% de las emisiones totales, un sector implicado en mejorar la calidad de vida de las personas tiene que tomar acción para reducir su huella climática. En España diferentes actores del sector de la salud  están tomando acciones para reducir la huella de carbono siendo un ejemplo para el ecosistema sanitario y otros sectores. Desde GSK como compañía farmacéutica proponemos acciones que permitan reducir la huella de carbono, que permiten seguir mejorando la calidad de vidad de las personas y reduciendo el impacto en el calentamiento global. Presentaremos  un ejemplo que permitiría reducir hasta 400.000 toneladas de CO2eq al año, el equivalente a las emisiones de 220.000 vehículos.",
                                proyectoLongevitaAtendo:
                                    "Una alternativa de alojamiento para las personas mayores que inicia en Galicia la Re-Evolución de nuevas modalidades de alojamiento senior que están llegando al sector en España y que aspira a convertirse en un ecosistema natural desde donde democratizar el acceso a la innovación y el conocimiento en este sector. Un centro intergeneracional de apartamentos de 25m2 con todo lo necesario para que las personas que allí convivan sigan encontrando muchos motivos para “vivir con sentido”. Y una respuesta a una generación de personas mayores diversa y heterogénea que reclama otros modelos para cuando no sea posible seguir viviendo en su casa, que es donde la mayoría han elegido vivir y envejecer.",
                                proyectoAmazon:
                                    "Alexa Smart Properties for Senior Living ya está disponible en España. Este servicio, que simplifica el uso y gestión de dispositivos con Alexa integrada, está diseñado para ofrecer experiencias de valor añadido y personalizadas para mejorar el día a día de las personas mayores y, operativamente hablando, del personal sanitario en residencias. Amazon presentará los casos de uso instalados en los partners de lanzamiento en España y explicará las experiencias con gente mayor y el asistente de voz.",
                                proyectoIKEA:
                                    "Rediseñar las ciudades del futuro para la sociedad más longeva de la historia, en la que se tome conciencia de la necesidad de crear entornos y servicios que promuevan y faciliten la vida activa y saludable, es uno de los principales retos que requieren de cooperación para ofrecer soluciones diferentes y sostenibles. #RETO25 es la unión de fuerzas a favor de un objetivo de interés común: Darle valor a nuestro hogar como refugio de bienestar emocional y como una parte de nosotros y de nuestra historia de vida.",
                            },
                        },
                    },
                    hero23: {
                        date: "8 y 9 de noviembre de 2023",
                        longevity: "Longevidad",
                        ia: "IA",
                        logo: "/logo-azul.png",
                        organiza: "Organiza",
                        colabora: "Colabora:",
                        i1: "8 y 9 de noviembre de 2023",
                        i2: "Hotel Attica21 4****s Business & Wellness, Vigo. Formato presencial",
                        i3: "Evento de relevancia internacional",
                        i4: "Cena de gala y entrega de premios #RIES23 y buenas prácticas #SEN",
                        i5: "Networking, sinergias y casos de éxito",
                        program: "Programa",
                        link: "https://forumries.com/RIES23_Programa.pdf",
                        description2:
                            "En esta octava edición, que se celebrará en la ciudad de Vigo, la temática del VIII Fórum RIES 2023 (#RIES23)  'Ecosistemas innovadores de salud'  engloba uno de nuestros propósitos principales:  ser una plataforma profesional de colaboración público-privada entre los diferentes agentes del sector que potencie los proyectos innovadores colaborativos dentro de nuestro ecosistema de innovación en salud. #RIES23 se centra en resaltar el papel imprescindible que juegan los ecosistemas de innovación en salud y sus protagonistas, valor core de nuestra #ComunidadCSG. En esta octava edición del Fórum RIES aspiramos a dar voz, escuchar y conocer a todos los miembros de los ecosistemas innovadores mientras profundizamos en cuatro temáticas de interés: Longevidad, Biotech, OneHealth e Inteligencia Artificial.",
                    },
                    logos: {
                        csgNeg: "/csg-negativo.png",
                        csgPos: "/csg-positivo.png",
                        ries: "/RIES-logo-negativo.png",
                    },
                    patrocinios: {
                        title: "Tipos de patrocinios y colaboraciones",
                        granito:
                            "A continuación, te enumeramos varios formatos de patrocinio o colaboraciones (que podéis consultar en detalle en el dossier), pero escribenos si se te ocurre cualquier otra forma de “poner tu granito de arena”. ¡Nuestros mejores embajadores sois vosotros!",
                        linkName: "Dossier de patrocinadores",
                        link: "https://registro.forumries.com/wp-content/uploads/2023/08/RIES23_Patrocinadores-1.pdf",
                        support: "¡Hazte patrocinador!",
                        form: "https://registro.forumries.com/patrocinadores",
                        type1: "DIAMANTE (1 patrocinio posible | 8000€ + IVA)",
                        type2: "PLATINUM (8 patrocinios posibles | 3500€ + IVA)",
                        type3: "DINAMIZADOR ÁGORA (6 patrocinios posibles | 2500€ + IVA)",
                        type4: "PONENTE ÁGORA (18 patrocinios posibles, 3 max/ágora 500€ + IVA)",
                        type5: "MODERADOR MESA REDONDA (2 patrocinios posibles | 1500€ + IVA)",
                        type6: "PONENTES MESA REDONDA (8 patrocinios posibles, 4 max/mesa redonda | 1000€ + IVA)",
                        type7: "PROYECTO (4 patrocinios posibles | 1500€ + IVA)",
                        type8: "GOLD (10 patrocinios posibles | 1000€ + IVA)",
                        type9: "SILVER (20 patrocinios posibles 1500€ + IVA)",
                        type10: "Socio colaborador (# ilimitado de patrocinios posibles | 250€ + IVA). ",
                        type11: "Colaboración con Coffee-break -1 (2 patrocinios posibles | 1200€ + IVA) ",
                        type12: "Colaboración con almuerzo de trabajo (2 patrocinios posibles | 1200€ + IVA}",
                        type13: "Colaboración con visita cultural (1 patrocinio posible | 2000€ + IVA) ",
                        type14: "Colaboración con Lanyard (2 patrocinios posibles | 1200€ + IVA)",
                        type15: "Colaboración con alguna sección de #RIES23 de la jornada del 9 de noviembre (4 patrocinios posibles | 250€ + IVA)",
                        type16: "Roll-up en Coffee-breaks (# ilimitado de patrocinios posibles | 350€ + IVA) ",
                        type17: "Folletos en mesa (# ilimitado de patrocinios posibles | 150€ + IVA) ",
                        cta: "¡Patrocina!",
                        ltype1: "DIAMANTE",
                        ltype2: "PLATINUM",
                        ltype3: "DINAMIZADOR ÁGORA",
                        ltype4: "PONENTE ÁGORA",
                        ltype5: "MODERADOR MESA REDONDA",
                        ltype6: "PONENTES MESA REDONDA",
                        ltype7: "PROYECTO",
                        ltype8: "GOLD",
                        ltype9: "SILVER",
                        ltype10: "Socio colaborador",
                    },
                    info: {
                        booking:
                            "Reserva una habitación en el hotel de #RIES23",
                        valid: "a precio especial hasta el 8 de septiembre",
                        hab1: "Habitación Attica21 doble, de uso individual en régimen de alojamiento y desayuno buffet - 90€/noche",
                        hab2: "Habitación Attica21 doble, en régimen de alojamiento y desayuno buffet - 103€/noche",
                        reserva: "Para reservar escribid al correo",
                        reserva2:
                            "o llamad al teléfono +34 986 46 21 21 e indicar que sois asistentes del 'Congreso #RIES23'",
                    },
                    mailchimp: {
                        subscribe: "Suscríbete a la newsletter de #RIES23",
                        name: "Nombre",
                        send: "Enviar",
                        sending: "Enviando",
                    },
                    program23: {
                        day8: "Jornada 8 de noviembre",
                        hour8: "16:00 - 02:00 (+1 DÍA) CET",
                        p81: "Presentación de resultados de Senior Eco-Nect (#SEN) (en Museo Verbum - Casa de las Palabras)",
                        p82: "Inauguración #RIES23 con el Conselleiro de Sanidade (Señor Conselleiro Julio García Comesaña) y la Presidenta del CSG (Rocío Mosquera)",
                        p83: "Entrega de Premios #RIES23 y buenas prácticas #SEN",
                        p84: "Cierre de premios y paso a cena",
                        p85: "Cena de gala",
                        p86: "Presentación programa Jornada #RIES23 del 9 de noviembre",
                        p87: "Afterwork",
                        day9: "Jornada 9 de noviembre",
                        hour9: "9:30 - 19:00 CET",
                        p91: "Apertura y Bienvenida al VIII Fórum RIES 2023: Ecosistemas Innovadores en Salud",
                        p92: "Keynote - Vânia de la Fuente-Núñez",
                        p93: "Mesa Redonda - Inteligencia Artificial: 'Retos de los Sistemas Sanitarios ante la I.A.'",
                        p94: "Café",
                        p95: "Mesa Redonda - Biotech: 'Retos ante futuras emergencias sanitarias. Prevención y vacunas'",
                        p96: "Keynote - Nick Guldemon",
                        p97: "Mesa Redonda: 'Uso de las tecnologías en salud: Retos, Benchmark y Limitaciones'",
                        p98: "Visita institucional a los stands Platinum",
                        p99: "Comida Cóctel #RIES23",
                        p910: "Ágoras / Pitch proyectos / Project Plans",
                        p911: "Cierre networking #RIES23",
                        pitch: "Pitch proyectos",
                    },
                },
            },
            en: {
                translation: {
                    menu: {
                        awards: "RIES Awards",
                        editions: "RIES Editions",
                        sponsors: "Sponsors",
                        comite: "#RIES23 Comitee",
                    },
                    ediciones: {
                        twentythree: "VIII RIES Forum 2023",
                        twentytwo: "VII RIES Forum 2022",
                        twentyone: "VI RIES Forum 2021",
                        twenty: "V RIES Forum 2020",
                        nineteen: "IV RIES Forum 2019",
                        eighteen: "III RIES Forum 2018",
                        seventeen: "II RIES Forum 2017",
                        sixteen: "I RIES Forum 2016",
                    },
                    tematicas: {
                        twentytwo:
                            "State of the Art in Health: Healthcare Innovation and New Care Models",
                        twentyone: "Digital Revolution in Healthcare and Care",
                        twenty: "Silver Economy: Food & Wellbneing",
                        nineteen:
                            "Silver Economy: for Active and Healthy Ageing",
                        eighteen: "Smart, healthy and friendly cities",
                        seventeen: "Living Labs. LabSaúde presentation",
                        sixteen:
                            "International Challenges of the Health Ecosystem. Local Solutions.",
                    },
                    hero: {
                        date: "November 8th-9th",
                        cta: "Register",
                        register: "https://registro.forumries.com/en/",
                        description:
                            "#RIES is the international reference forum at a national and international level to address the challenges and opportunities of the health ecosystem. Led by the Galician Health Cluster, CSG, it has been created as a meeting forum between the main agents of the public and private health and care sectors at a European level in collaboration with our strategic partners of the #CSG_Community",
                    },
                    premios: {
                        awards: "RIES Awards",
                        twentythree: "#RIES23 Awards",
                        twentytwo: "#RIES22 Awards",
                        twentyone: "#RIES21 Awards",
                        cta: "Take part in the #RIES23 Awards and discover all awarded projects",
                        innovacion: "Innovation CSG",
                        impacto: "Impact on people",
                        conocimiento: "Knowledge",
                        comunidad: "CSG Community",
                        revelacion: "Revelation",
                        resiliencia: "Resilience",
                        texto23: {
                            convocatoria:
                                "#RIES23 Awards — Open to submissions!",
                            participa:
                                "If you are a entity with an innovative project in the health or care sector, take part in the #RIES23 Awards. A great opportunity to give visibility to your innovatiove project!",
                            innovacion:
                                "Innovation CSG Award for the most innovative entities",
                            impacto:
                                "Impact on people Award to entities with services or products with the greatest impact on people",
                            conocimiento:
                                "Knowledge Award to entities that have generated the most knowledge",
                            comunidad:
                                "CSG Community Award for the entities most committed to the #CSG_Community",
                            revelacion:
                                "Revelation Award to entities that have recently stood out for achieving a significant impact",
                            resiliencia:
                                "Resilience Award to entities that have demonstrated the ability to overcome adversity, adapt to difficult situations and recover from them in an exemplary manner",
                            requisitos: "Requirements to participate:",
                            video: "Explain your project in a video with 1’ maximun duration in 16:9 horizontal format at a minimum of 1920 x 1080.",
                            presentacion:
                                "Make a brief presentation with the highlights of your project",
                            formulario:
                                "Complete your contact information and upload both files in this form:",
                            limite: "Deadline: October 18th",
                            cta: "Take part in the #RIES23 Awards",
                        },
                    },
                    links: {
                        report: "Report",
                        gallery: "Gallery",
                        news: "News",
                        press: "Press clipping",
                        videos: "Videos",
                        program: "Program",
                        speakers: "Speakers",
                        introduction: "Introduction",
                        presentation: "Presentation",
                        presentations: "Presentations",
                        neuroatlantic: "neuroATLANTIC proyect",
                        ahfes: "AHFES proyect",
                        committee: "Committee",
                        greeting: "President's Greeting",
                        letter: "Letter from the #RIES22 President",
                    },
                    pages: {
                        csg: {
                            p1: "The Galician Health Cluster, CSG, includes public and private entities from the healthcare and social care sectors. The Galician Health Cluster, CSG, is a private non-profit entity. Within the Galician health ecosystem, we act as a professional platform that encourages public-private cooperation to support innovation for the co-creation of solutions that improve people’s well-being.",
                            p2: "Our members include patient associations, entrepreneurs, startups, SMEs, multinationals, as well as universities, technology centers, biomedical foundations, non-profit associations, and professionals from the healthcare and social care sectors.",
                            p3: "Today, more than 10 years after its foundation, the CSG ecosystem includes more than 100 entities between users, industry, and regulators, managing year after year to elevate Galicia to a national and international level through innovation in health, supporting and promoting the competitiveness of the sector.",
                            p4: "On the other hand, the CSG has positioned itself as a professional collaboration platform for global projects and alliances and as a catalyst for the needs and concerns of its associates with more than 100 partners, around 70 projects, and a presence in over 100 markets. All this with the aim of continuing to create global alliances for the economic and social development of Galicia.",
                            p5: "Our objective is to position the Cluster Saúde de Galicia, CSG, as the Guiding Lighthouse toward the future of the Galician health ecosystem and to continuously strengthen our position with the constant search for improvement and innovation.",
                            url: "https://clustersaude.com/en/",
                            cta: "Visit CSG's website",
                        },
                        exporpymes: {
                            p1: "EXPORPYMES is the renowned internationalization event for the promotion of foreign trade that the Chamber of Commerce of A Coruña has organized since 2013. The main objective is to promote B2B between international and Galician SMEs in the food, beverage, construction materials and nautical sectors, all of them very representative of the export activity of Galicia. Since 2022, in collaboration with the CSG, the health sector becomes one of the sectors represented, offering a unique opportunity for the health industry.",
                            r23: "Relive EXPORPYMES 2023",
                            g23: "Discover more info and the EXPORPYMES 2023 gallery",
                            g23url: "https://clustersaude.com/en/the-galician-health-cluster-csg-commits-to-promoting-the-internazionalitation-of-galician-companies/",
                            r22: "Relive EXPORPYMES 2022",
                        },
                        carta23: {
                            carta: "Letter from the president of #RIES23",
                            p1: "Dear collaborators,",
                            p2: "Having reached this eighth edition of the Forum RIES 2023 after especially complex years, we believe that this event has reached heights, but it is necessary to maintain our efforts to promote the health sector.",
                            p3: "Today no one doubts that the prosperity and future of society depends largely on our greatest good: health. A health whose strength and well-being must be supported by scientific and technological advances that address current and future challenges.",
                            p4: "In this eighth edition we focus on two realities, the Longevity of the population and global health from a OneHealth approach, and two tools of enormous impact, Biotechnology and Artificial Intelligence.",
                            p5: "Longevity: the aging of the population is a growing reality, and therefore we must face new challenges linked to it that require a reformulation of the approach in terms of greater humanization, flexibility and efficiency.",
                            p6: "OneHealth: a health and scientific perspective that has fully incorporated this concept that tells us about a single health, just as we have a single planet. Today, after a 21st century with highly relevant epidemic outbreaks, no one doubts the interrelation between aspects such as the environment, climate change, globalization, and human and animal health.",
                            p7: "Biotechnology: COVID clearly showed us the way: research and prevention of diseases through biotechnology and vaccines. The best investment in Health is prevention and among the most powerful prevention systems are vaccines, whose cost/benefit balance is unmatched by any other.",
                            p8: "Finally, Artificial Intelligence (AI) is transforming the way healthcare is delivered. At the same time, new challenges and opportunities appear that must be addressed from a broad perspective and with one main objective: promoting the well-being and security of people and the public interest.",
                            p9: "Let's move towards this new way of understanding health, in a global way. This is our commitment to this edition VIII Forum RIES 2023 , focused on Innovative Care Ecosystems.",
                            p10: "I am convinced that it will be of great interest with the contribution of all those involved.",
                        },
                        comite: {
                            comite: "#RIES23 Organizing Comitee",
                            honorifico: "#RIES23 Honorific Comitee",
                            cta: "Discover all information about the #RIES23 Organizing Comitee",
                        },
                        ponentes: {
                            ponentes: "#RIES23 Speakers",
                            cta: "Discover all #RIES23 Speakers",
                            programa: "Download the full program",
                            tipos: {
                                keynote: "Keynote Speaker",
                                keynotes: "Keynote Speakers",
                                agoraLead: "Agora Leader",
                                agoraSpeak: "Agora Speaker",
                                mesaM: "Round Table Moderator",
                                mesaS: "Round Table Speaker",
                                proyecto: "Project Presentation",
                                proyectos: "Projects",
                                agoraPlexus:
                                    "Agora Personalized Medicine, Technologies and Data",
                                agoraITGALL:
                                    "Agora Living Labs in Care. How to homogenize the validation of digital solutions in care through living labs across Europe",
                                agoraGradiant:
                                    "Agora Transforming Health and Care Attention: The Role of European Data Spaces",
                                agoraFerrovial:
                                    "Agora The decarbonization process in the sector: Carbon Neutral healthcare centers",
                                agoraDomusVi:
                                    "Agora Technology for an Active Longevity",
                                agoraRibera:
                                    "Attention to chronicity in the 21st century",
                                mesaBalidea:
                                    "Round Table Challenges of Health Systems faced by A.I.",
                                mesaTecnologia:
                                    "Round Table The use of technologies in health: challenges, benchmark and limitations",
                                mesaZendal:
                                    "Round Table Challenges in the face of future health emergencies. Prevention and vaccines",
                                keynoteVania:
                                    "Healthy aging: the key to unlocking the opportunities of our increasing longevity",
                                keynoteNick:
                                    "Lessons learned from healthcare transformation and the role of innovation clusters",
                                proyectoXoia:
                                    "Sanidade Mediaverso: Technology to promote a healthy lifestyle",
                                proyectoOcean: "Ecology, hygiene and health",
                                proyectoGSK:
                                    "Promoting the decarbonization of the health sector in Spain",
                                proyectoLongevitaAtendo:
                                    "Atendo Senior Living: Strategic Alliances of a Residential Center of Innovation and Accommodation with Care",
                                proyectoAmazon:
                                    "Alexa even closer to the elderly in Spain: Alexa for Senior Living",
                                proyectoIKEA: "IKEA: #CHALLENGE25",
                            },
                            rol: {
                                vania: "Independent consultant",
                                nick: "Professor",
                                joseManuel: "Managing Director",
                                maria: "Coordinator of the Personalized Medicine Strategy of Galicia",
                                mariona:
                                    "Head of Advanced Therapies Manufacturing Center of Galicia",
                                marcos: "Coordinator of the UDC AI Node",
                                angel: "Digital Transformation Manager",
                                nieves: "ITGALL Coordination Assistant",
                                cristofol: "Innovation Project Manager",
                                konstantina:
                                    "Medical Physics and Digital Innovation Laboratory",
                                agustin: "Head of Technology",
                                joseManuelPerez:
                                    "Responsible for Technical Assistance Coordination",
                                karen: "Deputy CEO",
                                ramon: "VP National Expansion",
                                joseAngel: "Business Development Director",
                                albert: "Chief Data Officer",
                                carmen: "University Professor",
                                carlos: "Technical Director CoE Data Intelligence",
                                abdel: "Director Dimension Lab.",
                                beatriz:
                                    "Corporate Director of Communication and Image",
                                graziella: "President",
                                silvia: "Deputy Director General of Programs to promote healthy lifestyles",
                                joseAntonio: "Founder and Commercial Director",
                                manuel: "CEO",
                                joseAntonioLopez:
                                    "Professor of microbiology and director of the UAM Neurovirology group",
                                robertoCarlos: "Senior Researcher",
                                cesar: "Senior Researcher",
                                javier: "Deputy Director General of Health and Care Innovation ",
                                joao: "Head of Product",
                                joseDavid: "Operations Manager",
                                carlosCatalan: "Care Director",
                                pablo: "Energy Efficiency Sales Director",
                                franciscoJavier: "Assistant Manager",
                                miguelAngel: "Director",
                                benigno:
                                    "Deputy general director of information systems and technologies at the Consellería de Sanidade",
                                patricia: "Service Area Director",
                                david: "Director of Clinical Bioinformatics",
                                manuelBosch:
                                    "Technological Integration Manager",
                                bruno: "University Professor, Head of the Antimicrobial Resistance Unit and WHO Advisor",
                                joaquim: "Executive Director",
                                jorge: "Head of the Data Protection and Management Service of the IT Service and Data Protection Delegate of the Galician Public Health System",
                                ricardo:
                                    "Director Corporate & Government Affairs General Medicines ",
                                antonio:
                                    "Professor and Director of the Chair of Chronicity at the University of Santiago de Compostela. Member of the Galician Medicine Royal Academy",
                                jorgeAboal: "General Care Director",
                                luis: "CEO",
                                albertCreixell:
                                    "Head of Alexa Enterprise Spain & UK",
                                andrea: "HF&RD, Marketing and Sustainability Manager ",
                            },
                            description: {
                                vania1: "Dr. Vânia de la Fuente-Núñez is an international expert on healthy aging and aging. She currently works as an independent consultant, offering technical and strategic advice to different entities to help improve the lives of older people. Her portfolio of services ranges from research and training to strategy development and evaluation. She is a renowned speaker, leading efforts to develop policies and programs to better respond to population aging in different countries and working to attract greater funding to the area of ​​aging.",
                                vania2: "Previously, Dr. de la Fuente-Núñez worked as an international civil servant at the World Health Organization for almost a decade, being responsible for the Global Campaign Against Ageism and co-author of the landmark United Nations World Ageism Report. She also led the area of ​​education and training on healthy aging, implementing innovative learning programs and supporting policy and program development in countries and regions around the world. Additionally, she contributed to the launch of the WHO Global Health Research and Development Observatory and supported the Secretariat of the WHO Research Ethics Committee during the 2014-15 Ebola outbreak.",
                                vania3: "Before working at the WHO, Vânia worked with different NGOs and research institutes in high- and low-income countries. Vânia has a degree in medicine and in social and cultural anthropology, and completed a Masters degree in Philosophy, Politics and Health Economics thanks to a scholarship from La Caixa.",
                                nick: "Nick Guldemond is a Professor healthcare and public health at Gdansk Medical University Poland and Leiden University Medical Center in the Netherlands and hold degrees in medicine and electric engineering with a PhD from Maastricht University. He is an expert in the field of digital health, eHealth, and healthcare innovation. He is known for his work in advancing the use of technology, particularly digital and data-driven solutions, in healthcare to improve patient care, population health, and healthcare systems. He was the CEO and founder of the Medical Field Lab (early 2000) i.e. the first international example of a university hospital based ‘living lab’ dedicated to science, innovation and societal impact. As such he was also co-founder of the Dutch Innovative Medical Device Initiative Nick Guldemond has held various academic positions and has been involved in many research projects related to digital health and healthcare innovation. He has also been a speaker, panellist at numerous international conferences and forums. He is an advisor for many governments, WHO, the European Commission and industries across the globe.",
                                joseManuel:
                                    "Currently Managing Partner at Plexus Tech, directing the health, social well-being and mutual insurance area of the company, establishing strategy and innovation in new solutions and services, alliances and markets as well as the development of the company in the sectors of responsibility.More than 25 years of experience in innovation projects, solutions and services related to the transformation of social and healthcare organizations based on the use of ICT. Computer Engineer, Master in Business Management, specialization courses and seminars in technologies, methodologies and new management models applied to the social and health sector.",
                                maria: "Graduate in Biology, PhD from the University of Santiago de Compostela, she completed her postdoctorate at the University of Sao Paulo (Brazil). For 15 years she has been coordinator of the Cardiovascular Genetics Unit of the Health Research Institute of Santiago (IDIS) and currently coordinates from the FPGMX the Personalized Precision Medicine Strategy of Galicia. She has worked in human genetics for more than 25 years and along with her research work, she carries out healthcare work as a geneticist responsible for genetic studies at the Family Heart Disease Unit of the Cardiology Service of the Santiago de Compostela Hospital Complex. Throughout her professional career she has led national and regional projects in the area of genomics, participated in the creation of companies based on research results, has registered patents and has published a multitude of research articles. At the teaching level, she directs doctoral theses, master's theses and degree final projects and has taught in her own degrees, as well as in several master's and postgraduate degrees.",
                                xurxo: "Xurxo Cegarra has a degree in Physical Sciences specializing in Optoelectronics from the USC, a Master in Telematics specializing in Networks and Communications from the UDC and co-founder of the technology companies Wireless Galicia and Insati Innovation. With a 20-year track record in the ICT sector, he leads work groups and innovative technological projects in the field of health, in collaboration with research groups, technology centers, hospitals, biomedical research institutes, patient associations and companies, always under the prism of open innovation and the quadruple helix.",
                                mariona:
                                    "Trained in Biotechnology (2013), with a master's degree in translational medicine (2014) and a doctorate in translational immunology (2019), she is the Head of the Galicia Immunotherapies Production Center and recipient of a contract for highly qualified personnel from the Senior Talent program of the Xunta de Galicia. She carried out research work during her studies at the KlinikumRechts der Isar, at the Technische Universität München and at the Biomedical Research Institute of Barcelona. Her doctoral thesis, developed at the University Medical Center of Utrecht, focused on the investigation of the dynamics of T and B lymphocytes during the immune reconstitution process in patients treated with chemotherapy. During his postdoctoral training at the San Carlos Clinical Hospital, he worked on the characterization and expansion of infiltrating tumor lymphocytes for the development of adoptive therapy products in ovarian cancer and other tumors, as well as on the identification of genomic and transcriptomic biomarkers of response and survival. to said immunotherapy.",
                                marcos: "Doctor and Computer Science Engineer, he is a professor at the UDC where he currently works as Coordinator of its AI Node and Director of the Artificial Vision and Pattern Recognition (VARPA) research group. He has been awarded the National Prize for Computer Science and Health (2022) and distinguished by the Royal Galician Academy of Sciences for his research work in the fight against Covid-19 (2020), among other recognitions. Author of more than 100 scientific publications and principal investigator in more than 30 projects and contracts research in the field of artificial intelligence applied to the health sector, among others. Author of three patents and numerous software applications in use by different health centers. Member of the Technical Committee for Normalization of the UNE on Artificial Intelligence and Big Data as well as the group of experts of the Computational Intelligence Society of the IEEE. Representative of the UDC in the DIHGIGAL Digital Innovation Hub of Galicia, being coordinator of its Artificial Intelligence technological node. Director of the UDC-ITG Institutional Chair on Unmanned Aerial Vehicles.",
                                angel: "Current position: Head of Digital Transformation at Atendo.",
                                angel2: "Background: Software Engineer (Santiago de Compostela University).",
                                angel3: "Masters: Executive Master Digital Management (UIE). ThePowerMBA - Future Leaders.",
                                angel4: "Business Programs: From Start-up to Scale-Up Nation: Value through Innovation and Data (Tel Aviv University - Coller School of Management). Digital Companies & E-Business Revolution (University of California, Northridge).",
                                angel5: "Purpose: Improving senior adults' lives through technology.",
                                nieves: "Nieves Freire Barea has chosen the more social side, studying a degree in Social Work at the University of Vigo and a Master's Degree in Mediation at the University of Malaga. After almost three years as Coordinator of the Home Help Service at Atendo, she realized the importance of the person within the ecosystem and completed the Master of the Person-Centered Care Model specialized in Dependency and Disability at the University of Vic (Barcelona). She is currently within the team of the Galician Health Cluster, CSG as a RESEARCHER in the ITGALL service as a coordination assistant.",
                                cristofol:
                                    "Cristòfol Vidal is a professional with extensive international experience in project management. Graduated in Business Administration from the Autonomous University of Barcelona and with a master's degree in Applied Social Research Techniques from the University of Barcelona, his professional career has taken him to work in various cities, including Mexico, Barcelona, London and his current position at the Son Espases University Hospital in Mallorca, Spain. This experience in different cultural environments has provided him with a transversal and adaptive vision that allows him to think outside the box. Cristòfol has played key roles in project management, including working as project and panel manager at Ipsos Mori in London. His proficiency in research methodologies such as in-depth interviews, design thinking and focus groups positions him as a valuable asset for needs assessment and project development. Additionally, his role as a project manager demonstrates his ability to effectively oversee and execute projects, ensuring they align with the organization's goals and objectives.",
                                konstantina:
                                    "Konstantina Tsimpita holds a BSc in Physics from Aristotle University in Thessaloniki and is currently pursuing her MSc in Biomedical Engineering within the Department of Medicine. With a rich background in project management, working as a EU Project Manager for two years, overseeing and sustaining seamless operations in various technology-related projects. Her primary research focus centers on Smart Technologies and the application of Open Living Lab Methodologies in both the Software and Medical sectors.",
                                agustin:
                                    "Agustín Cañas Rodríguez is a Telecommunications Engineer (Telematics specialty) and has a Master's Degree in Telematics Engineering (Services and Applications specialty) from the University of Vigo. In his first years of work experience he combined his studies with ICT consulting, engineering and research work. During this stage he participated in multiple regional and European projects, in most cases focused on the design of intelligent systems applied to learning scenarios. On this topic he is the author of publications in international conferences and magazines. Already at GRADIANT, he naturally continued his specialization until assuming the technical leadership of the eLearning line. After five years focused on the educational sector, at the beginning of 2019 he expanded his focus of action to assume the technical direction of the Intelligent Systems Area and work on the enhancement of intelligent solutions for data capture and analysis in various sectors. . From this position, he has recently been promoted to Technology Manager to define the technological strategy and manage the assets of an ICT technology center that currently has around 180 professionals working in the fields of intelligence, security and connectivity.",
                                joseManuelPerez:
                                    "25 years in the elderly care sector; Nursing Degree with a specialty in geriatrics. Different responsibilities in these 25 years always related to caring for people and management.",
                                karen: "Karen is an ambassador for social care. Her career began as a paid carer whilst studying at university and whilst rewarding, she quickly became motivated by the pressures on the sector. A champion for participation and co-production, she believes that evidence of impact is seeing the difference it makes for people. Promoter of an evidence-based approach and self-confessed data geek, she sits on the Leadership team of IMPACT working to bridge the evidence implementation gap.  She has worked at various seats round the social care table, as well as for Government and as Director of the Prince of Wales Foundation. In her current role as Deputy CEO of Scottish Care, she continues to shape the future of social care with a focus on human rights, commissioning, fair work, and technology. When not working, this Ayrshire lass can be found on the beach with her family. Member of UWS Court, Coastguard, FRSA, MIoD and wannabee salty sea dog.",
                                ramon: "Ramon Ceravalls 34 years old, from Barcelona. Graduate in Industrial Engineering My professional experience is divided into 2 stages: The first stage focused on the world of Operations in the large distribution sector where I had the opportunity to live 2 years in Germany for the implementation of SAP in large distribution. Also in the shared and sustainable mobility sector in an American start-up. The second stage is focused on Business Development at Qida, a Social Impact home help company, where my role has been to lead national expansion through the opening of new Qida branches in both Madrid and Bilbao. We are currently also evaluating the arrival of Qida to Galicia, where we believe that a product like Qida's, with Social Impact and technology, could help chronic and dependent people live longer and with a better quality of life in an environment as complex as that of Galicia.",
                                joseAngel:
                                    "Graduate in Physical Sciences, specialty in Electronics. 25 years of experience in the ICT sector, of which 20 have been related to health projects. Master MBA in Business Management and Administration and Master in Telecommunications Economics. I am currently the Business Development Director at Balidea, a position I have held since 2015.Previously my professional career developed as Managing Director at RETEGAL, Technical Director at Ednon and Consultant at UNISYS.",
                                albert: "Albert King is Chief Data Officer at NHS National Services Scotland (NSS).  NHS NSS serves as the data hub for the health and social care economy in Scotland. Through and unrivalled mix of health and social care datasets, professional capability and it's leading technology platform (SEER) it supports the development of insights with partners, including Public Health Scotland, Health Boards, local and national government.  Previously, Albert served as Chief Data Officer in the Scottish Government where he lead the delivery of Scotland's AI Strategy.  He draws on over 20 years experience in industry and public sector data and technology.",
                                carmen: " Born in 1963 in Vigo. She is a Telecommunications Engineer (1987) and a PhD in Telecommunications Engineering from the Polytechnic University of Madrid (1993). She completed her training with research stays at different universities and foreign research centers. She focused her research on speech technology in Galician and Spanish, audio segmentation, biometric recognition of people, and voice detection of neurodegenerative diseases. She is a professor in the area of Signal Theory and Communications (TSC) at the University of Vigo and responsible for the Multimedia Technologies (GTM) research group. She was Vice-Rector for Degrees and European Convergence at the University of Vigo (2006-2010). She was the coordinator of the doctoral program in Information and Communications Technologies (DocTIC) at the University of Vigo from its launch in 2012 to 2019, and director of the Department of Signal and Communication Theory from 2017 to 2019.  She directed and coordinated numerous research projects and doctoral theses, and published more than 150 articles in international journals and conferences. She regularly participates in training, promotion and # dissemination events related to the female presence in STEM. She has participated in projects such as Cotovía, the first bilingual text-voice converter in Galician and Spanish, in VOGATEL or FalAI focused on the collection of voice recordings in Galician to train conversational systems, COPERIA, study for the detection of persistent COVID through acoustic analysis of coughs and voice, or VISIA, with which it is presented to develop a sentinel to track the risk of suicide in adolescents based on artificial intelligence. In September 2014 she received the “Josefa Wonenburger” Prize from the Xunta de Galicia for her relevant career in the fields of science and technology. Since 2016 she has been a member of the plenary session and coordinator of the language, literature and communication section of the Consello da Cultura Galega.",
                                carlos: "Carlos Alberto Castaño Moraga is a Telecommunications Engineer from the University of Valladolid and a doctor in signal processing from the University of Las Palmas de Gran Canaria. In addition, he complements his business training with an Executive MBA from IESE Business School, thus combining great technical training with a business vision. He joined Fujitsu in 2014, focusing his efforts on developing the Data Intelligence CoE activity, focused on the transformation and digitalization of processes in organizations from different sectors, especially in the healthcare sector and public sector organizations.",
                                abdel: "I am a cardiologist with a specialization in advanced cardiac imaging and I currently direct the Dimension Lab at the Hospital de la Santa Creu i Sant Pau, Barcelona. This lab focuses on advanced virtual planning for surgeries using technologies such as 3D modeling and digital twins, as well as 3D printing design and manufacturing of custom medical devices to deliver precise, tailored medicine to complex patients. I began my educational journey obtaining my Medical degree with honors in 2008 and then specializing in Cardiology, focusing on multimodal cardiac imaging and complex valvular and structural pathologies. In 2019, I founded Cardiovascular 3D Modeling and Printing, which evolved into Dimension Lab, serving the entire hospital. Currently, as a PhD candidate at UAB, I focus on designing personalized cardiac occlusion devices and collaborating on research on artificial intelligence (AI) to improve cardiac therapies. I lead a project to integrate AI into our hospital and collaborate with various academic institutions and industry leaders. In addition to my clinical and research roles, I am actively engaged in education, training students in biomedical engineering and advanced cardiac imaging specialists. My goal is to apply cutting-edge technologies to address clinical challenges and improve patient care in clinical practice.",
                                beatriz:
                                    "She graduated in Economic Sciences from the University of Vigo where she studied the Master of Commercial Management and Sales at the IESIDE Business School. She later trained in Marketing and Communication in the field of communication, marketing and digital marketing at the respective schools of IESE, IESIDE and ESADE as well as at the consulting firm COONIC. She is currently Corporate Director of Communication and Image of the Zendal pharmaceutical group http://www.zendal.com focused on biotechnology and vaccines with 8 companies under its umbrella, where with several years of experience in the health sector she directs marketing. and corporate reputation. She is a member of the Association of Health Informants (ANIS). Partner of marketing and communication associations, DIRCOM and MARKEA. Since 2018 she has been a “Galician Reference” for the association of the same name and a member of Executivas de Galicia and de Mujeres en Farma. She lectures on Marketing and Communication courses at the business school and is a regular participant in various events and forums related to biotechnology and communication.",
                                graziella:
                                    "Science and health journalist specialized in audiovisual formats. Commentator on Covid-19 on the programs Al Rojo Vivo and La Sexta Noche on La Sexta. Mentor on pandemics, health and science for the international organization Internews. Author of the book Vaccines, when human beings win the invisible war (Uranus 2021). In the area of documentaries, she has directed and scripted more than 10 scientific documentaries for channels such as National Geographic or Documentos TV de TVE. She has worked for 13 years in the news services of Antena 3 Television. She has an International Master's Degree in Humanitarian Medicine. Current President of the National Association of Health Informants (ANIS)",
                                silvia: "Doctor of Pharmacy in Analytical Chemistry, Nutrition and Bromatology and Graduate in Chemistry. She has a diploma in Public Health and a Master in Health Economics. Since 2008, she has been a career civil servant holding different positions in public health and socio-health coordination. Since October 2020, she has been Deputy Director General of Programs to Promote Healthy Lifestyles of the General Directorate of Public Health.",
                                joseAntonio:
                                    "Educated in a family environment of entrepreneurial businesswomen born in 1904 and 1928 respectively. Trained in the public Spanish educational system, Intermediate Degree in Electricity, Higher Degree in Telecommunications, Specialty Fiber Optics, Law Studies (in progress). 1997 founded a construction and real estate developer, 2003 to 2015 Representative of the northwest area in Contenur (best manufacturer of plastic containers in the world). In 2016 he founded Urbano y Accesible S. L, an Alternative company of sustainable urban furniture and predecessor of Ocean Kube Environment S.L. D in 2019, a company specialized in Containers for waste collection.",
                                manuel: "Consultant with over 15 years of experience in digital health projects. After being part of the public health team at everis and later at Deloitte, since 2022 he has been part of PM4GOV, a company specialized in managing ICT projects in the field of digital health. Currently PM4GOV works with the Ministry of Health and several regional health services in the definition and execution of ICT strategies and projects.",
                                joseAntonioLopez:
                                    "José Antonio López Guerrero, JAL, (Madrid 1962) is a researcher, professor of microbiology at the Autonomous University of Madrid and director of the Department of Scientific Culture at the Severo Ochoa Molecular Biology Center. After a first Postdoc at the Biological Research Center, He moved to the German Cancer Research Center (Heidelberg, 1993-1996). He currently directs the NeuroVirology group at the UAM. He directs, presents or collaborates in National Radio programs (Entre Probetas, El LAB de JAL or Marca España). , TVE (La Hora de la 1 (TVE), press (El Cultural). Author of more than a dozen books and more than 300 articles, both scientific and popular. More information at www.uam.es/ja.lopez.",
                                robertoCarlos:
                                    "Dr. Agís-Balboa has a Bachelor's degree in Biology (2001) with a Master's degree in Neuroscience (2005), both from USC. He obtained his doctorate (2008) at the UIC (Chicago). Later, he worked as a postdoc in Germany at the Institute European Neurosciences-Göttingen (2008-2013). There, he focused his research on genome-environment (or epigenome) interactions that occur during cognitive decline associated with normal aging, psychiatric disorders and neurodegenerative diseases. He was awarded the prestigious EMBO postdoctoral fellowship, the Göttingen Alzheimer's Foundation award 'Inge und Fritz Kleekamm-Forschungspreis 2012', and a research grant from the German DFG. In 2013, he returned to Spain to work as a researcher under the BIOCAPS project and then with a Ramón y Cajal contract in the Translational Neuroscience Group of the IIS Galicia Sur. In 2022, and now as a stabilized SERGAS researcher, the Translational Research Group in Neurological Diseases (ITEN) of the IDIS joins. In his projects he studies: 1) epigenetic mechanisms (e.g. microRNAs) associated with neurological diseases. 2) biomarkers and therapeutic targets in neurological diseases (e.g. IGF signaling). 3) Bioinformatic tools in neurology (e.g. myBrain-Seq). 4) Artificial Intelligence and Neurological Diseases (e.g. Alzheimer's) - COGNISANCE Project. For more information you can check their ORCID (http://orcid.org/0000-0001-9934-8733) and Linkedin (es.linkedin.com/in/robertocarlosagisbalboa/) profiles",
                                cesar: "Dr. Cesar Veiga does research on applying AI techniques on biomedical research applying computer science technologies to the medical realm. With a background in Physics (1993), and a PhD in Computer Science and Artifical Intellignece (USC-1998), both at the University of Santiago de Compostela. During the last 25 years he has gained experience on this field on several institutions as Institute for Joint Research Center (ISIS-JRC, Italy), the private company Intelsis Sistemas Inteligentes SA. or Centro de Supercomputación de Galicia (CESGA), where he has leading projects on 1) High Performance Computing to simulate biomedical process (Phd Thesis Marcos Garcia Loureiro, Best Poster Award on European Society of Cardiology); 2) Computer Vision and Pattern Recognition Techniques to automatic analysis and interpretation of medical data analysis (MD-CAD: A HIGH-PERFORMANCE COMPUTING INFRAESTRUCTURE FOR MEDICAL IMAGING ADVANCED SERVICES: COMPUTED AIDDED DISAGNOSTIC (CAD). Incite 2010 IN830N 2010/30-0 8796; 3) Artificial Intelligence algorithms for biomedical signal analysis, as COGNISANCE: COGNitive Impairment aSessment (screening and progression) using Artificial iNtelligenCE and epigenomic biomarkers in elderly population), and 4) Machine and Deep Learning frameworks for analyze massive health data from as (COVID- GAIN IN845D 2020/29).",
                                javier: "Licenciado en medicina y Cirugia por la Universidad de Santiago , Diplomado en Diplomado en Sanidad, Medicinal and Pharmaceutical Chemistry Por la escuela Nacional de Salud Publica, Diplomado en curso superior(Master) de Gerontología clínica y social,por la Universidad de Santiago ; Master en Medicina de urgencias por la Universidad Da Coruña y Diplomado en curso superior de Xestion Clínica de Unidades e Servicios de Atención Primaria, Pola Escola Galega de Administración Sanitaria. Ha ocupado diversos puestos directivos en el Servicio Galego de Saude y fuer representante institucional de la comunidad Gallega en varias de las estrategias del Sistema Nacional de salud . Actualmente ejerce como Subdirector Xeral de Atencion Sociosanitaria e Innovación Asistencial en la Conselleria de Política social e Xuventude da Xunta de Galicia, estando su labor enfocada en al desarrollo de un nuevo modelo de atención sociosanitaria en la comunidad",
                                joao: "João Gomes, our Head of Product, is a seasoned professional with a strong background in biomedical engineering. He earned his master's degree from the University of Minho, specializing in this dynamic field. With over a decade of experience in the technology-driven healthcare and outcomes sector, João has honed his expertise by working with renowned health institutions such as the Mayo Clinic and Porto Oncology Hospital, as well as industry leaders like Cerner and pharmaceutical companies. His diverse experience and deep understanding of the intersection of healthcare and technology make him a valuable leader in shaping innovative products that drive positive impacts in the healthcare industry.",
                                joseDavid:
                                    "Jose David Zafrilla has been the Director of Operations of the Ribera group since 2020. He has more than 20 years of experience as a health manager in the National Health System. For several years he worked as a technician in the Directorates of the Health Departments of the Hospital Universitario La Fe and Department of La Ribera), working in health planning, in the development of computer tools for management and clinical practice and especially in the integration between Primary Care and Hospital Care. In the Ribera group he has held different positions of responsibility such as corporate director of Nursing, deputy manager of the departments of Torrevieja and Vinalopó (Alicante), and manager of the Health Department of Torrevieja and the Ribera Povisa hospital (Vigo). Jose David has a degree in Nursing from the University of Valencia, a Master's degree in Bioethics from the Catholic University of Valencia. He completes his training with the Senior Management of Health Institutions program of the IESE of the University of Navarra and the Excellence in Health Management program of ESADE.",
                                carlosCatalan:
                                    "Carlos Catalán has been the Care Director of the Ribera group since 2012. He is responsible for the organization of patient care in the different healthcare settings and for continuity of care. He has participated in the opening of the Vinalopó Hospital and Health Department, in the shared services model with the Torrevieja Health Department, as well as in the care planning of the rest of the group's integration projects. His professional experience has been linked to the Ribera group since 1999, since he worked as a doctor at the La Ribera Hospital in Alzira, before moving to the Healthcare Subdirectorate of the La Ribera Health Department, coinciding with the implementation of the Primary healthcare integration model. -Specialized in this Health Department. Carlos has a degree in Medicine and Surgery from the University of Valencia and a specialist in Family and Community Medicine.",
                                pablo: "Director de desarrollo de negocio e innovación de eficiencia energética en Ferrovial. Pablo tiene más de 20 años de experiencia desarrollando e implementando estrategias de negocio a nivel internacional y nacional en diferentes sectores. Con anterioridad a Ferrovial, estuvo 14 años en ACCIONA, donde lideró la implantación de la división de infraestructuras en Australia y de servicios en Canadá. Ingeniero de Caminos, Canales y Puertos por la UPM, MBA por ESADE y el EOI, y coach certificado.",
                                franciscoJavier:
                                    "Doctor, specialist in Family Medicine, dedicated to hospital management, being a director of several hospital centers and since 2005 deputy manager of the La Paz University Hospital. Internship tutor for 13 years at EHESP (French School of Higher Health Studies)",
                                miguelAngel:
                                    "Director de Ingeniería abconsultores (ingeniería dedicada a instalaciones de edificios) y Gestor energético europeo. Ejerzo como docente en el curso de postgrado “Ingeniero de climatización” de la Universidad de Valladolid, en el máster de “diseño ambiental y constructivo: Módulo Gestión energética” de la Universidad de Navarra, en el curso de postgrado “Gestor en Eficiencia Energética” de la Universidad de Extremadura y en el curso de experto de climatización de Atecyr. Soy autor de varios libros y documentos (regulación y control en instalaciones de climatización, fundamentos de climatización, auditorías energéticas, certificación energética, …). Imparto cursos sobre RITE, CTE, eficiencia energética, certificación energética. Lider, Calener Vyp y Calener GT (formador de formadores de los programas de certificación energética oficiales), auditorías energéticas, etc. Doy ponencias en distintas Ferias y Congresos del sector de la climatización y la eficiencia energética. Además, soy Secretario nacional de Atecyr, Miembro del Comité técnico de Atecyr y Presidente de la agrupación ATECYR Castilla y León.",
                                benigno:
                                    "Computer Engineer from the University of A Coruña (1990-1995). Master's Degree in Systems and Communications Management from the National Institute of Public Administration and the Polytechnic University of Madrid. Management diploma from the Xunta de Galicia studying the Innovative Management Program. He began his professional career in 1995 working in companies in the ICT sector. Since 1999 he belongs to the body of Senior Technicians of Information Systems and Technologies of the Galician Health Service. Since 2009 he has been Deputy Director General of Information Systems and Technologies in the Ministry of Health of the Xunta de Galicia. In recent years, this Subdirectorate has developed pioneering projects with great technological and healthcare impact, such as the computerization of clinical history with a regional approach, the implementation of electronic prescriptions or the digitization of the entire digital image generated in the Galician Health Service. Large Public Procurement of Innovative Technology projects have also been led, such as the H2050, Innova Saúde or Codigo100 projects with a budget of more than 100 million euros and which are a reference model in Europe. Currently, his department is undertaking a digital transformation process, promoting home telemonitoring processes, connectivity through IoT and 5G of electromedical devices used by the patient, the inclusion of BigData in the clinical decision-making process, the use of artificial intelligence in computer-assisted diagnosis and the use of APPs for self-care of health. Award for his Professional Career in 2015, the Professional College of Computer Engineering of Galicia awarded him the CIO Award in the health sector in 2020, the Spanish Society of Health Informatics (SEIS). Collegiate Professional of the Year in Computer Engineering in 2021 of the Professional Union Association of Galicia",
                                patricia:
                                    "Patricia Fernández is an industrial engineer and Master in Business Administration, with more than 10 years of experience in innovation financing. Since 2021, she has been the director of the Agency's Services area, where she coordinates the Agency's actions related to the promotion of innovation in SMEs, technological entrepreneurship and the Biotechnology Consolidation Strategy in Galicia.",
                                david: "David G Pisano is the Director of Clinical Bioinformatics at Genomcore. He has more than 25 years of experience in technological and process consulting, and in providing professional services in Europe and Latin America (Thermo Fisher), bioinformatics (Zeltia, National Institute of Bioinformatics), cancer genomics (National Cancer Research Center) and data science/advanced analytics within the insurance/healthcare sector (Sanitas). He has a deep understanding of the processes and technological requirements related to data management and analytics in the healthcare and pharmaceutical industries, in vitro diagnostics, biotechnology, R&D, cancer research and computer science. high performance. He is co-author of more than 100 publications in international journals and has been teaching postgraduate classes for more than 20 years at the National School of Health, the Complutense University of Madrid and the Francisco de Vitoria University, among other institutions. Currently, he is also an associate professor at IE University where he teaches Strategy and Health Analytics classes in the Master in Business Analytics & Big Data organized by the IE School of Science & Technology, and in the Bachelor in Data and Business Analytics at the IE University. , where he coordinates the Artificial Intelligence and Healthcare track.",
                                manuelBosch:
                                    "Head of IT business integrations for the Ribera Salud Group: David Dapena joined Ribera in 2019 and currently leads the integration projects of the group's business units at the European level. He also leads international projects for the start-up of Hospitals and Health areas in the Middle East, as well as technological initiatives for population health management. He has a degree in Computer Science from the Polytechnic University of Valencia, an MBA and a Master's degree in Senior Management of Healthcare Institutions from the IESE Business School (Madrid). He has more than 20 years of experience in the Health sector, he has worked and been IT Director in several Hospitals in different Autonomous Communities.",
                                bruno: "University Professor, Director of the Antimicrobial Resistance Unit, WHO Advisor. González Zorn has been President of the Molecular Microbiology Group of the Spanish Society of Microbiology, member of the Scientific Committee of the European Antibiotic Resistance Program JPIAMR, co-author of the EU H2020 program and member of the Working Group of the State Research Plan. Since September 2021, he is the only Spanish advisor to the WHO of the 15 members of the One Health CIA Group (Critically Important Antibiotics for human health). This is the first working group from the One Health perspective in the WHO on antimicrobial resistance. He has been the author of the first EU One Health Strategic Research Program on antibiotic resistance in 2014, a research model for the WHO World Antibiotic Resistance Plan of 2015. This year, 2023, he has also been required to draft the World Antibiotic Resistance Plan. Research against antibiotic resistance 2025-2032, and will be a guest speaker at the European Health Forum 2023 of the EU and WHO in Bad Gastein, the most important health forum in the world.",
                                joaquim:
                                    "Joaquim Magalhães da Cunha, Ingeniero de Sistemas e Informática , es el Director Ejecutivo del Cluster de Salud de Portugal, una iniciativa única que reúne a un conjunto muy representativo de actores de la cadena de valor de la salud, en base a una misión y objetivo común, basados en una misión muy fuerte y galvanizadora- transformar Portugal en un actor cada vez más competitivo en la investigación, desarrollo, fabricación y comercialización de productos y servicios asociados a la salud. Gran parte de su actividad profesional ha sido dedicada a Caso- Consultores Associados de Organizações e Informática, Lda, que fundó en 1983, y donde desde entonces ha ejercido las funciones de Director General. Caso es una empresa de consultoría orientada al desarrollo empresarial, con sede en Braga y actuación a nivel nacional, que integra las aportaciones de un personal técnico  con intereses y especializaciones complementarias en las áreas de las ciencias de la información,  tecnologías de producción, organización de gestión, economía y formación profesional. También fue fundador de MinhoDigital SA, con experiencia de clusterización regional en el sector de las TIC, y de la NanoLogic, empresa pionera a nivel mundial en la microinyección biomateriales. Entre 2004 y 2006 fue miembro del Consejo de Administración de Pronefro - Productos Nefralógicos, SA, empresa líder en el campo de dispositivos médicos para hemodiálisis. ",
                                jorge: "Degree in Physical Sciences from the USC. Master's Degree in Systems and IT Management from the Polytechnic University of Madrid-INAP. Certified Data Protection Delegate by CERPER with code ES2112391. Expert in cybersecurity STIC by INAP/CCN. ITIL Expert. In my more than 25 years of experience in the IT sector, I have had the good fortune to participate in the process of digitalisation of the public health sector in Galicia and to observe the challenges currently posed by digital transformation, the threats arising in the field of cybersecurity, the management of health data and the application of artificial intelligence in almost all areas of the sector.",
                                ricardo:
                                    "Licenciado en Dirección y Administración de Empresas, llevo 25 años trabajando en la industria farmacéutica. Actualmente dirijo las relaciones corporativa en el área de General Medicines de GSK, liderando proyectos como la descarbonización en el sector de la salud",
                                antonio:
                                    "Licenciado en Medicina y Cirugía 1979 por la USC y doctor por la misma universidad en 1994. Profesor titular y director de la Cátedra de Cronicidad de la Universidad de Santiago de Compostela. Miembro de la Real Academia de Medicina de Galicia. En su carrera profesional ha ejercido de Jefe de Servicio de Medicina Interna del CHUS (2017 - 2022) y coordinador de la Unidad de Pluripatología y Edad Avanzada del mismo centro. Miembro de la Junta Directiva de la Sociedad española de HTA, presidente de la Sociedad gallega de HTA y riesgo vascular y de la Academia médico-quirúrgica de Santiago. Coordinador del Grupo de riesgo vascular de la Sociedad Gallega de Medicina Interna y profesor asociado de Ciencias de la Salud del Departamento de Medicina de la Facultade de Medicina y participación docente en el tercer ciclo de Medicina. Coordinador de la docencia de residentes de Medicina Familiar y Comunitaria del CHUS. Especialista en Hipertensión por la Sociedad Europea de Hipertensión desde el 2002.",
                                jorgeAboal:
                                    "Nació en Palencia en 1962. Es licenciado en Medicina y Cirugía por la Universidad Autónoma de Madrid. Grado de doctor en Medicina y Cirugía por la Universidad de Santiago de Compostela. Diploma de Alta Dirección Hospitalaria impartido por la Escuela Gallega de Administración Sanitaria. Experto universitario de Admisión y Documentación Clínica por la Universidad Complutense de Madrid.",
                                luis: " Licenciado en Psicología (Universidad de Santiago de Compostela) Master en Gestión de Centros y Servicios para Personas Mayores (Universidad de La Coruña) y Curso Experto en Inteligencia Emocional y Bienestar Organizacional (Universidad de Santiago de Compostela). Cofundador y actual CEO de Atendo, Presidente Longevita, Vicepresidente del Cluster Saúde de Galicia (CSG).Miembro de la Comisión de Seguimiento en la Cátedra Afaga-Atendo de Edadismo de la Uvigo y nuevo Patrono de la Fundación Grandes Amigos. Desde hace 23 años trabaja en la búsqueda de un lugar en el mundo para cuando vamos cumpliendo años y en hacer de Galicia el mejor lugar en el mundo para vivir y envejecer con salud. En este RIES23 acompañado de gran parte del equipo, presentan en primicia nuevo proyecto. ",
                                albertCreixell:
                                    "Albert Creixell es el responsable de Alexa Enterprise en Reino Unido y Espana. Su equipo se encarga de integrar experiencias con Alexa y AI en entornos de salud, gente mayor y hospitality. Albert es Ingeniero Superior de Telecomunicacion por la Univerisdad Politecnica de Catalunya y MBA por la London Business School.",
                                andrea: "Actual HF&RD,Marketing and Sustainability Manager de IKEA en España. Andrea es una profesional del Retail especialista en técnicas de Visual Merchandising, Interiorismo y Marketing. Analiza los insigths de mercado conforme a dar una mayor calidad en la experiencia del cliente en los puntos de encuentro desarrollando el negocio de una manera responsable y sostenible con un buen impacto en nuestra comunidad.",
                            },
                            resumenes: {
                                agoraPlexus:
                                    "Starting from a holistic vision of people's health and with the participation of professionals with extensive experience in their fields of action, we intend to analyze how advances in genetic studies, new generations of drugs and therapies, current image processing capabilities and data as well as the use of Artificial Intelligence, Machine Learning, Big Data, etc. They can facilitate the implementation of Personalized Medicine strategies and protocols from prevention, early detection, treatment and monitoring of people's health.",
                                agoraITGALL:
                                    "A Living Lab is an open innovation ecosystem in real life environments. A current concept where there is a very wide field of resources in which there is still a long way to go to learn and progress within the care ecosystem. This Agora aims to facilitate collaboration and exchange of knowledge between the different parts of the ecosystem to promote the homogenization of the validation of digital solutions in care. To do this, we must address different issues where we must advance and grow. Among them we have: European standardization, the search for funding and cooperation, ethics and privacy, co-creation with citizens, future challenges and opportunities, the collaboration network and the best practices that already exist. In this Agora there will also be an open debate on how Living Labs can add value to the business and entrepreneurial world, to generate synergies with Start-ups, accelerators, SMEs and large technology companies.",
                                agoraGradiant:
                                    "The healthcare sector is highly regulated and healthcare data is considered worthy of special protection. Therefore, it is expected in this agora to evaluate the usefulness of the European model of the European Health Data Space, the main problems associated with its implementation and the advantages that this model can provide for the improvement of socio-health care, the personalization of treatment plans, medical research and/or drug development.",
                                agoraFerrovial:
                                    "The theme of the agora is related to the recent Circular Economy Strategy that Sergas has launched, and which includes plans to reduce CO2 and improve Energy Efficiency, as well as the adaptation of health centers to avoid energy losses. At the Agora Table we would like to discuss the different ways of achieving these objectives through direct investment models, financed with public-private collaboration, or through Innovative Public Procurement mechanisms.",
                                agoraDomusVi:
                                    "As a society we have to get involved and decide what type of longevity we want. The goal is not only to live longer, but to live better and for each person to be able to choose how to face longevity based on their preferences. As a society we have to be able to respond to the great challenges that this new paradigm represents.",
                                agoraRibera:
                                    "One of the greatest challenges facing the health sector is addressing chronic pathologies and providing adequate care to these patients from the system. We will analyze from different points of view the evolution of chronic care and how the incorporation of technology and the use of artificial intelligence has helped the monitoring of chronic patients without having to travel to the hospital.",
                                mesaBalidea:
                                    "Currently, there are many challenges that healthcare systems face. Artificial Intelligence seems to be able to help solve some of them, but at the same time it represents in itself one of the greatest challenges that Healthcare has faced: from ethical to technological challenges, from its use as support to clinical decisions such as the need to trust complex algorithms... This table aims to approach the approach that health systems must take to take advantage of this technological disruption and the possible tolls it may entail.",
                                mesaTecnologia:
                                    "The use of technologies in the health field is experiencing significant growth in recent decades, offering various opportunities, such as improvements in diagnosis, telemedicine, electronic health records or personalized medicine, among others. This issue also presents various challenges, such as the digital divide, the regulatory framework, privacy and security in the storage or transmission of data, with their respective limitations in relation to the costs of investing in health technologies, the resistance that exists to change or algorithmic errors. The benchmarking of successful cases and the consideration of limitations are essential to make the most of the potential of these technologies in health care but, without forgetting that technology is sometimes not a challenge in itself, but the challenge comes in how this technology adapts to the context and how it evolves hand in hand with the people who make up the ecosystem.",
                                mesaZendal:
                                    "Round table with leading experts in the health and vaccinology ecosystem to discuss global health challenges. Health has no geographical borders, which is why we must work for better preparation for possible health emergencies from our area of action, Europe. The table will offer an exclusive opportunity to meet national and international experts who work in the health ecosystem and vaccines, from the most technical, university approach to the industrial and public information part. It will address aspects related to the need for better preparation and response to health demands or emergencies and future pandemics to address possible future crises or global health emergencies from a ONE Health perspective and from a European framework.",
                                keynoteVania:
                                    "In this keynote, we will delve deeper into the vital role of healthy aging as a gateway to taking advantage of the limitless opportunities presented by our long life expectancy. You will discover what changes and innovations are needed to ensure that we can continue to be and do what we value in old age, including the transformation that is needed in the way we work, live and contribute to society. Don't miss this Keynote that will allow you to unlock the full potential of our greater longevity and turn it into a transformative force for individuals, communities and society as a whole.",
                                keynoteNick:
                                    "This speech provides an overview of research and innovation policies over the last 25 years from a European and international perspective with a focus on the role clusters (medicine, life sciences and health including technology and digital). Policy objectives, instruments and context will be described with good practices and lessons learned for education, research, innovation and cluster development. Questions as ‘what can we learn from failures and successes?’, ‘Should we continue this health innovation cluster approach considering the current social-economic challenges?’ and ‘what are the implications from lessons learned for emerging clusters in Southern-Eastern Europe?’. This presentation will be zooming-out to a policy level as well as zooming-in on practical examples and personal experiences across the globe (both public and private) with the latest trends and current state of affairs regarding innovation and healthcare transformation.",
                                proyectoXoia:
                                    "Sanidade Mediaverso is a multi-technological content management platform for the promotion of healthy lifestyles, which has been developed by the BiGXoia joint venture, contracted by the General Directorate of Public Health and financed within the framework of the REACT-EU axis of the FEDER Galicia 2014-2020 operational program. . This platform contains digital resources that guide Galician citizens on how to include healthy lifestyle habits in their daily routines. Mobile applications, virtual reality, augmented reality, training pills, healthy menus and other content related to a balanced diet, the promotion of physical activity, healthy sleep and emotional well-being will help achieve the objectives set in the Zero Obesity Plan in Galicia.",
                                proyectoOcean:
                                    "How a new paradigm in solid waste collection can improve the sustainability of the system and can also achieve greater health safety. De-plasticisation, Water Footprint Mitigation, Water Footprint Reduction, Universal Accessibility: these are the guidelines that define this paradigm shift and lead to improved hygiene and health security. ",
                                proyectoGSK:
                                    "Climate change is the main threat to human health according to WHO. Emissions from the health sector account for 4.5% of total emissions, a sector involved in improving people's quality of life has to take action to reduce its climate footprint. In Spain, different actors in the health sector are taking actions to reduce the carbon footprint, being an example for the health ecosystem and other sectors. At GSK as a pharmaceutical company, we propose actions that allow us to reduce the carbon footprint, which allow us to continue improving people's quality of life and reducing the impact on global warming. We will present an example that would allow us to reduce up to 400,000 tons of CO2eq per year, the equivalent of the emissions of 220,000 vehicles.",
                                proyectoLongevitaAtendo:
                                    " An alternative accommodation for older people that begins in Galicia the Re-Evolution of new types of senior accommodation that are reaching the sector in Spain and that aspires to become a natural ecosystem from which to democratize access to innovation and knowledge in this sector. An intergenerational center of 25m2 apartments with everything necessary so that the people who live there continue to find many reasons to “live with meaning.” And a response to a diverse and heterogeneous generation of older people who demand other models for when it is no longer possible to continue living at home, which is where the majority have chosen to live and grow old.",
                                proyectoAmazon:
                                    "Alexa Smart Properties for Senior Living is now available in Spain. This service, which simplifies the use and management of devices with integrated Alexa, is designed to offer value-added and personalized experiences to improve the daily lives of older people and, operationally speaking, healthcare personnel in nursing homes. Amazon will present the use cases installed in the launch partners in Spain and will explain the experiences with older people and the voice assistant.",
                                proyectoIKEA:
                                    "Redesigning the cities of the future for the longest-lived society in history, in which there is awareness of the need to create environments and services that promote and facilitate an active and healthy life, is one of the main challenges that require cooperation to offer. different and sustainable solutions. #CHALLENGE25 is the joining of forces in favor of an objective of common interest: Giving value to our home as a refuge for emotional well-being and as a part of us and our life story.",
                            },
                        },
                    },
                    hero23: {
                        date: "November 8th-9th 2023",
                        longevity: "Longevity",
                        ia: "AI",
                        logo: "/logo-azul-en.png",
                        organiza: "Organized by:",
                        colabora: "Collaborators:",
                        i1: "November 8th and 9th 2023",
                        i2: "Hotel Attica21 4****s Business & Wellness, Vigo. In-person format",
                        i3: "International relevance event",
                        i4: "Gala dinner with #RIES23 and #SEN good practices Award Ceremony",
                        i5: "Networking, synergies and success stories",
                        program: "Program",
                        link: "https://forumries.com/RIES23_Program.pdf",
                        description2:
                            "In this eighth edition, that will be held in the city of Vigo, the theme of the VIII RIES 2023 Forum (#RIES23) 'Innovative care ecosystems' encompasses one of our main purposes: to be a professional platform for public-private collaboration between the different agents of the sector that promote innovative collaborative projects within our ecosystem of innovation in health and care. #RIES23 focuses on highlighting the essential role played by health and care innovation ecosystems and their  key opinion leaders, a core value of our #CSG_Community. In this eighth edition of the RIES Forum, we aspire to give voice, listen and get to know all the members of innovative ecosystems while deepening our knowledge around four main topics of interest: Longevity, Biotech, OneHealth and Artificial Intelligence.",
                    },
                    logos: {
                        csgNeg: "/csg-negative.png",
                        csgPos: "/csg-positive.png",
                        ries: "/RIES-logo-negative.png",
                    },
                    patrocinios: {
                        title: "Sponsorship & partnership possibilities",
                        granito:
                            "Following, we list several sponsorship or collaboration formats (you can consult all details in the dossier), but don't hesitate to contact us if you can think of any other way to 'do your bit'. Our best ambassadors are you!",
                        linkName: "Sponsorships Dossier",
                        link: "https://registro.forumries.com/wp-content/uploads/2023/08/RIES23_Sponsorships-1.pdf",
                        support: "Become a sponsor!",
                        form: "https://registro.forumries.com/en/sponsorships/",
                        type1: "DIAMOND (1 possible sponsorship | 8000€ + VAT)",
                        type2: "PLATINUM (8 possible sponsorships | 3500€ + VAT)",
                        type3: "AGORA LEADER (6 possible sponsorships | 2500€ + VAT)",
                        type4: "AGORA SPEAKER (18 possible sponsorships, 3 max/ágora 500€ + VAT)",
                        type5: "ROUND TABLE MODERATOR (2 possible sponsorships | 1500€ + VAT)",
                        type6: "ROUND TABLE SPEAKER (8 possible sponsorships, 4 max/mesa redonda | 1000€ + VAT)",
                        type7: "PROJECT PRESENTATION (4 possible sponsorships | 1500€ + VAT)",
                        type8: "GOLD (10 possible sponsorships | 1000€ + VAT)",
                        type9: "SILVER (20 possible sponsorships 1500€ + VAT)",
                        type10: "#RIES23 Partnership (# ilimitado de possible sponsorships | 250€ + VAT). ",
                        type11: "Partnership with Coffee-break -1 (2 possible sponsorships | 1200€ + VAT) ",
                        type12: "Partnership with working lunch (2 possible sponsorships | 1200€ + VAT}",
                        type13: "Partnership with cultural visit (1 possible sponsorship | 2000€ + VAT) ",
                        type14: "Partnership with Lanyard (2 possible sponsorships | 1200€ + VAT)",
                        type15: "Partnership with a section of #RIES23 on November 9th(4 possible sponsorships | 250€ + VAT)",
                        type16: "Roll-up in Coffee-breaks (# ilimitado de possible sponsorships | 350€ + VAT) ",
                        type17: "Brochures at the table (# ilimitado de possible sponsorships | 150€ + VAT) ",
                        cta: "Become a sponsor!",
                        ltype1: "DIAMOND",
                        ltype2: "PLATINUM",
                        ltype3: "AGORA LEADER",
                        ltype4: "AGORA SPEAKER",
                        ltype5: "ROUND TABLE MODERATOR",
                        ltype6: "ROUND TABLE SPEAKER",
                        ltype7: "PROJECT PRESENTATION",
                        ltype8: "GOLD",
                        ltype9: "SILVER",
                        ltype10: "#RIES23 Partnership",
                    },
                    info: {
                        booking: "Book a room at the #RIES23 hotel",
                        valid: "at a special rate until September 8th",
                        hab1: "Attica21 Double Room, for individual use on a bed and breakfast basis. - 90€/night",
                        hab2: "Attica21 Double Room, on a bed and breakfast basis - 103€/night",
                        reserva: "To make a reservation write to the mail",
                        reserva2:
                            "or call the phone number +34 986 46 21 21 indicating you're attending 'Congreso #RIES23'",
                    },
                    mailchimp: {
                        subscribe: "Suscribe to the #RIES23 Newsletter",
                        name: "Name",
                        send: "Send",
                        sending: "Sending",
                    },
                    program23: {
                        day8: "November 8th Session",
                        hour8: "16:00 - 02:00 (+1 DAY) CET",
                        p81: "Presentation of Senior Eco-Nect (#SEN) results (at Museo Verbum - Casa de las Palabras)",
                        p82: "Opening #RIES23",
                        p83: "#RIES23 awards and #SEN good practices ceremony",
                        p84: "Closing of awards and on to dinner",
                        p85: "Gala dinner",
                        p86: "Presentation of the #RIES23 program for the November 9th Session",
                        p87: "Afterwork",
                        day9: "November 9th Session",
                        hour9: "9:30 - 19:00 CET",
                        p91: "Opening and Welcome to VIII Fórum RIES 2023: Innovative care ecosystems",
                        p92: "Keynote - Vânia de la Fuente-Núñez",
                        p93: "Rount Table - Artificial Intelligence: 'Challenges of Health Systems in the face of A.I.'",
                        p94: "Coffee",
                        p95: "Rount Table - Biotech: 'Challenges in the face of future health emergencies. Prevention and vaccines'",
                        p96: "Keynote - Nick Guldemon",
                        p97: "Rount Table: 'Use of technologies in health: Challenges, Benchmark and Limitations'",
                        p98: "Institutional visit to Platinum stands",
                        p99: "Cocktail Lunch #RIES23",
                        p910: "Agoras / Project Pitchs / Project Plans",
                        p911: "Networking closure #RIES23",
                        pitch: "Project Pitchs",
                    },
                },
            },
            gl: {
                translation: {
                    menu: {
                        awards: "Premios RIES",
                        editions: "Edicións RIES",
                        sponsors: "Patrocinios",
                        comite: "Comité #RIES23",
                    },
                    ediciones: {
                        twentythree: "VIII Fórum RIES 2023",
                        twentytwo: "VII Fórum RIES 2022",
                        twentyone: "VI Fórum RIES 2021",
                        twenty: "V Fórum RIES 2020",
                        nineteen: "IV Fórum RIES 2019",
                        eighteen: "III Fórum RIES 2018",
                        seventeen: "II Fórum RIES 2017",
                        sixteen: "I Fórum RIES 2016",
                    },
                    tematicas: {
                        twentytwo:
                            "Saúde de Vangarda: innovación asistencial e modelos de coidados",
                        twentyone:
                            "A revolución dixital na atención sanitaria e nos coidados",
                        twenty: "Silver Economy: alimentación e calidade de vida",
                        nineteen:
                            "Silver Economy: por un envellecemento activo e saudable",
                        eighteen: "Cidades intelixentes, saudables e amigables",
                        seventeen: "Living Labs. Presentación de LabSaúde",
                        sixteen:
                            "Retos Internacionais do Ecosistema Saúde. Solucións Locais",
                    },
                    hero: {
                        date: "8-9 de novembro",
                        cta: "Rexístrate",
                        register: "https://registro.forumries.com/",
                        description:
                            "#RIES é o fórum internacional de referencia a nivel nacional e internacional para abordar os retos e oportunidades do ecosistema da saúde. Liderado polo Cluster Saúde de Galicia, CSG, xestouse como foro de encontro entre os principais axentes dos sectores sanitario e sociosanitario do ámbito público e privado a nivel nacional e internacional, en colaboración cos nosos partners estratéxicos da #ComunidadeCSG",
                    },
                    premios: {
                        awards: "Premios RIES",
                        twentythree: "Premios #RIES23",
                        twentytwo: "Premios #RIES22",
                        twentyone: "Premios #RIES21",
                        cta: "Participa nos Premios #RIES23 e descubre todos os premiados",
                        innovacion: "Innovación CSG",
                        impacto: "Impacto nas persoas",
                        conocimiento: "Coñecemento",
                        comunidad: "Comunidade CSG",
                        revelacion: "Revelación",
                        resiliencia: "Resiliencia",
                        texto23: {
                            convocatoria:
                                "Premios #RIES23 — Convocatoria aberta!",
                            participa:
                                "Se eres unha entidade cun proxecto innovador no sector saúde ou sociosanitario, participa nos premios #RIES23. Unha gran oportunidade de dar visibilidade o teu proxecto de innovación!",
                            innovacion:
                                "Premio Innovación CSG ás entidades máis innovadoras",
                            impacto:
                                "Premio Impacto nas persoas ás entidades con servizos ou produtos de maior impacto nas persoas",
                            conocimiento:
                                "Premio Coñecemento ás entidades que xeraran máis coñecemento",
                            comunidad:
                                "Premio Comunidade CSG ás entidades máis comprometidas coa #ComunidadeCSG",
                            revelacion:
                                "Premio Revelación ás entidades que destacaron recentemento por lograr un impacto significativo",
                            resiliencia:
                                "Premio Resiliencia ás entidades que demostraron capacidade de superar adversidades, adaptarse a situacións difíciles e recuperarse delas de maneira exemplar",
                            requisitos: "Requisitos para participar:",
                            video: "Explica o teu proxecto nun vídeo de  máximo 1’ de duración en formato horizontal 16:9 a mínimo 1920 x 1080.",
                            presentacion:
                                "Fai unha breve presentación co máis destacado do teu proxecto",
                            formulario:
                                "Completa os teus datos de contacto e sube ambos archivos neste formulario:",
                            limite: "Data límite: 18 de outubro",
                            cta: "Participa nos Premios #RIES23",
                        },
                    },
                    links: {
                        report: "Memoria",
                        gallery: "Galería",
                        news: "Noticias",
                        press: "Clipping de prensa",
                        videos: "Vídeos",
                        program: "Programa",
                        speakers: "Relatores",
                        introduction: "Introdución",
                        presentation: "Presentación",
                        presentations: "Presentacións",
                        neuroatlantic: "Proxecto neuroATLANTIC",
                        ahfes: "Proxecto AHFES",
                        committee: "Comité",
                        greeting: "Saludo presidenta",
                        letter: "Carta do Presidente #RIES22",
                    },
                    pages: {
                        csg: {
                            p1: "O Cluster Saúde de Galicia, CSG, inclúe entidades públicas e privadas do sectores de saúde e sociosanitario. O Cluster Saúde de Galicia, CSG, é unha entidade privada sen ánimo de lucro. Actuamos como unha plataforma profesional, dentro do ecosistema de saúde galego, para a cooperación público-privada, co propósito de apoiar s innovación para a co-creación de solucións que melloren o benestar das persoas.",
                            p2: "Os nosos membros incluen asociacións de pacientes, emprendedores/startups, PEMES, multinacionais, así como universidades, centros tecnolóxicos, fundacións biomédicas, asociacións sen ánimo de lucro e profesionais dod sectores da saúde e sociosanitario.",
                            p3: "Hoxe, máis de 10 anos despois da súa fundación, o ecosistema CSG engloba a máis de 100 entidades entre usuarios, industria e reguladores, conseguendo ano tras ano elevar a Galicia a nivel nacional e internacional a través da innovación en saúde, apoiando e impulsando a competitividade do sector.",
                            p4: "Por outra parte, o CSG posicionouse como unha plataforma profesional de colaboración para proxectos e alianzas globales e como organismo catalizador das necesidades e inquietudes dos seus asociados contando con máis de 100 socios, ó rededor de 70 proxectos e presencia en máis de 100 mercados. Todo elo co obxectivo de seguir creando alianzas globais en pro do desarrollo económico e social de Galicia.",
                            p5: "Nuestro objetivo es posicionar al Cluster Saúde de Galicia, CSG, como el Faro Guía hacia el futuro del ecosistema de salud gallego y afianzarnos como sinónimo de la búsqueda constante de mejora e innovación.",
                            url: "https://clustersaude.com/gl/",
                            cta: "Visita a páxina web do CSG",
                        },
                        exporpymes: {
                            p1: "EXPORPYMES é o evento de renome de internacionalización para a promoción do comercio exterior que a Cámara de Comercio da Coruña organiza desde 2013. O principal obxectivo é impulsar o B2B entre PEMES internacionais e galegas dos sectores representativos da actividade exportadora de Galicia. Dende 2022 e en colaboración co CSG, o sector saúde pasa a ser un dos sectores representados ofrecendo unha oportunidade única para a industria da saúde.",
                            r23: "Revive EXPORPYMES 2023",
                            g23: "Descubre máis info e a galería de EXPORPYMES 2023",
                            g23url: "https://clustersaude.com/gl/o-cluster-saude-de-galicia-csg-aposta-pola-promocion-da-internacionalizacion-das-empresas-galegas/",
                            r22: "Revive EXPORPYMES 2022",
                        },
                        carta23: {
                            carta: "Carta da presidenta de #RIES23",
                            p1: "Estimados colaboradores,",
                            p2: "Chegados a esta oitava edición do Fórum RIES 2023 despois de anos especialmente complexos, cremos que este evento alcanzou cotas, pero é necesario manter o noso esforzo de promoción do sector sanitario.",
                            p3: "Hoxe ninguén dubida de que a prosperidade e o futuro da sociedade dependen en gran medida do noso maior ben: a saúde. Unha saúde cuxa fortaleza e benestar deben apoiarse en avances científicos e tecnolóxicos que aborden os retos actuais e futuros.",
                            p4: "Nesta oitava edición poñemos o foco en dúas realidades, a Lonxevidade da poboación e a saúde global desde un enfoque OneHealth, e dúas ferramentas de enorme impacto, a Biotecnoloxía e a Intelixencia Artificial.",
                            p5: "A Lonxevidade: o envellecemento da poboación é unha realidade en crecemento, polo que debemos afrontar novos retos vinculados a el que requiren unha reformulación do enfoque en termos de maior humanización, flexibilidade e eficiencia.",
                            p6: "A OneHealth: unha perspectiva sanitaria e científica que incorporou plenamente este concepto que nos fala dunha única saúde, do mesmo xeito que temos un único planeta. Hoxe, despois dun século XXI con brotes epidémicos de gran relevancia, ninguén dubida da interrelación entre aspectos como o medio ambiente, o cambio climático, a globalización e a saúde humana e animal.",
                            p7: "A Biotecnoloxía: o COVID amosounos claramente o camiño: investigación e prevención de enfermidades mediante a biotecnoloxía e as vacinas. O mellor investimento en Sanidade é a prevención e entre os sistemas de prevención máis potentes atópanse as vacinas, cuxo balance custo/beneficio non ten igual ningún outro.",
                            p8: "Por último, a Intelixencia Artificial (IA) está a transformar a forma en que se presta a atención sanitaria. Ao mesmo tempo, aparecen novos retos e oportunidades que deben ser abordados dende unha perspectiva ampla e cun obxectivo principal: promover o benestar e a seguridade das persoas e o interese público.",
                            p9: "Avancemos cara a esta nova forma de entender a saúde, dun xeito global. Esta é a nosa aposta nesta edición VIII Fórum RIES 2023, centrado nos Ecosistemas Innovadores de Saúde.",
                            p10: "Estou convencida de que será de gran interese coa achega de todos os implicados.",
                        },
                        comite: {
                            comite: "Comité Organizador #RIES23",
                            honorifico: "Comité Honorifico #RIES23",
                            cta: "Descubre toda a información sobre o Comité Organizador #RIES23",
                        },
                        ponentes: {
                            ponentes: "Relatores #RIES23",
                            cta: "Descubre todos os relatores de #RIES23",
                            programa: "Descarga o programa completo",
                            tipos: {
                                keynote: "Keynote",
                                keynotes: "Keynotes",
                                agoraLead: "Dinamizador Ágora",
                                agoraSpeak: "Relator Ágora",
                                mesaM: "Moderador Mesa Redonda",
                                mesaS: "Relator Mesa Redonda",
                                proyecto: "Presentación Proxecto",
                                proyectos: "Proxectos",
                                agoraPlexus:
                                    "Ágora Medicina Personalizada, Tecnoloxías e Datos",
                                agoraITGALL:
                                    "Ágora Living Labs in Care. Cómo homoxeneizar a nivel europeo a validación de solucións dixitais en coidados a través dos Living Labs.",
                                agoraGradiant:
                                    "Ágora Transformando a Atención Socio-Sanitaria: O Papel dos Espazos de Datos Europeo",
                                agoraFerrovial:
                                    "Ágora O proceso da descarbonización no sector: centros sanitarios Neutros en Carbono",
                                agoraDomusVi:
                                    "Ágora Tecnoloxía Social para unha Lonxevidade Activa",
                                mesaBalidea:
                                    "Mesa Redonda Retos dos Sistemas Sanitarios ante a I.A.",
                                mesaTecnologia:
                                    "Mesa Redonda O uso das tecnoloxías en saúde: retos, benchmark e limitacións",
                                mesaZendal:
                                    "Mesa Redonda Retos ante futuras emerxencias sanitarias. Prevención e vacunas",
                            },
                            rol: {
                                vania: "Consultora independiente",
                                nick: "Professor",
                                joseManuel: "Socio director",
                                maria: "Coordinador da Estratexia de Medicina Personalizada de Galicia",
                                mariona: "Xefa de Sección Terapia Celular",
                                marcos: "Cordinador do Nodo de IA da UDC",
                                angel: "Responsable de Transformación Dixital",
                                nieves: "Asistente de coordinación ITGALL",
                                cristofol: "Project Manager Innovación",
                                konstantina:
                                    "Laboratorio de Física Médica e Innovación Dixital",
                                agustin: "Responsable de tecnoloxía",
                                joseManuelPerez:
                                    "Responsable de Coordinación de Asistencia Técnica",
                                karen: "Deputy CEO",
                                ramon: "VP Expansión Nacional",
                                joseAngel:
                                    "Director de Desenvolvemento de Negocio",
                                albert: "Director de Datos",
                                carmen: "Profesora de universidade",
                                carlos: "Director Técnico CoE Data Intelligence",
                                abdel: "Director Dimension Lab.",
                                beatriz:
                                    "Directora Corporativa de Comunicación e Imaxe",
                                graziella: "Presidenta",
                                silvia: "Subdirectora Xeral de Programas de fomento de estilos de vida saudables",
                                joseAntonio: "Fundador e Director Comercial",
                                manuel: "CEO",
                                joseAntonioLopez:
                                    "Catedrático de microbioloxía e director do grupo de Neuroviroloxía UAM",
                            },
                            description: {
                                vania1: "Dr. Vânia de la Fuente-Núñez é unha experta internacional en envellecemento e envellecemento saudable. Actualmente traballa como consultora independente, ofrecendo asesoramento técnico e estratéxico a diferentes entidades para axudar a mellorar a vida das persoas maiores. A súa carteira de servizos abarca desde investigación e formación ata desenvolvemento e avaliación de estratexias. É unha oradora de renome, liderando esforzos para desenvolver políticas e programas para responder mellor ao envellecemento da poboación en diferentes países e traballando para atraer maior financiamento á área do envellecemento.",
                                vania2: "Anteriormente, a doutora de la Fuente-Núñez traballou como funcionaria internacional na Organización Mundial da Saúde durante case unha década, sendo responsable da Campaña Global contra o Edadismo e coautora do histórico Informe Mundial sobre Edadismo das Nacións Unidas. Tamén dirixiu a área de educación e formación sobre envellecemento saudable, implementando programas innovadores de aprendizaxe e apoiando o desenvolvemento de políticas e programas en países e rexións de todo o mundo. Ademais, contribuíu ao lanzamento do Observatorio de Investigación e Desenvolvemento en Saúde Mundial da OMS e apoiou á Secretaría do Comité de Ética da Investigación da OMS durante o brote de ébola de 2014-15.",
                                vania3: "Antes de traballar na OMS, Vânia traballou con diferentes ONG e institutos de investigación en países de ingresos altos e baixos. Vânia é licenciada en medicina e en antropoloxía social e cultural, e realizou un máster en Filosofía, Política e Economía da Saúde grazas a unha bolsa de La Caixa.",
                                nick: 'Nick Guldemond é profesor de sanidade e saúde pública na Universidade Médica de Gdansk, Polonia, e no Centro Médico da Universidade de Leiden, nos Países Baixos, e é licenciado en medicina e enxeñaría eléctrica e doutor pola Universidade de Maastricht. É un experto no campo da saúde dixital, a eHealth e a innovación sanitaria. É coñecido polo seu traballo para avanzar no uso da tecnoloxía, especialmente as solucións dixitais e baseadas en datos, na atención sanitaria para mellorar a atención dos pacientes, a saúde da poboación e os sistemas de saúde. Foi o CEO e fundador do Medical Field Lab (principios de 2000), é dicir, o primeiro exemplo internacional de "Living Lab" con sede nun hospital universitario dedicado á ciencia, á innovación e ao impacto social. Como tal, tamén foi cofundador da Iniciativa Holandesa de Dispositivos Médicos Innovadores. Nick Guldemond ocupou varios cargos académicos e estivo involucrado en moitos proxectos de investigación relacionados coa saúde dixital e a innovación sanitaria. Tamén foi relator e panelista en numerosos congresos e foros internacionais. É asesor de moitos gobernos, da OMS, da Comisión Europea e de industrias de todo o mundo.',
                            },
                            resumenes: {
                                agoraPlexus:
                                    "Partiendo de una visión holística de la salud de las personas y con la participación de profesionales de dilatada experiencia en sus campos de actuación pretendemos analizar cómo los avances en los estudios genéticos, las nuevas generaciones de fármacos y terapias, las capacidades actuales de procesamiento de imágenes y datos así como el uso de la Inteligencia Artificial, Machine Learning, Big Data, etc. nos pueden facilitar la implementación de estrategias y protocolos de Medicina Personalizada desde la prevención, detección temprana, tratamiento y monitorización de la salud de las personas.",
                                agoraITGALL:
                                    "Un Living Lab es un ecosistema de innovación abierta en entornos reales de la vida. Un concepto de actualidad donde existe un campo muy amplio de recursos en los que queda mucho recorrido por aprender y progresar dentro del ecosistema de cuidados. En este Ágora se pretende facilitar la colaboración y el intercambio de conocimientos entre las diferentes partes del ecosistema para promover la homogeneización de la validación de soluciones digitales en cuidados. Para ello, debemos tratar diferentes temas donde hay que avanzar y crecer. Entre ellos tenemos: la estandarización europea, la búsqueda de financiación y cooperación, la ética y privacidad, la co-creación con los ciudadanos, los desafíos y oportunidades futuras, la red de colaboración y las mejores prácticas que ya existen. En este Ágora también habrá un debate abierto sobre cómo los Living Labs pueden aportar valor al mundo empresarial y emprendedor, para generar sinergias con Start-ups, aceleradoras, PYMES y grandes empresas tecnológicas.",
                                agoraGradiant:
                                    "El sector sanitario está muy regulado y los datos sanitarios se consideran merecedores de una protección especial. Por ello, se espera en este ágora evaluar la utilidad del modelo europeo de Espacio de Datos Europeo de Salud, las principales problemáticas asociadas a su puesta en marcha y las ventajas que dicho modelo puede aportar para la mejora de los cuidados socio-sanitarios, la personalización de los planes de tratamiento, la investigación médica y/o el desarrollo de medicamentos.",
                                agoraDomusVi:
                                    "Como sociedad tenemos que implicarnos y decidir qué tipo de longevidad queremos. El objetivo no es sólo vivir más, sino vivir mejor y que cada persona pueda elegir en base a sus preferencias cómo afrontar la longevidad. Como sociedad tenemos que ser capaces de dar respuesta a los grandes retos que este nuevo paradigma representa.",
                                mesaBalidea:
                                    "En la actualidad son muchos los retos a los que se enfrentan los sistemas sanitarios. La Inteligencia Artificial parece que puede ayudar a solucionar alguno de ellos, pero al mismo tiempo supone en sí misma uno de los mayores retos a los que se tiene enfrentado la Sanidad: desde los retos éticos a los tecnológicos, desde su uso como apoyo a la decisión clínica como la necesidad de confiar en algoritmos complejos... Esta mesa pretende aproximarse al enfoque que los sistemas sanitarios deben tener para sacarle partida a esta disrupción tecnológica y a los posibles peajes que puede suponer.",
                                mesaTecnologia:
                                    "El uso de las tecnologías en el ámbito de la salud está experimentando un crecimiento significativo en las últimas décadas, ofreciendo diversas oportunidades, como pueden ser la mejora en el diagnóstico, la telemedicina, el registro electrónico de salud o la medicina personalizada, entre otras. Este tema también presenta diversos desafíos, como puede ser la brecha digital, el marco regulatorio, la privacidad y seguridad en el almacenamiento o la transmisión de datos, con sus respectivas limitaciones en lo relativo a los costos por la inversión de tecnologías en salud, la resistencia que existe al cambio o los errores algorítmicos. El benchmarking de casos exitosos y la consideración de las limitaciones son fundamentales para aprovechar al máximo el potencial de estas tecnologías en el cuidado de la salud pero, sin olvidarnos que la tecnología a veces no es un reto en sí mismo, sino el reto viene en cómo se adapta esta tecnología al contexto y de qué manera evoluciona de la mano de las personas que integran el ecosistema.",
                                mesaZendal:
                                    "Mesa redonda con expertos líderes en el ecosistema salud y vacunología para dialogar sobre los desafíos de la salud global. La salud no tiene fronteras geográficas por ello debemos trabajar para una mejor preparación ante posibles emergencias sanitarias desde nuestro ámbito de actuación, Europa. La mesa ofrecerá una oportunidad exclusiva para conocer a expertos nacionales e internacionales que trabajan en el ecosistema de la salud y vacunas, desde el enfoque más técnico, universitario hasta la parte industrial y de información pública. Tratará aspectos relativos a la necesidad de una mejor preparación y respuesta frente a exigencias o emergencias sanitarias y futuras pandemias para abordar posibles futuras crisis o emergencias de salud global desde una perspectiva ONE Health y desde un marco europeo. ",
                            },
                        },
                    },
                    hero23: {
                        date: "8 e 9 de novembro de 2023",
                        longevity: "Lonxevidade",
                        ia: "IA",
                        logo: "/logo-azul-gl.png",
                        organiza: "Organiza",
                        colabora: "Colabora:",
                        i1: "8 e 9 de novembro de 2023",
                        i2: "Hotel Attica21 4****s Business & Wellness, Vigo. Formato presencial",
                        i3: "Evento de relevancia internacional",
                        i4: "Cena de gala e entrega de premios #RIES23 e boas prácticas #SEN",
                        i5: "Networking, sinerxías e casos de éxito",
                        program: "Programa",
                        link: "https://forumries.com/RIES23_Programa.pdf",
                        description2:
                            "Nesta oitava edición, que se celebrará na cidade de Vigo, a temática do VIII Fórum RIES 2023 (#RIES23)  'Ecosistemas innovadores de saúde'  engloba un dos nosos propósitos principais:  ser unha plataforma profesional de colaboración público-privada entre os diferentes axentes do sector que potencie os proxectos innovadores colaborativos dentro do noso ecosistema de innovación en saúde. #RIES23 céntrase en resaltar o papel imprescindible que xogan os ecosistemas de innovación en saúde e os seus protagonistas, valor core da nosa #ComunidadCSG. Nesta oitava edición do Fórum RIES aspiramos a dar voz, escoitar e conocer a todos os membros dps ecosistemas innovadores mentres profundizamos en catro temáticas de interés: Lonxevidade, Biotech, OneHealth e Intelixencia Artificial.",
                    },
                    logos: {
                        csgNeg: "/csg-negativo.png",
                        csgPos: "/csg-positivo.png",
                        ries: "/RIES-logo-negativo.png",
                    },
                    patrocinios: {
                        title: "Tipos de patrocinios e colaboracións",
                        granito:
                            'A continuación, enumeramos varios formatos de patrocinio ou colaboracións (que podedes consultar en detalle no dossier), pero escribenos si se che ocurre calquera outra maneira de “poñer o teu gran de area". ¡Os nosos mellores embaixadores sodes vos!',
                        linkName: "Dossier de patrocinadores",
                        link: "https://registro.forumries.com/wp-content/uploads/2023/08/RIES23_Patrocinadores-1.pdf",
                        support: "Faite patrocinador!",
                        form: "https://registro.forumries.com/patrocinadores",
                        type1: "DIAMANTE (1 patrocinio posible | 8000€ + IVA)",
                        type2: "PLATINUM (8 patrocinios posibles | 3500€ + IVA)",
                        type3: "DINAMIZADOR ÁGORA (6 patrocinios posibles | 2500€ + IVA)",
                        type4: "RELATOR ÁGORA (18 patrocinios posibles, 3 max/ágora 500€ + IVA)",
                        type5: "MODERADOR MESA REDONDA (2 patrocinios posibles | 1500€ + IVA)",
                        type6: "RELATORES MESA REDONDA (8 patrocinios posibles, 4 max/mesa redonda | 1000€ + IVA)",
                        type7: "PROXECTO (4 patrocinios posibles | 1500€ + IVA)",
                        type8: "GOLD (10 patrocinios posibles | 1000€ + IVA)",
                        type9: "SILVER (20 patrocinios posibles 1500€ + IVA)",
                        type10: "Socio colaborador (# ilimitado de patrocinios posibles | 250€ + IVA). ",
                        type11: "Colaboración con Coffee-break -1 (2 patrocinios posibles | 1200€ + IVA) ",
                        type12: "Colaboración con almorzo de traballo (2 patrocinios posibles | 1200€ + IVA}",
                        type13: "Colaboración con visita cultural (1 patrocinio posible | 2000€ + IVA) ",
                        type14: "Colaboración con Lanyard (2 patrocinios posibles | 1200€ + IVA)",
                        type15: "Colaboración con algunha sección de #RIES23 na xornada do 9 de novembro (4 patrocinios posibles | 250€ + IVA)",
                        type16: "Roll-up en Coffee-breaks (# ilimitado de patrocinios posibles | 350€ + IVA) ",
                        type17: "Folletos en mesa (# ilimitado de patrocinios posibles | 150€ + IVA) ",
                        cta: "Patrocina!",
                        ltype1: "DIAMANTE",
                        ltype2: "PLATINUM",
                        ltype3: "DINAMIZADOR ÁGORA",
                        ltype4: "RELATOR ÁGORA",
                        ltype5: "MODERADOR MESA REDONDA",
                        ltype6: "RELATORES MESA REDONDA",
                        ltype7: "PROXECTO",
                        ltype8: "GOLD",
                        ltype9: "SILVER",
                        ltype10: "Socio colaborador",
                    },
                    info: {
                        booking: "Reserva unha habitación no hotel de #RIES23",
                        valid: "a precio especial ata o 8 de setembro",
                        hab1: "Habitación Attica21 doble, de uso individual en réxime de aloxamento e almorzo buffet - 90€/noite",
                        hab2: "Habitación Attica21 doble, en réxime de aaloxamento e almorzo buffet - 103€/noite",
                        reserva: "Para reservar escribido o correo",
                        reserva2:
                            "ou chamade o teléfono +34 986 46 21 21 indicando que sodes asistentes do 'Congreso #RIES23'",
                    },
                    mailchimp: {
                        subscribe: "Suscríbete á newsletter de #RIES23",
                        name: "Nome",
                        send: "Enviar",
                        sending: "Enviando",
                    },
                    program23: {
                        day8: "Xornada 8 de novembro",
                        hour8: "16:00 - 02:00 (+1 DÍA) CET",
                        p81: "Presentación de resultados de Senior Eco-Nect (#SEN) (en Museo Verbum - Casa das Palabras)",
                        p82: "Inauguración #RIES23 co Conselleiro de Sanidade (Señor Conselleiro Julio García Comesaña) e la Presidenta do CSG (Rocío Mosquera)",
                        p83: "Entrega de Premios #RIES23 e boas prácticas #SEN",
                        p84: "Fin de premios e paso a cea",
                        p85: "Cea de gala",
                        p86: "Presentación programa Xornada #RIES23 do 9 de novembro",
                        p87: "Afterwork",
                        day9: "Xornada 9 de novembro",
                        hour9: "9:30 - 19:00 CET",
                        p91: "Apertura e Benvida ó VIII Fórum RIES 2023: Ecosistemas Innovadores en Saúde",
                        p92: "Keynote - Vânia de la Fuente-Núñez",
                        p93: "Mesa Redonda - Intelixencia Artificial: 'Retos dos Sistemas Sanitarios ante a I.A.'",
                        p94: "Café",
                        p95: "Mesa Redonda - Biotech: 'Retos ante futuras emerxencias sanitarias. Prevención e vacinas'",
                        p96: "Keynote - Nick Guldemon",
                        p97: "Mesa Redonda: 'Uso das tecnoloxías en saúde: Retos, Benchmark e Limitacións'",
                        p98: "Visita institucional ós stands Platinum",
                        p99: "Comida Cóctel #RIES23",
                        p910: "Ágoras / Pitch proxectos / Project Plans",
                        p911: "Clausura networking #RIES23",
                        pitch: "Pitch proxectos",
                    },
                },
            },
        },
    })

export default i18n

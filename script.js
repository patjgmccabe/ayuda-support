/* ===== Centralized Translation Object ===== */
const translations = {
  /* ---- Navigation ---- */
  navHome:        { en: "Home",                     es: "Inicio" },
  navServices:    { en: "Services",                 es: "Servicios" },
  navOPWDD:       { en: "OPWDD Questions",          es: "Preguntas OPWDD" },
  navContact:     { en: "Contact Us",               es: "Contáctenos" },
  langBtn:        { en: "Español",                  es: "English" },

  /* ---- Home Page ---- */
  heroTitle:      { en: "Welcome to Ayuda Support",
                    es: "Bienvenido a Ayuda Support" },
  heroSubtitle:   { en: "Guiding individuals and families through OPWDD services with care, clarity, and compassion.",
                    es: "Guiando a individuos y familias a través de los servicios de OPWDD con cuidado, claridad y compasión." },

  cardTitle1:     { en: "Support Broker Services",  es: "Servicios de Apoyo" },
  cardDesc1:      { en: "Personalized guidance to help you navigate self-directed services and build a plan that works for you.",
                    es: "Orientación personalizada para ayudarle a navegar los servicios autodirigidos y crear un plan que funcione para usted." },
  cardBtn1:       { en: "Learn More",               es: "Más Información" },

  cardTitle2:     { en: "OPWDD Questions",           es: "Preguntas OPWDD" },
  cardDesc2:      { en: "Find clear answers to the most common questions about OPWDD eligibility, services, and processes.",
                    es: "Encuentre respuestas claras a las preguntas más comunes sobre elegibilidad, servicios y procesos de OPWDD." },
  cardBtn2:       { en: "View FAQs",                 es: "Ver Preguntas" },

  cardTitle3:     { en: "Contact Us",                es: "Contáctenos" },
  cardDesc3:      { en: "Have questions or need assistance? Reach out and we will be happy to help.",
                    es: "¿Tiene preguntas o necesita ayuda? Comuníquese con nosotros y estaremos encantados de ayudarle." },
  cardBtn3:       { en: "Get in Touch",              es: "Contactar" },

  /* ---- Services Page ---- */
  svcHeading:    { en: "Support Broker Services",
                   es: "Servicios de Support Broker" },
  svcSubtitle:   { en: "Helping families navigate OPWDD self-direction with confidence, clarity, and compassion.",
                   es: "Ayudando a familias a navegar la autodirección de OPWDD con confianza, claridad y compasión." },

  /* Introduction */
  svcIntroP1:    { en: "My name is Shannen McCabe, and I am the founder of Ayuda Support. I work directly with individuals and families in New York who are enrolled in — or considering — OPWDD self-directed services.",
                   es: "Mi nombre es Shannen McCabe y soy la fundadora de Ayuda Support. Trabajo directamente con individuos y familias en Nueva York que están inscritos — o están considerando inscribirse — en los servicios autodirigidos de OPWDD." },
  svcIntroP2:    { en: "Self-direction gives people with developmental disabilities the power to choose their own supports, hire their own staff, and manage a personalized budget. It is a meaningful path — but it can also feel overwhelming. That is where I come in.",
                   es: "La autodirección les da a las personas con discapacidades del desarrollo el poder de elegir sus propios apoyos, contratar su propio personal y administrar un presupuesto personalizado. Es un camino significativo — pero también puede sentirse abrumador. Ahí es donde entro yo." },
  svcIntroP3:    { en: "As your Support Broker, I will guide you through every step of the process so you can make informed decisions with confidence.",
                   es: "Como su Support Broker, le guiaré en cada paso del proceso para que pueda tomar decisiones informadas con confianza." },
  svcPhotoLabel: { en: "[Insert Photo Here]",
                   es: "[Insertar Foto Aquí]" },

  /* Personal Connection */
  svcPersonalTitle: { en: "A Personal Connection",
                      es: "Una Conexión Personal" },
  svcPersonalP1:    { en: "I am not only a Support Broker — I am also the parent of a young man who self-directs his own services through OPWDD. Supporting my son through this process has given me firsthand experience with the responsibilities, challenges, and rewards that come with self-direction.",
                      es: "No soy solo una Support Broker — también soy madre de un joven que autodirige sus propios servicios a través de OPWDD. Apoyar a mi hijo en este proceso me ha dado experiencia de primera mano con las responsabilidades, los desafíos y las recompensas que conlleva la autodirección." },
  svcPersonalP2:    { en: "I understand what it feels like to sit across the table and make important decisions about your loved one's care. I know the questions that keep families up at night, and I know how much it matters to have someone in your corner who truly understands the system — not just professionally, but personally.",
                      es: "Entiendo lo que se siente al sentarse frente a la mesa y tomar decisiones importantes sobre el cuidado de un ser querido. Conozco las preguntas que mantienen a las familias despiertas por la noche, y sé lo importante que es tener a alguien de su lado que realmente entienda el sistema — no solo profesionalmente, sino personalmente." },

  /* Professional Experience */
  svcProfTitle:   { en: "Professional Experience",
                    es: "Experiencia Profesional" },
  svcProfIntro:   { en: "I bring a unique combination of advocacy experience, financial expertise, and community leadership to my work as a Support Broker:",
                    es: "Aporto una combinación única de experiencia en defensa, conocimiento financiero y liderazgo comunitario a mi trabajo como Support Broker:" },
  svcProfItem1:   { en: "Three years as an Educational Advocate at the Long Island Advocacy Center, supporting individuals and families in navigating educational and disability-related services",
                    es: "Tres años como Defensora Educativa en el Long Island Advocacy Center, apoyando a individuos y familias en la navegación de servicios educativos y relacionados con discapacidades" },
  svcProfItem2:   { en: "Twelve years of experience in the accounting field, with strong skills in budgeting, organization, communication, and business operations",
                    es: "Doce años de experiencia en el campo de la contabilidad, con sólidas habilidades en presupuestos, organización, comunicación y operaciones comerciales" },
  svcProfItem3:   { en: "Three years on my home district's SEPTA board, most recently serving as President",
                    es: "Tres años en la junta de SEPTA de mi distrito escolar, sirviendo más recientemente como Presidenta" },
  svcProfItem4:   { en: "Board member of Long Island Family Support Services, advocating alongside other parents of children with disabilities",
                    es: "Miembro de la junta de Long Island Family Support Services, abogando junto a otros padres de niños con discapacidades" },
  svcProfClosing: { en: "This background allows me to support families not only with the day-to-day coordination of services, but also with the financial planning, budgeting, and organizational skills that are essential to successful self-direction.",
                    es: "Esta experiencia me permite apoyar a las familias no solo con la coordinación diaria de servicios, sino también con la planificación financiera, los presupuestos y las habilidades organizativas que son esenciales para una autodirección exitosa." },

  /* Why Families Trust Me */
  svcTrustTitle:     { en: "Why Families Trust Me",
                       es: "Por Qué las Familias Confían en Mí" },
  svcTrustP1:        { en: "Families choose to work with me because I combine real-world experience with professional expertise. I have walked this road myself, and I bring that understanding into every conversation, meeting, and decision.",
                       es: "Las familias eligen trabajar conmigo porque combino experiencia real con conocimiento profesional. Yo misma he recorrido este camino, y traigo esa comprensión a cada conversación, reunión y decisión." },
  svcTrustBilingual: { en: "I am fully bilingual in English and Spanish. Providing services in both languages is an important part of my practice. Whether you are more comfortable communicating in English or Spanish, I am here to support you in the language that feels right for your family.",
                       es: "Soy completamente bilingüe en inglés y español. Brindar servicios en ambos idiomas es una parte importante de mi práctica. Ya sea que se sienta más cómodo comunicándose en inglés o en español, estoy aquí para apoyarle en el idioma que sea mejor para su familia." },
  svcTrustP2:        { en: "I am organized, responsive, and committed to treating every family I work with the same care and attention I bring to my own son's services. You will never feel like just another case — because to me, you are not.",
                       es: "Soy organizada, receptiva y estoy comprometida a tratar a cada familia con la que trabajo con el mismo cuidado y atención que dedico a los servicios de mi propio hijo. Nunca se sentirá como un caso más — porque para mí, no lo es." },

  /* Call to Action */
  svcCtaTitle: { en: "Ready to Get Started?",
                 es: "¿Lista/o para Comenzar?" },
  svcCtaText:  { en: "If you or your family are considering self-direction through OPWDD, I would love to speak with you. I offer a free initial consultation to learn about your situation and answer your questions — with no pressure and no obligation.",
                 es: "Si usted o su familia están considerando la autodirección a través de OPWDD, me encantaría hablar con usted. Ofrezco una consulta inicial gratuita para conocer su situación y responder sus preguntas — sin presión y sin compromiso." },
  svcCtaBtn:   { en: "Schedule a Free Consultation",
                 es: "Programe una Consulta Gratuita" },

  /* ---- OPWDD Page ---- */
  opwddHeading:   { en: "OPWDD Questions",
                    es: "Preguntas sobre OPWDD" },
  opwddSubtitle:  { en: "Answers to frequently asked questions about OPWDD services, eligibility, and self-direction.",
                    es: "Respuestas a preguntas frecuentes sobre los servicios de OPWDD, elegibilidad y autodirección." },

  /* FAQ Categories */
  faqCat1: { en: "General & Getting Started",     es: "General y Primeros Pasos" },
  faqCat2: { en: "Eligibility",                    es: "Elegibilidad" },
  faqCat3: { en: "Medicaid & HCBS Waiver",         es: "Medicaid y la Exención HCBS" },
  faqCat4: { en: "Planning & Care Management",     es: "Planificación y Administración de Atención" },
  faqCat5: { en: "Self-Direction",                  es: "Autodirección" },
  faqCat6: { en: "Services & Supports",             es: "Servicios y Apoyos" },
  faqCat7: { en: "Students & Transition",           es: "Estudiantes y Transición" },
  faqCat8: { en: "Contact & Resources",             es: "Contacto y Recursos" },

  /* General & Getting Started */
  faqQ1: { en: "What is OPWDD?",
           es: "¿Qué es OPWDD?" },
  faqA1: { en: "OPWDD stands for the Office for People With Developmental Disabilities. It is a New York State agency responsible for coordinating services for individuals with developmental disabilities, including intellectual disability, cerebral palsy, epilepsy, autism, neurological impairment, familial dysautonomia, and Prader-Willi Syndrome. OPWDD provides services directly and through a network of not-for-profit provider agencies across the state.",
           es: "OPWDD significa la Oficina para Personas con Discapacidad de Desarrollo. Es una agencia del estado de Nueva York responsable de coordinar servicios para personas con discapacidad de desarrollo, incluyendo discapacidad intelectual, parálisis cerebral, epilepsia, autismo, deterioro neurológico, disautonomía familiar y síndrome de Prader-Willi. La OPWDD presta servicios directamente y a través de una red de agencias proveedoras sin fines de lucro en todo el estado." },

  faqQ2: { en: "What is the Front Door?",
           es: "¿Qué es Front Door?" },
  faqA2: { en: "The Front Door is OPWDD's process for accessing services. It uses a person-centered approach to guide you through finding out if you are eligible for OPWDD services, identifying your needs, and developing a plan to receive supports. The goal is to provide services that respect each person's abilities, language, and cultural values.",
           es: "Front Door es el proceso de la OPWDD para acceder a los servicios. Utiliza un enfoque centrado en la persona para guiarlo a través de averiguar si es elegible para los servicios de la OPWDD, identificar sus necesidades y desarrollar un plan para recibir apoyos. El objetivo es brindar servicios que respeten las habilidades, el idioma y los valores culturales de cada persona." },

  faqQ3: { en: "How do I begin the process of accessing OPWDD services?",
           es: "¿Cómo comienzo el proceso para acceder a los servicios de OPWDD?" },
  faqA3: { en: "To get started, you can visit the OPWDD website at opwdd.ny.gov/get-started and watch the Front Door videos, which explain the supports and services available, the choices OPWDD offers, and how the process works. You can also call OPWDD's Information Line at 1-866-946-9733 or contact your local Developmental Disabilities Regional Office (DDRO) directly.",
           es: "Para comenzar, puede visitar el sitio web de la OPWDD en opwdd.ny.gov/get-started y ver los videos de Front Door, que explican los apoyos y servicios disponibles, las opciones que ofrece la OPWDD y cómo funciona el proceso. También puede llamar a la línea de información de la OPWDD al 1-866-946-9733 o comunicarse directamente con su Oficina Regional de Discapacidad de Desarrollo (DDRO) local." },

  faqQ4: { en: "How is OPWDD structured?",
           es: "¿Cómo está estructurada la OPWDD?" },
  faqA4: { en: "OPWDD operates through five Developmental Disabilities Regional Offices (DDROs) that coordinate not-for-profit provider services and manage the Front Door process. Most of your interaction with OPWDD will be through your local DDRO. OPWDD also works with Care Coordination Organizations (CCOs) to help people develop and maintain service plans.",
           es: "La OPWDD opera a través de cinco Oficinas Regionales de Discapacidad de Desarrollo (DDRO) que coordinan los servicios de proveedores sin fines de lucro y administran el proceso de Front Door. La mayor parte de su interacción con la OPWDD será a través de su DDRO local. La OPWDD también trabaja con Organizaciones de Coordinación de Atención (CCO) para ayudar a las personas a desarrollar y mantener planes de servicio." },

  /* Eligibility */
  faqQ5: { en: "What is the eligibility determination?",
           es: "¿Qué es la determinación de elegibilidad?" },
  faqA5: { en: "The eligibility determination is the review process OPWDD uses to decide whether a person has a developmental disability that qualifies them for OPWDD services and supports. Each person who wants OPWDD services has the right to an individual eligibility review.",
           es: "La determinación de elegibilidad es el proceso de revisión que usa la OPWDD para decidir si una persona tiene una discapacidad de desarrollo que la califica para los servicios y apoyos de la OPWDD. Cada persona que desee servicios de la OPWDD tiene derecho a una revisión de elegibilidad individual." },

  faqQ6: { en: "Who can apply for an eligibility review?",
           es: "¿Quién puede solicitar una revisión de elegibilidad?" },
  faqA6: { en: "Care Coordination Organizations or Service Access Agencies can help you and your family apply for OPWDD services. They will submit your materials and records to your local DDRO on your behalf. OPWDD does not accept documents submitted directly by individuals or families — you must work through an authorized organization.",
           es: "Las Organizaciones de Coordinación de Atención o las Agencias de Acceso a Servicios pueden ayudarlo a usted y a su familia a solicitar los servicios de la OPWDD. Ellos enviarán sus materiales y registros a su DDRO local en su nombre. La OPWDD no acepta documentos enviados directamente por personas o familias; debe trabajar a través de una organización autorizada." },

  faqQ7: { en: "What are the requirements to be eligible for OPWDD services?",
           es: "¿Cuáles son los requisitos para ser elegible para los servicios de OPWDD?" },
  faqA7: { en: "Under New York State Mental Hygiene Law, a person must meet four requirements: (1) the presence of a developmental disability described by qualifying diagnoses or conditions, (2) the disability occurred before age 22, (3) the disability is expected to continue indefinitely or permanently, and (4) the disability causes a substantial handicap to the person's ability to function normally in society.",
           es: "Según la Ley de Higiene Mental del estado de Nueva York, una persona debe cumplir cuatro requisitos: (1) la presencia de una discapacidad de desarrollo descrita por diagnósticos o condiciones que califican, (2) la discapacidad ocurrió antes de los 22 años, (3) se espera que la discapacidad continúe de manera indefinida o permanente, y (4) la discapacidad causa una desventaja sustancial para la capacidad de la persona de funcionar normalmente en la sociedad." },

  faqQ8: { en: "What qualifies as a developmental disability?",
           es: "¿Qué califica como una discapacidad de desarrollo?" },
  faqA8: { en: "Developmental disabilities are conditions that occur before age 22 and continue throughout a person's life. Qualifying conditions include, but are not limited to, intellectual disability, autism, cerebral palsy, epilepsy, familial dysautonomia, Prader-Willi Syndrome, and neurological impairment (injury, malformation, or disease involving the central nervous system). These are different from developmental delays, which may improve with early intervention.",
           es: "Las discapacidades de desarrollo son condiciones que ocurren antes de los 22 años y continúan a lo largo de la vida de una persona. Las condiciones que califican incluyen, entre otras, discapacidad intelectual, autismo, parálisis cerebral, epilepsia, disautonomía familiar, síndrome de Prader-Willi y deterioro neurológico (lesión, malformación o enfermedad que involucra el sistema nervioso central). Estas son diferentes de los retrasos en el desarrollo, que pueden mejorar con la intervención temprana." },

  faqQ9: { en: "What conditions are NOT considered a developmental disability?",
           es: "¿Qué condiciones NO se consideran una discapacidad de desarrollo?" },
  faqA9: { en: "Mental illness on its own (such as bipolar disorder or depression), loss or absence of senses, motor skills, or physical abilities, and mild forms of conditions like cerebral palsy, seizure disorder, or brain injury — if there is no evidence of substantial handicap — do not qualify. However, a person may still be eligible if they have one of these conditions alongside a qualifying developmental disability.",
           es: "La enfermedad mental por sí sola (como el trastorno bipolar o la depresión), la pérdida o ausencia de sentidos, habilidades motoras o capacidades físicas, y las formas leves de condiciones como parálisis cerebral, trastorno convulsivo o lesión cerebral — si no hay evidencia de discapacidad sustancial — no califican. Sin embargo, una persona puede ser elegible si tiene una de estas condiciones junto con una discapacidad de desarrollo que califica." },

  faqQ10: { en: "What does \"substantial handicap\" mean?",
            es: "¿Qué significa \"discapacidad sustancial\"?" },
  faqA10: { en: "For OPWDD eligibility, \"substantial handicap\" means that a person's developmental disability is so serious that it makes it very difficult for them to live everyday life independently. Qualified professionals are trained to evaluate individuals for developmental disabilities and assess difficulties with everyday functioning.",
            es: "Para la elegibilidad de la OPWDD, \"discapacidad sustancial\" significa que la discapacidad de desarrollo de una persona es tan grave que hace que sea muy difícil vivir la vida cotidiana de manera independiente. Los profesionales calificados están capacitados para evaluar a las personas en busca de discapacidades de desarrollo y evaluar las dificultades con el funcionamiento cotidiano." },

  faqQ11: { en: "What documents are needed for an eligibility review?",
            es: "¿Qué documentos se necesitan para una revisión de elegibilidad?" },
  faqA11: { en: "Generally, the following records are needed: a psychological report (within three years) that includes an IQ assessment, a standardized evaluation of adaptive behavior, a social or developmental history showing the disability existed before age 22, a recent general medical report (within the past year), and, for conditions other than intellectual disability, medical or specialty reports that confirm the diagnosis. Educational records such as IEPs and report cards can also be helpful.",
            es: "En general, se necesitan los siguientes registros: un informe psicológico (dentro de los tres años) que incluya una evaluación de coeficiente intelectual, una evaluación estandarizada de comportamiento adaptativo, una historia social o de desarrollo que muestre que la discapacidad existía antes de los 22 años, un informe médico general reciente (dentro del último año) y, para condiciones distintas a la discapacidad intelectual, informes médicos o de especialidad que confirmen el diagnóstico. Los registros educativos como los IEP y las boletas de calificaciones también pueden ser útiles." },

  faqQ12: { en: "How is eligibility determined for children?",
            es: "¿Cómo se determina la elegibilidad de los niños?" },
  faqA12: { en: "For children between birth and eight years of age, the eligibility review requirements are generally the same as for adults, with some flexibility. In some cases, children may receive provisional eligibility, which grants OPWDD services for a limited period of time. All children with provisional eligibility must be reviewed again before their eighth birthday to determine if they remain eligible.",
            es: "Para los niños entre el nacimiento y los ocho años de edad, los requisitos de revisión de elegibilidad son generalmente los mismos que para los adultos, con cierta flexibilidad. En algunos casos, los niños pueden recibir elegibilidad provisional, que otorga servicios de la OPWDD por un período de tiempo limitado. Todos los niños con elegibilidad provisional deben ser revisados nuevamente antes de su octavo cumpleaños para determinar si siguen siendo elegibles." },

  faqQ13: { en: "Is there an age limit for applying for OPWDD eligibility?",
            es: "¿Existe un límite de edad para solicitar la elegibilidad de OPWDD?" },
  faqA13: { en: "No. There is no age limit for requesting an eligibility review. Eligibility can be reviewed from infancy through adulthood. However, as a person gets older, it may become more difficult to find the records needed to prove the disability was present before age 22.",
            es: "No. No hay límite de edad para solicitar una revisión de elegibilidad. La elegibilidad se puede revisar desde la infancia hasta la edad adulta. Sin embargo, a medida que una persona envejece, puede volverse más difícil encontrar los registros necesarios para demostrar que la discapacidad estaba presente antes de los 22 años." },

  faqQ14: { en: "What is the 3-step eligibility determination process?",
            es: "¿Cuál es el proceso de determinación de elegibilidad de 3 pasos?" },
  faqA14: { en: "The process has three review steps to ensure fairness. In the First Step, DDRO staff review your request to confirm it is complete. In the Second Step, a committee of clinicians evaluates your materials. If you are found ineligible, you can meet with staff, request a Third Step Review by an independent committee, and request a Medicaid Fair Hearing if you are seeking Medicaid-funded services.",
            es: "El proceso tiene tres pasos de revisión para garantizar la equidad. En el Primer Paso, el personal de la DDRO revisa su solicitud para confirmar que esté completa. En el Segundo Paso, un comité de médicos evalúa sus materiales. Si se determina que no es elegible, puede reunirse con el personal, solicitar una revisión del Tercer Paso por un comité independiente y solicitar una audiencia imparcial de Medicaid si busca servicios financiados por Medicaid." },

  /* Medicaid & HCBS Waiver */
  faqQ15: { en: "Why is Medicaid needed for OPWDD services?",
            es: "¿Por qué se necesita Medicaid para los servicios de OPWDD?" },
  faqA15: { en: "Most OPWDD services are funded through New York State's Medicaid program. You must be eligible for and enrolled in Medicaid to access most OPWDD services, including the Home and Community-Based Services (HCBS) waiver and Care Coordination programs. Individuals may also choose to pay for services with their own funds instead of enrolling in Medicaid.",
            es: "La mayoría de los servicios de la OPWDD se financian a través del programa Medicaid del estado de Nueva York. Debe ser elegible y estar inscrito en Medicaid para acceder a la mayoría de los servicios de la OPWDD, incluyendo la exención de Servicios Basados en el Hogar y la Comunidad (HCBS) y los programas de coordinación de atención. Las personas también pueden optar por pagar los servicios con sus propios fondos en lugar de inscribirse en Medicaid." },

  faqQ16: { en: "How do I apply for Medicaid?",
            es: "¿Cómo solicito Medicaid?" },
  faqA16: { en: "There are several ways to apply: you can apply directly through your county's Medicaid office, apply through New York State of Health by calling 1-855-355-5777, work with a community services agency for help, or be referred by OPWDD's Front Door to a Care Coordination Organization that will assist you. You can also call 1-800-541-2831 for help completing the application.",
            es: "Hay varias formas de solicitarlo: puede presentar su solicitud directamente en la oficina de Medicaid de su condado, solicitarlo a través del Estado de Salud de Nueva York llamando al 1-855-355-5777, trabajar con una agencia de servicios comunitarios para obtener ayuda, o ser derivado por Front Door de la OPWDD a una Organización de Coordinación de Atención que lo ayudará. También puede llamar al 1-800-541-2831 para obtener ayuda para completar la solicitud." },

  faqQ17: { en: "Who is eligible for Medicaid?",
            es: "¿Quién es elegible para Medicaid?" },
  faqA17: { en: "Individuals with disabilities age 18 or older are generally eligible if their income and resources are below certain limits. Programs like the Medicaid Buy-In for Working People with Disabilities allow working adults to keep more of their income. Children under 18 with developmental disabilities may qualify based on their own or their family's income. In some cases, parental income is not considered when a child applies for the OPWDD HCBS waiver.",
            es: "Las personas con discapacidad mayores de 18 años generalmente son elegibles si sus ingresos y recursos están por debajo de ciertos límites. Programas como la Compra de Medicaid para Trabajadores con Discapacidad permiten a los adultos que trabajan mantener una mayor parte de sus ingresos. Los niños menores de 18 años con discapacidad de desarrollo pueden calificar según sus propios ingresos o los de su familia. En algunos casos, los ingresos de los padres no se consideran cuando un niño solicita la exención HCBS de la OPWDD." },

  faqQ18: { en: "What is the HCBS waiver and how do I enroll?",
            es: "¿Qué es la exención HCBS y cómo me inscribo?" },
  faqA18: { en: "The Home and Community-Based Services (HCBS) waiver is OPWDD's largest Medicaid program. It offers services to support individuals living in the community so they do not need to live in institutions. To enroll, you must fill out an Application for Participation and provide evidence of a developmental disability, an appropriate level of need, Medicaid eligibility, and an appropriate living arrangement.",
            es: "La exención de Servicios Basados en el Hogar y la Comunidad (HCBS) es el programa de Medicaid más grande de la OPWDD. Ofrece servicios para apoyar a las personas que viven en la comunidad para que no necesiten vivir en instituciones. Para inscribirse, debe completar una Solicitud de Participación y proporcionar evidencia de una discapacidad de desarrollo, un nivel adecuado de necesidad, elegibilidad para Medicaid y un arreglo de vivienda apropiado." },

  faqQ19: { en: "What if I am denied Medicaid coverage?",
            es: "¿Qué sucede si me deniegan la cobertura de Medicaid?" },
  faqA19: { en: "If your Medicaid application is denied, you will receive a letter explaining the decision. You should save this letter and share it with your Care Coordination Organization or Family Support Services agency, who can help you determine whether to appeal the decision and guide you through the appeals process.",
            es: "Si se deniega su solicitud de Medicaid, recibirá una carta explicando la decisión. Debe guardar esta carta y compartirla con su Organización de Coordinación de Atención o agencia de Servicios de Apoyo Familiar, quienes pueden ayudarlo a determinar si debe apelar la decisión y guiarlo a través del proceso de apelación." },

  /* Planning & Care Management */
  faqQ20: { en: "What happens after I am found eligible for services?",
            es: "¿Qué sucede después de que me determinan elegible para los servicios?" },
  faqA20: { en: "Once you are eligible, OPWDD will assess your needs, strengths, and abilities using tools like the Developmental Disabilities Profile (DDP-2) and the Coordinated Assessment System (CAS). A Care Manager will then work with you and your family to make informed decisions about services and develop a personalized Life Plan.",
            es: "Una vez que sea elegible, la OPWDD evaluará sus necesidades, fortalezas y habilidades usando herramientas como el Perfil de Discapacidad de Desarrollo (DDP-2) y el Sistema de Evaluación Coordinada (CAS). Un Administrador de Atención trabajará con usted y su familia para tomar decisiones informadas sobre los servicios y desarrollar un Plan de Vida personalizado." },

  faqQ21: { en: "What is a Care Manager?",
            es: "¿Qué es un Administrador de Atención?" },
  faqA21: { en: "A Care Manager is a professional who works for a Care Coordination Organization (CCO). They help you coordinate healthcare, wellness, and developmental disability services. Your Care Manager develops your Life Plan, helps you make informed choices, connects you with community resources, and ensures your services are delivered as planned. You choose which CCO you want to work with from the options in your region.",
            es: "Un Administrador de Atención es un profesional que trabaja para una Organización de Coordinación de Atención (CCO). Le ayudan a coordinar los servicios de atención médica, bienestar y discapacidad de desarrollo. Su Administrador de Atención desarrolla su Plan de Vida, lo ayuda a tomar decisiones informadas, lo conecta con recursos comunitarios y se asegura de que sus servicios se presten según lo planificado. Usted elige con qué CCO quiere trabajar entre las opciones de su región." },

  faqQ22: { en: "What is the Circle of Support?",
            es: "¿Qué es el Círculo de Apoyo?" },
  faqA22: { en: "Your Circle of Support is a group of people you choose to help you plan your services and make decisions. It can include family members, friends, your Care Manager, and other people important to you. The circle can be as small as you and your Care Manager, or as large as you like. Members meet regularly to develop your service plan, evaluate its success, and make adjustments as needed.",
            es: "Su Círculo de Apoyo es un grupo de personas que usted elige para ayudarlo a planificar sus servicios y tomar decisiones. Puede incluir familiares, amigos, su Administrador de Atención y otras personas importantes para usted. El círculo puede ser tan pequeño como usted y su Administrador de Atención, o tan grande como desee. Los miembros se reúnen regularmente para desarrollar su plan de servicios, evaluar su éxito y hacer ajustes según sea necesario." },

  faqQ23: { en: "What is a Life Plan?",
            es: "¿Qué es un Plan de Vida?" },
  faqA23: { en: "A Life Plan is your individualized service plan, developed by your Care Manager working with you and your Circle of Support. It is a roadmap to your personal goals and describes the supports and services that will help you get there. Your Care Manager documents what services you need, how you will access them, and continually reviews the plan to make sure it is meeting your needs.",
            es: "Un Plan de Vida es su plan de servicio individualizado, desarrollado por su Administrador de Atención trabajando con usted y su Círculo de Apoyo. Es un mapa de ruta hacia sus objetivos personales y describe los apoyos y servicios que lo ayudarán a lograrlo. Su Administrador de Atención documenta qué servicios necesita, cómo accederá a ellos, y revisa continuamente el plan para asegurarse de que cumpla sus necesidades." },

  faqQ24: { en: "What is person-centered planning?",
            es: "¿Qué es la planificación centrada en la persona?" },
  faqA24: { en: "Person-centered planning is the approach OPWDD uses to make sure services are designed around you. It focuses on what is important to you, how you want to live, and what your abilities, interests, and goals are. You and the people important to you direct the planning process, and your Care Manager helps explore how OPWDD can provide the support you need.",
            es: "La planificación centrada en la persona es el enfoque que usa la OPWDD para asegurarse de que los servicios se diseñen en torno a usted. Se enfoca en lo que es importante para usted, cómo quiere vivir y cuáles son sus habilidades, intereses y metas. Usted y las personas importantes para usted dirigen el proceso de planificación, y su Administrador de Atención ayuda a explorar cómo la OPWDD puede brindar el apoyo que necesita." },

  /* Self-Direction */
  faqQ25: { en: "What is Self-Direction?",
            es: "¿Qué es la Autodirección?" },
  faqA25: { en: "Self-Direction is a service model that gives you and your family the power to choose your own supports, hire your own staff, and manage a personalized budget. Services are paid from your Personal Resource Account (PRA), a budget amount based on your assessed needs. You can choose to self-direct some or all of your services, giving you maximum flexibility and control.",
            es: "La Autodirección es un modelo de servicio que le da a usted y a su familia el poder de elegir sus propios apoyos, contratar su propio personal y administrar un presupuesto personalizado. Los servicios se pagan con fondos de su Cuenta de Recursos Personales (PRA), una cantidad de presupuesto basada en sus necesidades evaluadas. Puede optar por autodirigir algunos o todos sus servicios, lo que le da la máxima flexibilidad y control." },

  faqQ26: { en: "What is Employer Authority?",
            es: "¿Qué es la Autoridad del Empleador?" },
  faqA26: { en: "Employer Authority allows you to be responsible for hiring the staff who provide your supports and services. You co-manage staff with a provider agency that can help with recruiting, supervising, and directing support workers, or you can handle some or all of those responsibilities yourself. The provider agency also helps with employee screening and payroll.",
            es: "La Autoridad del Empleador le permite ser responsable de contratar al personal que le brinda apoyos y servicios. Usted codirige al personal con una agencia proveedora que puede ayudar con el reclutamiento, supervisión y dirección de los trabajadores de apoyo, o puede manejar algunas o todas esas responsabilidades usted mismo. La agencia proveedora también ayuda con la selección de empleados y la nómina." },

  faqQ27: { en: "What is Budget Authority?",
            es: "¿Qué es la Autoridad Presupuestaria?" },
  faqA27: { en: "Budget Authority allows you to manage your individualized Self-Direction budget. You make decisions about which supports and services are included in your Life Plan, who is paid to provide them, how they are purchased, and how much your self-hired staff are paid. A Fiscal Intermediary helps you by handling billing, payments, accounting, and reporting.",
            es: "La Autoridad Presupuestaria le permite administrar su presupuesto de Autodirección individualizado. Usted toma decisiones sobre qué apoyos y servicios se incluyen en su Plan de Vida, a quién se le paga por brindarlos, cómo se compran y cuánto se le paga a su personal autocontratado. Un Intermediario Fiscal lo ayuda manejando la facturación, los pagos, la contabilidad y los informes." },

  faqQ28: { en: "What is a Fiscal Intermediary?",
            es: "¿Qué es un Intermediario Fiscal?" },
  faqA28: { en: "A Fiscal Intermediary (FI) is an agency that helps manage the financial side of your self-directed services. They handle payroll for your staff, process billing and payments for approved services, ensure compliance with state regulations, and provide fiscal accounting and reporting on your behalf.",
            es: "Un Intermediario Fiscal (FI) es una agencia que ayuda a administrar el lado financiero de sus servicios autodirigidos. Manejan la nómina de su personal, procesan la facturación y los pagos de los servicios aprobados, aseguran el cumplimiento de las regulaciones estatales y proporcionan contabilidad e informes fiscales en su nombre." },

  faqQ29: { en: "What is a Support Broker?",
            es: "¿Qué es un Support Broker?" },
  faqA29: { en: "A Support Broker is a trained professional who helps individuals and families navigate the self-directed services system. They assist with understanding your options, developing your budget, hiring staff, coordinating services, and ensuring that your personal goals and needs are met throughout the Self-Direction process.",
            es: "Un Support Broker es un profesional capacitado que ayuda a las personas y familias a navegar el sistema de servicios autodirigidos. Ayudan a comprender sus opciones, desarrollar su presupuesto, contratar personal, coordinar servicios y asegurar que sus metas y necesidades personales se cumplan a lo largo del proceso de Autodirección." },

  /* Services & Supports */
  faqQ30: { en: "What types of services does OPWDD offer?",
            es: "¿Qué tipos de servicios ofrece OPWDD?" },
  faqA30: { en: "OPWDD provides a wide range of services, including: help living independently with rent subsidies and community habilitation; family support services such as respite; employment training, job coaching, and supported employment; day habilitation programs; residential supports for individuals with higher needs; assistive technology and environmental modifications; and behavioral health and crisis services.",
            es: "La OPWDD ofrece una amplia gama de servicios, incluyendo: ayuda para vivir de manera independiente con subsidios de alquiler y habilitación comunitaria; servicios de apoyo familiar como el relevo; capacitación laboral, entrenamiento laboral y empleo con apoyo; programas de habilitación diurna; apoyos residenciales para personas con mayores necesidades; tecnología de asistencia y modificaciones del entorno; y servicios de salud conductual y crisis." },

  faqQ31: { en: "What housing options are available through OPWDD?",
            es: "¿Qué opciones de vivienda están disponibles a través de OPWDD?" },
  faqA31: { en: "OPWDD offers several housing options. The Housing Subsidy helps adults pay for rent and utilities in their own apartment. Family Care provides housing in private homes certified by OPWDD. Individualized Residential Alternatives (IRAs), also known as group homes, provide room, board, and individualized supports in a home-like setting. The right option depends on each person's level of need and personal goals.",
            es: "La OPWDD ofrece varias opciones de vivienda. El Subsidio de Vivienda ayuda a los adultos a pagar el alquiler y los servicios públicos en su propio apartamento. Family Care ofrece viviendas en hogares privados certificados por la OPWDD. Las Alternativas Residenciales Individualizadas (IRA), también conocidas como hogares grupales, proporcionan alojamiento, comida y apoyos individualizados en un entorno hogareño. La opción adecuada depende del nivel de necesidad y los objetivos personales de cada persona." },

  faqQ32: { en: "What employment services does OPWDD provide?",
            es: "¿Qué servicios de empleo ofrece OPWDD?" },
  faqA32: { en: "OPWDD offers several employment-related services. Pathway to Employment helps you develop a career plan. Community Prevocational Services teach work-related skills. Supported Employment (SEMP) helps you find and keep a competitive job in the community with ongoing job coaching. The Employment Training Program (ETP) offers paid internships with enhanced coaching and job readiness classes.",
            es: "La OPWDD ofrece varios servicios relacionados con el empleo. Camino al Empleo lo ayuda a desarrollar un plan de carrera. Los Servicios Prevocacionales Comunitarios enseñan habilidades relacionadas con el trabajo. El Empleo con Apoyo (SEMP) lo ayuda a encontrar y mantener un empleo competitivo en la comunidad con entrenamiento laboral continuo. El Programa de Capacitación para el Empleo (ETP) ofrece pasantías remuneradas con entrenamiento mejorado y clases de preparación laboral." },

  faqQ33: { en: "What are family support services?",
            es: "¿Qué son los servicios de apoyo familiar?" },
  faqA33: { en: "Family Support Services help families who care for a loved one with a developmental disability at home. These services include respite care, family member training, support groups, training in managing challenging behaviors, parent-to-parent networking, sibling services, after-school programs, and recreational and social activities.",
            es: "Los Servicios de Apoyo Familiar ayudan a las familias que cuidan a un ser querido con una discapacidad de desarrollo en el hogar. Estos servicios incluyen cuidado de relevo, capacitación para familiares, grupos de apoyo, capacitación en el manejo de comportamientos desafiantes, redes entre padres, servicios para hermanos, programas extraescolares y actividades recreativas y sociales." },

  faqQ34: { en: "What is respite care?",
            es: "¿Qué es el cuidado de relevo?" },
  faqA34: { en: "Respite services provide temporary relief to family members and caregivers who are responsible for the primary care of a person with a developmental disability. Respite can be provided in-home, at a camp, through recreational programs, or at a designated site, and is available even for individuals with more serious health or behavioral needs.",
            es: "Los servicios de relevo brindan alivio temporal a los familiares y cuidadores que son responsables de la atención primaria de una persona con una discapacidad de desarrollo. El relevo se puede brindar en el hogar, en un campamento, a través de programas recreativos o en un sitio designado, y está disponible incluso para personas con necesidades de salud o conductuales más serias." },

  /* Students & Transition */
  faqQ35: { en: "How does OPWDD help students transitioning from school to adult services?",
            es: "¿Cómo ayuda OPWDD a los estudiantes en transición de la escuela a los servicios para adultos?" },
  faqA35: { en: "Schools provide special education services until a student graduates or completes their program at the end of the school year in which they turn 21. Schools are expected to begin planning the transition to adult services before the student turns 15. OPWDD's Front Door staff and Care Managers work with local schools to plan the supports students may need as adults. Families are encouraged to start the eligibility and planning process as early as possible to avoid any gaps in service.",
            es: "Las escuelas brindan servicios de educación especial hasta que un estudiante se gradúa o completa su programa al final del año escolar en el que cumple 21 años. Se espera que las escuelas comiencen a planificar la transición a los servicios para adultos antes de que el estudiante cumpla 15 años. El personal de Front Door de la OPWDD y los Administradores de Atención trabajan con las escuelas locales para planificar los apoyos que los estudiantes puedan necesitar como adultos. Se anima a las familias a comenzar el proceso de elegibilidad y planificación lo antes posible para evitar cualquier interrupción en el servicio." },

  /* Contact & Resources */
  faqQ36: { en: "How do I contact OPWDD?",
            es: "¿Cómo me comunico con OPWDD?" },
  faqA36: { en: "You can call OPWDD's toll-free Information Line at 1-866-946-9733 for questions about services, eligibility, or concerns. You can also visit the OPWDD website at www.opwdd.ny.gov, email info@opwdd.ny.gov, or visit their Facebook page. If you speak a language other than English, representatives can assist you or connect you with an interpreter. Individuals with hearing impairment can use the NY Relay System at 7-1-1.",
            es: "Puede llamar a la línea de información gratuita de la OPWDD al 1-866-946-9733 para preguntas sobre servicios, elegibilidad o inquietudes. También puede visitar el sitio web de la OPWDD en www.opwdd.ny.gov, enviar un correo electrónico a info@opwdd.ny.gov o visitar su página de Facebook. Si habla un idioma que no sea inglés, los representantes pueden asistirlo o conectarlo con un intérprete. Las personas con discapacidad auditiva pueden usar el sistema de retransmisión de NY al 7-1-1." },

  /* ---- Contact Page ---- */
  contactHeading:  { en: "Contact Us",
                     es: "Contáctenos" },
  contactSubtitle: { en: "We would love to hear from you.",
                     es: "Nos encantaría saber de usted." },
  labelName:       { en: "Full Name",    es: "Nombre Completo" },
  labelEmail:      { en: "Email",          es: "Correo Electrónico" },
  labelPhone:      { en: "Phone Number",  es: "Número de Teléfono" },
  labelMessage:    { en: "Message",       es: "Mensaje" },
  placeName:       { en: "Your name",     es: "Su nombre" },
  placeEmail:      { en: "you@example.com", es: "usted@ejemplo.com" },
  placePhone:      { en: "(555) 123-4567",  es: "(555) 123-4567" },
  placeMessage:    { en: "How can we help you?", es: "¿Cómo podemos ayudarle?" },
  btnSend:         { en: "Send Message", es: "Enviar Mensaje" },
  formSuccess:     { en: "Thank you! Your message has been received. We will get back to you soon.",
                     es: "¡Gracias! Su mensaje ha sido recibido. Nos comunicaremos con usted pronto." },

  /* ---- Footer ---- */
  footer: { en: "© 2026 Ayuda Support. All rights reserved.",
            es: "© 2026 Ayuda Support. Todos los derechos reservados." }
};

/* ===== State ===== */
let currentLang = localStorage.getItem("ayudaLang") || "en";

/* ===== Apply Translations ===== */
function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (!translations[key]) return;
    const text = translations[key][currentLang];
    if (text === undefined) return;

    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = text;
    } else {
      el.textContent = text;
    }
  });

  document.documentElement.lang = currentLang;
}

/* ===== Toggle Language ===== */
function toggleLanguage() {
  currentLang = currentLang === "en" ? "es" : "en";
  localStorage.setItem("ayudaLang", currentLang);
  applyTranslations();
}

/* ===== FAQ Accordion ===== */
function initAccordion() {
  document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const isOpen = item.classList.contains("open");

      // Close all
      document.querySelectorAll(".faq-item.open").forEach(i => i.classList.remove("open"));

      // Toggle clicked
      if (!isOpen) item.classList.add("open");
    });
  });
}

/* ===== Mobile Nav ===== */
function initMobileNav() {
  const btn = document.querySelector(".nav-menu-btn");
  const links = document.querySelector(".nav-links");
  if (!btn || !links) return;

  btn.addEventListener("click", () => {
    links.classList.toggle("open");
    btn.setAttribute("aria-expanded", links.classList.contains("open"));
  });

  // Close menu when a link is clicked
  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => links.classList.remove("open"));
  });
}

/* ===== Contact Form (Formspree) ===== */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    const data = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" }
    }).then(res => {
      if (res.ok) {
        form.style.display = "none";
        document.querySelector(".form-success").classList.add("show");
      }
    });
  });
}

/* ===== Active Nav Link ===== */
function setActiveNav() {
  const page = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === page || (page === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });
}

/* ===== Init ===== */
document.addEventListener("DOMContentLoaded", () => {
  applyTranslations();
  initAccordion();
  initMobileNav();
  initContactForm();
  setActiveNav();
});

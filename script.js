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
  opwddSubtitle:  { en: "Answers to frequently asked questions about OPWDD services.",
                    es: "Respuestas a preguntas frecuentes sobre los servicios de OPWDD." },

  faqQ1: { en: "What is OPWDD?",
           es: "¿Qué es OPWDD?" },
  faqA1: { en: "OPWDD stands for the Office for People With Developmental Disabilities. It is a New York State agency that provides services and supports to individuals with intellectual and developmental disabilities.",
           es: "OPWDD significa la Oficina para Personas con Discapacidades del Desarrollo. Es una agencia del Estado de Nueva York que brinda servicios y apoyos a personas con discapacidades intelectuales y del desarrollo." },

  faqQ2: { en: "Who is eligible for OPWDD services?",
           es: "¿Quién es elegible para los servicios de OPWDD?" },
  faqA2: { en: "Individuals with intellectual or developmental disabilities, such as autism, cerebral palsy, Down syndrome, or other neurological conditions that originated before age 22, may be eligible for OPWDD services.",
           es: "Las personas con discapacidades intelectuales o del desarrollo, como autismo, parálisis cerebral, síndrome de Down u otras condiciones neurológicas que se originaron antes de los 22 años, pueden ser elegibles para los servicios de OPWDD." },

  faqQ3: { en: "What is Self-Direction?",
           es: "¿Qué es la Autodirección?" },
  faqA3: { en: "Self-Direction is a service model under OPWDD that allows individuals to have more control over the services they receive. You can choose your own staff, set schedules, and manage a personalized budget with the help of a Support Broker and Fiscal Intermediary.",
           es: "La Autodirección es un modelo de servicio bajo OPWDD que permite a las personas tener más control sobre los servicios que reciben. Puede elegir su propio personal, establecer horarios y administrar un presupuesto personalizado con la ayuda de un Support Broker e Intermediario Fiscal." },

  faqQ4: { en: "What is a Support Broker?",
           es: "¿Qué es un Support Broker?" },
  faqA4: { en: "A Support Broker is a trained professional who helps individuals and families navigate the self-directed services system. They assist with budgeting, hiring staff, coordinating services, and ensuring the individual's goals and needs are met.",
           es: "Un Support Broker es un profesional capacitado que ayuda a individuos y familias a navegar el sistema de servicios autodirigidos. Asisten con presupuestos, contratación de personal, coordinación de servicios y aseguran que se cumplan las metas y necesidades del individuo." },

  faqQ5: { en: "What is a Fiscal Intermediary?",
           es: "¿Qué es un Intermediario Fiscal?" },
  faqA5: { en: "A Fiscal Intermediary (FI) is an agency that helps manage the financial aspects of self-directed services. They handle payroll, billing, and ensure compliance with state regulations on behalf of the individual.",
           es: "Un Intermediario Fiscal (FI) es una agencia que ayuda a administrar los aspectos financieros de los servicios autodirigidos. Manejan la nómina, facturación y aseguran el cumplimiento de las regulaciones estatales en nombre del individuo." },

  faqQ6: { en: "How do I apply for OPWDD services?",
           es: "¿Cómo solicito los servicios de OPWDD?" },
  faqA6: { en: "To apply, you or your family can contact your local OPWDD Developmental Disabilities Regional Office (DDRO). They will guide you through the eligibility determination process and connect you with available services.",
           es: "Para solicitar, usted o su familia pueden contactar su Oficina Regional de Discapacidades del Desarrollo (DDRO) local de OPWDD. Ellos le guiarán a través del proceso de determinación de elegibilidad y le conectarán con los servicios disponibles." },

  /* ---- Contact Page ---- */
  contactHeading:  { en: "Contact Us",
                     es: "Contáctenos" },
  contactSubtitle: { en: "We would love to hear from you.",
                     es: "Nos encantaría saber de usted." },
  labelName:       { en: "Full Name",    es: "Nombre Completo" },
  labelEmail:      { en: "Email",        es: "Correo Electrónico" },
  labelMessage:    { en: "Message",      es: "Mensaje" },
  placeName:       { en: "Your name",    es: "Su nombre" },
  placeEmail:      { en: "you@example.com", es: "usted@ejemplo.com" },
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
        form.reset();
        document.querySelector(".form-success").classList.add("show");
        setTimeout(() => {
          document.querySelector(".form-success").classList.remove("show");
        }, 5000);
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

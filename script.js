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
  servicesHeading:   { en: "Support Broker Services",
                       es: "Servicios de Apoyo" },
  servicesSubtitle:  { en: "Professional support tailored to your needs.",
                       es: "Apoyo profesional adaptado a sus necesidades." },
  servicesIntroTitle:{ en: "What We Do",             es: "Lo Que Hacemos" },
  servicesIntro:     { en: "As a Support Broker, we work directly with individuals and families enrolled in OPWDD self-directed services. Our role is to guide you through every step — from understanding your options to managing your budget and hiring staff.",
                       es: "Como Support Broker, trabajamos directamente con individuos y familias inscritos en los servicios autodirigidos de OPWDD. Nuestro rol es guiarle en cada paso — desde entender sus opciones hasta administrar su presupuesto y contratar personal." },

  svcItem1: { en: "Help with developing and managing your self-directed budget",
              es: "Ayuda con el desarrollo y manejo de su presupuesto autodirigido" },
  svcItem2: { en: "Assistance in hiring, training, and supervising support staff",
              es: "Asistencia para contratar, capacitar y supervisar al personal de apoyo" },
  svcItem3: { en: "Guidance through the Fiscal Intermediary process",
              es: "Orientación a través del proceso de Intermediario Fiscal" },
  svcItem4: { en: "Support with Circle of Support meetings and planning",
              es: "Apoyo con reuniones y planificación del Círculo de Apoyo" },
  svcItem5: { en: "Advocacy and coordination with service providers",
              es: "Defensa y coordinación con proveedores de servicios" },
  svcItem6: { en: "Ongoing communication and progress tracking",
              es: "Comunicación continua y seguimiento del progreso" },

  servicesClosing: { en: "We are committed to empowering you with the knowledge and resources you need to live a fulfilling, self-directed life.",
                     es: "Estamos comprometidos a empoderarle con el conocimiento y los recursos que necesita para vivir una vida plena y autodirigida." },

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

/* ===== Contact Form (frontend only) ===== */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    form.reset();
    document.querySelector(".form-success").classList.add("show");
    setTimeout(() => {
      document.querySelector(".form-success").classList.remove("show");
    }, 5000);
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

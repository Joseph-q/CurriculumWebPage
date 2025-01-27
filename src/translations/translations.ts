interface WebsiteContent {
  NavBar: {
    logo: string;
    links: string[];
  };
  Header: {
    title: string;
    text: string;
    button: string;
  };
  Proyects: {
    title: string;
  };
  Skills: {
    title: string;
  };
  Footer: {
    copy: string;
  };
}
interface Translations {
  [key: string]: WebsiteContent;
}

const translations: Translations = {
  en: {
    NavBar: {
      logo: "Joseph-q (En)",
      links: ["About me", "Proyects", "Skills", "Contact"],
    },
    Header: {
      title: "Backend Dev",
      text: "Hey!  <b class='highlight'>I’m Joseph</b>. I mostly work as a backend developer, but I’ve got a soft spot for frontend too—I really enjoy dabbling in both worlds. Always up for exploring new things and learning along the way!",
      button: "Download CV!!",
    },
    Proyects: {
      title: "Proyects",
    },
    Skills: {
      title: "Skills",
    },
    Footer: {
      copy: "© 2025 Joseph. All rights reserved.",
    },
  },
  es: {
    NavBar: {
      logo: "Joseph-q (Es)",
      links: ["Sobre mí", "Proyectos", "Habilidades", "Contacto"],
    },
    Header: {
      title: "Desarrollador Backend",
      text: "¡Hola!  <b class='highlight'>Soy Joseph</b>. Principalmente trabajo como desarrollador backend, pero también tengo un gran interés por el frontend. Me encanta explorar ambos mundos y siempre estoy dispuesto a aprender cosas nuevas en el camino.",
      button: "¡Descargar CV!",
    },
    Proyects: {
      title: "Proyectos",
    },
    Skills: {
      title: "Habilidades",
    },
    Footer: {
      copy: "© 2025 Joseph. Todos los derechos reservados.",
    },
  },
};

export const getContent = (pathname: string): WebsiteContent => {
  const lang = pathname.startsWith("/es") ? "es" : "en";
  return translations[lang];
};

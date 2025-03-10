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
  Modal: {
    CourseContent: {
      content: string;
    };
    RBCAContent: {
      content: string;
    };
    TaskAppContent: {
      content: string;
    };
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
      text: "Hey! <b class='highlight'>I’m Joseph</b>. I primarily work as a backend developer, but I have a soft spot for frontend too—I enjoy dabbling in both worlds. Always eager to explore new things and learn along the way!",
      button: "Download CV!!",
    },
    Proyects: {
      title: "Proyects",
    },
    Skills: {
      title: "Skills",
    },
    Modal: {
      CourseContent: {
        content: `
      <p class="text-gray-400">
        📌 An English school was facing serious problems with the attendance records of its students.
      </p>

      <p class="text-gray-400 mt-2">
        🚨 The teachers were wasting time taking attendance manually, students forgot to sign their attendance, and, in many cases, the records were inconsistent.
      </p>

      <p class="text-gray-400 mt-2 italic">
        💰 This wouldn’t be a big issue if attendance didn’t have an economic impact...
      </p>`,
      },
      RBCAContent: {
        content: `<p class="text-gray-400"> This project was developed with the goal of delving into user authentication and authorization concepts through the use of RBAC (Role-Based Access Control). In the future, I plan to use it to strengthen the security of my APIs. </p> <p class="text-gray-400"> The implementation was done in <span class="text-white"> .NET</span> using <span class="text-white"> C#</span> and is connected to a <span class="text-white"> Sql Server</span> database. During its development, concepts such as <span class="text-white"> Triggers</span>, authentication with <span class="text-white"> JWT</span>, <span class="text-white"> REST API</span>, and <span class="text-white"> Entity Framework</span> were used to manage data access. </p>`,
      },
      TaskAppContent: {
        content: `
        <p class="mb-4">
    This project is a task management application developed in 
    <span class="font-semibold text-red-500"> Angular 19</span>, which communicates with a 
    <span class="text-white"> Web API</span> in 
    <span class="font-semibold text-purple-600"> .NET</span>.
</p>
<p class="mb-4">
    To use the application, you need to sign up and log in. Once authenticated, you will be able to:
</p>
<ul class="list-disc list-inside space-y-2">
    <li><span class="text-white">View</span> your tasks.</li>
    <li><span class="text-white">Add</span> new tasks.</li>
    <li><span class="text-white">Edit</span> existing tasks.</li>
    <li><span class="text-white">Delete</span> tasks.</li>
</ul>

        `,
      },
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
      text: "¡Hola!  <b class='highlight'>Soy Joseph</b>. Principalmente trabajo como desarrollador backend, pero también tengo un gran interés por el frontend. Me gusta explorar ambos mundos y siempre estoy dispuesto a aprender cosas nuevas en el camino.",
      button: "¡Descargar CV!",
    },
    Proyects: {
      title: "Proyectos",
    },
    Skills: {
      title: "Habilidades",
    },
    Modal: {
      CourseContent: {
        content: `
        <p class="text-gray-400">
        📌 Una escuela de inglés enfrentaba serios problemas con el registro de
        asistencia de sus alumnos.
      </p>

      <p class="text-gray-400 mt-2">
        🚨 Los profesores perdían tiempo pasando lista manualmente, los alumnos
        olvidaban firmar su asistencia y, en muchas ocasiones, los registros
        eran inconsistentes.
      </p>

      <p class="text-gray-400 mt-2 italic">
        💰 Esto no sería un gran inconveniente, si la asistencia no tuviera un
        impacto económico....
      </p>`,
      },
      RBCAContent: {
        content: `
        <p class="text-gray-400">
        Este proyecto fue desarrollado con el objetivo de profundizar en los
        conceptos de autenticación y autorización de usuarios mediante el uso de
        RBAC (Role-Based Access Control). En el futuro, planeo emplearlo para
        reforzar la seguridad de mis APIs.
      </p>
      <p class="text-gray-400">
        La implementación se realizó en
        <span class="text-white"> .NET</span> utilizando
        <span class="text-white"> C#</span> y se encuentra conectada a una
        base de datos <span class="text-white"> Sql Server</span>. En su
        desarrollo, se utilizaron conceptos como
        <span class="text-white"> Triggers</span> , autenticación mediante
        <span class="text-white"> JWT</span> ,
        <span class="text-white"> API REST</span> y
        <span class="text-white"> Entity Framework</span> para gestionar el
        acceso a los datos.
      </p>`,
      },
      TaskAppContent: {
        content: `  <p class="mb-4">
            Este proyecto es una aplicación de gestión de tareas desarrollada en 
            <span class="font-semibold text-red-500"> Angular 19</span>, que se comunica con una 
            <span class="text-white"> Web API</span> en 
            <span class="font-semibold text-purple-600"> .NET</span>.
        </p>
        <p class="mb-4">
            Para utilizar la aplicación, es necesario registrarse e iniciar sesión. Una vez autenticado, podrás:
        </p>
        <ul class="list-disc list-inside space-y-2">
            <li><span class="text-white">Visualizar</span> tus tareas.</li>
            <li><span class="text-white">Agregar</span> nuevas tareas.</li>
            <li><span class="text-white">Editar</span> tareas existentes.</li>
            <li><span class="text-white">Eliminar</span> tareas.</li>
        </ul>`,
      },
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

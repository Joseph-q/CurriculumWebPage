import { getContent } from "../translations/translations";
import ModalContent from "./ModalContent";

export default function CourseContent() {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "/";
  const content = getContent(pathname).Modal.CourseContent.content;

  return (
    <ModalContent
      title="Courser Administrator"
      cover="/img/school-proyect.mp4"
      blogLink="/blog"
      gitHublink="https://github.com/Joseph-q/SchollFrontendApp"
      badges={[
        "Golang.svg",
        "Sqlite.svg",
        "Angular.svg",
        "TypeScript.svg",
        "AWS.svg",
      ]}
    >
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </ModalContent>
  );
}

// // Cada
//         asistencia tenia un costo que se deberia de pagar por cada vez que se
//         asistia.
//       </p>
//       <p>
//         Decidí desarrollar un sistema basado en códigos QR encriptados,
//         permitiendo que cada alumno escaneara su código al llegar a clase y
//         registrara automáticamente su asistencia en una base de datos SQLite.
//       </p>

//       <p>
//         Para el backend, opté por Golang debido a su eficiencia y velocidad, ya
//         que el servidor se ejecutaría en un Raspberry Pi, donde era fundamental
//         utilizar un lenguaje ligero y optimizado para el rendimiento.
//       </p>
//       <p>
//         En el frontend, elegí Angular, ya que era la tecnología con la que tenía
//         más experiencia y contaba con componentes previamente desarrollados
//         utilizando Angular Material, lo que agilizó el proceso de desarrollo y
//         mejoró la interfaz del sistema.
//       </p>
//       <p>
//         Pero no todo fue sensillo, se necesitaba garantizar la seguridad del
//         sistema, evitando que los alumnos o maestros pudieran falsificar su
//         asistencia. Para ello, implementé un mecanismo de tokens únicos y
//         encriptación en los códigos QR, asegurando que cada registro fuera
//         legítimo. Otro problema fue que ahora se planeaba utilizarlo en la nube
//         para que se pudiera controlar en remoto,
//       </p>

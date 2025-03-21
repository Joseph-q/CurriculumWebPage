import { getContent } from "../translations/translations";
import ModalContent from "./ModalContent";

export default function CourseContent() {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "/";

  const linkref = pathname.startsWith("/es") ? "/blog/es" : "/blog";

  const content = getContent(pathname).Modal.CourseContent.content;

  return (
    <ModalContent
      title="Courser Administrator"
      cover="/img/school-proyect.mp4"
      links = {
      <>
      <a href="https://github.com/Joseph-q/SchollFrontendApp" target="_blank" className="custom-link">GitHub</a>
      <a href={linkref} className="important-link">Leer Mas...</a>
      </>
      

      }
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

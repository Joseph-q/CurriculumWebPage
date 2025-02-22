import { useState } from "preact/hooks";
import Card from "../components/Card.tsx";
import { getContent } from "../translations/translations.ts";
import Modal from "../components/Modal.tsx";
import CourseContent from "../components/CourseContent.tsx";
import RBCAContent from "../components/RBCAContent.tsx";

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<any>(null);

  // Si estás en el cliente, window está definido
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "/";
  const content = getContent(pathname);

  const openModal = (content: any) => {
    setModalContent(content);
    setIsOpen(true);
  };

  return (
    <>
      <section className="flex flex-col items-center" id="proyects">
        <h2>{content.Proyects.title}</h2>

        <div className="flex w-full items-center justify-evenly mt-2 flex-wrap gap-2">
          {/* <Card
            title="Barber Page"
            description="Astro, Typescript, HTML, CSS"
            url="/img/barber-proyect.webp"
            onClick={() => openModal(<BarberContent />)}
          /> */}
          <Card
            title="Course Manager"
            description="Angular, TypeScript, Golang, Sqlite, AWS"
            url="/img/school-proyect.mp4"
            onClick={() => openModal(<CourseContent />)}
          />
          <Card
            title="RBAC API"
            description=".NET, SQL SERVER, Entity Framework"
            url="/svg/DbDiagram-RBCA.svg"
            onClick={() => openModal(<RBCAContent />)}
          />
        </div>
      </section>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        {modalContent}
      </Modal>
    </>
  );
}

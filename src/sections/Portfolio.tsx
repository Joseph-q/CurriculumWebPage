import { useState } from "preact/hooks";
import Card from "../components/Card.tsx";
import { getContent } from "../translations/translations.ts";
import Modal from "../components/Modal.tsx";
import CourseContent from "../components/CourseContent.tsx";
import RBCAContent from "../components/RBCAContent.tsx";
import TaskAppContent from "../components/TaskAppContent.tsx";

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
          <Card
            title="Task App (User-Tenancy)"
            description=".NET, C#, SQL Server, Entity Framework, Angular, Azure"
            url="/img/task-app.webp"
            onClick={() => openModal(<TaskAppContent />)}
          />

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

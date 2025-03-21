import { getContent } from "../translations/translations";
import ModalContent from "./ModalContent";

export default function TaskAppContent() {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "/";
  const content = getContent(pathname).Modal.TaskAppContent.content;
  return (
    <ModalContent
      title="Todo APP (User-Tenancy)"
      cover="/img/todo-app.webp"

      links={
        <>
        <a href="https://github.com/Joseph-q/TodoApp" target="_blank" className="custom-link">GitHub</a>
        <a href="https://todo-app-seven-pink-62.vercel.app" target="_blank" className="important-link">Deployment</a>
        </>
      }

      badges={[
        "Microsoft_Azure.svg",
        "Net.svg",
        "SqlServer.svg",
        "Csharp.svg",
        "React.svg",
        "TypeScript.svg",
      ]}
    >
      <div className="text-gray-400" dangerouslySetInnerHTML={{ __html: content }} />
    </ModalContent>
  );
}

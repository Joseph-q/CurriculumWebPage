import { getContent } from "../translations/translations";
import ModalContent from "./ModalContent";

export default function TaskAppContent() {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "/";
  const content = getContent(pathname).Modal.TaskAppContent.content;
  return (
    <ModalContent
      title="Task App (User-Tenancy)"
      cover="/img/task-app.webp"
      gitHublink="https://github.com/Joseph-q/TaskApp"
      link="https://task-app-x8fp.vercel.app/"
      badges={[
        "Microsoft_Azure.svg",
        "Net.svg",
        "SqlServer.svg",
        "Csharp.svg",
        "Angular.svg",
        "TypeScript.svg",
      ]}
    >
      <div className="text-gray-400" dangerouslySetInnerHTML={{ __html: content }} />
    </ModalContent>
  );
}

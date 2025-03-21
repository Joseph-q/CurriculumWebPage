import { getContent } from "../translations/translations";
import ModalContent from "./ModalContent";

export default function RBCAContent() {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "/";
  const content = getContent(pathname).Modal.RBCAContent.content;

  return (
    <ModalContent
      title="RBAC Api"
      cover="/svg/DbDiagram-RBCA.svg"

      links = {<a target="_blank" href="https://github.com/Joseph-q/RBAC" className="custom-link">GitHub</a>}

      badges={["Net.svg", "SqlServer.svg", "Csharp.svg"]}
    >
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </ModalContent>
  );
}

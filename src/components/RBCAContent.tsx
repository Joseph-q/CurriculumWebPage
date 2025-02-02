import { getContent } from "../translations/translations";
import ModalContent from "./ModalContent";

export default function RBCAContent() {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "/";
  const content = getContent(pathname).Modal.RBCAContent.content;

  return (
    <ModalContent
      title="RBCA Api"
      cover="/svg/DbDiagram-RBCA.svg"
      gitHublink="https://github.com/Joseph-q/RBCA"
      badges={["Net.svg", "SqlServer.svg", "Csharp.svg"]}
    >
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </ModalContent>
  );
}

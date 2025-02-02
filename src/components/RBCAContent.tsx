import ModalContent from "./ModalContent";

export default function RBCAContent() {
  return (
    <ModalContent
      title="RBCA Api"
      cover="/svg/DbDiagram-RBCA.svg"
      link="https://github.com/"
      badges={[
        "Net.svg",
        "SqlServer.svg",
        "Csharp.svg",
      ]}
    >
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
        deleniti maxime quod dolores! Nobis assumenda architecto ad voluptas
        vitae, dolores ullam, dolore nisi laudantium quo iste ea deserunt
        delectus laborum.
      </p>
    </ModalContent>
  );
}

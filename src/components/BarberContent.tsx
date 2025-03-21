import ModalContent from "./ModalContent";

export default function BarberContent() {
  return (
    <ModalContent
      title="Barber Page"
      cover="/img/barber-proyect.webp"
      badges={[
        "Astro.svg",
        "TypeScript.svg",
        "HTML.svg",
        "CSS3.svg",
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

import ModalContent from "./ModalContent";

export default function BarberContent() {
  return (
    <ModalContent
      title="Barber Page"
      img="barber-proyect.webp"
      link="https://github.com/"
      badges={[
        "astro-icon-light-gradient.svg",
        "Typescript_logo_2020.svg",
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

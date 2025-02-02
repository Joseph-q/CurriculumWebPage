import ModalContent from "./ModalContent";

export default function CourseContent() {
  return (
    <ModalContent
      title="Courser Administrator"
      cover="/img/school-proyect.mp4"
      link="https://github.com/Joseph-q/SchollFrontendApp"
      badges={[
        "Golang.svg",
        "Sqlite.svg",
        "Angular.svg",
        "TypeScript.svg",
        "AWS.svg",
      ]}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
        temporibus necessitatibus sunt provident optio odit tenetur aut nihil
        laborum nemo.
      </p>
    </ModalContent>
  );
}

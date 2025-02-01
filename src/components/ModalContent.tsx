import type { ComponentChildren } from "preact";
import Badge from "./Badge";

interface ModalProps {
  title: string;
  img: string;
  link: string;
  badges: string[];
  children: ComponentChildren;
}

export default function ModalContent({
  img,
  badges,
  link,
  title,
  children,
}: ModalProps) {
  return (
    <>
      <div class="flex flex-1 max-w-lg flex-col h-full justify-center">
        <img src={"img/" + img} alt="" />
        <div class="w-full flex gap-5 justify-center mt-5">
          {badges.map((v) => (
            <Badge url={"svg/" + v} width="35"/>
          ))}
        </div>
      </div>
      <div class="flex flex-1 flex-col h-full justify-between">
        <div>
          <h3 class="text-xl font-semibold">{title}</h3>
          {children}
        </div>

        <div class="flex mt-3 justify-end">
          <a href={link} target="_blank" class="text-blue-500">
            Visitar
          </a>
        </div>
      </div>
    </>
  );
}

import type { ComponentChildren } from "preact";
import Badge from "./Badge";

interface ModalProps {
  title: string;
  cover: string;
  link: string;
  badges: string[];
  children: ComponentChildren;
}

export default function ModalContent({
  cover,
  badges,
  link,
  title,
  children,
}: ModalProps) {
  const isVideo =
    cover.endsWith(".mp4") || cover.endsWith(".webm") || cover.endsWith(".mov");

  return (
    <>
      <div class="flex flex-1 max-w-lg flex-col h-full justify-center">
        {isVideo ? (
          <video loop controls muted>
            <source src={cover} type="video/mp4" />
            Tu navegador no soporta la etiqueta de video.
          </video>
        ) : (
          <img
            src={cover}
            alt={title}
          />
        )}
        <div class="w-full flex gap-5 justify-center mt-5">
          {badges.map((v) => (
            <Badge url={"/svg/" + v} width="45" />
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

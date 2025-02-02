import type { ComponentChildren } from "preact";
import Badge from "./Badge";

interface ModalProps {
  title: string;
  cover: string;
  gitHublink?: string;
  blogLink?: string;
  badges: string[];
  children: ComponentChildren;
}

export default function ModalContent({
  cover,
  badges,
  gitHublink,
  blogLink,
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
          <img src={cover} alt={title} />
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

        <div class="flex mt-3 justify-end gap-10">
          {gitHublink ? (
            <a
              href={gitHublink}
              target="_blank"
              class="relative text-white text-lg no-underline transition-colors duration-200 ease-in-out hover:text-[#775ada] 
            after:absolute after:left-0 after:bottom-[-3px] 
            after:w-0 after:h-[2px] after:bg-[#775ada] 
            after:transition-all after:duration-300 
            hover:after:w-full
            cursor-pointer
            "
            >
              GitHub
            </a>
          ) : null}

          {blogLink ? (
            <a
              href={blogLink}
              class=" relative text-[#775ada] text-lg after:absolute 
            after:bottom-[-3px] 
            after:w-full
            after:left-0
            after:bg-[#775ada]
            after:h-[2px]
                        cursor-pointer

            "
            >
              Leer más...
            </a>
          ) : null}
        </div>
      </div>
    </>
  );
}

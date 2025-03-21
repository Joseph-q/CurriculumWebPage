import type { ComponentChildren } from "preact";
import Badge from "./Badge";

interface ModalProps {
  title: string;
  cover: string;
  badges: string[];
  children: ComponentChildren;
  links?:ComponentChildren;
}

export default function ModalContent({
  cover,
  badges,
  title,
  children,
  links
}: ModalProps) {
  const isVideo =
    cover.endsWith(".mp4") || cover.endsWith(".webm") || cover.endsWith(".mov");

  return (
    <main className="flex flex-col gap-8 lg:flex-row">
      <section className="flex-1 ">
        {isVideo ? (
          <video loop controls muted>
            <source src={cover} type="video/mp4" />
            Tu navegador no soporta la etiqueta de video.
          </video>
        ) : (
          <img src={cover} alt={title} />
        )}
        <div className="w-full flex gap-5 justify-center mt-5">
          {badges.map((v) => (
            <Badge url={"/svg/" + v} width="45" />
          ))}
        </div>
      </section>
      <section className="flex-1 flex flex-col justify-between">
        <div>
          <h2>{title}</h2>
          <div className="max-h-[30vh] overflow-y-auto  xl:max-h-[80vh]">
          {children}
          </div>
        </div>

        <div className="flex justify-end gap-8">
          {links || null}
        </div>

      </section>
    </main>
  );
}

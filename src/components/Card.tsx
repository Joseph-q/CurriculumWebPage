interface CardProps {
  url: string;
  title: string;
  description: string;
  onClick?: () => void;
}

export default function Card({ url, description, title, onClick }: CardProps) {
  const isVideo =
    url.endsWith(".mp4") || url.endsWith(".webm") || url.endsWith(".mov");

  return (
    <div onClick={onClick} className="bg-[#09192b] rounded-lg shadow-lg w-[300px] overflow-hidden transition-transform duration-300 ease-in-out cursor-pointer hover:translate-y-[-10px]">
      {isVideo ? (
        <video loop autoplay muted className="w-full  object-cover">
          <source src={url} type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
      ) : (
        <img src={url} alt={title} className="w-full  object-cover" />
      )}
      <div className="p-5">
        <h4 className="text-xl text-gray-200 m-0">{title}</h4>
        <div className="mt-2 text-sm text-white bg-[#191f2b] px-4 py-1 rounded-full uppercase inline-block">
          {description}
        </div>
      </div>
    </div>
  );
}

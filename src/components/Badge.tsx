interface Props {
  url: string;
  alt?: string;
  title?: string;
  width?: string;
}
export default function Badge({ url, alt, title, width }: Props) {
  return (
    <div class="flex flex-col items-center w-fit">
      <img src={url} alt={alt} class="mb-2" width={width ?? "50px"} />
      <p class="text-lg m-0">{title}</p>
    </div>
  );
}

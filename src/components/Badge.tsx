interface Props {
  url: string;
  alt?: string;
  title?: string;
  width?: string;
}
export default function Badge({ url, alt, title, width }: Props) {
  return (
    <div class="flex flex-col items-center w-fit justify-center">
      <img src={url} alt={alt} class="mb-2" width={width ?? "50px"} height="100%" />
    </div>
  );
}

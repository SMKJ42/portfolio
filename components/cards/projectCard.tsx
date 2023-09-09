import Image from "next/image";

interface CardProps {
  title: string;
  img?: ImageProps;
  description: string;
  tech: string[];
}

interface ImageProps {
  src: string;
  alt: string;
}

export function ProjectCard(props: CardProps) {
  const { title, img, description, tech } = props;
  const alt = img?.alt;
  const src = img?.src;
  return (
    <div>
      <h3 className="text-xl font-bold">{title}</h3>
      {src && <Image src={src} alt={alt || ""} />}
      <p className="italic w-2/3">{description}</p>
      <ul className="grid grid-cols-2 w-2/3 ml-6">
        {tech?.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

import Image from "next/image";

type NoImage = {
  title: string;
  description: string;
  tech: string[];
};

interface WithImage extends NoImage {
  src: string;
  alt: string;
}

export function ProjectCard(props: NoImage | WithImage) {
  const { title, description, tech } = props;
  const { src, alt } = props as WithImage;

  if ((!src && alt) || (src && !alt)) {
    const error = console.trace();
    throw new Error(`ProjectCard Called with invalid props,
    please provide both src and alt or neither.
      ${JSON.stringify(props)}
      `);
  }

  return (
    <div>
      <h3 className="text-xl font-bold">{title}</h3>
      {src && <Image src={src} alt={alt || ""} />}
      <p className="italic md:w-2/3">{description}</p>
      <ul className="grid grid-cols-2 sm:w-2/3 ml-6">
        {tech?.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

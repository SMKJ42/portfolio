import Image from "next/image";
import Link from "next/link";

type NoImage = {
    title: string;
    description: string;
    tech: string[];
    href: string;
};

interface WithImage extends NoImage {
    src: string;
    alt: string;
    imgHref: string;
}

export function ProjectCard(props: NoImage | WithImage) {
    const { title, description, tech, href } = props;
    const { src, alt, imgHref } = props as WithImage;

    if ((!src && alt) || (src && !alt)) {
        const error = console.trace();
        throw new Error(`ProjectCard Called with invalid props,
    please provide both src and alt or neither.
      ${JSON.stringify(props)}
      `);
    }

    return (
        <div className="px-8 py-4 border shadow-lg border-gray-300 rounded-xl h-fit bg-white dark:bg-black">
            <h3 className="text-3xl font-bold">{title}</h3>
            {src && (
                <Link href={imgHref}>
                    <Image
                        src={"/diving.JPG"}
                        alt={alt || ""}
                        height={150}
                        width={200}
                        quality={50}
                    />
                </Link>
            )}
            <p className="italic md:w-2/3">{description}.. &nbsp;</p>
            <div className="flex w-full flex-wrap">
                <Link
                    href={imgHref}
                    className=" px-4 py-2 rounded-lg bg-slate-600 text-white hover:underline mr-4 whitespace-nowrap my-4"
                >
                    View Live
                </Link>
                <Link
                    href={`/projects${href}`}
                    className=" px-4 py-2 rounded-lg bg-slate-600 text-white hover:underline whitespace-nowrap my-4"
                >
                    More Details
                </Link>
            </div>
            <p className="text-xl font-semibold md:ml-6">
                Packages and Languages
            </p>
            <ul className="grid grid-cols-2 sm:w-2/3 md:ml-6 my-2">
                {tech?.map((t) => (
                    <li key={t} className="my-px">
                        {t}
                    </li>
                ))}
            </ul>
        </div>
    );
}

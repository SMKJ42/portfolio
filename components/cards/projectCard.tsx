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
        <div className="pl-4 py-4 border shadow-lg border-gray-300 rounded-xl h-fit bg-white dark:bg-black">
            {src && (
                <Link href={imgHref} className="">
                    <Image
                        src={"/diving.JPG"}
                        alt={alt || ""}
                        height={150}
                        width={200}
                        quality={50}
                        loading="lazy"
                        className="rounded-md"
                    />
                </Link>
            )}
            <div className="mx-4">
                <h3 className="text-3xl font-bold mt-2">{title}</h3>
                <p className="italic md:w-2/3 mt-2">{description}</p>
                <div className="flex w-full flex-wrap">
                    <Link
                        href={imgHref}
                        className=" px-4 py-2 rounded-lg bg-cyan-800 text-white hover:underline mr-4 whitespace-nowrap my-4"
                    >
                        View Live
                    </Link>
                    <Link
                        href={`/projects${href}`}
                        className=" px-4 py-2 rounded-lg bg-slate-500 text-white hover:underline whitespace-nowrap my-4"
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
        </div>
    );
}

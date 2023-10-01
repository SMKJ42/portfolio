import { ProjectCard } from "../cards/projectCard";

export function Projects() {
    return (
        <section
            id="Projects"
            className="flex flex-col items-center justify-center w-full px-8"
        >
            <h1 className="text-4xl font-bold">Projects</h1>
            <p className="w-1/2 mb-6 mt-2 text-center italic">
                Two of these projects are quite large in size, and are still
                under development. In case you want to see my work, I&apos;ve
                included them here.
            </p>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                <h2 className="md:col-span-2 text-center text-4xl font-bold mb-4">
                    Full Stack
                </h2>
                <ProjectCard
                    src="blob:https://localhost:3000"
                    imgHref="https://realty-hub.vercel.app"
                    alt="screen shot of Realty Hub"
                    href="/realty-hub"
                    title="Realty Hub"
                    description="I am extremely passionate about enabling people to make smart financial decisions.
                    This tool provides a calculator to examine key metrics of a rental property, as well as some articles to broaden their overall knowledge."
                    tech={[
                        "React",
                        "TypeScript",
                        "Redux",
                        "PlanetScale",
                        "Prisma",
                        "Clerk",
                        "Redis",
                        "Axiom",
                    ]}
                />
                <ProjectCard
                    src="blob:https://localhost:3000"
                    imgHref="https://sweeping-cloud-staging.vercel.app"
                    alt="screen shot of Sweeping Cloud"
                    href="/sweeping-cloud"
                    title="Sweeping Cloud"
                    description="A place to manage bookings for cleaning companies. I have plans to
            build out a calendar, messenger, employee timesheets and many more
            features."
                    tech={[
                        "React",
                        "TypeScript",
                        "Redux",
                        "MongoDB",
                        "Fullcalendar",
                        "Tailwind",
                        "Mailchimp",
                        "NextAuth",
                        "Prisma",
                    ]}
                />
                <h2 className="md:col-span-2 text-center text-4xl font-bold mb-4">
                    Front End
                </h2>
                <ProjectCard
                    src="blob:https://localhost:3000"
                    imgHref="https://acquisition-clone-dev.vercel.app"
                    alt="screen shot of Aquisition Clone"
                    href="/aquisition-clone"
                    title="Aquisition Clone"
                    description="I spent some time listening to Alex's podcast and decided to
            check out his website. It's originally built with HubSpot and has
            some weird nuances so I made something better."
                    tech={["React", "TypeScript", "Tailwind"]}
                />
            </div>
        </section>
    );
}

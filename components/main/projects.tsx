import Image from "next/image";
import { ProjectCard } from "../cards/projectCard";

export function Projects() {
  return (
    <section
      id="Projects"
      className="flex flex-col items-center justify-center w-full px-8"
    >
      <h1 className="text-4xl font-bold">Projects</h1>
      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
        <ProjectCard
          title="Realty Hub"
          description="Find some articles on real estate as well as an in depth calculator
            to use when looking to buy a rental property."
          tech={["React", "TypeScript", "Redux", "PlanetScale", "Prisma"]}
        />
        <ProjectCard
          title="Sweeping Cloud"
          description="A place to manage bookings for cleaning companies. I have plans to
            build out a calendar, messenger, employee timesheets and many more
            features!"
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
        <ProjectCard
          title="Aquisition Clone"
          description="I spent some time listening to Alex's podcast and decided to
            check out his website. It's originally built with HubSpot, has
            some weird nuances so I made something better."
          tech={["React", "TypeScript", "Tailwind"]}
        />
      </div>
    </section>
  );
}

import { SQL } from "../icons/tech/sql";
import { TS } from "../icons/tech/ts";
import { Rust } from "../icons/tech/rust";
import { Next } from "../icons/tech/next";
import { Tailwind } from "../icons/tech/tailwind";
import { Mongo } from "../icons/tech/mongo";
import { React } from "../icons/tech/react";
import { Redux } from "../icons/tech/redux";
import { Firebase } from "../icons/tech/firebase";
import { PrismaIcon } from "../icons/tech/prisma";
import { Vercel } from "../icons/tech/vercel";
import { JavaScript } from "../icons/tech/javascript";

export function Experience() {
    return (
        <section
            id="experience"
            className="flex flex-col items-center justify-center"
        >
            <h1 className="text-4xl font-bold mb-8">Stack Experience</h1>
            <ul className="grid grid-cols-2 md:grid-cols-4 text-center gap-x-8 gap-y-4">
                <li className="w-full flex flex-col items-center justify-center">
                    <JavaScript />
                    <p>JavaScript</p>
                </li>
                <li>
                    <TS />
                    <p>TypeScript</p>
                </li>
                <li>
                    <Rust />
                    <p>Rust</p>
                </li>
                <li>
                    <React />
                    <p>React</p>
                </li>
                <li>
                    <Redux />
                    <p>Redux</p>
                </li>
                <li>
                    <Tailwind />
                    <p>Tailwind</p>
                </li>
                <li>
                    <Next />
                    <p>Next.js</p>
                </li>
                <li>
                    <Vercel />
                    <p>Vercel</p>
                </li>
                <li>
                    <Mongo />
                    <p>MongoDB</p>
                </li>
                <li>
                    <SQL />
                    <p>SQL</p>
                </li>
                <li>
                    <Firebase />
                    <p>Firebase</p>
                </li>
                <li>
                    <PrismaIcon />
                    <p>Prisma</p>
                </li>
            </ul>
        </section>
    );
}

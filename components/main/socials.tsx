import Link from "next/link";
import { LinkedIn } from "../icons/social/linkedin";
import { Instagram } from "../icons/social/insta";
import { GitHub } from "../icons/social/github";
import { LeetCode } from "../icons/social/leetcode";

export function Socials() {
    return (
        <section className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-6">
            <Link
                aria-label="LinkedIn profile"
                href="https://www.linkedin.com/in/williamdeason1"
                target="_blank"
                className="flex items-center justify-center"
            >
                <LinkedIn />
            </Link>
            <Link
                aria-label="Instagram profile"
                href="https://www.instagram.com/liam.deason/"
                target="_blank"
                className="flex items-center justify-center"
            >
                <Instagram />
            </Link>
            <Link
                aria-label="GitHub profile"
                href="https://github.com/SMKJ42"
                target="_blank"
                className="flex items-center justify-center"
            >
                <GitHub />
            </Link>
            <Link
                aria-label="LeetCode profile"
                href="https://leetcode.com/SMKJ42/"
                target="_blank"
                className="flex items-center justify-center"
            >
                <LeetCode />
            </Link>
        </section>
    );
}

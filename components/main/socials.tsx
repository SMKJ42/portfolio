import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { LinkedIn } from "../icons/social/linkedin";
import { Instagram } from "../icons/social/insta";
import { GitHub } from "../icons/social/github";
import { LeetCode } from "../icons/social/leetcode";

export function Socials() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-6">
      {/* <SocialIcon url="https://www.linkedin.com/in/williamdeason1" />
      <SocialIcon url="https://www.instagram.com/liam.deason/" />
      <SocialIcon url="https://github.com/SMKJ42" />
      <SocialIcon url="https://leetcode.com/SMKJ42/" /> */}
      <Link
        href="https://www.linkedin.com/in/williamdeason1"
        target="_blank"
        className="flex items-center justify-center"
      >
        <LinkedIn />
      </Link>
      <Link
        href="https://www.instagram.com/liam.deason/"
        target="_blank"
        className="flex items-center justify-center"
      >
        <Instagram />
      </Link>
      <Link
        href="https://github.com/SMKJ42"
        target="_blank"
        className="flex items-center justify-center"
      >
        <GitHub />
      </Link>
      <Link
        href="https://leetcode.com/SMKJ42/"
        target="_blank"
        className="flex items-center justify-center"
      >
        <LeetCode />
      </Link>
    </section>
  );
}

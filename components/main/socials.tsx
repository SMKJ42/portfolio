import Link from "next/link";
import { SocialIcon } from "react-social-icons";

export function Socials() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-6 p-4">
      <SocialIcon url="https://www.linkedin.com/in/williamdeason1" />
      <SocialIcon url="https://www.instagram.com/liam.deason/" />
      <SocialIcon url="https://github.com/SMKJ42" />
      <SocialIcon url="https://leetcode.com/SMKJ42/" />
    </section>
  );
}

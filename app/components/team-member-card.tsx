import { Github, Linkedin, Twitter } from "lucide-react";
import { UserDetails } from "data/team";
import { cn } from "app/lib/utils";
import Link from "next/link";
import {
  FaXTwitter,
  FaGithub,
  FaInstagram,
  FaRss,
  FaLinkedinIn,
} from "react-icons/fa6";

interface TeamMemberCardProps {
  userDetails: UserDetails;
  className?: string;
}

export function TeamMemberCard({
  userDetails,
  className,
}: TeamMemberCardProps) {
  const { name, designation, bio, imageUrl, socials } = userDetails;

  return (
    <div
      className={cn(
        "flex items-center rounded-xl overflow-hidden max-w-2xl transition-transform",
        className
      )}
    >
      <div className="w-1/3 min-w-[200px]">
        <img
          src={imageUrl}
          alt={name}
          className="object-cover rounded-full size-[200px]"
        />
      </div>

      <div className="flex-1 p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-medium tracking-tight">{name}</h2>
            <p className="text-indigo-600 font-medium">{designation}</p>
          </div>

          <p className="text-gray-600 line-clamp-2">{bio}</p>

          <div className="flex items-center justify-between pt-4">
            <Link href="#" className="dark:text-neutral-200 text-neutral-800">
              Know More
            </Link>

            <div className="flex gap-4">
              {socials?.twitter && (
                <a
                  href={socials.twitter}
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <FaXTwitter size={20} />
                </a>
              )}
              {socials?.github && (
                <a
                  href={socials.github}
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <FaGithub size={20} />
                </a>
              )}
              {socials?.linkedin && (
                <a
                  href={socials.linkedin}
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <FaLinkedinIn size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

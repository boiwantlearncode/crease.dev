import ShinyButton from "@/components/ui/shiny-button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type GithubLinkProps = {
  link: string;
  username?: string;
  className?: string;
}

export default function GithubLink({ link, username, className }: GithubLinkProps) {
  return (
    <Link href={link}>
      <ShinyButton className={`flex flex-row justify-center items-center p-2 ${className ? className : ""}`}>
        <GitHubLogoIcon className='w-8 h-8 text-foreground inline-block' />
        {username && 
          <span className="inline-block">{username}</span>
        }
      </ShinyButton>
    </Link>
  );
}

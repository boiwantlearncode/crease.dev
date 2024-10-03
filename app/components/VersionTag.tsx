import AnimatedGradientText from "@/components/ui/animated-gradient-text";

import { cn } from "@/lib/utils";

type VersionTagProps = {
  version: string,
  className?: string,
  containerClassName?: string,
}

export default function VersionTag({ version, className, containerClassName }: VersionTagProps) {
  return (
    <div className='flex items-center justify-center'>
      <AnimatedGradientText className={cn('h-8', containerClassName)}>
        Alpha <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
            className
          )}
        >
          { version }
        </span>
      </AnimatedGradientText>
    </div>
  );
}
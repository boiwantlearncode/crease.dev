import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";

type HomeBackgroundProps = {
  children: React.ReactNode;
  className?: string;
}

const HomeBackground: React.FC<HomeBackgroundProps> = ({ children, className }) => {
  return (
    <div className={`${className} relative flex flex-col size-full items-center justify-center overflow-hidden border-b bg-background p-20 md:shadow-xl`}>
      { children }
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  );
}

export default HomeBackground
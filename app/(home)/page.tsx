import Link from 'fumadocs-core/link';
import ShimmerButton from "@/components/ui/shimmer-button";
import VersionTag from '@/app/components/VersionTag';
import HomeBackground from '@/app/components/HomeBackground';


// Insert function that pulls the latest version from npmjs


export default function HomePage() {
  return (
    <HomeBackground className='h-screen gap-12 text-center'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className="text-4xl font-bold inline-block">Crease</h1>
        <VersionTag version="v0.2.0" containerClassName='my-4' />
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h3 className='lg:w-1/2 w-full text-lg text-muted-foreground'>Crease is a responsive React component library powered by <span className='text-foreground'>Tailwind CSS</span> built for implementing various types of interactive quizzes with ease.</h3>
        <Link href="/docs" className='z-10 my-4 flex items-center justify-center gap-2'>
          <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              View documentation
            </span>
          </ShimmerButton>
        </Link>
      </div>
    </HomeBackground>
  );
}

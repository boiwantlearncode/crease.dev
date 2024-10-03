import Link from 'next/link';
import ShimmerButton from "@/components/ui/shimmer-button";
import VersionTag from '@/app/components/VersionTag';
import HomeBackground from '@/app/components/HomeBackground';
import GithubLink from '@/app/components/GithubLink';


// Insert function that pulls the latest version from npmjs


export default function HomePage() {
  return (
    <HomeBackground className='h-screen gap-12 text-center'>
      {/* <GithubLink link='https://github.com/boiwantlearncode/crease'/> */}
      <div className='flex flex-col justify-center items-center'>
        <h1 className="text-4xl font-bold">Crease</h1>
        <VersionTag version="v0.1.2" />
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h3 className='w-1/2 text-lg text-muted-foreground'>Crease is a responsive React component library powered by <span className='text-foreground'>Tailwind CSS</span> built for implementing various types of interactive quizzes with ease.</h3>
        <Link href="/docs" className='z-10 my-4 flex items-center justify-center'>
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

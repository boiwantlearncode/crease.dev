import Link from 'next/link';
import ShimmerButton from "@/components/ui/shimmer-button";
import VersionTag from '../components/VersionTag';


// Insert function that pulls the latest version from npmjs

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col justify-center items-center text-center gap-12">
      <div className='flex flex-col justify-center items-center'>
        <h1 className="text-4xl font-bold">Crease</h1>
        <VersionTag version="v0.1.2" />
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h3 className='w-1/2 text-lg text-muted-foreground'>Crease is a responsive React component library powered by Tailwind CSS, designed to easily implement various types of interactive quizzes.</h3>
        <Link href="/docs" className='z-10 my-4 flex items-center justify-center'>
          <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Read documentation
            </span>
          </ShimmerButton>
        </Link>
      </div>
    </main>
  );
}

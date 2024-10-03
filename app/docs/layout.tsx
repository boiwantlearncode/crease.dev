import { DocsLayout } from 'fumadocs-ui/layout';
import type { ReactNode } from 'react';
import { baseOptions } from '../layout.config';
import { source } from '@/app/source';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import GithubLink from '../components/GithubLink';
import VersionTag from '../components/VersionTag';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout 
      tree={source.pageTree} 
      {...baseOptions} 
    >
      {children}
    </DocsLayout>
  );
}

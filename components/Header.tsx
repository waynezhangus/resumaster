import * as React from 'react';

import { useRouter } from 'next/router';
import { User } from '../typings';

interface HeaderProps {
  user?: User;
}

export default function Header({ user }: HeaderProps) {
  const router = useRouter();
  return (
    <header className="flex space-x-2 p-4">
      <span className="mr-auto text-2xl font-bold uppercase">
        resumaster.ai
      </span>
      <a className="link" href="" target="_blank" rel="noopener noreferrer">
        Link1
      </a>
      <a className="link" href="" target="_blank" rel="noopener noreferrer">
        Link1
      </a>
      <a className="link" href="" target="_blank" rel="noopener noreferrer">
        Link1
      </a>
    </header>
  );
}

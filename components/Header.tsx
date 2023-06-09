import * as React from 'react';

import { useRouter } from 'next/router';
import { User } from '../typings';

interface HeaderProps {
  user?: User;
}

export default function Header({ user }: HeaderProps) {
  const router = useRouter();
  return (
    <header className="flex w-full items-center space-x-8 bg-white p-3 px-10 shadow-sm">
      <span className="mr-auto text-xl font-semibold uppercase">
        resumaster.ai
      </span>
      <a
        className="link text-sm text-gray-700"
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        Link1
      </a>
      <a
        className="link text-sm text-gray-700"
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        Link2
      </a>
      <a
        className="link text-sm text-gray-700"
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        Link3
      </a>
    </header>
  );
}

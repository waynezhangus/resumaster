import * as React from 'react';

import { useRouter } from 'next/router';

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="flex w-full space-x-16 bg-white p-8 px-16">
      <a
        className="link ml-auto text-sm text-gray-700"
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        Pricing
      </a>
      <a
        className="link text-sm text-gray-700"
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        About Us
      </a>
      <a
        className="link text-sm text-gray-700"
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact
      </a>
    </footer>
  );
}

import * as React from 'react';

import { useRouter } from 'next/router';
import { User } from '../typings';

interface HeaderProps {
    user?: User;
}

export default function Header({user}: HeaderProps) {
    const router = useRouter();
    return (
        <header className=''>

        </header>
    )
}
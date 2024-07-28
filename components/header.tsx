"use client"

import React, { ReactElement, useEffect, useState } from 'react'
import Link from 'next/link'
import { LINKS } from '@/utils/constants'

const Header = (): ReactElement => {
    const [activeLink, setActiveLink] = useState('/');

    useEffect(()=>{
        setActiveLink(window.location.pathname);
    },[])
    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex space-x-4">
                {LINKS.map((link, i) => (
                    <li key={i} onClick={() => setActiveLink(link.href)}>
                        <Link className={`hover:bg-gray-700 px-3 py-2 rounded  ${activeLink === link.href ? 'bg-blue-500 text-white' : 'text-blue-500'
                            }`}
                            href={link.href}>
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Header
'use client';
import React from 'react';
import { icons } from '../constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Nav() {
    const path = usePathname();

    return (
        <div className="md:flex hidden bg-black border border-black fixed flex-col w-[125px] h-[50%] justify-evenly items-center top-[50%] translate-y-[-50%] translate-x-[-40px] rounded-[35px]">
            {icons.map((item, idx) => {
                return (
                    <Link key={idx} href={item.link} className="ml-[30px]">
                        <item.icon className={`text-lg ${path === item.link ? 'text-blue-400' : 'text-white'}`} />
                    </Link>
                );
            })}
        </div>
    );
}

export default Nav;

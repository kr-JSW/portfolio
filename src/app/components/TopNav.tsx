'use client';
import React, { useEffect, useState } from 'react';
import { topIcons } from '../constants';
import Link from 'next/link';
import MobileTopNav from './MobileTopNav';
import { usePathname } from 'next/navigation';

const TopNav = () => {
    const [burgerBtn, setBurgerBtn] = useState(true);

    const [prevPath, setPrevPath] = useState('/');

    const path = usePathname();

    return (
        <section className="w-full h-[80px] bg-transparent flex justify-between items-center px-[20px] fixed z-[50] md:px-[100px]">
            <div className="hidden md:flex justify-between items-center w-full">
                <Link href="/" className=" font-semibold text-[25px] ">
                    Won&apos;s&nbsp;
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
                        Space
                    </span>
                </Link>
                {
                    <Link href="https://github.com/kr-JSW">
                        <topIcons.gitIcon className="text-[35px]" />
                    </Link>
                }
            </div>

            <div className="flex md:hidden justify-between items-center w-full">
                <div className="flex gap-[5px] items-center">
                    {
                        <Link href="https://github.com/kr-JSW">
                            <topIcons.gitIcon className="text-[35px]" />
                        </Link>
                    }

                    <Link href="/" className=" font-semibold text-[20px] ">
                        Won&apos;s&nbsp;
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
                            Space
                        </span>
                    </Link>
                </div>
                <div
                    className="w-[30px] h-[30px] cursor-pointer relative transition-all duration-500 ease-out "
                    onClick={() => setBurgerBtn(!burgerBtn)}
                >
                    {
                        <div
                            className={`w-[30px] h-[30px] absolute ${
                                burgerBtn ? 'flex flex-col gap-[5px]' : 'flex items-center '
                            } top-0 items-center justify-center transition-all duration-500 ease-out`}
                        >
                            <span
                                className={`w-[30px] h-[3px] transition-all duration-500 ease-out rounded-[5px] inline-block bg-black  ${
                                    burgerBtn ? 'static' : ' rotate-[45deg] absolute '
                                }  `}
                            ></span>
                            <span
                                className={`w-[30px] h-[3px] transition-all duration-500 ease-out rounded-[5px] inline-block bg-black  ${
                                    burgerBtn ? 'static' : ' rotate-[135deg] absolute'
                                }   `}
                            ></span>
                            <span
                                className={`w-[30px] h-[3px] rounded-[5px] inline-block bg-black  static ${
                                    !burgerBtn && 'hidden'
                                } `}
                            ></span>
                        </div>
                    }
                </div>
            </div>
            {<MobileTopNav btnState={burgerBtn} />}
        </section>
    );
};

export default TopNav;

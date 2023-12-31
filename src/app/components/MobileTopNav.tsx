import React from 'react';
import Link from 'next/link';

const MobileTopNav: React.FC<{ btnState: boolean }> = (props) => {
    return (
        <div
            className={`backdrop-blur-sm  absolute w-screen h-[40vh] ${
                props.btnState ? 'top-[-40vh]' : 'top-[0]'
            } left-0 z-[-1] transition-all ease-in-out duration-300`}
        >
            <div className="w-[100%] h-[100%] bg-indigo-400/10 relative">
                <div className="absolute top-[80px] flex flex-col justify-evenly items-center w-full h-[calc(40vh-80px)] font-mono">
                    <Link href="/" className="hover:text-purple-500 w-full text-center">
                        Home
                    </Link>
                    <Link href="/projects" className="hover:text-purple-500 w-full text-center">
                        Projects
                    </Link>
                    <Link href="/stack" className="hover:text-purple-500 w-full text-center">
                        Skills
                    </Link>
                    <Link href="/contact-me" className="hover:text-purple-500 w-full text-center">
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MobileTopNav;

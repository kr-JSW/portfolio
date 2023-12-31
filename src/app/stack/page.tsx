import React from 'react';
import Image from 'next/image';
import { stackImg } from '../constants';

const page = () => {
    return (
        <section className=" w-full min-h-[calc(100vh-80px)] absolute top-[80px] flex justify-center items-center">
            <div className="absolute w-[300px] h-[200px] md:flex justify-center items-center hidden">
                <h1 className="font-mono text-[30px]  text-white [text-shadow:1px_1px_2px_orange,0_0_2em_green,0_0_0.2em_blue]">
                    My Skills
                </h1>
            </div>
            <div className="w-[400px] h-[400px] hidden md:block roundScale relative rounded-[100%] z-[10] ">
                <div className="w-full h-full absolute  z-[-1] rotate-[120deg]">
                    <Image
                        src={stackImg.css}
                        alt="css"
                        width={100}
                        height={100}
                        className="w-[60px] h-auto absolute top-0 left-0 bg-transparent rotate-[-120deg]"
                    />
                    <Image
                        src={stackImg.express}
                        alt="express"
                        width={100}
                        height={100}
                        className="w-[100px] h-auto absolute top-0 right-[-20px] bg-transparent rotate-[-120deg]"
                    />
                    <Image
                        src={stackImg.git}
                        alt="git"
                        width={150}
                        height={150}
                        className="w-[100px] h-auto absolute bottom-0 left-0 bg-transparent rotate-[-120deg]"
                    />
                    <Image
                        src={stackImg.github}
                        alt="github"
                        width={100}
                        height={100}
                        className="w-[60px] h-auto absolute bottom-0 right-0 bg-transparent rotate-[-120deg]"
                    />
                </div>
                <div className="w-full h-full absolute bg-transparent z-[-1] rotate-[240deg]">
                    <Image
                        src={stackImg.html}
                        alt="html"
                        width={100}
                        height={100}
                        className="w-[60px] h-auto absolute top-0 left-0 bg-transparent rotate-[-240deg]"
                    />
                    <Image
                        src={stackImg.js}
                        alt="js"
                        width={100}
                        height={100}
                        className="w-[60px] h-auto absolute top-0 right-0 bg-transparent rotate-[120deg]"
                    />
                    <Image
                        src={stackImg.mongodb}
                        alt="mongodb"
                        width={100}
                        height={100}
                        className="w-[100px] h-auto absolute bottom-0 left-0 bg-transparent rotate-[120deg]"
                    />
                    <Image
                        src={stackImg.mongoose}
                        alt="mongoose"
                        width={100}
                        height={100}
                        className="w-[100px] h-auto absolute bottom-0 right-0 bg-transparent rotate-[-240deg]"
                    />
                </div>
                <div className="w-full h-full absolute  z-[-1] ">
                    <Image
                        src={stackImg.nextjs}
                        alt="nextjs"
                        width={100}
                        height={100}
                        className="w-[60px] h-auto absolute top-0 left-0 bg-transparent"
                    />
                    <Image
                        src={stackImg.node}
                        alt="node"
                        width={175}
                        height={50}
                        className="w-[60px] h-auto absolute top-0 right-0 bg-transparent"
                    />
                    <Image
                        src={stackImg.react}
                        alt="react"
                        width={100}
                        height={100}
                        className="w-[60px] h-auto absolute bottom-0 left-0 bg-transparent"
                    />
                    <Image
                        src={stackImg.vercel}
                        alt="vercel"
                        width={100}
                        height={100}
                        className="w-[50px] h-auto absolute bottom-[55px] right-[-30px] bg-transparent"
                    />
                    <Image
                        src={stackImg.tailwind}
                        alt="tailwindcss"
                        width={100}
                        height={100}
                        className="w-[100px] h-auto absolute bottom-0 right-0 bg-transparent"
                    />
                </div>
            </div>

            <section className="md:hidden flex flex-col justify-center items-center gap-[30px]">
                <div className=" w-auto h-[100px] justify-center items-center flex ">
                    <h1 className="font-mono text-[30px] text-white [text-shadow:1px_1px_2px_orange,0_0_2em_green,0_0_0.2em_blue]">
                        My Skills
                    </h1>
                </div>
                <div className=" flex w-[90vw] flex-wrap gap-[15px] items-center justify-center">
                    <Image
                        src={stackImg.css}
                        alt="css"
                        width={100}
                        height={100}
                        className="w-[60px] h-auto skillListAnimation"
                        style={{ ['--i' as any]: '1' }}
                    />
                    <Image
                        src={stackImg.express}
                        alt="express"
                        width={100}
                        height={100}
                        className="w-[100px] h-auto  skillListAnimation"
                        style={{ ['--i' as any]: '2' }}
                    />
                    <Image
                        src={stackImg.git}
                        alt="git"
                        width={150}
                        height={150}
                        className="w-[120px] h-auto skillListAnimation"
                        style={{ ['--i' as any]: '3' }}
                    />
                    <Image
                        src={stackImg.github}
                        alt="github"
                        width={100}
                        height={100}
                        className="w-[100px] h-auto skillListAnimation "
                        style={{ ['--i' as any]: '4' }}
                    />
                    <Image
                        src={stackImg.html}
                        alt="html"
                        width={100}
                        height={100}
                        className="w-[60px] h-auto skillListAnimation"
                        style={{ ['--i' as any]: '5' }}
                    />
                    <Image
                        src={stackImg.js}
                        alt="js"
                        width={100}
                        height={100}
                        className="w-[60px] h-auto skillListAnimation "
                        style={{ ['--i' as any]: '6' }}
                    />
                    <Image
                        src={stackImg.mongodb}
                        alt="mongodb"
                        width={100}
                        height={80}
                        className="w-[120px] h-auto skillListAnimation"
                        style={{ ['--i' as any]: '7' }}
                    />
                    <Image
                        src={stackImg.mongoose}
                        alt="mongoose"
                        width={100}
                        height={100}
                        className="w-[100px] h-auto skillListAnimation"
                        style={{ ['--i' as any]: '8' }}
                    />
                    <Image
                        src={stackImg.nextjs}
                        alt="nextjs"
                        width={100}
                        height={100}
                        className="w-[60px] h-auto skillListAnimation"
                        style={{ ['--i' as any]: '9' }}
                    />
                    <Image
                        src={stackImg.node}
                        alt="node"
                        width={175}
                        height={50}
                        className="w-[100px] h-auto skillListAnimation"
                        style={{ ['--i' as any]: '10' }}
                    />
                    <Image
                        src={stackImg.react}
                        alt="react"
                        width={100}
                        height={100}
                        className="w-[60px] h-auto skillListAnimation"
                        style={{ ['--i' as any]: '11' }}
                    />
                    <Image
                        src={stackImg.vercel}
                        alt="vercel"
                        width={100}
                        height={100}
                        className="w-[50px] h-auto skillListAnimation"
                        style={{ ['--i' as any]: '12' }}
                    />
                    <Image
                        src={stackImg.tailwind}
                        alt="tailwindcss"
                        width={100}
                        height={100}
                        className="w-[100px] h-auto skillListAnimation"
                        style={{ ['--i' as any]: '13' }}
                    />
                </div>
            </section>
        </section>
    );
};

export default page;

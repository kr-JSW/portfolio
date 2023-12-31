'use client';
import React from 'react';
import Lottie from 'lottie-react';
import PCanimation from '../../public/Animation.json';
import { useRouter } from 'next/navigation';

function Home() {
    const router = useRouter();

    return (
        <section className="min-h-screen w-[100%] relative">
            <div className="w-[80%] h-[500px]  absolute top-[50%]  translate-y-[-50%] left-[50%] translate-x-[-50%]  flex items-center">
                <div className=" flex-[40%] min-w-[300px]  hidden md:block">
                    <Lottie animationData={PCanimation} />
                </div>

                <div className=" flex-[60%] h-[80%] flex flex-col items-center ">
                    <div className="flex-1 min-w-[250px] w-[100%] px-[10%] flex flex-col justify-center items-start text-[30px] md:text-[50px] font-mono hover:tracking-[3px] transition-all duration-500 ease-out">
                        Think More
                        <strong className="min-w-[250px] w-[100%] flex justify-end text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-red-300 to-indigo-300 ">
                            Dive Deeper
                        </strong>
                    </div>

                    <div className=" flex-[1] w-[50%]  max-w-[400px]  md:hidden">
                        <Lottie animationData={PCanimation} />
                    </div>

                    <div className="flex-[1] flex flex-col justify-center items-center pb-[50px] w-[100%] px-[50px] font-[grandmother] text-[20px] md:text-[30px]">
                        <div>
                            <p>
                                안녕하세요.
                                <br />
                                몰입을 추구하는 개발자 <strong>OOO</strong> 입니다.
                                <br />
                            </p>
                            <p>
                                풀리지 않는 문제가 있으면, <br /> 개인 시간에 몰두 하여 해결하는 성향을 가지고 있습니다.
                            </p>
                        </div>
                    </div>

                    <div className="flex-[1] flex-row gap-[10px] w-[100%] items-center justify-evenly hidden md:flex">
                        <button
                            onClick={() => router.push('/projects')}
                            className=" w-[27%] h-[60px] relative group transition-all duration-1000 ease-out rounded-[10px] border border-blue-300 bg-blue-300 hover:text-blue-300 text-white overflow-hidden z-[50]"
                        >
                            <span
                                className="absolute rounded-[50%] bg-white w-[50px] h-[50px] top-[50px] left-[-50px]
                             group-hover:top-[-25px] group-hover:left-[50px] transition-all duration-1000 ease-out group-hover:scale-[500%] z-[-1]"
                            ></span>
                            Projects
                        </button>

                        <button
                            onClick={() => router.push('/stack')}
                            className=" w-[27%] h-[60px] relative group transition-all duration-1000 ease-out rounded-[10px] border border-blue-300 bg-blue-300 hover:text-blue-300 text-white overflow-hidden z-[50]"
                        >
                            <span
                                className="absolute rounded-[50%] bg-white w-[50px] h-[50px] top-[50px] left-[-50px]
                             group-hover:top-[-25px] group-hover:left-[50px] transition-all duration-1000 ease-out group-hover:scale-[500%] z-[-1]"
                            ></span>
                            Skills
                        </button>

                        <button
                            onClick={() => router.push('/contact-me')}
                            className=" w-[27%] h-[60px] relative group transition-all duration-1000 ease-out rounded-[10px] border border-blue-300 bg-blue-300 hover:text-blue-300 text-white overflow-hidden z-[50]"
                        >
                            <span
                                className="absolute rounded-[50%] bg-white w-[50px] h-[50px] top-[50px] left-[-50px]
                             group-hover:top-[-25px] group-hover:left-[50px] transition-all duration-1000 ease-out group-hover:scale-[500%] z-[-1]"
                            ></span>
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;

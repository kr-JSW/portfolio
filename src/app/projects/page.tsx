'use client';
import React from 'react';
import ProCard from '../components/ProCard';
import { etcIcons, projects } from '../constants';
import Link from 'next/link';
import { projectStore } from '../store';
import ProjectDetailModal from '../components/ProjectDetailModal';

const page = () => {
    const { isModal, modalState } = projectStore();

    return (
        <section className="min-h-screen min-w-screen h-full w-full pt-[80px] flex justify-center">
            <div className="md:w-[calc(100%-200px)] w-[calc(100%-50px)]  min-h-[calc(100vh-160px)] pb-[80px] flex justify-center items-center gap-5 flex-wrap   ">
                {projects.map((item, idx) => {
                    return (
                        <div className="flex flex-col gap-[10px] items-center " key={idx}>
                            <div
                                onClick={() =>
                                    modalState(
                                        item.src,
                                        item.name,
                                        item.des,
                                        item.skills.FE,
                                        item.skills.BE,
                                        item.skills.DB,
                                        item.skills.Deploy
                                    )
                                }
                            >
                                <ProCard imageSrc={item.src} />
                            </div>

                            {item.demo === 'no' ? (
                                <Link
                                    target="_blank"
                                    href={item.readme}
                                    className="h-[34px] w-[120px] md:w-[150px] flex items-center justify-center bg-gray-600 rounded-[5px] p-2 text-white"
                                >
                                    <etcIcons.doubleArrow className="text-[25px]" />
                                    Read Me
                                </Link>
                            ) : (
                                <div className="flex items-center justify-between w-full">
                                    <Link
                                        target="_blank"
                                        href={item.readme}
                                        className="h-[34px] md:w-[150px] w-[120px] flex items-center justify-center bg-gray-600 rounded-[5px] p-2 text-white"
                                    >
                                        <etcIcons.doubleArrow className="text-[25px]" />
                                        Read Me
                                    </Link>
                                    <Link
                                        target="_blank"
                                        className="font-mono md:w-[150px] w-[120px] tracking-[2px] block text-center rounded-[10px] btn_animation bg-cyan-600 text-white p-[5px]"
                                        href={item.demo}
                                    >
                                        Demo
                                    </Link>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            {isModal && <ProjectDetailModal />}
        </section>
    );
};

export default page;

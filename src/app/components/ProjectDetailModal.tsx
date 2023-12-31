import React from 'react';
import { projectStore } from '../store';
import { etcIcons } from '../constants';
import Image from 'next/image';

const ProjectDetailModal = () => {
    const { des, modalBool, name, skills, src, isModal } = projectStore();
    return (
        <section className="fixed md:w-[50vw] md:h-[70vh] bg-gray-200/30 backdrop-blur-sm overflow-hidden rounded-[10px] z-[200]">
            <div
                onClick={() => modalBool(!isModal)}
                className="cursor-pointer absolute right-[15px] top-[15px] text-[40px] hover:text-blue-300"
            >
                <etcIcons.closeIcon />
            </div>

            <div className=" h-full w-[100%] flex flex-col p-[10px]">
                <div className="flex flex-col gap-[10px] py-[15px] justify-center items-center">
                    <span className="font-bold text-[20px] text-white [text-shadow:1px_1px_2px_yellow,0_0_2em_green,0_0_0.2em_blue]">
                        {name}
                    </span>
                    <Image
                        src={src}
                        alt="project"
                        objectFit="contain"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-[60%] flex-[2] "
                    />
                </div>

                <div className="flex-[3] flex flex-col md:flex-row bg-cyan-900/60 rounded-[10px]">
                    <div className="flex-[1] p-[20px] text-white">{des}</div>
                    <div className="flex-[1] p-[20px]">
                        <div>
                            {' '}
                            <strong>Front-end</strong> : {skills.FE}
                        </div>
                        <div className={`${skills.BE === 'no' && 'hidden'}`}>
                            <strong>Back-end</strong> : {skills.BE}
                        </div>
                        <div className={`${skills.DB === 'no' && 'hidden'}`}>
                            <strong>DB</strong> : {skills.DB}
                        </div>
                        <div className={`${skills.Deploy === 'no' && 'hidden'}`}>
                            <strong>Deploy</strong> : {skills.Deploy}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetailModal;

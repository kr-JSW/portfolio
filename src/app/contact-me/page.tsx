'use client';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { backgroundImgs } from '../constants';

const page = () => {
    const form = useRef<HTMLFormElement>(null);

    const [textSec, setTextSec] = useState('');

    const changeHandle = (e: any) => {
        setTextSec(e.target.value);
    };

    const sendEmail = (e: any) => {
        e.preventDefault();

        (form.current![2] as HTMLInputElement).value = `발신인 : ${
            (form.current![0] as HTMLInputElement).value
        } \n \n 발신인 메일 : ${(form.current![1] as HTMLInputElement).value} \n \n 내용 : ${textSec}`;

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
                form.current as HTMLFormElement,
                process.env.NEXT_PUBLIC_PUBLIC_KEY as string
            )
            .then(
                (result: any) => {
                    (form.current![0] as HTMLInputElement).value = '';
                    (form.current![1] as HTMLInputElement).value = '';
                    setTextSec('');
                    console.log('결과는? : ', result, form);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        alert('메일을 전송하였습니다!');
    };

    return (
        <section className="w-full h-[calc(100vh-80px)] absolute top-[80px] flex justify-center items-center">
            <form
                onSubmit={sendEmail}
                ref={form}
                className="md:w-[60vw] md:h-[60vh] w-[90vw] h-[80vh] bg-cover bg-center rounded-[10px] border-gray-600 border-[2px] flex overflow-hidden"
            >
                <div
                    style={{ backgroundImage: `URL(${backgroundImgs.formbg})` }}
                    className="flex-[1] bg-center bg-cover bg-no-repeat md:block hidden"
                />
                <div className="flex-[1] flex flex-col gap-[10px] p-[10px] bg-slate-500 relative">
                    <div className="flex flex-col">
                        <label className="font-[600] font-serif text-white">Name</label>
                        <input
                            type="text"
                            name="user_name"
                            className="border-b-[1px] border-gray-600 outline-none pl-[5px] py-[2px] rounded-[10px]"
                            placeholder="이름을 입력해주세요."
                        />
                    </div>
                    <div className="flex flex-col">
                        {' '}
                        <label className="font-[600] font-serif text-white">Email</label>
                        <input
                            type="email"
                            name="user_email"
                            className="border-b-[1px] border-gray-600 outline-none pl-[5px]  py-[2px] rounded-[10px]"
                            placeholder="회신이 가능한 메일 주소를 입력해주세요."
                        />
                    </div>
                    <div className="flex flex-col">
                        {' '}
                        <label className="font-[600] font-serif text-white">Message</label>
                        <textarea
                            name="message"
                            className="resize-none md:h-[200px] h-[290px] overflow-auto outline-none shadow-lg rounded-[10px] p-[5px]"
                            onChange={changeHandle}
                            placeholder="문의 내용을 입력해주세요."
                            value={textSec}
                        />
                    </div>

                    <button className=" w-[150px] h-[60px] absolute self-center bottom-[10px] group transition-all duration-1000 ease-out rounded-[10px] border border-blue-300 bg-blue-300 hover:text-blue-300 text-white overflow-hidden ">
                        <span
                            className="absolute rounded-[50%] bg-white w-[50px] h-[50px] top-[50px] left-[-50px]
                             group-hover:top-[-25px] group-hover:left-[50px] transition-all duration-1000 ease-out group-hover:scale-[500%] z-[-1]"
                        ></span>
                        Send
                    </button>
                </div>
            </form>
        </section>
    );
};

export default page;

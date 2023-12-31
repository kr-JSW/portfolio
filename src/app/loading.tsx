'use client';
import Lottie from 'lottie-react';
import LoadingAnimation from '../../public/loadingAnimation.json';

export default function Loading() {
    return (
        <div className="flex w-screen h-screen justify-center items-center">
            <div className="w-[220px] h-[220px] rounded-[10px] flex items-center justify-center bg-green-200 pageLoadingAnimation">
                <div className="w-[200px] h-[200px] rounded-[15px] overflow-hidden  ">
                    <Lottie animationData={LoadingAnimation} />
                </div>
            </div>
        </div>
    );
}

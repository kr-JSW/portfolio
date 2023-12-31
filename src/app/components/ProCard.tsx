'use client';
import React, { useState } from 'react';
import { projectStore } from '../store';

const ProCard: React.FC<{ imageSrc: string }> = (props) => {
    const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });
    const { x, y } = coordinate;
    const { modalBool, isModal } = projectStore();

    const coordinateMove = (e: any) => {
        setCoordinate({ x: e.pageX - e.target.offsetLeft, y: e.pageY - e.target.offsetTop });
    };

    return (
        <div
            style={{
                backgroundImage: `url(${props.imageSrc})`,
                transform:
                    x !== 0
                        ? `perspective(1000px) rotateX(${(4 / 25) * y - 20}deg) rotateY(${-(15 / 100) * x + 30}deg)`
                        : `perspective(1000px) rotateX(0deg)`,
            }}
            className={`md:w-[400px] cursor-pointer md:h-[250px] w-[300px] h-[200px]  bg-cover bg-center rounded-[10px] transition-all duration-200 ease-out relative overflow-hidden`}
            onMouseMove={coordinateMove}
            onMouseLeave={(e) => setCoordinate({ x: 0, y: 0 })}
            onClick={() => modalBool(!isModal)}
        >
            <div
                style={{
                    transform:
                        x !== 0
                            ? `perspective(1000px) rotateX(${(4 / 25) * y - 20}deg) rotateY(${-(15 / 100) * x + 30}deg)`
                            : `perspective(1000px) rotateX(0deg)`,
                    backgroundPositionX: `${x !== 0 ? x - 200 : x}px`,
                    backgroundPositionY: `${y !== 0 ? y - 125 : y}px`,
                    filter: `opacity(0.7)`,
                }}
                className={`absolute top-[-100%] left-[-100%] w-[300%] h-[300%] 
                bg-[radial-gradient(circle,#ffffff_0%,black_55%,transparent_90%)]  
                bg-no-repeat
                opacity-[0.8] pointer-events-none transition-all duration-100 ease-in-out ${x === 0 ? 'hidden' : ''}`}
            />
        </div>
    );
};

export default ProCard;

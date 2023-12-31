import { BiDesktop, BiHomeAlt2 } from 'react-icons/bi';
import { GiStoneStack } from 'react-icons/gi';
import { MdOutlineLocalPostOffice } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { CgCloseO } from 'react-icons/cg';

export const icons = [
    {
        link: '/',
        icon: BiHomeAlt2,
    },
    {
        link: '/projects',
        icon: BiDesktop,
    },
    {
        link: '/stack',
        icon: GiStoneStack,
    },
    {
        link: '/contact-me',
        icon: MdOutlineLocalPostOffice,
    },
];

export const topIcons = {
    gitIcon: FaGithub,
    burgerIcon: RxHamburgerMenu,
};

export const etcIcons = {
    doubleArrow: MdKeyboardDoubleArrowRight,
    closeIcon: CgCloseO,
};

export const projects = [
    {
        name: 'Coding_Archive',
        src: '/img/blog.jpg',
        demo: 'no',
        readme: 'https://github.com/kr-JSW/blog-FE',
        des: '다른 사람들과 함께 사용이 가능한 공유형 블로그입니다. 다른 사람들의 공부기록을 의식하면서 학습을 하게되면, 독학하는 사람들에게 더 도움이 될 것이라는 취지에서 시작한 프로젝트입니다.',
        skills: {
            FE: 'NextJs, CSS, Javascript',
            BE: 'NodeJs, Express, Mongoose, Javascript ',
            DB: 'MongoDB Atlas',
            Deploy: 'no',
        },
    },
    {
        name: 'mindplayground',
        src: '/img/mindplayground.jpg',
        demo: 'https://www.mindplayground.shop/',
        readme: 'https://github.com/kr-JSW/mindplayground?tab=readme-ov-file',
        des: '파이썬으로 만든 크롤러로 애니메이션 흑막 캐릭터들의 사진을 수집한 후 구글의 teachable machine을 이용하여 유사도를 학습시켰습니다. 본인의 사진을 올리면 가장 닮은 캐릭터를 AI가 뽑은 후, 그 캐릭터에 부합하는 흑막 성향을 알려줍니다. 그 외에 재미로하는 소시오패스 성향 테스트가 있습니다.',
        skills: {
            FE: 'NextJs, Tailwind CSS, Javascript',
            BE: 'no',
            DB: 'no',
            Deploy: 'vercel',
        },
    },
];

export const stackImg = {
    css: '/img/css.png',
    express: '/img/express.png',
    git: '/img/git.png',
    github: '/img/github.png',
    html: '/img/html.png',
    js: '/img/js.png',
    mongodb: '/img/mongodb.png',
    mongoose: '/img/mongoose.png',
    node: '/img/node.png',
    react: '/img/react.png',
    nextjs: '/img/nextjs.svg',
    tailwind: '/img/tailwind-css.svg',
    vercel: '/img/vercel.svg',
};

export const backgroundImgs = {
    formbg: '/img/formBG.jpg',
};

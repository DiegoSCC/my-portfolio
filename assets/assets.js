import user_image from './user-image.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'E-Commerce Full Stack',
        category: 'Full Stack Web',
        description: 'Plataforma de compras con catálogo dinámico, autenticación, carrito y pasarela de pagos.',
        tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind'],
        bgImage: '/work-1.png',
        link: 'https://github.com/DiegoSCC' 
    },
    {
        title: 'Geo Tracking & Logística',
        category: 'Web App & API',
        description: 'Sistema de seguimiento en tiempo real de envíos y paquetería con mapas interactivos.',
        tags: ['Express', 'Node.js', 'MongoDB', 'Leaflet'],
        bgImage: '/work-2.png',
        link: 'https://github.com/DiegoSCC' 
    },
    {
        title: 'Portfolio & Galería Visual',
        category: 'Frontend & UI',
        description: 'Plataforma web minimalista y veloz con optimización de medios y diseño adaptativo.',
        tags: ['React', 'Next.js', 'Tailwind CSS'],
        bgImage: '/work-3.png',
        link: 'https://github.com/DiegoSCC' 
    },
    {
        title: 'Dashboard de Administración',
        category: 'UI/UX & SaaS',
        description: 'Panel de métricas y gestión para inventarios, reportes y control de usuarios.',
        tags: ['React', 'TypeScript', 'Tailwind', 'Figma'],
        bgImage: '/work-4.png',
        link: 'https://github.com/DiegoSCC' 
    },
    {
        title: 'REST API & Microservicios',
        category: 'Backend Architecture',
        description: 'Servicio backend seguro con JWT, rate limiting, validaciones y PostgreSQL relacional.',
        tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
        bgImage: '/work-2.png',
        link: 'https://github.com/DiegoSCC' 
    },
    {
        title: 'Gestor Colaborativo de Tareas',
        category: 'Full Stack Web',
        description: 'Herramienta de productividad ágil para coordinación de equipos y seguimiento de sprints.',
        tags: ['Next.js', 'Express', 'SQL', 'CSS3'],
        bgImage: '/work-1.png',
        link: 'https://github.com/DiegoSCC' 
    }
];

export const servicesData = [
    {
        icon: assets.code_icon,
        iconDark: assets.code_icon_dark,
        title: 'Desarrollo Backend & APIs',
        description: 'Diseño e implementación de APIs RESTful robustas, escalables y seguras con Node.js y Express, preparadas para soportar alto tráfico.'
    },
    {
        icon: assets.project_icon,
        iconDark: assets.project_icon_dark,
        title: 'Bases de Datos & Modelado',
        description: 'Estructuración y optimización de bases de datos relacionales (PostgreSQL) y NoSQL (MongoDB), garantizando integridad y rendimiento.'
    },
    {
        icon: assets.edu_icon,
        iconDark: assets.edu_icon_dark,
        title: 'Soluciones Web Full-Stack',
        description: 'Construcción de aplicaciones web integradas de extremo a extremo utilizando Next.js, React y modernas interfaces en Tailwind CSS.'
    }
];

export const infoList = [
    { 
        icon: assets.code_icon, 
        iconDark: assets.code_icon_dark, 
        title: 'Lenguajes & Tecnologías', 
        description: 'JavaScript (ES6+), TypeScript, Node.js, SQL (Postgres), Java OOP' 
    },
    { 
        icon: assets.edu_icon, 
        iconDark: assets.edu_icon_dark, 
        title: 'Educación', 
        description: 'Ing. en Sistemas de Información (UTN - en curso), Tecnicatura en Informática' 
    },
    { 
        icon: assets.project_icon, 
        iconDark: assets.project_icon_dark, 
        title: 'Experiencia & Proyectos', 
        description: 'Desarrollo freelance y en equipo para PyMEs: Next.js, Express, Postgres, MongoDB' 
    }
];

export const toolsData = [
    { name: 'VS Code', icon: assets.vscode, category: 'Editor' },
    { name: 'Git', icon: assets.git, category: 'Control de versiones' },
    { name: 'Firebase', icon: assets.firebase, category: 'BaaS / Cloud' },
    { name: 'MongoDB', icon: assets.mongodb, category: 'Base de Datos' },
    { name: 'Figma', icon: assets.figma, category: 'Diseño UI/UX' }
];
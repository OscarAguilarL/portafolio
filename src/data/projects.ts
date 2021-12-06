import { ProjectInterfaceProps } from '../interface/ProjectInterfaceProps';

import weather from '../assets/images/project-thumbnail/weather-app.png';
import calculator from '../assets/images/project-thumbnail/calculator.png';
import blockMaster from '../assets/images/project-thumbnail/block-master.jpg';
import skeleton from '../assets/images/project-thumbnail/skeleton.png';
import calendar from '../assets/images/project-thumbnail/mern-calendar.png';
import countdown from '../assets/images/project-thumbnail/countdown.png';



export const projects: ProjectInterfaceProps[] = [
    {
        title: 'WeatherApp',
        description:
            "Aplicación del clima hecha con vanilla JS, con la finalidad de reforzar la manipulación del DOM y consumo de Web API's",
        codeLink: 'https://github.com/OscarAguilarL/weather-app',
        websiteLink: 'https://weather-app-tau-three.vercel.app/',
        image: weather,
    },
    {
        title: 'Frontend Calculator',
        description:
            'Calculadora minimalista con React JS con las que practique mis conocimientos de React, React Hooks, y sobre todo HTML y CSS',
        codeLink: 'https://github.com/OscarAguilarL/frontend-calculator',
        websiteLink: 'https://frontend-calculator.vercel.app/',
        image: calculator,
    },
    {
        title: 'Block Master',
        description:
            'Estructura de una plataforma de streaming, construido con React, React Hooks, React Router, HTML y CSS',
        codeLink: 'https://github.com/OscarAguilarL/block-master-react',
        websiteLink: 'https://block-master-react.vercel.app/all',
        image: blockMaster,
    },
    {
        title: 'Skeleton',
        description:
            'Uno de los escenarios esenciales en una interfaz, aplicando una genial transición entre elementos sin contenido y después pintando toda la información necesaria.',
        codeLink: 'https://github.com/OscarAguilarL/skeleton',
        websiteLink: 'https://skeleton-chi.vercel.app/',
        image: skeleton,
    },
    {
        title: 'MERN Calendar',
        description:
            'Aplicación de calendario usando el stack MERN. Se creó utilizando React Redux, y distintos componentes de React publicados en NPM',
        codeLink: 'https://github.com/OscarAguilarL/mern-calendar-app',
        websiteLink: 'https://mern-calendar-app.vercel.app/',
        image: calendar,
    },
    {
        title: 'Countdown App',
        description:
            'Esta es de las primeras aplicaciones que hice, se usó vanilla Javascript, HTML y CSS.',
        codeLink: 'https://github.com/OscarAguilarL/countdown',
        websiteLink: 'https://oscaraguilarl.github.io/countdown/',
        image: countdown,
    },
];

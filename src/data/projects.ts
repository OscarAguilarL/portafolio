import { ProjectInterfaceProps } from '../interface/ProjectInterfaceProps';

import weather from '../assets/images/project-thumbnail/weather-app.png';
import calculator from '../assets/images/project-thumbnail/calculator.png';
import blockMaster from '../assets/images/project-thumbnail/block-master.jpg';
import skeleton from '../assets/images/project-thumbnail/skeleton.png';
import calendar from '../assets/images/project-thumbnail/mern-calendar.png';
import pomodoro from '../assets/images/project-thumbnail/podomoro.png';



export const projects: ProjectInterfaceProps[] = [
    {
        title: 'WeatherApp',
        description:
            "Weather application made with vanilla JS, in order to reinforce DOM manipulation and Web API's.",
        codeLink: 'https://github.com/OscarAguilarL/weather-app',
        websiteLink: 'https://weather-app-tau-three.vercel.app/',
        image: weather,
    },
    {
        title: 'Frontend Calculator',
        description:
            'Minimalist calculator with React JS with which I practiced my knowledge of React, React Hooks, and above all HTML and CSS.',
        codeLink: 'https://github.com/OscarAguilarL/frontend-calculator',
        websiteLink: 'https://frontend-calculator.vercel.app/',
        image: calculator,
    },
    {
        title: 'Block Master',
        description:
            'Structure of a streaming platform, built with React, React Hooks, React Router, HTML and CSS.',
        codeLink: 'https://github.com/OscarAguilarL/block-master-react',
        websiteLink: 'https://block-master-react.vercel.app/all',
        image: blockMaster,
    },
    {
        title: 'Skeleton',
        description:
            'One of the essential settings in an interface, applying a cool transition between elements without content and then painting all the necessary information.',
        codeLink: 'https://github.com/OscarAguilarL/skeleton',
        websiteLink: 'https://skeleton-chi.vercel.app/',
        image: skeleton,
    },
    {
        title: 'MERN Calendar',
        description:
            'Calendar application using the MERN stack. It was created using React Redux, and different React components published in NPM.',
        codeLink: 'https://github.com/OscarAguilarL/mern-calendar-app',
        websiteLink: 'https://mern-calendar-app.vercel.app/',
        image: calendar,
    },
    {
        title: 'Pomodoro Tracker',
        description:
            'Pomodoro App with React, Styled Components and Vite',
        codeLink: 'https://github.com/OscarAguilarL/pomodoro-tracker',
        websiteLink: 'https://pomodoro-tracker-two.vercel.app/',
        image: pomodoro,
    },
];

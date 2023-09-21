import { Component } from '@angular/core';

@Component({
    selector: 'app-projects-section',
    templateUrl: './projects-section.component.html',
    styleUrls: ['./projects-section.component.scss'],
})
export class ProjectsSectionComponent {
    projectList: {
        title: string;
        description: string;
        githubLink: string;
        deployLink?: string;
        technologies: string[];
        responsabilities?: string;
    }[] = [
        {
            title: 'Culinary Alchemy',
            description:
                'A platform that aims to revolutionize the way people discover, share, and explore recipes.',
            githubLink: 'https://github.com/CulinaryAlchemy/CulinaryAlchemy',
            deployLink: 'https://culinary-alchemy-web-app.vercel.app/',
            responsabilities:
                'As a Backend Developer on a 2 people team, I was responsible for building the database, its services and controllers, implementing API routes, API security, authentications and authorizations',
            technologies: ['react', 'node', 'express', 'sequelize'],
        },
        {
            title: 'Owr',
            githubLink: 'https://github.com/Huilensolis/owr',
            deployLink: 'https://owr-french.vercel.app/',
            description:
                'A Duolingo mini clone. Created with the objective to try the global state manager library Zustand.',
            technologies: ['react', 'typescript', 'tailwind'],
        },
        {
            title: 'Knight memory card game',
            description:
                'Classic memory card game, where you must memorize all cards to match them, while running a cronometro to track your mark!',
            githubLink: 'https://github.com/Huilensolis/Memory-cards-game',
            deployLink: 'https://medieval-memory-card-game.vercel.app/',
            technologies: ['html', 'css', 'javascript'],
        },
        {
            title: 'Todo list',
            description:
                'A react project to practice the basics of react, componetizing, basic hooks as useEffect, useState and useContext',
            githubLink: 'https://github.com/Huilensolis/react-todo-app',
            deployLink: 'https://react-todo-app-alpha-ten.vercel.app/',
            technologies: ['react', 'css'],
        },
        {
            title: 'Soon',
            githubLink: '',
            description: 'Coming soon',
            technologies: [],
        },
        {
            title: 'Soon',
            githubLink: '',
            description: 'Cooming soon',
            technologies: [],
        },
    ];
}

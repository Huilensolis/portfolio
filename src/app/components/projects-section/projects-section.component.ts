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
                'A new way to share recipes online, letting user log in, sign in while posting, deleting, sharing, liking, updating recipes',
            githubLink: 'https://github.com/CulinaryAlchemy/CulinaryAlchemy',
            responsabilities:
                'As a Backend Developer on a 2 people team, I was responsible for building the backend database, managing API routes, implementing API security, and handling authorizations',
            technologies: ['react', 'node', 'express', 'sequelize'],
        },
        {
            title: 'Spotify landing clone',
            description:
                'Vanilla project to maqutate the spotify landing page.',
            githubLink: 'https://github.com/Huilensolis/Spotify-clone',
            deployLink: 'https://spotify-clone-vanilla.vercel.app/',
            technologies: ['html', 'css'],
        },
        {
            title: 'Memory cards game',
            description: 'The classic Memory card game',
            githubLink: 'https://github.com/Huilensolis/Memory-cards-game',
            deployLink: 'https://memory-cards-game-flax.vercel.app/',
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
            title: ' (soon) Read list',
            githubLink: '',
            description:
                'Book list, where you can select them and add them into your read-list',
            technologies: ['react', 'tailwind'],
        },
        {
            title: 'coming soon',
            githubLink: '',
            description: 'This is a project description',
            technologies: [],
        },
    ];
}

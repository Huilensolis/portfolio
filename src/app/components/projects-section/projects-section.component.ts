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
    }[] = [
        {
            title: 'Library API REST',
            description: 'CRUD api to mangage libraries and their books',
            githubLink: 'https://github.com/Huilensolis/library_API_REST',
            technologies: [
                'node JS',
                'express',
                'sequelize',
                'passport',
                'JWT',
            ],
        },
        {
            title: 'coming soon',
            description: 'This is a project description',
            githubLink: '',
            technologies: [
                'angular',
                'node JS',
                'boostrap',
                'express',
                'sequelize',
                'passport',
                'JWT',
            ],
        },
        {
            title: 'coming soon',
            description: 'This is a project description',
            githubLink: '',
            technologies: [
                'node JS',
                'express',
                'sequelize',
                'passport',
                'JWT',
            ],
        },
        {
            title: 'coming soon',
            description: 'This is a project description',
            githubLink: '',
            technologies: [
                'node JS',
                'express',
                'sequelize',
                'passport',
                'JWT',
            ],
        },
        {
            title: 'coming soon',
            githubLink: '',
            description: 'This is a project description',
            technologies: [
                'node JS',
                'express',
                'sequelize',
                'passport',
                'JWT',
            ],
        },
        {
            title: 'coming soon',
            githubLink: '',
            description: 'This is a project description',
            technologies: [
                'node JS',
                'express',
                'sequelize',
                'passport',
                'JWT',
            ],
        },
    ];
}

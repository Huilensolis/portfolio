import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent {
    projectList = [
        {
            title: 'Library API REST',
            description: 'This is a project description',
            githubLink: 'a',
            technologies: ['node JS', 'express', 'sequelize', 'passport', 'JWT']
        },
        {
            title: 'cooming soon',
            description: 'This is a project description',
            githubLink: '',
            technologies: ['angular', 'node JS', 'boostrap', 'express', 'sequelize', 'passport', 'JWT']
        },
        {
            title: 'cooming soon',
            description: 'This is a project description',
            githubLink: '',
            deployLink: 'a',
            technologies: ['node JS', 'express', 'sequelize', 'passport', 'JWT']
        },
        {
            title: 'cooming soon',
            description: 'This is a project description',
            githubLink: '',
            deployLink: 'a',
            technologies: ['node JS', 'express', 'sequelize', 'passport', 'JWT']
        },
        {
            title: 'cooming soon',
            description: 'This is a project description',
            githubLink: '',
            deployLink: 'a',
            technologies: ['node JS', 'express', 'sequelize', 'passport', 'JWT']
        },
        {
            title: 'cooming soon',
            description: 'This is a project description',
            githubLink: '',
            deployLink: 'a',
            technologies: ['node JS', 'express', 'sequelize', 'passport', 'JWT']
        }
    ]
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.scss']
})
export class SkillSetComponent {
    LanguagesList = [
        {
            name: 'React',
        },
        {
            name: 'Angular'
        },
        {
            name: 'Typescript',
        },
        {
            name: 'Javascript',
        },
        {
            name: 'HTML5',
        },
        {
            name: 'CSS3',
        },
        {
            name: 'Node',
            backend: true,
        },
        {
            name: 'Express',
            backend: true,
        },
        {
            name: 'Sequelize',
            backend: true,
        },
        {
            name: 'Passport-JWT',
            backend: true,
        }
    ]
    tools = [
        {
            name: 'Git',
        },
        {
            name: 'Github',
        },
        {
            name: 'Linux',
        },
        {
            name: 'Npm',
        },
    ]
}

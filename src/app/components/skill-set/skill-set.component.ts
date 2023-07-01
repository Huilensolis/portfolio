import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.scss']
})
export class SkillSetComponent {
    LanguagesList = [
        {
            name: 'react',
            important: true,
        },
        {
            name: 'angular',
            important: true,
        },
        {
            name: 'javascript',
        },
        {
            name: 'typescript',
            important: true,
        },
        {
            name: 'HTML5',
        },
        {
            name: 'CSS3',
        },
        {
            name: 'node',
            backend: true,
        },
        {
            name: 'express',
            backend: true,
        },
        {
            name: 'sequelize',
            backend: true,
        },
        {
            name: 'passport-JWT',
            backend: true,
        },
        {
            name: 'Git',
            tool: true
        },
        {
            name: 'Github',
            tool: true
        },
        {
            name: 'Linux',
            tool: true
        },
        {
            name: 'Npm',
            tool: true
        },
    ]
}

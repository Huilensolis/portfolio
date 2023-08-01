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
            name: 'typescript',
            important: true,
        },
        {
            name: 'node',
        },
        {
            name: 'express',
            backend: true,
        }
    ]
}

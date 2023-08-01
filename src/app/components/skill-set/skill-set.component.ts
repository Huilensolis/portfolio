import { Component } from '@angular/core';

@Component({
    selector: 'app-skill-set',
    templateUrl: './skill-set.component.html',
    styleUrls: ['./skill-set.component.scss'],
})
export class SkillSetComponent {
    LanguagesList = ['react', 'angular', 'node', 'express', 'sequelize', 'typescript', 'tailwind', 'sass'];
}

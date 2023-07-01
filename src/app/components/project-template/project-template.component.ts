import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-template',
  templateUrl: './project-template.component.html',
  styleUrls: ['./project-template.component.scss']
})
export class ProjectTemplateComponent {
    @Input() project!: {
        title: string,
        description: string,
        githubLink: string,
        deployLink?: string,
        technologies: string[],
    }
    technologyList: string | undefined = undefined
    ngOnInit(){
        this.technologyList = this.project?.technologies.join(', ')
    }
}

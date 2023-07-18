import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent {
    @Input() technologies: string[] = []
    getIcon(technology:string){
        return `../../../assets/icons/${technology}.svg`
    }
}

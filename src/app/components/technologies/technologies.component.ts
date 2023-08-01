import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-technologie',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologieComponent {
    @Input() technologie: string = ''
    getIcon(technology:string){
        return `../../../assets/icons/${technology}.svg`
    }
    ngOnInit(){
        console.log(this.technologie);
    }
}

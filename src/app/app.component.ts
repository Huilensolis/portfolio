import { Component, Renderer2, OnInit } from '@angular/core';
import { MenuStateService } from './services/menu-state.service';
import { Subscription } from 'rxjs';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor(private render: Renderer2, private menuStateService: MenuStateService){

    }
    menuSubscription!: Subscription;
    menuState: boolean = false
    ngOnInit(){
        this.menuSubscription = this.menuStateService.getSubscription()
        .subscribe(() => {
            this.toggleMenuState()
        })
    }
    toggleMenuState(){
        this.menuState = this.menuStateService.getMenuState()

        if(this.menuState === true){
            this.render.addClass(document.body, 'menu-open')
        } else{
            this.render.removeClass(document.body, 'menu-open')
        }
    }
}

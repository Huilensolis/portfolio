import { Component, OnDestroy } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';
import { NavItem } from 'src/app/interfaces/nav.models';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.scss']
})
export class AsideNavComponent {
    navItems: NavItem[] = [];

    private navItemsSubsctiption!: Subscription;
    constructor(private navService: NavService){

    }

    ngOnInit(): void{
        this.navItems = this.navService.getNavItems()

        this.navItemsSubsctiption = this.navService.getSubsctiption().subscribe(() => {
            this.updateItems()
        })
    }

    private updateItems(){
        this.navItems = this.navService.getNavItems()
    }

    SetNavItemsState(title: any){
        this.navService.setActive(title)
    }

    ngOnDestroy(): void{
        this.navItemsSubsctiption.unsubscribe();
    }
}

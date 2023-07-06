import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavItem } from '../../interfaces/nav.models';
import { NavService } from 'src/app/services/nav.service';
import { Subscription } from 'rxjs';
import { MenuStateService } from 'src/app/services/menu-state.service';

@Component({
    selector: 'app-top-header',
    templateUrl: './top-header.component.html',
    styleUrls: ['./top-header.component.scss'],
})
export class TopHeaderComponent {
    navItems: NavItem[] = [];
    actualSectionInNav: string = '';

    private navItemsSubsctiption!: Subscription;
    constructor(
        private navService: NavService,
        private menuStateService: MenuStateService,
    ) {}

    // toggle menu
    menuStateSubscription!: Subscription;
    menuActive!: boolean;

    toggleMenuState() {
        this.menuStateService.toggleMenuState();
    }

    ngOnInit(): void {
        this.navItems = this.navService.getNavItems();

        this.navItemsSubsctiption = this.navService
            .getSubsctiption()
            .subscribe(() => {
                this.updateItems();
            });
        this.menuStateSubscription = this.menuStateService
            .getSubscription()
            .subscribe(() => {
                this.updateMenuState();
            });
    }

    private updateItems() {
        this.navItems = this.navService.getNavItems();

        let ActiveItem = this.navItems.find((item) => item.isActive === true);
        if (!ActiveItem) return;
        this.actualSectionInNav = ActiveItem?.title;
    }

    SetNavItemsState(title: any) {
        this.navService.setActive(title);
    }

    private updateMenuState() {
        this.menuActive = this.menuStateService.getMenuState();
    }

    ngOnDestroy(): void {
        this.navItemsSubsctiption.unsubscribe();
        this.menuStateSubscription.unsubscribe();
    }
}

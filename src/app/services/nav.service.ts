import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavItem } from '../interfaces/nav.models';
@Injectable({
  providedIn: 'root'
})
export class NavService {

    constructor() { }


    private navItemsSubject: BehaviorSubject<NavItem[]> = new BehaviorSubject<NavItem[]>([]);
    private navItems: NavItem[] = [
        {
            title: 'home',
            url: '/',
            isActive: true
        },
        {
            title: 'about',
            url: '/',
            isActive: false
        },
        {
            title: 'skillset',
            url: '/',
            isActive: false
        },
        {
            title: 'projects',
            url: '/',
            isActive: false
        },
        {
            title: 'contact',
            url: '/',
            isActive: false
        }
    ];

    getSubsctiption(){
        return this.navItemsSubject.asObservable()
    }

    getNavItems(){
        return this.navItems;
    }

    setActive(title: 'home' | 'about' | 'skillset' | 'projects' | 'contact'): void{

        this.navItems.forEach(nav => {
            nav.isActive = false;
        });

        const indexOfItem = this.navItems.findIndex(nav => nav.title === title)
        if(indexOfItem > -1){
            this.navItems[indexOfItem].isActive = true;
        }
        this.navItemsSubject.next(this.navItems);
    }

}

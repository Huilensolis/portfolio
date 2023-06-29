import { Component } from '@angular/core';
import { NavItem } from '../../interfaces/nav.models'
@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent {
    navList: NavItem[] = [
        {
            title: 'home',
            url: '/'
        },
        {
            title: 'about',
            url: '/'
        },
        {
            title: 'skillset',
            url: '/'
        },
        {
            title: 'project',
            url: '/'
        },
        {
            title: 'contact',
            url: '/'
        }
    ]
}

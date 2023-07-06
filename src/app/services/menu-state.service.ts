import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuStateService {

  constructor() { }
  menuBehavior: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  menuActive = false

  toggleMenuState(){
      this.menuActive = !this.menuActive;
      console.log(this.menuActive);
      return this.menuBehavior.next(this.menuActive);
  }

  getMenuState(){
    return this.menuActive;
  }

  getSubscription(){
    return this.menuBehavior.asObservable();
  }
}

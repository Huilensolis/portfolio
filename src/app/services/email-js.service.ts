import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailJsService {

  constructor() { }

  sendEmail(e: Event){
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form', e.target as HTMLFormElement, 'qZSE9Hx6mqQWXh4yz')
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error(error)
    })
  }
}

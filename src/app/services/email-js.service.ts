import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailJsService {

  constructor() { }

  async sendEmail(e: Event){
    e.preventDefault();

    const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve('a')
        }, 10000);
        return
        emailjs.sendForm('contact_service', 'contact_form', e.target as HTMLFormElement, 'qZSE9Hx6mqQWXh4yz')
        .then(response => {
            return resolve(response)
        })
        .catch(error => {
            return reject(error)
        })
    })

    return response
  }
}

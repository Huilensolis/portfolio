import { Component, OnInit } from '@angular/core';
import { EmailJsService } from 'src/app/services/email-js.service';
import { NgForm, NgModel } from '@angular/forms';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
    constructor(private emailJsService: EmailJsService){

    }
    ngOnInit(): void {
        console.log('renderized');
    }
    formName: string = ''
    formEmail: string = ''
    formMessage: string = ''
    
    sendEmail(e: Event){
        e.preventDefault();
        this.emailJsService.sendEmail(e)
    }

}

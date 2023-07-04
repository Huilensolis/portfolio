import { Component } from '@angular/core';
import { EmailJsService } from 'src/app/services/email-js.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
    constructor(private emailJsService: EmailJsService){

    }
    sendEmail(e: Event){
        e.preventDefault();

        this.emailJsService.sendEmail(e)
    }

}

import { Component, OnInit } from '@angular/core';
import { EmailJsService } from 'src/app/services/email-js.service';
import { NgForm, NgModel } from '@angular/forms';
@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
    constructor(private emailJsService: EmailJsService) {}

    formName: string = '';
    formEmail: string = '';
    formMessage: string = '';
    emailSendingSuccess: boolean = true;

    loading: boolean = false;

    async sendEmail(e: Event) {
        e.preventDefault();

        this.loading = true;
        this.emailJsService
            .sendEmail(e)
            .then(() => {
                this.emailSendingSuccess = true;
                this.displayAlertEvent();

                this.formName = '';
                this.formEmail = '';
                this.formMessage = '';
            })
            .catch(() => {
                this.emailSendingSuccess = false;
                this.displayAlertEvent();
            })
            .finally(() => {
                this.loading = false;
            });
    }

    displayAlert: boolean = false;
    displayAlertEvent() {
        if (this.displayAlert === true) {
            this.displayAlert = false;
            setTimeout(() => {
                this.displayAlert = true;
            }, 1000);
        } else {
            this.displayAlert = true;
        }
    }
}

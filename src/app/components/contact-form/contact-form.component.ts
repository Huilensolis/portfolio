import { Component, OnInit } from '@angular/core';
import { EmailJsService } from 'src/app/services/email-js.service';
import { FormControl, FormGroup, Validator , Validators } from '@angular/forms';
@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
    contactForm: FormGroup;
    constructor(private emailJsService: EmailJsService) {
        this.contactForm = new FormGroup({
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.email, Validators.required]),
            message: new FormControl('', [Validators.required, Validators.minLength(20)]),
        });
    }

    displayAlert: boolean = false;
    displayAlertEvent() {
        if (this.displayAlert === true) {
            this.displayAlert = false;
            setTimeout(() => {
                this.displayAlert = true
            }, 1000);
            setTimeout(() => {
                this.displayAlert = false
            }, 3000);
        } else {
            this.displayAlert = true;
            setTimeout(() => {
                this.displayAlert = false
            }, 3000);
        }
    }

    emailSendingSuccess: boolean = true;

    loading: boolean = false;

    async sendEmail(e: Event) {
        e.preventDefault();


        this.displayAlertEvent();
        return

        this.loading = true;

        this.emailJsService.sendEmail(e)
            .then(() => {
                this.emailSendingSuccess = true;
                this.displayAlertEvent();

                this.contactForm.reset()
            })
            .catch(() => {
                this.emailSendingSuccess = false;
                this.displayAlertEvent();
            })
            .finally(() => {
                this.loading = false;
            });
    }

}

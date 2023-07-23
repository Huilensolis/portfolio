import { Component, OnInit } from '@angular/core';
import { EmailJsService } from 'src/app/services/email-js.service';
import { FormControl, FormGroup, NgModel , Validators } from '@angular/forms';
@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
    name: string = '';
    email: string = '';
    message: string = '';

    contactForm: FormGroup;
    constructor(private emailJsService: EmailJsService) {
        this.contactForm = new FormGroup({
            name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
            email: new FormControl('', [Validators.email, Validators.required, Validators.maxLength(320)]),
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

        this.loading = true;

        this.emailJsService.sendEmail(e)
            .then(() => {
                this.emailSendingSuccess = true;
                this.displayAlertEvent();

                this.contactForm.reset()
                this.resetForm()
            })
            .catch(() => {
                this.emailSendingSuccess = false;
                this.displayAlertEvent();
            })
            .finally(() => {
                this.loading = false;
            });
    }

    resetForm(){
        this.name = ''
        this.email= ''
        this.message= ''
    }

}

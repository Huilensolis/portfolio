import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { TitleComponent } from './components/title/title.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { ProjectTemplateComponent } from './components/project-template/project-template.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { AlertComponent } from './components/alert/alert.component';
import { FooterComponent } from './components/footer/footer.component';
import { TechnologieComponent } from './components/technologies/technologies.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    TitleComponent,
    AboutComponent,
    ProjectsSectionComponent,
    ProjectTemplateComponent,
    ContactFormComponent,
    AlertComponent,
    FooterComponent,
    TechnologieComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

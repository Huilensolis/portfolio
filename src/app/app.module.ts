import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { TitleComponent } from './components/title/title.component';
import { AboutComponent } from './components/about/about.component';
import { SkillSetComponent } from './components/skill-set/skill-set.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { ProjectTemplateComponent } from './components/project-template/project-template.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    TitleComponent,
    AboutComponent,
    SkillSetComponent,
    ProjectsSectionComponent,
    ProjectTemplateComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

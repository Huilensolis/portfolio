import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AsideNavComponent } from './components/aside-nav/aside-nav.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { TitleComponent } from './components/title/title.component';
import { AboutComponent } from './components/about/about.component';
import { SkillSetComponent } from './components/skill-set/skill-set.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideNavComponent,
    TopHeaderComponent,
    TitleComponent,
    AboutComponent,
    SkillSetComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

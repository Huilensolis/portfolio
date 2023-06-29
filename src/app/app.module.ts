import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AsideNavComponent } from './components/aside-nav/aside-nav.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideNavComponent,
    TopHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

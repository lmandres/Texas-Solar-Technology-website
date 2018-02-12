import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app.routing";
import { TabHeaderComponent } from "./tab-header/tab-header.component";
import { HomeComponent } from "./pages/home/home.component";
import { ServicesComponent } from "./pages/services/services.component";
import { TechnologiesComponent } from "./pages/technologies/technologies.component";
import { AboutComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";

@NgModule({
  declarations: [
    AppComponent,
    TabHeaderComponent,
    HomeComponent,
    ServicesComponent,
    TechnologiesComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

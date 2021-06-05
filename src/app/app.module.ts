// Angular
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

// Modules
import { TabMenuModule } from 'primeng/tabmenu';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';

// Locale
import localeEsAr from "@angular/common/locales/es-AR";
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEsAr, "es-AR");


const primeNgModules = [TabMenuModule, ButtonModule, MessageModule]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ...primeNgModules,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-AR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Angular
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


// Locale
import localeEsAr from "@angular/common/locales/es-AR";
import { registerLocaleData } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
registerLocaleData(localeEsAr, "es-AR");
const angularModules = [AppRoutingModule, BrowserModule, HttpClientModule, BrowserAnimationsModule,]
// Modules ng-prime
import { TabMenuModule } from 'primeng/tabmenu';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
const primeNgModules = [TabMenuModule, ButtonModule, MessageModule, PanelModule, CardModule, DividerModule,]

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FilterPanelComponent } from './components/products/filter-panel/filter-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    FilterPanelComponent
  ],
  imports: [
    ...angularModules,
    ...primeNgModules,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-AR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

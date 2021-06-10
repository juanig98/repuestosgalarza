// Angular
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Locale
import localeEsAr from "@angular/common/locales/es-AR";
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEsAr, "es-AR");
const angularModules = [FormsModule, AppRoutingModule, BrowserModule, HttpClientModule, BrowserAnimationsModule,]

// Modules ng-prime
import { TabMenuModule } from 'primeng/tabmenu';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { SlideMenuModule } from 'primeng/slidemenu';
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TabViewModule } from 'primeng/tabview';
import { ListboxModule } from 'primeng/listbox';

const primeNgModules = [
  ListboxModule, CarouselModule,
  InputTextModule, CheckboxModule, RadioButtonModule, DropdownModule, InputTextareaModule, TabViewModule,
  TabMenuModule, ButtonModule, MessageModule, PanelModule, CardModule, DividerModule, SlideMenuModule,
]

// Views
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Pages
import { HomeComponent } from './views/pages/home/home.component';
import { ProductsComponent } from './views/pages/products/products.component';
import { AboutComponent } from './views/pages/about/about.component';

// Components
import { FilterProductsComponent } from './views/components/filter-products/filter-products.component';
import { CardProductComponent } from './views/components/card-product/card-product.component';
import { NavbarComponent } from './views/components/navbar/navbar.component';
import { FooterComponent } from './views/components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent, HomeComponent, AboutComponent, ProductsComponent, FilterProductsComponent, CardProductComponent, NavbarComponent, FooterComponent
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

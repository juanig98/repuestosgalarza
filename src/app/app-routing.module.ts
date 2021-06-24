import { ContactComponent } from './views/pages/contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/pages/about/about.component';
import { HomeComponent } from './views/pages/home/home.component';
import { ProductComponent } from './views/pages/product/product.component';
import { ProductsComponent } from './views/pages/products/products.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: ProductsComponent },
  {
    path: 'productos', children: [
      { path: ':item', component: ProductComponent }
    ]
  },
  { path: 'sobre-nosotros', component: AboutComponent },
  { path: 'contacto', component: ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/pages/about/about.component';
import { HomeComponent } from './views/pages/home/home.component';
import { ProductsComponent } from './views/pages/products/products.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: ProductsComponent },
  { path: 'sobre nosotros', component: AboutComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

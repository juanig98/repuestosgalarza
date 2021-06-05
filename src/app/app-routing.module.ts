import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { About_usComponent } from './components/about_us/about_us.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about_us', component: About_usComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

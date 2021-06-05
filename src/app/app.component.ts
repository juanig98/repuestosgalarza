import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items: MenuItem[];

  activeItem: MenuItem;

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/' },
      { label: 'Productos', icon: 'pi pi-fw pi-pencil', routerLink: 'productos' },
      { label: 'Sobre nosotros', icon: 'pi pi-fw pi-calendar', routerLink: 'about_us'},
      { label: 'Contacto', icon: 'pi pi-fw pi-file', routerLink: 'about_us' }
    ];

    this.activeItem = this.items[0];
  }
}

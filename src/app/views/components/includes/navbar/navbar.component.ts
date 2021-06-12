import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[];

  activeItem: MenuItem;

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/' },
      { label: 'Productos', icon: 'pi pi-fw pi-pencil', routerLink: 'productos' },
      { label: 'Sobre nosotros', icon: 'pi pi-fw pi-calendar', routerLink: 'sobre-nosotros' },
      { label: 'Contacto', icon: 'pi pi-fw pi-file', routerLink: 'contacto' }
    ];

    this.checkRouterLink();
  }


  private checkRouterLink() {
    const path = (window.location.pathname).replace('%20', ' ');
    if (path == "/") this.activeItem = this.items[0];
    else
      for (let i = 0; i < this.items.length; i++) {
        if (path == `/${this.items[i].routerLink}`) {
          this.activeItem = this.items[i];

        }
      }
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { info } from 'src/app/config/app';
import { route_web } from 'src/app/config/routes';
import { ProductCard } from 'src/app/models/ProductCard';

@Component({
  selector: 'app-query-product',
  templateUrl: './query-product.component.html',
  styleUrls: ['./query-product.component.scss']
})
export class QueryProductComponent implements OnInit {

  display: boolean = false;

  @Input() product: ProductCard;

  constructor() { }

  ngOnInit(): void {
    this.display = true;
  }

  public consultByWhatsApp() {
    const text = `Hola, te consulto por el siguiente producto: \n\n ${route_web}/productos/${this.product.slug}`;
    let a = document.createElement('a');
    a.target = "_blank";
    a.href = `https://wa.me/${info.phone}?text=${encodeURIComponent(text)}`;
    a.click();
    this.display = false;
  }

  public consultByMail() {
    const text = `Hola, te consulto por el siguiente producto: \n\n ${route_web}/productos/${this.product.slug}`;
    let a = document.createElement('a');
    a.target = "_blank";
    a.href = `mailto:ventas@repuestosgalarza.com.ar?subject=Consulta&body=${encodeURIComponent(text)}`
    a.click();
    this.display = false;
  }

}

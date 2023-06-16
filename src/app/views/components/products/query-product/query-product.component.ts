import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-query-product',
  templateUrl: './query-product.component.html',
  styleUrls: ['./query-product.component.scss']
})
export class QueryProductComponent implements OnInit {

  display: boolean = false;

  @Input() product!: Product;

  constructor() { }

  ngOnInit(): void {
    this.display = true;
  }

  public consultByWhatsApp() {
    const text = `Hola, te consulto por el siguiente producto: \n\n ${window.location.origin}/productos/${this.product.slug}`;
    let a = document.createElement('a');
    a.target = "_blank";
    a.href = `https://wa.me/${environment.info_commerce.phone}?text=${encodeURIComponent(text)}`;
    a.click();
    this.display = false;
  }

  public consultByMail() {
    const text = `Hola, te consulto por el siguiente producto: \n\n ${window.location.origin}/productos/${this.product.slug}`;
    let a = document.createElement('a');
    a.target = "_blank";
    a.href = `mailto:ventas@repuestosgalarza.com.ar?subject=Consulta&body=${encodeURIComponent(text)}`
    a.click();
    this.display = false;
  }

}

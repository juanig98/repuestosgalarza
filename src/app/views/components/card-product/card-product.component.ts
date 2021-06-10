import { Component, Input, OnInit } from '@angular/core';
import { route_server } from 'src/app/config/routes';
import { Product } from 'src/app/models/Product';
import { ProductCard } from 'src/app/models/ProductCard';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {

  @Input() product: any;

  constructor() { }

  ngOnInit(): void {
  }

  public searchImage(image: string) {
    let file_name = (image) ? image : "no_image.png";
    return `${route_server}/storage/uploads/products/${file_name}`
  }
  public queryProduct(product: ProductCard) {
    window.open('https://wa.me/543456262300?text=Quisiera%20consultar%20sobre%20la%20oferta%20de%20departamento`')
  }
}

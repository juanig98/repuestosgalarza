import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { route_api, route_api_v2 } from 'src/app/config/routes';
import { ProductCard } from 'src/app/models/ProductCard';
import { ProductService } from 'src/app/services/product/products.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {

  @Input() product: any;

  @Output() eventProductSelected = new EventEmitter<ProductCard>();

  constructor(
    private productService: ProductService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }
  sourceProductImage = this.productService.sourceProductImage

  imgError(event: any) { return `${route_api_v2}/storage/uploads/products/no_image.png`; }

  viewProduct(product: ProductCard) {
    const navigationExtras: NavigationExtras = { state: { data: product } };
    this.router.navigate([`productos/${product.slug}`], navigationExtras);
  }

  queryProduct(product: ProductCard) { this.eventProductSelected.emit(product); }
}

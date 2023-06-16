import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product/products.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {

  @Input() product: any;

  @Output() eventProductSelected = new EventEmitter<Product>();

  constructor(
    private productService: ProductService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }
  sourceProductImage = this.productService.sourceProductImage

  imgError(event: any) { return `${environment.route_api}/storage/uploads/products/no_image.png`; }

  viewProduct(product: Product) {
    const navigationExtras: NavigationExtras = { state: { data: product } };
    this.router.navigate([`productos/${product.slug}`], navigationExtras);
  }

  queryProduct(product: Product) { this.eventProductSelected.emit(product); }
}

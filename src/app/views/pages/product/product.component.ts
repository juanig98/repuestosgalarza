import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product/products.service';

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  isLoading: boolean = false;
  item: string;
  query_product: boolean = false;
  product!: Product;
  images: any[] = [];
  responsiveOptions: any[] = [
    { breakpoint: '1024px', numVisible: 5 },
    { breakpoint: '768px', numVisible: 3 },
    { breakpoint: '560px', numVisible: 1 }
  ];

  constructor(
    private productService: ProductService,
    private router: Router,
    route: ActivatedRoute
  ) {
    this.item = route.snapshot.params.item;

    if (this.router.getCurrentNavigation()?.extras.state) {
      let state: any = this.router.getCurrentNavigation()?.extras.state;
      this.product = state.data;
    }
  }

  ngOnInit(): void {
    this.isLoading = true;

    if (this.product) {
      this.setImages(this.product.id);
      this.isLoading = false;
    } else {
      this.productService.getProductBySlug(this.item).subscribe(
        response => {
          if (!response) this.router.navigate(['/productos'])
          this.product = response;
          this.setImages(this.product.id);
          this.isLoading = false;
        },
        error => { this.router.navigate(['/productos']) }
      )

    }
  }

  private setImages(id: number) {
    this.productService.getImages(id).subscribe(response => { this.images = response; }
    )
  }
}

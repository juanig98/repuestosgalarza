import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { route_api } from 'src/app/config/routes';
import { ProductCard } from 'src/app/models/ProductCard';
import { ProductService } from 'src/app/services/product/products.service';

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  item: string;
  query_product: boolean = false;
  product!: ProductCard;
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

    setTimeout(() => {

      if (this.product) {
        this.setImages(this.product.id);

      } else {

        this.productService.getProductBySlug(this.item).subscribe(
          response => {
            if (!response) this.router.navigate(['/productos'])
            this.product = response;
            this.setImages(this.product.id);
          },
          error => { this.router.navigate(['/productos']) }
        )

      }
    }, 1500)
  }

  private setImages(id: number) {
    this.productService.getImages(id).subscribe(response => { this.images = response; }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { route_server } from 'src/app/config/routes';
import { consolelog, redirect } from 'src/app/helpers/funtions';
import { Image } from 'src/app/models/Image';
import { Product } from 'src/app/models/Product';
import { ProductCard } from 'src/app/models/ProductCard';
import { ProductService } from 'src/app/services/product/products.service';

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  item: string;
  query_product: boolean = false;
  product: ProductCard;
  images: any[];
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  constructor(
    private productService: ProductService,
    private router: Router,
    route: ActivatedRoute
  ) {
    this.item = route.snapshot.params.item;

    if (this.router.getCurrentNavigation().extras.state) {
      this.product = this.router.getCurrentNavigation().extras.state.data;
    }
  }

  ngOnInit(): void {

    setTimeout(() => {

      if (this.product) {
        this.setImages(this.product.id);

    } else {

      this.productService.getProductBySlug(this.item).subscribe(
        response => {
          if (!response) redirect('productos')
          this.product = response;
          this.setImages(this.product.id);
        },
        error => { redirect('productos') }
        )

      }
    }, 1500)
  }

  private setImages(id: number) {
    this.productService.getImages(id).subscribe(
      response => {
        this.images = response;
      }
    )
  }

  public sourceImage(image: string) {
    let file_name = (image) ? image : "no_image.png";
    return `${route_server}/storage/uploads/products/${file_name}`;
  }

  public queryProduct(){
    this.query_product = true;
  }
}

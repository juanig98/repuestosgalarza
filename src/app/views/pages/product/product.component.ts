import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { consolelog } from 'src/app/helpers/funtions';
import { Image } from 'src/app/models/Image';
import { ProductService } from 'src/app/services/product/products.service';

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  item: string;
  images: Image[];

  constructor(
    private productService: ProductService,
    route: ActivatedRoute
  ) {
    this.item = route.snapshot.params.item;
  }

  ngOnInit(): void {
    consolelog(this.item)
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { route_server } from 'src/config/routes';

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
}

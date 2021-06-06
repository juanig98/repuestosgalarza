import { Component, OnInit } from '@angular/core';
import { FilterPanelComponent } from './filter-panel/filter-panel.component';
import { ProductsService } from 'src/app/services/products/products.service';
import { route_server } from 'src/config/routes';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products = [];

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {

    this.productsService.getAllProducts().subscribe(
      response => {
        this.products = response;
      },
      error => {

      }
    )
  }


  public searchImage(image: string){
    let file_name = (image) ? image : "no_image.png";
    return  `${route_server}/storage/uploads/products/${file_name}`
    }

}

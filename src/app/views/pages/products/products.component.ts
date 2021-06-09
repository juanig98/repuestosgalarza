import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { route_server } from 'src/config/routes';
import { FilterProductsComponent } from '../../components/filter-products/filter-products.component';

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

}

import { Component, OnInit } from '@angular/core';
import { ProductCard } from 'src/app/models/ProductCard';
import { ProductsService } from 'src/app/services/products/products.service';
import { route_server } from 'src/config/routes';
import { FilterEmit, FilterProductsComponent } from '../../components/filter-products/filter-products.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: ProductCard[];
  filterable_products: ProductCard[];

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {

    this.productsService.getAllProducts().subscribe(
      response => {
        this.products = response;
        this.filterable_products = response
      },
      error => {
      }
    )
  }

  public filterProducts(productsFiltered: ProductCard[]) {
    this.filterable_products = productsFiltered;
  }

}

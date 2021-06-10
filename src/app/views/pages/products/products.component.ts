import { Component, OnInit } from '@angular/core';
import { ProductCard } from 'src/app/models/ProductCard';
import { ProductService } from 'src/app/services/product/products.service';
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
    private productService: ProductService,
  ) { }

  ngOnInit(): void {

    this.productService.getAllProducts().subscribe(
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

import { Component, OnInit } from '@angular/core';
import { ProductCard } from 'src/app/models/ProductCard';
import { ProductService } from 'src/app/services/product/products.service';
import { route_server } from 'src/app/config/routes';
import { Category } from 'src/app/models/Category';
import { VehicleBrand } from 'src/app/models/VehicleBrands';
import { VehicleModel } from 'src/app/models/VehicleModel';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: ProductCard[];
  filterable_products: ProductCard[];
  categories: Category[];
  vehicle_brands: VehicleBrand[];
  vehicle_models: VehicleModel[];

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {

    this.productService.getAllProducts().subscribe(
      response => {
        this.products = response;
        this.filterable_products = response
        this.categories = [], this.vehicle_brands = [], this.vehicle_models = [];
        this.products.map(p => { this.categories.push(new Category(p.category_id, p.category_name)) });
        this.products.map(p => { this.vehicle_brands.push(new VehicleBrand(p.vehicle_brand_id, p.vehicle_brand_name)) });
        this.products.map(p => { this.vehicle_models.push(new VehicleModel(p.vehicle_model_id, p.vehicle_model_name)) });
      },
      error => {
      }
    )
  }

  public filterProducts(productsFiltered: ProductCard[]) {
    this.filterable_products = productsFiltered;
  }

}

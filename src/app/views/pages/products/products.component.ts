import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product/products.service';
import { Category } from 'src/app/models/Category';
import { VehicleBrand } from 'src/app/models/VehicleBrands';
import { VehicleModel } from 'src/app/models/VehicleModel';
import { devConsoleLog } from 'src/app/helpers/funtions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  filterable_products: Product[] = [];
  categories: Category[] = [];
  vehicle_brands: VehicleBrand[] = [];
  vehicle_models: VehicleModel[] = [];
  selectedProduct!: Product;
  isLoading: boolean = false;

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {

    this.productService.getAllProducts().subscribe(
      response => {

        this.products = response;
        this.filterable_products = response

        this.categories = [], this.vehicle_brands = [], this.vehicle_models = [];

        this.products.map(p => {
          let add = true;
          let category = new Category(p.category.id, p.category.name);
          this.categories.map(a => { if (a.id == category.id) add = false })
          if (add) this.categories.push(category)
        });

        this.products.map(p => {
          let add = true;
          let vehicle_brand = new VehicleBrand(p.vehicle_brand.id, p.vehicle_brand.name)
          this.vehicle_brands.map(a => { if (a.id == vehicle_brand.id) add = false })
          if (add) this.vehicle_brands.push(vehicle_brand)
        });

        this.products.map(p => {
          let add = true;
          let vehicle_model = new VehicleModel(p.vehicle_model.id, p.vehicle_model.name)
          this.vehicle_models.map(a => { if (a.id == vehicle_model.id) add = false })
          if (add) this.vehicle_models.push(vehicle_model)
        });
      },
      error => { devConsoleLog(error) }
    )
  }

  eventProductSelected(product: Product) { this.selectedProduct = product; }

  filterProducts(productsFiltered: Product[]) {
    this.isLoading = true;
    this.filterable_products = productsFiltered;
    setTimeout(() => { this.isLoading = false; }, 450)
  }

}

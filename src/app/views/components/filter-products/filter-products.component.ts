
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { consolelog } from 'src/app/helpers/funtions';
import { Category } from 'src/app/models/Category';
import { ProductCard } from 'src/app/models/ProductCard';
import { CategoryService } from 'src/app/services/category/category.service';
import { VehicleModel } from 'src/app/models/VehicleModel';
import { VehicleBrand } from 'src/app/models/VehicleBrands';


@Component({
  selector: 'app-filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.scss']
})
export class FilterProductsComponent implements OnInit {

  categorySelected: Category;
  vehicleBrandSelected: VehicleBrand;
  vehicleModelSelected: VehicleModel;
  search: string = "";

  filterable_vehicle_models: VehicleModel[];
  @Input() categories: Category[];
  @Input() vehicle_brands: VehicleBrand[];
  @Input() vehicle_models: VehicleModel[];
  @Input() filterable_products: ProductCard[];
  @Input() products: ProductCard[];
  @Output() productsFiltered = new EventEmitter<ProductCard[]>();

  constructor() { }

  ngOnInit(): void { }

  private emit() { this.productsFiltered.emit(this.filterable_products); }

  public deleteFilterVehicle() {
    this.vehicleBrandSelected = null;
    this.vehicleModelSelected = null;
    this.filter()
  }
  public deleteFilterCategory() { this.categorySelected = null; this.filter() }

  public onSearchChange(value: string) {
    this.search = value.toLowerCase();
    this.filter();
  }

  public onBrandSelected() {
    this.filter()
  }

  public filter() {
    let filtered_products = this.products;

    if (this.vehicleModelSelected) {
      filtered_products = filtered_products.filter(p => p.vehicle_model_id == this.vehicleModelSelected.id)
    }

    if (this.vehicleBrandSelected) {
      // Filtro los productos con esa marca
      let product_with_that_brand = this.products.filter(p => p.vehicle_brand_id == this.vehicleBrandSelected.id);
      this.filterable_vehicle_models = [];

      product_with_that_brand.forEach(p => {
        this.filterable_vehicle_models.push(new VehicleModel(p.vehicle_model_id, p.vehicle_model_name));
      });

      filtered_products = filtered_products.filter(p => p.vehicle_brand_id == this.vehicleBrandSelected.id)
    }

    if (this.categorySelected)
      filtered_products = filtered_products.filter(p => p.category_id == this.categorySelected.id)
    if (this.search.length > 0)
      filtered_products = filtered_products.filter(p => ((p.title).toLowerCase()).includes(this.search))

    this.filterable_products = filtered_products;
    this.emit()
  }
}

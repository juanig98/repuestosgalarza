import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { ProductCard } from 'src/app/models/ProductCard';
import { CategoryService } from 'src/app/services/category/category.service';


@Component({
  selector: 'app-filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.scss']
})
export class FilterProductsComponent implements OnInit {

  categories: Category[];
  categorySelected: Category;
  search: string = "";
  @Input() filterable_products: ProductCard[];
  @Input() products: ProductCard[];
  @Output() productsFiltered = new EventEmitter<ProductCard[]>();

  constructor(
    private categoryService: CategoryService,) { }

  ngOnInit(): void {
    // this.categories.push()
    this.categoryService.getAllCategories().subscribe(
      response => { this.categories = response }
    )
  }

  public onSearchChange(value: string) {
    this.search = value.toLowerCase();
    this.filter();
  }
  public onCategoryChange() {
    this.filter();
  }
  public deleteFilterCategory() { this.categorySelected = null; this.filter() }


  private filter() {
    let filtered_products = this.products;

    if (this.categorySelected)
      filtered_products = filtered_products.filter(p => p.category_id == this.categorySelected.id)
    if (this.search.length > 0)
      filtered_products = filtered_products.filter(p => ((p.title).toLowerCase()).includes(this.search))

    this.filterable_products = filtered_products;
    this.emit()
  }

  private emit() {
    this.productsFiltered.emit(this.filterable_products);
  }
}

export class FilterEmit {
  filter: string;
  value: string;
  constructor(filter, value) {
    this.filter = filter;
    this.value = value;
  }
}

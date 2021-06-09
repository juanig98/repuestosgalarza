import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ProductCard } from 'src/app/models/ProductCard';


@Component({
  selector: 'app-filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.scss']
})
export class FilterProductsComponent implements OnInit {


  @Input() filterable_products: ProductCard[];
  @Input() products: ProductCard[];
  @Output() productsFiltered = new EventEmitter<ProductCard[]>();
  constructor() { }

  ngOnInit(): void {

  }

  public onSearchChange(value: string) {
    this.filterable_products = this.products.filter(product => ((product.title).toLowerCase()).includes(value))
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

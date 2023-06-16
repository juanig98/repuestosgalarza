import { devConsoleLog } from 'src/app/helpers/funtions';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/Product';
import { Image } from 'src/app/models/Image';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private http: HttpClient,
  ) { }

  getProductBySlug(slug: string): Observable<Product> {
    return this.http.get<Product>(`/products/${slug}`);
  }
  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`/products/${id}`);
  }
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`/products`);
  }
  getFeatured(): Observable<Product[]> {
    return this.http.get<Product[]>(`/products/featured`);
  }

  getImages(id: number): Observable<Image[]> {
    return this.http.get<Image[]>(`/products/images/${id}`)
  }

  sourceProductImage(product: Product): string {

    return (product.media[0].file_name == null) ? `${environment.route_api}/storage/images/no_image.png` : `${environment.route_api}/storage/uploads/products/${product.media[0].file_name}`
  }
  getRouteToProduct(product: Product) { return `/productos/${product.slug}`; }

}

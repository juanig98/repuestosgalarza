import { devConsoleLog } from 'src/app/helpers/funtions';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { route_api, route_api_v2 } from 'src/app/config/routes';
import { Product } from 'src/app/models/Product';
import { Image } from 'src/app/models/Image';
import { headers } from 'src/app/config/app';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  route = route_api + ''

  constructor(
    private http: HttpClient,
  ) { }

  getProductBySlug(slug: string): Observable<Product> {
    return this.http.get<Product>(`${route_api}/products/${slug}`, headers);
  }
  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${route_api}/products/${id}`, headers);
  }
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${route_api}/products`, headers);
  }
  getFeatured(): Observable<Product[]> {
    return this.http.get<Product[]>(`${route_api}/products/featured`, headers);
  }

  getImages(id: number): Observable<Image[]> {
    return this.http.get<Image[]>(`${route_api}/products/images/${id}`, headers)
  }

  sourceProductImage(product: Product): string {
    devConsoleLog(product)
    return (product.media[0].file_name == null) ? `${route_api}/storage/images/no_image.png` : `${route_api_v2}/storage/uploads/products/${product.media[0].file_name}`
  }
  getRouteToProduct(product: Product) { return `/productos/${product.slug}`; }

}

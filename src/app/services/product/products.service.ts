import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { route_api, route_api_v2 } from 'src/app/config/routes';
import { Product } from 'src/app/models/Product';
import { ProductCard } from 'src/app/models/ProductCard';
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

  getProductBySlug(slug: string): Observable<ProductCard> {
    return this.http.get<ProductCard>(`${route_api}/products/${slug}`, headers);
  }
  getProduct(id: number): Observable<ProductCard> {
    return this.http.get<ProductCard>(`${route_api}/products/${id}`, headers);
  }
  getAllProducts(): Observable<ProductCard[]> {
    return this.http.get<ProductCard[]>(`${route_api}/products`, headers);
  }
  getFeatured(): Observable<ProductCard[]> {
    return this.http.get<ProductCard[]>(`${route_api}/products/featured`, headers);
  }

  getImages(id: number): Observable<Image[]> {
    return this.http.get<Image[]>(`${route_api}/products/images/${id}`, headers)
  }

  sourceProductImage(product: ProductCard): string {
    if (product.file_name == null) return `${route_api}/storage/images/no_image.png`
    return `${route_api_v2}/storage/images/${product.file_name}`
  }
  getRouteToProduct(product: ProductCard) { return `/productos/${product.slug}`; }

}

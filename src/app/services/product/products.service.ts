import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { route_api } from 'src/app/config/routes';
import { Product } from 'src/app/models/Product';
import { ProductCard } from 'src/app/models/ProductCard';
import { Image } from 'src/app/models/Image';
import { headers } from 'src/app/config/app';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  route = route_api + 'products'

  constructor(
    private http: HttpClient,
  ) { }

  public getProductBySlug(slug: string): Observable<ProductCard> {
    return this.http.get<ProductCard>(`${this.route}/${slug}`, headers);
  }
  public getProduct(id: number): Observable<ProductCard> {
    return this.http.get<ProductCard>(`${this.route}/${id}`, headers);
  }
  public getAllProducts(): Observable<ProductCard[]> {
    return this.http.get<ProductCard[]>(this.route, headers);
  }

  public getImages(id: number): Observable<Image[]> {
    return this.http.get<Image[]>(`${this.route}/images/${id}`, headers)
  }
}

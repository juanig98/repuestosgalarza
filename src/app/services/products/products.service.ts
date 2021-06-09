import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { route_api } from 'src/config/routes';
import { Product } from 'src/app/models/Product';
import { ProductCard } from 'src/app/models/ProductCard';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  route = route_api + 'products'

  constructor(
    private http: HttpClient,
  ) { }

  public getProduct(id: number): Observable<ProductCard> {
    return this.http.get<ProductCard>(`${this.route}/${id}`, { headers: { 'Accept': 'application/json' } });
  }
  public getAllProducts(): Observable<ProductCard[]> {
    return this.http.get<ProductCard[]>(this.route, { headers: { 'Accept': 'application/json' } });
  }

}

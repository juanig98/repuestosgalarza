import { Category } from './../../models/Category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { route_api } from 'src/config/routes';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  private route = route_api + 'categories'

  constructor(
    private http: HttpClient,
  ) { }

  public getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.route}/${id}`, { headers: { 'Accept': 'application/json' } });
  }
  public getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.route}-products`, { headers: { 'Accept': 'application/json' } });
  }
}

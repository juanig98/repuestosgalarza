import { Category } from './../../models/Category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient,
  ) { }

  public getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(`/categories/${id}`);
  }
  public getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`/categories-products`);
  }
}

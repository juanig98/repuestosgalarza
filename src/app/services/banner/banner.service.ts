import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { route_api } from 'src/config/routes';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  route = route_api + 'banners'

  constructor(
    private http: HttpClient,
  ) { }


  public getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.route, { headers: { 'Accept': 'application/json' } });
  }
}

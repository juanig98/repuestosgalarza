import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { headers } from 'src/app/config/app';
import { route_api } from 'src/app/config/routes';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  route = route_api + 'banners'

  constructor(
    private http: HttpClient,
  ) { }


  public getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.route, headers);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { headers } from 'src/app/config/app';
import { route_api, route_api_v2 } from 'src/app/config/routes';
import { Banner } from 'src/app/models/Banner';
import { Card } from 'src/app/models/Card';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Banner[]> {
    return this.http.get<Banner[]>(`${route_api}/banners`, headers);
  }

  sourceCard(card: Card): string {
    return `${route_api_v2}/storage/images/icons/${card.image}.png`
  }
  sourceBannerImage(banner: Banner): string {
    return `${route_api_v2}/storage/images/icons/${banner.image}.png`
  }
}

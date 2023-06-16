import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from 'src/app/models/Banner';
import { Card } from 'src/app/models/Card';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Banner[]> {
    return this.http.get<Banner[]>(`/banners`);
  }

  sourceCard(card: Card): string {
    return `${environment.route_api}/storage/images/icons/${card.image}.png`
  }
  sourceBannerImage(banner: Banner): string {
    return `${environment.route_api}/storage/images${banner.image}`
  }
}

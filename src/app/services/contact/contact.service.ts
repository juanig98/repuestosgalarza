import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { headers } from 'src/app/config/app';
import { route_api } from 'src/app/config/routes';
import { consolelog } from 'src/app/helpers/funtions';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  route = route_api + 'message'

  constructor(
    private http: HttpClient,
  ) { }

  public sendMessage(message: any) {
    consolelog(message)
    return this.http.post<any>(this.route, { message: message }, headers);
  }
}

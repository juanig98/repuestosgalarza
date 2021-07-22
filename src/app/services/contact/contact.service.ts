import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { headers } from 'src/app/config/app';
import { route_api } from 'src/app/config/routes';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient,
  ) { }

  public sendMessage(message: any) {
    return this.http.post<any>(`${route_api}/message`, { message: message }, headers);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient,
  ) { }

  public sendMessage(message: any) {
    return this.http.post<any>(`/message`, { message: message });
  }
}

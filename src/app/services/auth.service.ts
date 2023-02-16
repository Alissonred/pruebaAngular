import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User_login } from '../interfaces/login.interface';
import { Response } from '../interfaces/response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string = "http://noTengoApi/"

  constructor(private http: HttpClient) { }

  loginByEmail(form:User_login): Observable<Response>{
    let address = this.url + "auth";
    return this.http.post<Response>(address, form);
  }
}

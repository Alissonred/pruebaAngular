import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User_login } from '../interfaces/login.interface';
import { Response } from '../interfaces/response.interface';
import { Observable } from 'rxjs';
import { NationalDailyData } from '../interfaces/nationalDailyData.type';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


 url:string = 'http://localhost:3000/'////////// no colocar url sino crear metodo para dejarlo pasar
  constructor(private http: HttpClient) { }

  loginByEmail(form:User_login): Observable<Response>{
    let address = this.url + "auth";
    return this.http.post<Response>(address, form);
  }

  pseudoUser= {
    user: "elia.martinez@systers.xyz",
    password :"123456"
  }



}

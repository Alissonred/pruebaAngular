import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NationalDailyData } from '../interfaces/nationalDailyData.type';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

 url:string = 'https://api.covidtracking.com/v2/'
 constructor(private http: HttpClient) { }

getNationalDailyData(date:string): Observable<NationalDailyData>{
 let address = this.url + `us/daily/${date}.json`
 return this.http.get<NationalDailyData>(address);
}
}

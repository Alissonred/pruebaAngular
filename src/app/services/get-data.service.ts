import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NationalDailyData } from '../interfaces/nationalDailyData.type';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SummaryCountries } from '../interfaces/summaryCountries.interface';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

 //url:string = 'https://api.covidtracking.com/v2/'
 url:string = 'https://api.covid19api.com/'
 constructor(private http: HttpClient) { }

/* getNationalDailyData(date:string): Observable<NationalDailyData>{
 let address = this.url + `us/daily/${date}.json`
 return this.http.get<NationalDailyData>(address);
}
 */
getTodaySummaryCountries(): Observable<SummaryCountries>{
  let address = this.url + "summary"
  return this.http.get<SummaryCountries>(address);
 }

}

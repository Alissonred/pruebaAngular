import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NationalDailyData } from '../interfaces/nationalDailyData.type';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SummaryCountries } from '../interfaces/summaryCountries.interface';
import { DataNotes } from '../interfaces/dataNote.interface';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {


 urlcovid19api:string = 'https://api.covid19api.com/' ////api externa
 urlJsonServer: string = 'http://localhost:3000/notes' ////api simulada con json server
 constructor(private http: HttpClient) { }


 getTodaySummaryCountries(): Observable<SummaryCountries>{
  let address = this.urlcovid19api + "summary"
  return this.http.get<SummaryCountries>(address);
 }

 addNote(data:object):Observable<any>{
  return this.http.post<DataNotes>(this.urlJsonServer, data);
 }
 getNotes():Observable<any>{
  return this.http.get<DataNotes>(this.urlJsonServer);
 }
 deleteNotes(id : number):Observable<any>{
  return this.http.delete<DataNotes>(this.urlJsonServer +"/"+ id);
 }

}

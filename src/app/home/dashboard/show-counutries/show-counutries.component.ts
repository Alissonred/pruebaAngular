import { Component, OnInit, ViewChild} from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { SummaryCountries } from 'src/app/interfaces/summaryCountries.interface';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-show-counutries',
  templateUrl: './show-counutries.component.html',
  styleUrls: ['./show-counutries.component.scss']
})
export class ShowCounutriesComponent  implements OnInit{

  globalCipher!: object;
  countriesList!: Array<object>;
  countriesListPage!: Array<object>;

  example = [
		{
			"ID": "e92ded93-3511-4823-9254-c5594aa67460",
			"Country": "Afghanistan",
			"CountryCode": "AF",
			"Slug": "afghanistan",
			"NewConfirmed": 20,
			"TotalConfirmed": 209056,
			"NewDeaths": 0,
			"TotalDeaths": 7896,
			"NewRecovered": 0,
			"TotalRecovered": 0,
			"Date": "2023-02-17T05:58:27.847Z",
			"Premium": {}
		},
		{
			"ID": "b9d970ef-6cad-4820-a99d-f06b63891901",
			"Country": "Albania",
			"CountryCode": "AL",
			"Slug": "albania",
			"NewConfirmed": 0,
			"TotalConfirmed": 334264,
			"NewDeaths": 0,
			"TotalDeaths": 3596,
			"NewRecovered": 0,
			"TotalRecovered": 0,
			"Date": "2023-02-17T05:58:27.847Z",
			"Premium": {}
		},
		{
			"ID": "3b79a571-6c5c-4147-8b30-d75f73bff376",
			"Country": "Algeria",
			"CountryCode": "DZ",
			"Slug": "algeria",
			"NewConfirmed": 12,
			"TotalConfirmed": 271421,
			"NewDeaths": 0,
			"TotalDeaths": 6881,
			"NewRecovered": 0,
			"TotalRecovered": 0,
			"Date": "2023-02-17T05:58:27.847Z",
			"Premium": {}
		}
  ]

  constructor(private apiGet:GetDataService){}
  ngOnInit(): void {
  this.apiGet.getTodaySummaryCountries().subscribe(
    {
      next:(res)=>{
        console.log(res , 'anddd');
        this.dataSource = new MatTableDataSource(res.Countries);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error:(err:any)=>{
        console.log(err);
      }
    }
 /*  data =>{
  this.countriesList = data.Countries;
  this.globalCipher= data.Global;
  this.countriesListPage = [...data.Countries].slice(0,10)
  console.log(data);
  console.log(this.countriesList, 'es list')
  //console.log(this.countriesList.slice(0,10), 'es list')
  console.log(this.countriesListPage);
} */
)}


displayedColumns: string[] = ['Country', 'NewConfirmed', 'TotalConfirmed', 'NewDeaths', 'TotalDeaths', 'TotalRecovered'];
dataSource!: MatTableDataSource<any>;

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;


applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}



}

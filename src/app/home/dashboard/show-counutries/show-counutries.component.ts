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

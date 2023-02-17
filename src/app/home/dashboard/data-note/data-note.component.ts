import { Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataNotes } from 'src/app/interfaces/dataNote.interface';
import { GetDataService } from 'src/app/services/get-data.service';
import { ModalComponent } from '../modal/modal.component';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-data-note',
  templateUrl: './data-note.component.html',
  styleUrls: ['./data-note.component.scss']
})
export class DataNoteComponent implements OnInit{

  constructor(
    private _dialog: MatDialog,
    private _getService: GetDataService,
    ) { }

    ngOnInit(): void{
      this.getElements();
    }


  ELEMENT_DATA: DataNotes[] = [
    {
      id: '1',
      Date: '12/11/2022',
      TotalConfirmed: 10000,
      TotalDeaths: 1.500,
      TotalRecovered: 12,
    },
    {
      id: '2',
      Date: '12/11/2022',
      TotalConfirmed: 10000,
      TotalDeaths: 1.500,
      TotalRecovered: 12,
    },

  ];

  displayedColumns: string[] = ['Id', 'Date', 'Confirmed', 'Deaths', 'Recovered', 'Options'];
  dataSource !: MatTableDataSource<DataNotes>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  deleteElement(id: string): void {
    console.log('elimina');

  }

  editElement(id: string): void {
    console.log('edita');
    this._dialog.open(ModalComponent)
  }

  getElements(){
    this._getService.getNotes().subscribe({
      next:(res)=>{
        console.log(res , 'anddd');
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



}

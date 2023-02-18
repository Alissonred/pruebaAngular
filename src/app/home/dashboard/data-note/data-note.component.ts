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


  displayedColumns: string[] = ['Id', 'Date', 'Confirmed', 'Deaths', 'Recovered', 'BranchOffice', 'KeyWord', 'Options'];
  dataSource !: MatTableDataSource<DataNotes>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  openAddEditForm(){
    const modal = this._dialog.open(ModalComponent)
    modal.afterClosed().subscribe({
      next:(value)=>{
        if(value){this.getElements();}
      }
    })
  }

  getElements(){
    this._getService.getNotes().subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error:console.log,
    })
  }

  deleteElement(id: number): void {

   if(confirm('Do you want to delete this note?')){ this._getService.deleteNotes(id).subscribe({
      next: (res)=>{
        alert('Note deleted succesfully!')
        this.getElements();
      },

      error:console.log,
    })}else{
      alert('The note has not been removed.')
    }

  }


  editElement(data:any){
    const modal = this._dialog.open(ModalComponent, {
      data
    })
    modal.afterClosed().subscribe({
      next:(value)=>{
        if(value){this.getElements();}
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

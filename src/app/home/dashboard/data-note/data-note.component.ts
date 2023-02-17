import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataNotes } from 'src/app/interfaces/dataNote.interface';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-data-note',
  templateUrl: './data-note.component.html',
  styleUrls: ['./data-note.component.scss']
})
export class DataNoteComponent {

  constructor(private _dialog : MatDialog){}

  ELEMENT_DATA: DataNotes[] = [
    {
      id: '1',
      Date: '12/11/2022',
      TotalConfirmed : 10000,
      TotalDeaths : 1.500,
      TotalRecovered : 12,
    },
    {
      id:'2',
      Date: '12/11/2022',
      TotalConfirmed : 10000,
      TotalDeaths : 1.500,
      TotalRecovered : 12,
    },

  ];

  displayedColumns: string[] = ['Date', 'Confirmed', 'Deaths', 'Recovered', 'Options'];
  dataSource = this.ELEMENT_DATA;

  deleteElement(id:string): void{
console.log('elimina');

  }
  editElement(id:string): void{
console.log('edita');
this._dialog.open(ModalComponent)


  }



}

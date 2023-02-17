import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  addEditForm : FormGroup

  constructor(
   private _fb: FormBuilder,
   private _addService: GetDataService,
   private _dialogRef: DialogRef<ModalComponent>
   ){
    this.addEditForm = this._fb.group({
      Date : "",
      TotalConfirmed : null,
      TotalDeaths : null,
      TotalRecovered : null,
    })

  }
  addEditElement(){
    this._addService.addNote(this.addEditForm.value).subscribe({
      next:(val:any)=>{
        alert('Note created succesfully!')
        this._dialogRef.close()
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
    console.log(this.addEditForm.value, 'added');

  }
}

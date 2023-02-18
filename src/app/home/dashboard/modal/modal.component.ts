import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  addEditForm : FormGroup

  BranchOffice: string[]=[ "Central", "North", "South", "East"]

  constructor(
   private _fb: FormBuilder,
   private _addService: GetDataService,
   private _dialogRef: MatDialogRef<ModalComponent>,
   @Inject(MAT_DIALOG_DATA) public data: any,
   ){
    this.addEditForm = this._fb.group({
      Date : null,
      TotalConfirmed : null,
      TotalDeaths : null,
      TotalRecovered : null,
      BranchOffice: "",
      KeyWord : "",
      Notes : "",
    })

  }

  ngOnInit(): void {
      this.addEditForm.patchValue(this.data)
  }


  addEditElement(){
    if(this.data){ //// pte validar campos antes de envío
      this._addService.updateNote(this.data.id, this.addEditForm.value).subscribe({
        next:(val:any)=>{
          alert('Note Updated succesfully!')
          this._dialogRef.close(true)

        },
        error:(err:any)=>{
          console.log(err);
        }
      })
      console.log(this.addEditForm.value, 'updated');
    }else{
      this._addService.addNote(this.addEditForm.value).subscribe({
        next:(val:any)=>{
          alert('Note created succesfully!')
          this._dialogRef.close(true)
        },
        error:(err:any)=>{
          console.log(err);
        }
      })
      console.log(this.addEditForm.value, 'added');
    }

  }
}
